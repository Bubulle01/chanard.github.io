const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".closebtn");
const thumbnails = document.querySelectorAll(".smallThumb");


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
    smallThumb.addEventListener("click", () => {
        console.log("thumb clicked", smallThumb.src);
        modal.style.display = "flex";
        modalImage.src = smallThumb.src;
        console.log("thumb clicked");
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


