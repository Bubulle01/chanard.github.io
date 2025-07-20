var width = window.innerWidth;
var height = window.innerHeight;
const tailleTel = 480;

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

const retour = document.getElementById("retour");
const fav = document.getElementById("fav");
const livret = document.getElementById("livret");
const favMenu = document.getElementById("favMenu");
const textFavNone = document.getElementById("textFavNone");
const videFav = document.getElementById("videFav");
const title_desc = document.getElementById("title_desc");

const thumbnails = document.querySelectorAll(".smallThumb");
const favNone = document.querySelectorAll(".favNone");
const description = document.querySelector(".description")
const fond_noir_desc = document.querySelector(".fond_noir_desc")

let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");


/* Système changement de fond d'écran */
let id = 0;
let list_fond2 = [
    "images/gif_fond/Danse_Persona5.gif",
    "images/gif_fond/Zero_Two_Anime_Girl_Dancing.webp",     
    "images/gif_fond/adventure_time.gif",              
    "images/gif_fond/Aurores_boreales.gif",                                             
    "images/gif_fond/Jojo.gif"              
];

document.getElementById("buttonchange").onclick = function() {
    const image = document.getElementById("imageid");
    const button = document.getElementById("rotateButton");
    // Ajouter la classe fade-out pour faire le fondu  
    image.classList.remove("fade-in");
    image.classList.add("fade-out");
    // Ajouter la classe pour faire la rotation  
    button.classList.toggle("rotate");
    setTimeout(() => {
        id = (id + 1) % list_fond2.length; // revient à 0 à la fin  
        image.src = list_fond2[id]; // Changer la source de l'image  
        image.classList.remove("fade-out"); // Retirer la classe pour faire réapparaître l'image  
        image.classList.add("fade-in");
    }, 500); // Correspond à la durée de la transition (500ms)
}



/* Système de mise en avant des images */
thumbnails.forEach(smallThumb => {
    console.log("click listener ->", smallThumb);
    if (favoris.includes(nameFichier(smallThumb.src))) {
        smallThumb.classList.add("favori_image");
    }

    smallThumb.addEventListener("click", () => {
        bloquerScroll();
        console.log("thumb clicked", nameFichier(smallThumb.src));
        if (smallThumb.classList.contains("favori_image")) {
            fav.src = "images/arrangement/etoile_gold.png"; 
        }
        else {
            fav.src = "images/arrangement/etoile_blanc.png";
        }
        modal.style.display = "flex";
        modalImage.src = smallThumb.src;
        const nomFichier = nameFichier(modalImage.src);
        const nomDessin = nameDessin(modalImage.src);
        title_desc.textContent = nomDessin;

        var width = window.innerWidth;
        if ((!smallThumb.closest(".grid4")) && (width >= tailleTel)) {
            description.style.transform = "translateX(0) translateY(5vh)";
            console.log("mode fond pc");
        }
        else if ((smallThumb.closest(".grid4")) && (width >= tailleTel)) {
            description.style.transform = "translateX(30vw) translateY(0)";
            console.log("mode dessin pc ");
        }
        else {
            description.style.transform = "translateX(0) translateY(20%)";
            console.log("mode tel");
        }

        console.log("thumb clicked");

        
        /* Système de stokage des fav avec "localStorage" */
        document.getElementById("fav").onclick = function() {
            const chemin = fav.src;
            if (chemin.endsWith("images/arrangement/etoile_blanc.png")) {
                fav.src = "images/arrangement/etoile_gold.png"; 
                ajouterFavori(nomFichier);
                smallThumb.classList.add("favori_image");
                afficherFavoris();
            }
            else {
                fav.src = "images/arrangement/etoile_blanc.png";
                supprimerFavori(nomFichier);
                smallThumb.classList.remove("favori_image");

                affFav(favMenu.src.endsWith("images/arrangement/etoileMenu_gold.png"));
            }
        }

        /* Système de livret des images zoomés */
        document.getElementById("livret").onclick = function() {
            const chemin = livret.src;
            if (chemin.endsWith("images/arrangement/livret.png")) {
                livret.src = "images/arrangement/livret2.png";

                var width = window.innerWidth;
                if ((!smallThumb.closest(".grid4")) && (width >= tailleTel)) {
                    modal.classList.add("active2");
                }
                else {
                    modal.classList.add("active");
                }
            }
            else {
                livret.src = "images/arrangement/livret.png";
                modal.classList.remove("active");
                modal.classList.remove("active2");
            }
        }
    });
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if ((event.target === modal) || (event.target === retour) || (event.target === description)) {
        modal.style.display = "none";
        debloquerScroll();
        livret.src = "images/arrangement/livret.png";
        modal.classList.remove("active");
        modal.classList.remove("active2");
    }
});



/* Système d'affichage des favori par le bouton menuFav */
document.getElementById("favMenu").onclick = function() {
    if (favMenu.src.endsWith("images/arrangement/etoileMenu.png")) {
        favMenu.src = "images/arrangement/etoileMenu_gold.png"; 
        affFav(true);
    }
    else {
        favMenu.src = "images/arrangement/etoileMenu.png"; 
        affFav(false);
    }
}

videFav.addEventListener("click", function(event) {
    event.preventDefault();
    viderFavoris();
    location.reload();
});


/*************************/
/* FONCTIONS UTILITAIRES */
/*************************/

// Reset le roll Favori page
function affFav(elem) {
    if (elem) {
        textFavNone.style.display = "block"; 
        favNone.forEach(truc => {
            truc.style.display = "none";
        });

        thumbnails.forEach(smallThumb => {
                smallThumb.style.display = "none"; 
        });
        thumbnails.forEach(smallThumb => {
            if (smallThumb.classList.contains("favori_image")) {
                smallThumb.style.display = "block"; 
                textFavNone.style.display = "none"; 
            }
        });
    }

    else {

        favNone.forEach(truc => {
            truc.style.display = "block";
        });

        thumbnails.forEach(smallThumb => {
            smallThumb.style.display = "block"; 
        });

        textFavNone.style.display = "none"; 
    }
}

// Retourne le nom simple de l'image selectionné
function nameFichier(elem) {
    return decodeURIComponent(new URL(elem).pathname.split('/').pop());
}

function nameDessin(elem) {
    return nameFichier(elem).split('.').slice(0, -1).join('.');
}

// Ajouter un favori
function ajouterFavori(item) {
    let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    if (!favoris.includes(item)) {
        favoris.push(item);
        localStorage.setItem("favoris", JSON.stringify(favoris));
        console.log("fav add : ", item);
    }
}

// Supprimer un favori
function supprimerFavori(item) {
    let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    favoris = favoris.filter(f => f !== item);
    localStorage.setItem("favoris", JSON.stringify(favoris));
    console.log("fav remove : ", item);
}

// Afficher les favoris
function afficherFavoris() {
    let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    favoris.forEach(fav => console.log("Favori :", fav));
}

// Vide les favoris
function viderFavoris() {
    localStorage.setItem("favoris", JSON.stringify([]));
    console.log("fav vidés");
}

// Bloque le scroll
function bloquerScroll() {
  document.body.style.overflow = "hidden";
}

// Réactive le scroll
function debloquerScroll() {
  document.body.style.overflow = "";
}