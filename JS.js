var width = window.innerWidth;
var height = window.innerHeight;
const tailleTel = 675;

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

const retour = document.getElementById("retour");
const fav = document.getElementById("fav");
const livret = document.getElementById("livret");
const favMenu = document.getElementById("favMenu");
const textFavNone = document.getElementById("textFavNone");
const videFav = document.getElementById("videFav");
const title_desc = document.getElementById("title_desc");
const desc = document.getElementById("desc");
const dossIcoFav = document.getElementById("dossIcoFav");

const refshit = document.getElementById("refshit");
const dessin = document.getElementById("dessin");
const montage = document.getElementById("montage");
const fond = document.getElementById("fond");
const amiibo = document.getElementById("amiibo");


const data = [
  {
    "image": "images/img_montage/Chanard scout.png",
    "alt": "alt Scout - Peak",
    "titre": "Chanard Scout",
    "description": ""
  },
  {
    "image": "images/dessin_base/Arthurin.png",
    "alt": "alt Arthurin",
    "titre": "Arthurin",
    "description": ""
  },
  {
    "image": "images/dessin_base/Chabatteur.png",
    "alt": "alt Chabatteur",
    "titre": "Chabatteur",
    "description": ""
  },
  {
    "image": "images/dessin_base/Dranach.png",
    "alt": "alt Dranach",
    "titre": "Dranach",
    "description": ""
  },
  {
    "image": "images/dessin_base/Chanard et son fidèle Panneau.png",
    "alt": "alt Chanard et son fidèle Panneau",
    "titre": "Chanard et son fidèle Panneau",
    "description": ""
  },
  {
    "image": "images/dessin_base/Protochanard.png",
    "alt": "alt Protochanard",
    "titre": "Protochanard",
    "description": ""
  },
  {
    "image": "images/dessin_base/Choubrette.png",
    "alt": "alt Choubrette",
    "titre": "Choubrette",
    "description": ""
  },
  {
    "image": "images/img_montage/Chino.png",
    "alt": "alt Chino",
    
    "titre": "Chino",
    "description": ""
  },
  {
    "image": "images/img_montage/Chedouard.png",
    "alt": "alt Edouard - Life Fantasy II",
    
    "titre": "Chedouard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chasteque.png",
    "alt": "alt oiseau pastèque - Steven Universe",
    
    "titre": "Chasteque",
    "description": ""
  },
  {
    "image": "images/img_montage/Chenry.png",
    "alt": "alt Henry - Fire Emblem",
    
    "titre": "Chenry",
    "description": ""
  },
  {
    "image": "images/img_montage/Chishl.png",
    "alt": "alt Fishl - Genshin Impact",
    
    "titre": "Chishl",
    "description": ""
  },
  {
    "image": "images/img_montage/Charja.png",
    "alt": "alt Tarja - Fire Emblem",
    
    "titre": "Charja",
    "description": ""
  },
  {
    "image": "images/img_montage/Chametist.png",
    "alt": "alt Ametist - Steven Universe",
    
    "titre": "Chametist",
    "description": ""
  },
  {
    "image": "images/img_montage/Chion.png",
    "alt": "alt le lion - Steven Universe",
    
    "titre": "Chion",
    "description": ""
  },
  {
    "image": "images/img_montage/ChlissTaker.png",
    "alt": "alt BlissTaker - AK-xolotl",
    
    "titre": "ChlissTaker",
    "description": ""
  },
  {
    "image": "images/img_montage/Giant Chapsucker.png",
    "alt": "alt Giant Sapsucker - Lethal Compagny",
    
    "titre": "Giant Chapsucker",
    "description": ""
  },
  {
    "image": "images/img_montage/Choy.png",
    "alt": "alt Joy - Cassette Beast",
    
    "titre": "Choy",
    "description": ""
  },
  {
    "image": "images/img_montage/Chashley.png",
    "alt": "alt Ashley - The Coffin of Andy and Leyley",
    
    "titre": "Chashley",
    "description": ""
  },
  {
    "image": "images/img_montage/Chuneko.png",
    "alt": "alt Kuneko - Cassette Beast",
    
    "titre": "Chuneko",
    "description": ""
  },
  {
    "image": "images/img_montage/Chassette.png",
    "alt": "alt Cassette - Cassette Beast",
    
    "titre": "Chassette",
    "description": ""
  },
  {
    "image": "images/img_montage/Charvaillus.png",
    "alt": "alt Corvaillus - Pokémon",
    
    "titre": "Charvaillus",
    "description": ""
  },
  {
    "image": "images/img_montage/Neverchort.png",
    "alt": "alt Nevermort - Cassette Beast",
    
    "titre": "Neverchort",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanardeur.png",
    "alt": "alt Canardeur - Enter the Gungeon",
    
    "titre": "Chanardeur",
    "description": ""
  },
  {
    "image": "images/img_montage/Chwig.png",
    "alt": "alt Chwig - ???",
    
    "titre": "Chwig",
    "description": ""
  },
  {
    "image": "images/img_montage/Wan Chi Tong.png",
    "alt": "alt Wan Shi Tong - Avatar",
    
    "titre": "Wan Chi Tong",
    "description": ""
  },
  {
    "image": "images/img_montage/Chufel.png",
    "alt": "alt Lufel - Persona",
    
    "titre": "Chufel",
    "description": ""
  },
  {
    "image": "images/img_montage/Chuffy.png",
    "alt": "alt Lufel - Persona",
    
    "titre": "Chuffy",
    "description": ""
  },
  {
    "image": "images/img_montage/Adventure Chime.png",
    "alt": "alt - Adventure Time",
    
    "titre": "Adventure Chime",
    "description": ""
  },
  {
    "image": "images/img_montage/Adventure with Chanard anxiety.png",
    "alt": "alt - Adventure with anxiety",
    
    "titre": "Adventure with Chanard anxiety",
    "description": ""
  },
  {
    "image": "images/img_montage/Angry Chanard.png",
    "alt": "alt - Angry Bird",
    
    "titre": "Angry Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Banard.png",
    "alt": "alt Badeline - Céleste",
    
    "titre": "Banard",
    "description": ""
  },
  {
    "image": "images/img_montage/Bancheenard.png",
    "alt": "alt Bansheep - Cassette Beast",
    
    "titre": "Bancheenard",
    "description": ""
  },
  {
    "image": "images/img_montage/Banjo-chazooie.png",
    "alt": "alt - Banjo-Kazooie",
    
    "titre": "Banjo-Chazooie",
    "description": ""
  },
  {
    "image": "images/img_montage/Blitcho.png",
    "alt": "alt Blitzo - Helluva Boss",
    
    "titre": "Blitcho",
    "description": ""
  },
  {
    "image": "images/img_montage/Brettcha.png",
    "alt": "alt Bretta - HollowKnight",
    
    "titre": "Brettcha",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabby.png",
    "alt": "alt Tabby - Genshin Impact",
    
    "titre": "Chabby",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabil.png",
    "alt": "alt Babil - The legend of Zelda",
    
    "titre": "Chabil",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabou.png",
    "alt": "alt Tibou - Animal Crossing",
    
    "titre": "Chabou",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabus.png",
    "alt": "alt Le Dernier Coléoptère - Hollow Knight",
    
    "titre": "Chabus",
    "description": ""
  },
  {
    "image": "images/img_montage/Chacaba.png",
    "alt": "alt Chocobo - Final Fantasy",
    
    "titre": "Chacaba",
    "description": ""
  },
  {
    "image": "images/img_montage/Chacaw.png",
    "alt": "alt Chacaw - ???",
    
    "titre": "Chacaw",
    "description": ""
  },
  {
    "image": "images/img_montage/Chacholas.png",
    "alt": "alt Piti Stolas - Helluva Boss",
    
    "titre": "Chacholas",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaepora.png",
    "alt": "alt Kaepora - The legend of Zelda",
    
    "titre": "Chaepora",
    "description": ""
  },
  {
    "image": "images/img_montage/Chainbow Dash.png",
    "alt": "alt Rainbow Dash - My Little Pony",
    
    "titre": "Chainbow Dash",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaken.png",
    "alt": "alt Bracken - Lethal Compagny",
    
    "titre": "Chacken",
    "description": ""
  },
  {
    "image": "images/img_montage/Chako.png",
    "alt": "alt Niko - One Shot",
    
    "titre": "Chako",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalastor.png",
    "alt": "alt Alastor - Hazbin Hotel",
    
    "titre": "Chalastor",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalco.png",
    "alt": "alt Falco - Chalco",
    
    "titre": "Chalco",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaléar.png",
    "alt": "alt Aléar - Fire Emblem",
    
    "titre": "Chaléar",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaleste.png",
    "alt": "alt - Céleste",
    
    "titre": "Chaleste",
    "description": ""
  },
  {
    "image": "images/img_montage/Chally face.png",
    "alt": "alt - Sally face",
    
    "titre": "Chally face",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaloona.png",
    "alt": "alt Loona - Helluva Boss",
    
    "titre": "Chaloona",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalsei.png",
    "alt": "alt Ralsei - Deltarune",
    
    "titre": "Chalsei",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalumeau.png",
    "alt": "alt Chalumeau - ???",
    
    "titre": "Chalumeau",
    "description": ""
  },
  {
    "image": "images/img_montage/Chamach.png",
    "alt": "alt ??? - Cult of the Lamb",
    
    "titre": "Chamach",
    "description": ""
  },
  {
    "image": "images/img_montage/Chamaloo.png",
    "alt": "alt ??? - One Piece",
    
    "titre": "Chamaloo",
    "description": ""
  },
  {
    "image": "images/img_montage/chamon.png",
    "alt": "alt Paimon - Genshin Impact",
    
    "titre": "Chamon",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanane.png",
    "alt": "alt Chanane - Fornite",
    
    "titre": "Chanane",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanaraïme.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chanaraïme",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard babouin.png",
    "alt": "alt Faucon babouin - Lethal Compagny",
    
    "titre": "Chanard babouin",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard Bust Up.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chanard Bust Up",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard dans la secte.png",
    "alt": "alt Chanard dans la secte - Cult of the Lamb",
    
    "titre": "Chanard dans la secte",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard de Kiki.png",
    "alt": "alt Jiji - Kiki la petite sorcière",
    
    "titre": "Chanard de Kiki",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard le pompier.png",
    "alt": "alt - Sam le pompier",
    
    "titre": "Chanard le pompier",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard Nook.png",
    "alt": "alt Tom Nook - Animal Crossing",
    
    "titre": "Chanard Nook",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard pikle.png",
    "alt": "alt Rick pikle - Rick et Morty",
    
    "titre": "Chanard pikle",
    "description": ""
  },
  {
    "image": "images/img_montage/Chingouin.png",
    "alt": "alt Pingouin skin - ???",
    
    "titre": "Chingouin",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard the hawk.png",
    "alt": "alt Jet the Hawk - Sonic",
    
    "titre": "Chanard the Hawk",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanarda.png",
    "alt": "alt Miascarade - Pokémon",
    
    "titre": "Chanarda",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanareater.png",
    "alt": "alt Maneaters - Lethal Compagny",
    
    "titre": "Chanareater",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanarosado.png",
    "alt": "alt Rosado - Fire Emblem",
    
    "titre": "Chanarosado",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaney.png",
    "alt": "alt Flowey - Undertale",
    
    "titre": "Chaney",
    "description": ""
  },
  {
    "image": "images/img_montage/Changel Dust.png",
    "alt": "alt Angel Dust - Hazbin Hotel",
    
    "titre": "Changel Dust",
    "description": ""
  },
  {
    "image": "images/img_montage/Channi.png",
    "alt": "alt Ranni - Elden Ring",
    
    "titre": "Channi",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanondorf.png",
    "alt": "alt Ganondorf - The legend of Zelda",
    
    "titre": "Chanondorf",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanoomba.png",
    "alt": "alt Goomba - Mario Bros",
    
    "titre": "Chanoomba",
    "description": ""
  },
  {
    "image": "images/img_montage/Chans.png",
    "alt": "alt Sans - Undertale",
    
    "titre": "Chans",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanyrus.png",
    "alt": "alt Papyrus - Undertale",
    
    "titre": "Chanyrus",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaphet.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chaphet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chappa.png",
    "alt": "alt Appa - Avatar",
    
    "titre": "Chappa",
    "description": ""
  },
  {
    "image": "images/img_montage/Chappeee.png",
    "alt": "alt Insecte Syllogomane - Lethal Compagny",
    
    "titre": "Chappeee",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaqueen.png",
    "alt": "alt Queen - Deltatune",
    
    "titre": "Chween",
    "description": ""
  },
  {
    "image": "images/img_montage/Charboss.png",
    "alt": "alt Corboss - Pokémon",
    
    "titre": "Charboss",
    "description": ""
  },
  {
    "image": "images/img_montage/Chardevoir.png",
    "alt": "alt Gardevoir - Pokémon",
    
    "titre": "Chardevoir",
    "description": ""
  },
  {
    "image": "images/img_montage/Charie.png",
    "alt": "alt Marie - Animal Crossing",
    
    "titre": "Charie",
    "description": ""
  },
  {
    "image": "images/img_montage/Charo.png",
    "alt": "alt ??? - Cult of the Lamb",
    
    "titre": "Charo",
    "description": ""
  },
  {
    "image": "images/img_montage/Charonica.png",
    "alt": "alt ??? - Fire Emblem",
    
    "titre": "Charonica",
    "description": ""
  },
  {
    "image": "images/img_montage/Chasalina.png",
    "alt": "alt Harmonie - Mario Bros",
    
    "titre": "Chasalina",
    "description": ""
  },
  {
    "image": "images/img_montage/Chataro.png",
    "alt": "alt Jotaro - Jojo Bizarre Aventure",
    
    "titre": "Chataro",
    "description": ""
  },
  {
    "image": "images/img_montage/Chatewaki Kunard.png",
    "alt": "alt ??? - Ranma 1/2",
    
    "titre": "Chatewaki Kunard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chathalos.png",
    "alt": "alt Rathalos - Monster Hunter",
    
    "titre": "Chathalos",
    "description": ""
  },
  {
    "image": "images/img_montage/Chatsuko.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chatsuko",
    "description": ""
  },
  {
    "image": "images/img_montage/Chava.png",
    "alt": "alt Ava - Fornite",
    
    "titre": "Chava",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaven.png",
    "alt": "alt Raven - Teans Titan Go",
    
    "titre": "Chaven",
    "description": ""
  },
  {
    "image": "images/img_montage/Chavirou.png",
    "alt": "alt Navirou - Monster Hunter",
    
    "titre": "Chavirou",
    "description": ""
  },
  {
    "image": "images/img_montage/Chawr Chura.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chawr Chura",
    "description": ""
  },
  {
    "image": "images/img_montage/Chazu.png",
    "alt": "alt Zazu - Le Roi Lion",
    
    "titre": "Chazu",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheadard.png",
    "alt": "alt Coil-Head - Lethal Compagny",
    
    "titre": "Choil-Head",
    "description": ""
  },
  {
    "image": "images/img_montage/Chealth Elf.png",
    "alt": "alt Stealth Elf - Skylanders",
    
    "titre": "Chealth Elf",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheemie.png",
    "alt": "alt Teemie - Undertale",
    
    "titre": "Cheemie",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheimerdinguer.png",
    "alt": "alt Heimerdinguer - Arcane",
    
    "titre": "Cheimerdinguer",
    "description": ""
  },
  {
    "image": "images/img_montage/Chélestriard.png",
    "alt": "alt Célestrier - The legend of Zelda",
    
    "titre": "Chélestriard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chemmet.png",
    "alt": "alt Hemmet - Lego",
    
    "titre": "Chemmet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chengubre.png",
    "alt": "alt Tengubre - Yokai Watch",
    
    "titre": "Chengubre",
    "description": ""
  },
  {
    "image": "images/img_montage/Cherdly.png",
    "alt": "alt Berdly - Deltarune",
    
    "titre": "Cherdly",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheureka.png",
    "alt": "alt Eureka - La petite Sirène",
    
    "titre": "Cheureka",
    "description": ""
  },
  {
    "image": "images/img_montage/Chevalier Chanard.png",
    "alt": "alt Défenseur Bousier - Hollow Knight",
    
    "titre": "Chevalier Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chiaousclé Midas.png",
    "alt": "alt Miaousclé Midas - Fornite",
    
    "titre": "Chiaousclé Midas",
    "description": ""
  },
  {
    "image": "images/img_montage/Chichiru Kagemori.png",
    "alt": "alt Michiru Kagemori - BNA: Brand New Animal",
    
    "titre": "Chichiru Kagemori",
    "description": ""
  },
  {
    "image": "images/img_montage/Chichu.png",
    "alt": "alt Pichu - Les mystérieuses Cité d'Or",
    
    "titre": "Chichu",
    "description": ""
  },
  {
    "image": "images/img_montage/Chicsou.png",
    "alt": "alt - Picsou",
    
    "titre": "Chicsou",
    "description": ""
  },
  {
    "image": "images/img_montage/Ectochanard.png",
    "alt": "alt Ectochien - Luigi Mansion",
    
    "titre": "Ectochanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chikey.png",
    "alt": "alt - Mickey",
    
    "titre": "Chikey",
    "description": ""
  },
  {
    "image": "images/img_montage/Chiktomisaure.png",
    "alt": "alt Iktomisaurus - Genshin Impact",
    
    "titre": "Chiktomisaure",
    "description": ""
  },
  {
    "image": "images/img_montage/Childa.png",
    "alt": "alt Hilda - ???",
    
    "titre": "Childa",
    "description": ""
  },
  {
    "image": "images/img_montage/China.png",
    "alt": "alt Pina - SAO Sword Art Online",
    
    "titre": "China",
    "description": ""
  },
  {
    "image": "images/img_montage/Chink Cartoons.png",
    "alt": "alt Link Cartoons - The legend of Zelda",
    
    "titre": "Chink Cartoons",
    "description": ""
  },
  {
    "image": "images/img_montage/Chink.png",
    "alt": "alt Link - The legend of Zelda",
    
    "titre": "Chink",
    "description": ""
  },
  {
    "image": "images/img_montage/Chinnamoroll.png",
    "alt": "alt - Cinnamoroll",
    
    "titre": "Chinnamoroll",
    "description": ""
  },
  {
    "image": "images/img_montage/Chio.png",
    "alt": "alt Dio - Jojo Bizarre Aventure",
    
    "titre": "Chio",
    "description": ""
  },
  {
    "image": "images/img_montage/Chira et Chythra.png",
    "alt": "alt Pira et Mythra - Xenoblade Chronicles",
    
    "titre": "Chira et Chythra",
    "description": ""
  },
  {
    "image": "images/img_montage/Chirbo.png",
    "alt": "alt - Kirby",
    
    "titre": "Chirbo",
    "description": ""
  },
  {
    "image": "images/img_montage/Chivine.png",
    "alt": "alt Divine - Hollow Knight",
    
    "titre": "Chivine",
    "description": ""
  },
  {
    "image": "images/img_montage/Chizzik.png",
    "alt": "alt Lizzik - Fornite",
    
    "titre": "Chizzik",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlaidd.png",
    "alt": "alt Blaidd - Elden Ring",
    
    "titre": "Chlaidd",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlauneck.png",
    "alt": "alt ??? - Cult of the Lamb",
    
    "titre": "Chlauneck",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlewbird.png",
    "alt": "alt ??? - Mario Bros",
    
    "titre": "Chlewbird",
    "description": ""
  },
  {
    "image": "images/img_montage/Chluke Hermit.png",
    "alt": "alt Fluke Hermit - Hollow Knight",
    
    "titre": "Chluke Hermit",
    "description": ""
  },
  {
    "image": "images/img_montage/Cho Cho.png",
    "alt": "alt Ho-Oh - Pokémon",
    
    "titre": "Cho-Cho",
    "description": ""
  },
  {
    "image": "images/img_montage/Choald.png",
    "alt": "alt ??? - Animal Crossing",
    
    "titre": "Choald",
    "description": ""
  },
  {
    "image": "images/img_montage/Chochogro.png",
    "alt": "alt - Totoro",
    
    "titre": "Chochogro",
    "description": ""
  },
  {
    "image": "images/img_montage/Choeur.png",
    "alt": "alt coeur - Undertale",
    
    "titre": "Choeur",
    "description": ""
  },
  {
    "image": "images/img_montage/Choker.png",
    "alt": "alt Joker - Persona",
    
    "titre": "Choker",
    "description": ""
  },
  {
    "image": "images/img_montage/Cholas.png",
    "alt": "alt Stolas - Helluva Boss",
    
    "titre": "Cholas",
    "description": ""
  },
  {
    "image": "images/img_montage/Chollie.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chollie",
    "description": ""
  },
  {
    "image": "images/img_montage/Chombre.png",
    "alt": "alt Ombre - Hollow Knight",
    
    "titre": "Chombre",
    "description": ""
  },
  {
    "image": "images/img_montage/Chomokuma.png",
    "alt": "alt Momokuma - Danganrompa",
    
    "titre": "Chomokuma",
    "description": ""
  },
  {
    "image": "images/img_montage/Chomori.png",
    "alt": "alt - Omori",
    
    "titre": "Chomori",
    "description": ""
  },
  {
    "image": "images/img_montage/Chorgana.png",
    "alt": "alt Morgana - Persona",
    
    "titre": "Chorgana",
    "description": ""
  },
  {
    "image": "images/img_montage/Chori.png",
    "alt": "alt - Ori",
    
    "titre": "Chori",
    "description": ""
  },
  {
    "image": "images/img_montage/Chornet.png",
    "alt": "alt Hornet - Hollow Knight",
    
    "titre": "Chornet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chorusto.png",
    "alt": "alt Rorusto - Animal Crossing",
    
    "titre": "Chorusto",
    "description": ""
  },
  {
    "image": "images/img_montage/Chote.png",
    "alt": "alt Zote - Hollow Knight",
    
    "titre": "Chote",
    "description": ""
  },
  {
    "image": "images/img_montage/Choudoudou.png",
    "alt": "alt Rondoudou - Pokémon",
    
    "titre": "Choudoudou",
    "description": ""
  },
  {
    "image": "images/img_montage/Chouge.png",
    "alt": "alt Rouge - Sonic",
    
    "titre": "Chouge",
    "description": ""
  },
  {
    "image": "images/img_montage/Chounard.png",
    "alt": "alt Rounard - Animal Crossing",
    
    "titre": "Chounard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chpike.png",
    "alt": "alt Chpike - My Little Pony",
    
    "titre": "Chpike",
    "description": ""
  },
  {
    "image": "images/img_montage/Chucky.png",
    "alt": "alt Ducky - Smash Legend",
    
    "titre": "Chucky",
    "description": ""
  },
  {
    "image": "images/img_montage/Chuigi et Choshi.png",
    "alt": "alt Luigi Yoshi - Mario Bros",
    
    "titre": "Chuigi et Choshi",
    "description": ""
  },
  {
    "image": "images/img_montage/Chullivar.png",
    "alt": "alt Gullivar - Animal Crossing",
    
    "titre": "Chullivar",
    "description": ""
  },
  {
    "image": "images/img_montage/Chumine.png",
    "alt": "alt Lumine - Genshin Impact",
    
    "titre": "Chumine",
    "description": ""
  },
  {
    "image": "images/img_montage/Chumper.png",
    "alt": "alt Thumper - Lethal Compagny",
    
    "titre": "Chumper",
    "description": ""
  },
  {
    "image": "images/img_montage/Chunther.png",
    "alt": "alt Gunther - Adventure Time",
    
    "titre": "Chunther",
    "description": ""
  },
  {
    "image": "images/img_montage/Churo.png",
    "alt": "alt Puro - Changed",
    
    "titre": "Churo",
    "description": ""
  },
  {
    "image": "images/img_montage/Chutaba.png",
    "alt": "alt Futaba - Persona",
    
    "titre": "Chutaba",
    "description": ""
  },
  {
    "image": "images/img_montage/Chutler.png",
    "alt": "alt Butler - Lethal Compagny",
    
    "titre": "Chutler",
    "description": ""
  },
  {
    "image": "images/img_montage/Chyanja.png",
    "alt": "alt Nyanja - Fornite",
    
    "titre": "Chyanja",
    "description": ""
  },
  {
    "image": "images/img_montage/Chyuk.png",
    "alt": "alt Ryuk - Death Note",
    
    "titre": "Chyuk",
    "description": ""
  },
  {
    "image": "images/img_montage/CMO.png",
    "alt": "alt BMO - Adventure Time",
    
    "titre": "CMO",
    "description": ""
  },
  {
    "image": "images/img_montage/Corvanard.png",
    "alt": "alt Corvus - Fornite",
    
    "titre": "Corvanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Cult of the Chanard.png",
    "alt": "alt - Cult of the Lamb",
    
    "titre": "Cult of the Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Daddy Crow v. Chanard.png",
    "alt": "alt Crow - Everhood",
    
    "titre": "Daddy Crow v. Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Duo Chanard Hunt.png",
    "alt": "alt - Duo Duck Hunt",
    
    "titre": "Duo Chanard Hunt",
    "description": ""
  },
  {
    "image": "images/img_montage/Flunnard.png",
    "alt": "alt ??? - Mario Bros",
    
    "titre": "Flunnard",
    "description": ""
  },
  {
    "image": "images/img_montage/Goro Chakechi.png",
    "alt": "alt Goro Akechi - Persona",
    
    "titre": "Goro Chakechi",
    "description": ""
  },
  {
    "image": "images/img_montage/Hat in Chanard.png",
    "alt": "alt - Hat in Time",
    
    "titre": "Hat in Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Kranard.png",
    "alt": "alt Kris - Deltarune",
    
    "titre": "Kranard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalarve.png",
    "alt": "alt Larve - Hollow Knight",
    
    "titre": "Chalarve",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalecet.png",
    "alt": "alt Bralecet - Fire Emblem",
    
    "titre": "Chalecet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanardeduc.png",
    "alt": "alt Ardeduc - Pokémon",
    
    "titre": "Chanardeduc",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanolimar.png",
    "alt": "alt Olimar - Pikmin",
    
    "titre": "Chanolimar",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanoussu.png",
    "alt": "alt Moussue - Hollow Knight",
    
    "titre": "Chanoussu",
    "description": ""
  },
  {
    "image": "images/img_montage/Chauru.png",
    "alt": "alt Rauru - The legend of Zelda",
    
    "titre": "Chauru",
    "description": ""
  },
  {
    "image": "images/img_montage/Le Grand, Magnifique, Chanarticho.png",
    "alt": "alt Palarticho - Pokémon",
    
    "titre": "Le Grand, Magnifique, Chanarticho",
    "description": ""
  },
  {
    "image": "images/img_montage/Violeur n°2.png",
    "alt": "alt Le Collectionneur - Hollow Knight",
    
    "titre": "Violeur n°2",
    "description": ""
  },
  {
    "image": "images/img_montage/Le Chrisonnier.png",
    "alt": "alt Le Prisonnier - Outer Wilds",
    
    "titre": "Le Chrisonnier",
    "description": ""
  },
  {
    "image": "images/img_montage/Luchas.png",
    "alt": "alt Lucas - EarthBound",
    
    "titre": "Luchas",
    "description": ""
  },
  {
    "image": "images/img_montage/Tasse Chanard.png",
    "alt": "alt Tasse Chanard",
    
    "titre": "Tasse Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Maître Chanu.png",
    "alt": "alt Maître Wu - Kungfu Panda",
    
    "titre": "Maître Chanu",
    "description": ""
  },
  {
    "image": "images/img_montage/Mini Chadam.png",
    "alt": "alt Adam - Hazbin Hotel",
    
    "titre": "Mini Chadam",
    "description": ""
  },
  {
    "image": "images/img_montage/Monkey D. Chanard.png",
    "alt": "alt Monkey D. Luffy - One Piece",
    
    "titre": "Monkey D. Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Overchanard.png",
    "alt": "alt - Overcooked",
    
    "titre": "Overchanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Patate Chanard.png",
    "alt": "alt Patate",
    
    "titre": "Patate Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Peter Chaffrin.png",
    "alt": "alt Peter Griffrin - Family Guy",
    
    "titre": "Peter Chaffrin",
    "description": ""
  },
  {
    "image": "images/img_montage/Peppino Chaghetti.png",
    "alt": "alt Peppino Spaghetti - Pizza Tower",
    
    "titre": "Peppino Chaghetti",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlumette.png",
    "alt": "alt Plumette",
    
    "titre": "Chlumette",
    "description": ""
  },
  {
    "image": "images/img_montage/Poichinard.png",
    "alt": "alt Poichigeon - Pokémon",
    
    "titre": "Poichinard",
    "description": ""
  },
  {
    "image": "images/img_montage/Prof Chanard.png",
    "alt": "alt - Professeur Layton",
    
    "titre": "Prof Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Professeur Charl Tastroff.png",
    "alt": "alt Professeur Karl Tastroff - Luigi Mansion",
    
    "titre": "Professeur Charl Tastroff",
    "description": ""
  },
  {
    "image": "images/img_montage/Psykochwak.png",
    "alt": "alt Psykokwak - Pokémon",
    
    "titre": "Psykochwak",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard Show.png",
    "alt": "alt - Regular Show",
    
    "titre": "Chanard Show",
    "description": ""
  },
  {
    "image": "images/img_montage/Chevali.png",
    "alt": "alt Revali - The legend of Zelda",
    
    "titre": "Chevali",
    "description": ""
  },
  {
    "image": "images/img_montage/Roi Charassé.png",
    "alt": "alt Roi Cuirassé - The legend of Zelda",
    
    "titre": "Roi Charassé",
    "description": ""
  },
  {
    "image": "images/img_montage/Roi des Chlace.png",
    "alt": "alt Roi des Glace - Adventure Time",
    
    "titre": "Roi des Chlace",
    "description": ""
  },
  {
    "image": "images/img_montage/Roronoa Chorro.png",
    "alt": "alt Roronoa Zorro - One piece",
    
    "titre": "Roronoa Chorro",
    "description": ""
  },
  {
    "image": "images/img_montage/Ruchanard.png",
    "alt": "alt Budge - Fornite",
    
    "titre": "Chadge",
    "description": ""
  },
  {
    "image": "images/img_montage/Shun-nard.png",
    "alt": "alt Shun-day - Les Légendaires",
    
    "titre": "Shun-nard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlime.png",
    "alt": "alt Slime Chat - Slime Rancher",
    
    "titre": "Chlime",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanardtrap.png",
    "alt": "alt Chanardtrap - fnaf Five night at Freddy's",
    
    "titre": "Chanardtrap",
    "description": ""
  },
  {
    "image": "images/img_montage/Sunard.png",
    "alt": "alt Susie - Deltarune",
    
    "titre": "Sunard",
    "description": ""
  },
  {
    "image": "images/img_montage/The Chatcher.png",
    "alt": "alt The Snatcher - Hat in Time",
    
    "titre": "The Chatcher",
    "description": ""
  },
  {
    "image": "images/img_montage/Tochanard.png",
    "alt": "alt Tora - Xenoblade Chronicles",
    
    "titre": "Toranard",
    "description": ""
  },
  {
    "image": "images/img_montage/Trigger Chappy.png",
    "alt": "alt Trigger Happy - Skylanders",
    
    "titre": "Trigger Chappy",
    "description": ""
  },
  {
    "image": "images/img_montage/Untitled Chanard Game.png",
    "alt": "alt - Untitled Goose Game",
    
    "titre": "Untitled Chanard Game",
    "description": ""
  },
  {
    "image": "images/img_montage/Woody Woodcherper.png",
    "alt": "alt - Woody Woodpecker",
    
    "titre": "Woody Woodchecker",
    "description": ""
  },
  {
    "image": "images/img_montage/Zechyr.png",
    "alt": "alt Zephyr - ???",
    
    "titre": "Zechyr",
    "description": ""
  },
  {
    "image": "images/img_fond/Chark Knight.png",
    "alt": "alt Dark Knight - Deltarune",
    "titre": "Chark Knight",
    "description": ""
  },
  {
    "image": "images/img_fond/Chaouette.png",
    "alt": "alt Chouette - Avatar",
    "titre": "Chaouette",
    "description": ""
  },
  {
    "image": "images/img_fond/Cheva.png",
    "alt": "alt - Neva",
    "titre": "Cheva",
    "description": ""
  },
  {
    "image": "images/img_fond/Amis de Chomori.png",
    "alt": "alt Amis d' Omori",
    "titre": "Amis de Chomori",
    "description": ""
  },
  {
    "image": "images/img_fond/Chain World.png",
    "alt": "alt - Rain World",
    "titre": "Chain World",
    "description": ""
  },
  {
    "image": "images/img_fond/Chanard Bad.png",
    "alt": "alt - Breaking Bad",
    "titre": "Chanard Bad",
    "description": ""
  },
  {
    "image": "images/img_fond/Chanard en Editting.png",
    "alt": "alt - Miitopia",
    "titre": "Chanard en Editting",
    "description": ""
  },
  {
    "image": "images/img_fond/Charinder.png",
    "alt": "alt Narinder - Cult of the Lamb",
    "titre": "Charinder",
    "description": ""
  },
  {
    "image": "images/img_fond/Chauru.png",
    "alt": "alt ??? - Le Chateau Ambulant",
    "titre": "Chauru",
    "description": ""
  },
  {
    "image": "images/img_fond/Chéleste.png",
    "alt": "alt Céleste - Animal Crossing",
    "titre": "Chéleste",
    "description": ""
  },
  {
    "image": "images/img_fond/Chiffrin.png",
    "alt": "alt ??? - ???",
    "titre": "Chiffrin",
    "description": ""
  },
  {
    "image": "images/img_fond/Chikachu Gigacul.png",
    "alt": "alt Pikachu Gigamax - Pokémon",
    "titre": "Chikachu Gigacul",
    "description": ""
  },
  {
    "image": "images/img_fond/Chisobelle.png",
    "alt": "alt Isabelle - Baldur Gate",
    "titre": "Chisobelle",
    "description": ""
  },
  {
    "image": "images/img_fond/Chobalt Core.png",
    "alt": "alt Cobalt Core",
    "titre": "Chobalt Core",
    "description": ""
  },
  {
    "image": "images/img_fond/Chobrey.png",
    "alt": "alt Aubrey - Omori",
    "titre": "Chobrey",
    "description": ""
  },
  {
    "image": "images/img_fond/Chragon.png",
    "alt": "alt Dragon - Fire Emblem",
    "titre": "Chragon",
    "description": ""
  },
  {
    "image": "images/img_fond/Chrisk.png",
    "alt": "alt Frisk - Undertale",
    "titre": "Chrisk",
    "description": ""
  },
  {
    "image": "images/img_fond/Chunard.png",
    "alt": "alt Ku - Ori",
    "titre": "Chunard",
    "description": ""
  },
  {
    "image": "images/img_fond/Chuolinguo.png",
    "alt": "alt - Duolingo",
    "titre": "Chuolinguo",
    "description": ""
  },
  {
    "image": "images/img_fond/Crownard.png",
    "alt": "alt Corbac Crow - Brawl Star",
    "titre": "Chorbac",
    "description": ""
  },
  {
    "image": "images/img_fond/David Goodchenough.png",
    "alt": "alt David Goodenough",
    "titre": "David Goodchenough",
    "description": ""
  },
  {
    "image": "images/img_fond/Digital Charcus.png",
    "alt": "alt - Digital Circus",
    "titre": "Digital Charcus",
    "description": ""
  },
  {
    "image": "images/img_fond/Eminence Of Shadow, Chanard.png",
    "alt": "alt - Eminence Of Shadow",
    "titre": "Eminence Of Shadow, Chanard",
    "description": ""
  },
  {
    "image": "images/img_fond/Five Night At Chanard.png",
    "alt": "alt Five Night At Freddy",
    "titre": "Five Night At Chanard",
    "description": ""
  },
  {
    "image": "images/img_fond/Good Confident.png",
    "alt": "alt Good Confident - Persona",
    "titre": "Good Confident",
    "description": ""
  },
  {
    "image": "images/img_fond/Hollow Chight.png",
    "alt": "alt - Hollow Knight",
    "titre": "Hollow Chight",
    "description": ""
  },
  {
    "image": "images/img_fond/Jenard.png",
    "alt": "alt Jevil - Deltarune",
    "titre": "Jenard",
    "description": ""
  },
  {
    "image": "images/img_fond/Just Chonika.png",
    "alt": "alt Monika - ddlc Doki Doki Littérature Club",
    "titre": "Just Chonika",
    "description": ""
  },
  {
    "image": "images/img_fond/Photo de famille.png",
    "alt": "alt - Fire Emblem",
    "titre": "Photo de famille",
    "description": ""
  },
  {
    "image": "images/img_fond/Roi Chumkasaure.png",
    "alt": "alt Roi Yumkasaurus - Genshin Impact",
    "titre": "Roi Chumkasaure",
    "description": ""
  },
  {
    "image": "images/img_fond/Le Violeur.png",
    "alt": "alt Leshy - Inscryption",
    "titre": "Le Violeur",
    "description": ""
  },
  {
    "image": "images/img_fond/Night in the Chanard.png",
    "alt": "alt - Night in the Wood",
    "titre": "Night in the Chanard",
    "description": ""
  },
  {
    "image": "images/img_fond/Choleil.png",
    "alt": "alt Soleil - Teletubbies",
    "titre": "Choleil",
    "description": ""
  },
  {
    "image": "images/img_fond/The Stone Chanard Witch.png",
    "alt": "alt The Stone Witch - Islets",
    "titre": "The Stone Chanard Witch",
    "description": ""
  },
  {
    "image": "images/img_autre/Chanard Refshit.png",
    "alt": "alt Chanard Refshit",
    "titre": "Chanard",
    "description": ""
  },
  {
    "image": "images/img_autre/Table d'Amiibo.png",
    "alt": "alt table Amiibo",
    "titre": "Table d'Amiibo",
    "description": ""
  }
]


/* Démarre le JSON pour l'application automatisé des images */

//data.json
/*
fetch('data.json')
    .then(response => response.json())
    .then(data => {
*/
        data.forEach(item => {
            const img = document.createElement('img');
            img.src = `${item.image}`;
            img.alt = `${item.alt}`;
        
            img.classList.add("smallThumb");
            if (img.src.includes("dessin_base/")) {
                dessin.appendChild(img);
            }
            else if (img.src.includes("img_fond/")) {
                fond.appendChild(img);
            }
            else if (img.src.includes("img_montage/")) {
                montage.appendChild(img);
            }
            
            img.onload = () => {
                if (img.naturalWidth > img.naturalHeight) {
                    img.classList.add("largeur");
                }
                else {
                    img.classList.add("hauteur");
                }
                if (((img.naturalWidth < img.width) || (img.naturalHeight < img.height)) && !(img.src.includes("img_fond/"))) {
                    img.classList.add("lowQuality");
                }
            }
            console.log("spawn dessin ", `${item.image}`, " / largeur : ", img.naturalWidth, " / hauteur : ", img.naturalHeight);
        });
/*
    });
*/


const thumbnails = document.querySelectorAll(".smallThumb");
const favNone = document.querySelectorAll(".favNone");
const description = document.querySelector(".description")
const fond_noir_desc = document.querySelector(".fond_noir_desc")

let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");


/* Système changement de fond d'écran */
let id = 0;
let list_fond = [
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
        id = (id + 1) % list_fond.length; // revient à 0 à la fin  
        image.src = list_fond[id]; // Changer la source de l'image  
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

        data.forEach(item => {
            if (nomFichier == nameFichier(`${item.image}`)) {
                title_desc.textContent = `${item.titre}`;
                desc.textContent = `${item.description}`;
            }
        });

        var width = window.innerWidth;
        if ((!smallThumb.closest(".grid4")) && (width >= tailleTel)) {
            description.style.transform = "translateX(0) translateY(10vh)";
            modalImage.classList.add("fond");
            console.log("mode fond pc");
        }
        else if ((smallThumb.closest(".grid4")) && (width >= tailleTel)) {
            description.style.transform = "translateX(30vw) translateY(0)";
            console.log("mode dessin pc");
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
            }
            affFav(favMenu.src.endsWith("images/arrangement/etoileMenu_gold.png"));
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

        /* Quand la flèche retour est survolé */
        retour.addEventListener('mouseenter', () => {
            retour.src = "images/arrangement/retour-fleche2.png";
        });

        retour.addEventListener('mouseleave', () => {
            retour.src = "images/arrangement/retour-fleche.png";
        });
    });
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if ((event.target === modal) || (event.target === retour) || (event.target === description)) {
        modal.style.display = "none";
        debloquerScroll();
        livret.src = "images/arrangement/livret.png";
        retour.src = "images/arrangement/retour-fleche.png";
        modal.classList.remove("active");
        modal.classList.remove("active2");
        modalImage.classList.remove("fond");
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
        textFavNone.style.display = "flex"; 
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

/*
function nameFichier(elem) {
    return decodeURIComponent(new URL(elem).pathname.split('/').pop());
}
*/

function nameFichier(elem) {
    return decodeURIComponent(elem.split('/').pop());
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