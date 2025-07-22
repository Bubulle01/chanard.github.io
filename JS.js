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
const desc = document.getElementById("desc");
const dossIcoFav = document.getElementById("dossIcoFav");

const dessin = document.getElementById("dessin");
const montage = document.getElementById("montage");
const fond = document.getElementById("fond");


const _dessin = [
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
  }
]

const _montage = [
  {
    "image": "images/Chino.png",
    "alt": "alt Chino",
    
    "titre": "Chino",
    "description": ""
  },
  {
    "image": "images/Chedouard.png",
    "alt": "alt Edouard - Life Fantasy II",
    
    "titre": "Chedouard",
    "description": ""
  },
  {
    "image": "images/Chasteque.png",
    "alt": "alt oiseau pastèque - Steven Universe",
    
    "titre": "Chasteque",
    "description": ""
  },
  {
    "image": "images/Chenry.png",
    "alt": "alt Henry - Fire Emblem",
    
    "titre": "Chenry",
    "description": ""
  },
  {
    "image": "images/Chishl.png",
    "alt": "alt Fishl - Genshin Impact",
    
    "titre": "Chishl",
    "description": ""
  },
  {
    "image": "images/Charja.png",
    "alt": "alt Tarja - Fire Emblem",
    
    "titre": "Charja",
    "description": ""
  },
  {
    "image": "images/Chametist.png",
    "alt": "alt Ametist - Steven Universe",
    
    "titre": "Chametist",
    "description": ""
  },
  {
    "image": "images/Chion.png",
    "alt": "alt le lion - Steven Universe",
    
    "titre": "Chion",
    "description": ""
  },
  {
    "image": "images/ChlissTaker.png",
    "alt": "alt BlissTaker - AK-xolotl",
    
    "titre": "ChlissTaker",
    "description": ""
  },
  {
    "image": "images/Giant Chapsucker.png",
    "alt": "alt Giant Sapsucker - Lethal Compagny",
    
    "titre": "Giant Chapsucker",
    "description": ""
  },
  {
    "image": "images/Choy.png",
    "alt": "alt Joy - Cassette Beast",
    
    "titre": "Choy",
    "description": ""
  },
  {
    "image": "images/Chashley.png",
    "alt": "alt Ashley - The Coffin of Andy and Leyley",
    
    "titre": "Chashley",
    "description": ""
  },
  {
    "image": "images/Chuneko.png",
    "alt": "alt Kuneko - Cassette Beast",
    
    "titre": "Chuneko",
    "description": ""
  },
  {
    "image": "images/Chassette.png",
    "alt": "alt Cassette - Cassette Beast",
    
    "titre": "Chassette",
    "description": ""
  },
  {
    "image": "images/Charvaillus.png",
    "alt": "alt Corvaillus - Pokémon",
    
    "titre": "Charvaillus",
    "description": ""
  },
  {
    "image": "images/Neverchort.png",
    "alt": "alt Nevermort - Cassette Beast",
    
    "titre": "Neverchort",
    "description": ""
  },
  {
    "image": "images/Chanardeur.png",
    "alt": "alt Canardeur - Enter the Gungeon",
    
    "titre": "Chanardeur",
    "description": ""
  },
  {
    "image": "images/Chwig.png",
    "alt": "alt Chwig - ???",
    
    "titre": "Chwig",
    "description": ""
  },
  {
    "image": "images/Wan Chi Tong.png",
    "alt": "alt Wan Shi Tong - Avatar",
    
    "titre": "Wan Chi Tong",
    "description": ""
  },
  {
    "image": "images/Chufel.png",
    "alt": "alt Lufel - Persona",
    
    "titre": "Chufel",
    "description": ""
  },
  {
    "image": "images/Chuffy.png",
    "alt": "alt Lufel - Persona",
    
    "titre": "Chuffy",
    "description": ""
  },
  {
    "image": "images/Adventure Chime.png",
    "alt": "alt - Adventure Time",
    
    "titre": "Adventure Chime",
    "description": ""
  },
  {
    "image": "images/Adventure with Chanard anxiety.png",
    "alt": "alt - Adventure with anxiety",
    
    "titre": "Adventure with Chanard anxiety",
    "description": ""
  },
  {
    "image": "images/Angry Chanard.png",
    "alt": "alt - Angry Bird",
    
    "titre": "Angry Chanard",
    "description": ""
  },
  {
    "image": "images/Banard.png",
    "alt": "alt Badeline - Céleste",
    
    "titre": "Banard",
    "description": ""
  },
  {
    "image": "images/Bancheenard.png",
    "alt": "alt Bansheep - Cassette Beast",
    
    "titre": "Bancheenard",
    "description": ""
  },
  {
    "image": "images/Banjo-chazooie.png",
    "alt": "alt - Banjo-Kazooie",
    
    "titre": "Banjo-Chazooie",
    "description": ""
  },
  {
    "image": "images/Blitcho.png",
    "alt": "alt Blitzo - Helluva Boss",
    
    "titre": "Blitcho",
    "description": ""
  },
  {
    "image": "images/Brettcha.png",
    "alt": "alt Bretta - HollowKnight",
    
    "titre": "Brettcha",
    "description": ""
  },
  {
    "image": "images/Chabby.png",
    "alt": "alt Tabby - Genshin Impact",
    
    "titre": "Chabby",
    "description": ""
  },
  {
    "image": "images/Chabil.png",
    "alt": "alt Babil - The legend of Zelda",
    
    "titre": "Chabil",
    "description": ""
  },
  {
    "image": "images/Chabou.png",
    "alt": "alt Tibou - Animal Crossing",
    
    "titre": "Chabou",
    "description": ""
  },
  {
    "image": "images/Chabus.png",
    "alt": "alt Le Dernier Coléoptère - Hollow Knight",
    
    "titre": "Chabus",
    "description": ""
  },
  {
    "image": "images/Chacaba.png",
    "alt": "alt Chocobo - Final Fantasy",
    
    "titre": "Chacaba",
    "description": ""
  },
  {
    "image": "images/Chacaw.png",
    "alt": "alt Chacaw - ???",
    
    "titre": "Chacaw",
    "description": ""
  },
  {
    "image": "images/Chacholas.png",
    "alt": "alt Piti Stolas - Helluva Boss",
    
    "titre": "Chacholas",
    "description": ""
  },
  {
    "image": "images/Chaepora.png",
    "alt": "alt Kaepora - The legend of Zelda",
    
    "titre": "Chaepora",
    "description": ""
  },
  {
    "image": "images/Chainbow Dash.png",
    "alt": "alt Rainbow Dash - My Little Pony",
    
    "titre": "Chainbow Dash",
    "description": ""
  },
  {
    "image": "images/Chaken.png",
    "alt": "alt Bracken - Lethal Compagny",
    
    "titre": "Chacken",
    "description": ""
  },
  {
    "image": "images/Chako.png",
    "alt": "alt Niko - One Shot",
    
    "titre": "Chako",
    "description": ""
  },
  {
    "image": "images/Chalastor.png",
    "alt": "alt Alastor - Hazbin Hotel",
    
    "titre": "Chalastor",
    "description": ""
  },
  {
    "image": "images/Chalco.png",
    "alt": "alt Falco - Chalco",
    
    "titre": "Chalco",
    "description": ""
  },
  {
    "image": "images/Chaléar.png",
    "alt": "alt Aléar - Fire Emblem",
    
    "titre": "Chaléar",
    "description": ""
  },
  {
    "image": "images/Chaleste.png",
    "alt": "alt - Céleste",
    
    "titre": "Chaleste",
    "description": ""
  },
  {
    "image": "images/Chally face.png",
    "alt": "alt - Sally face",
    
    "titre": "Chally face",
    "description": ""
  },
  {
    "image": "images/Chaloona.png",
    "alt": "alt Loona - Helluva Boss",
    
    "titre": "Chaloona",
    "description": ""
  },
  {
    "image": "images/Chalsei.png",
    "alt": "alt Ralsei - Deltarune",
    
    "titre": "Chalsei",
    "description": ""
  },
  {
    "image": "images/Chalumeau.png",
    "alt": "alt Chalumeau - ???",
    
    "titre": "Chalumeau",
    "description": ""
  },
  {
    "image": "images/Chamach.png",
    "alt": "alt ??? - Cult of the Lamb",
    
    "titre": "Chamach",
    "description": ""
  },
  {
    "image": "images/Chamaloo.png",
    "alt": "alt ??? - One Piece",
    
    "titre": "Chamaloo",
    "description": ""
  },
  {
    "image": "images/chamon.png",
    "alt": "alt Paimon - Genshin Impact",
    
    "titre": "Chamon",
    "description": ""
  },
  {
    "image": "images/Chanane.png",
    "alt": "alt Chanane - Fornite",
    
    "titre": "Chanane",
    "description": ""
  },
  {
    "image": "images/Chanaraïme.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chanaraïme",
    "description": ""
  },
  {
    "image": "images/Chanard babouin.png",
    "alt": "alt Faucon babouin - Lethal Compagny",
    
    "titre": "Chanard babouin",
    "description": ""
  },
  {
    "image": "images/Chanard Bust Up.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chanard Bust Up",
    "description": ""
  },
  {
    "image": "images/Chanard dans la secte.png",
    "alt": "alt Chanard dans la secte - Cult of the Lamb",
    
    "titre": "Chanard dans la secte",
    "description": ""
  },
  {
    "image": "images/Chanard de Kiki.png",
    "alt": "alt Jiji - Kiki la petite sorcière",
    
    "titre": "Chanard de Kiki",
    "description": ""
  },
  {
    "image": "images/Chanard le pompier.png",
    "alt": "alt - Sam le pompier",
    
    "titre": "Chanard le pompier",
    "description": ""
  },
  {
    "image": "images/Chanard Nook.png",
    "alt": "alt Tom Nook - Animal Crossing",
    
    "titre": "Chanard Nook",
    "description": ""
  },
  {
    "image": "images/Chanard pikle.png",
    "alt": "alt Rick pikle - Rick et Morty",
    
    "titre": "Chanard pikle",
    "description": ""
  },
  {
    "image": "images/Chingouin.png",
    "alt": "alt Pingouin skin - ???",
    
    "titre": "Chingouin",
    "description": ""
  },
  {
    "image": "images/Chanard the hawk.png",
    "alt": "alt Jet the Hawk - Sonic",
    
    "titre": "Chanard the Hawk",
    "description": ""
  },
  {
    "image": "images/Chanarda.png",
    "alt": "alt Miascarade - Pokémon",
    
    "titre": "Chanarda",
    "description": ""
  },
  {
    "image": "images/Chanareater.png",
    "alt": "alt Maneaters - Lethal Compagny",
    
    "titre": "Chanareater",
    "description": ""
  },
  {
    "image": "images/Chanarosado.png",
    "alt": "alt Rosado - Fire Emblem",
    
    "titre": "Chanarosado",
    "description": ""
  },
  {
    "image": "images/Chaney.png",
    "alt": "alt Flowey - Undertale",
    
    "titre": "Chaney",
    "description": ""
  },
  {
    "image": "images/Changel Dust.png",
    "alt": "alt Angel Dust - Hazbin Hotel",
    
    "titre": "Changel Dust",
    "description": ""
  },
  {
    "image": "images/Channi.png",
    "alt": "alt Ranni - Elden Ring",
    
    "titre": "Channi",
    "description": ""
  },
  {
    "image": "images/Chanondorf.png",
    "alt": "alt Ganondorf - The legend of Zelda",
    
    "titre": "Chanondorf",
    "description": ""
  },
  {
    "image": "images/Chanoomba.png",
    "alt": "alt Goomba - Mario Bros",
    
    "titre": "Chanoomba",
    "description": ""
  },
  {
    "image": "images/Chans.png",
    "alt": "alt Sans - Undertale",
    
    "titre": "Chans",
    "description": ""
  },
  {
    "image": "images/Chanyrus.png",
    "alt": "alt Papyrus - Undertale",
    
    "titre": "Chanyrus",
    "description": ""
  },
  {
    "image": "images/Chaphet.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chaphet",
    "description": ""
  },
  {
    "image": "images/Chappa.png",
    "alt": "alt Appa - Avatar",
    
    "titre": "Chappa",
    "description": ""
  },
  {
    "image": "images/Chappeee.png",
    "alt": "alt Insecte Syllogomane - Lethal Compagny",
    
    "titre": "Chappeee",
    "description": ""
  },
  {
    "image": "images/Chaqueen.png",
    "alt": "alt Queen - Deltatune",
    
    "titre": "Chween",
    "description": ""
  },
  {
    "image": "images/Charboss.png",
    "alt": "alt Corboss - Pokémon",
    
    "titre": "Charboss",
    "description": ""
  },
  {
    "image": "images/Chardevoir.png",
    "alt": "alt Gardevoir - Pokémon",
    
    "titre": "Chardevoir",
    "description": ""
  },
  {
    "image": "images/Charie.png",
    "alt": "alt Marie - Animal Crossing",
    
    "titre": "Charie",
    "description": ""
  },
  {
    "image": "images/Charo.png",
    "alt": "alt ??? - Cult of the Lamb",
    
    "titre": "Charo",
    "description": ""
  },
  {
    "image": "images/Charonica.png",
    "alt": "alt ??? - Fire Emblem",
    
    "titre": "Charonica",
    "description": ""
  },
  {
    "image": "images/Chasalina.png",
    "alt": "alt Harmonie - Mario Bros",
    
    "titre": "Chasalina",
    "description": ""
  },
  {
    "image": "images/Chataro.png",
    "alt": "alt Jotaro - Jojo Bizarre Aventure",
    
    "titre": "Chataro",
    "description": ""
  },
  {
    "image": "images/Chatewaki Kunard.png",
    "alt": "alt ??? - Ranma 1/2",
    
    "titre": "Chatewaki Kunard",
    "description": ""
  },
  {
    "image": "images/Chathalos.png",
    "alt": "alt Rathalos - Monster Hunter",
    
    "titre": "Chathalos",
    "description": ""
  },
  {
    "image": "images/Chatsuko.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chatsuko",
    "description": ""
  },
  {
    "image": "images/Chava.png",
    "alt": "alt Ava - Fornite",
    
    "titre": "Chava",
    "description": ""
  },
  {
    "image": "images/Chaven.png",
    "alt": "alt Raven - Teans Titan Go",
    
    "titre": "Chaven",
    "description": ""
  },
  {
    "image": "images/Chavirou.png",
    "alt": "alt Navirou - Monster Hunter",
    
    "titre": "Chavirou",
    "description": ""
  },
  {
    "image": "images/Chawr Chura.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chawr Chura",
    "description": ""
  },
  {
    "image": "images/Chazu.png",
    "alt": "alt Zazu - Le Roi Lion",
    
    "titre": "Chazu",
    "description": ""
  },
  {
    "image": "images/Cheadard.png",
    "alt": "alt Coil-Head - Lethal Compagny",
    
    "titre": "Choil-Head",
    "description": ""
  },
  {
    "image": "images/Chealth Elf.png",
    "alt": "alt Stealth Elf - Skylanders",
    
    "titre": "Chealth Elf",
    "description": ""
  },
  {
    "image": "images/Cheemie.png",
    "alt": "alt Teemie - Undertale",
    
    "titre": "Cheemie",
    "description": ""
  },
  {
    "image": "images/Cheimerdinguer.png",
    "alt": "alt Heimerdinguer - Arcane",
    
    "titre": "Cheimerdinguer",
    "description": ""
  },
  {
    "image": "images/Chélestriard.png",
    "alt": "alt Célestrier - The legend of Zelda",
    
    "titre": "Chélestriard",
    "description": ""
  },
  {
    "image": "images/Chemmet.png",
    "alt": "alt Hemmet - Lego",
    
    "titre": "Chemmet",
    "description": ""
  },
  {
    "image": "images/Chengubre.png",
    "alt": "alt Tengubre - Yokai Watch",
    
    "titre": "Chengubre",
    "description": ""
  },
  {
    "image": "images/Cherdly.png",
    "alt": "alt Berdly - Deltarune",
    
    "titre": "Cherdly",
    "description": ""
  },
  {
    "image": "images/Cheureka.png",
    "alt": "alt Eureka - La petite Sirène",
    
    "titre": "Cheureka",
    "description": ""
  },
  {
    "image": "images/Chevalier Chanard.png",
    "alt": "alt Défenseur Bousier - Hollow Knight",
    
    "titre": "Chevalier Chanard",
    "description": ""
  },
  {
    "image": "images/Chiaousclé Midas.png",
    "alt": "alt Miaousclé Midas - Fornite",
    
    "titre": "Chiaousclé Midas",
    "description": ""
  },
  {
    "image": "images/Chichiru Kagemori.png",
    "alt": "alt Michiru Kagemori - BNA: Brand New Animal",
    
    "titre": "Chichiru Kagemori",
    "description": ""
  },
  {
    "image": "images/Chichu.png",
    "alt": "alt Pichu - Les mystérieuses Cité d'Or",
    
    "titre": "Chichu",
    "description": ""
  },
  {
    "image": "images/Chicsou.png",
    "alt": "alt - Picsou",
    
    "titre": "Chicsou",
    "description": ""
  },
  {
    "image": "images/Ectochanard.png",
    "alt": "alt Ectochien - Luigi Mansion",
    
    "titre": "Ectochanard",
    "description": ""
  },
  {
    "image": "images/Chikey.png",
    "alt": "alt - Mickey",
    
    "titre": "Chikey",
    "description": ""
  },
  {
    "image": "images/Chiktomisaure.png",
    "alt": "alt Iktomisaurus - Genshin Impact",
    
    "titre": "Chiktomisaure",
    "description": ""
  },
  {
    "image": "images/Childa.png",
    "alt": "alt Hilda - ???",
    
    "titre": "Childa",
    "description": ""
  },
  {
    "image": "images/China.png",
    "alt": "alt Pina - SAO Sword Art Online",
    
    "titre": "China",
    "description": ""
  },
  {
    "image": "images/Chink Cartoons.png",
    "alt": "alt Link Cartoons - The legend of Zelda",
    
    "titre": "Chink Cartoons",
    "description": ""
  },
  {
    "image": "images/Chink.png",
    "alt": "alt Link - The legend of Zelda",
    
    "titre": "Chink",
    "description": ""
  },
  {
    "image": "images/Chinnamoroll.png",
    "alt": "alt - Cinnamoroll",
    
    "titre": "Chinnamoroll",
    "description": ""
  },
  {
    "image": "images/Chio.png",
    "alt": "alt Dio - Jojo Bizarre Aventure",
    
    "titre": "Chio",
    "description": ""
  },
  {
    "image": "images/Chira et Chythra.png",
    "alt": "alt Pira et Mythra - Xenoblade Chronicles",
    
    "titre": "Chira et Chythra",
    "description": ""
  },
  {
    "image": "images/Chirbo.png",
    "alt": "alt - Kirby",
    
    "titre": "Chirbo",
    "description": ""
  },
  {
    "image": "images/Chivine.png",
    "alt": "alt Divine - Hollow Knight",
    
    "titre": "Chivine",
    "description": ""
  },
  {
    "image": "images/Chizzik.png",
    "alt": "alt Lizzik - Fornite",
    
    "titre": "Chizzik",
    "description": ""
  },
  {
    "image": "images/Chlaidd.png",
    "alt": "alt Blaidd - Elden Ring",
    
    "titre": "Chlaidd",
    "description": ""
  },
  {
    "image": "images/Chlauneck.png",
    "alt": "alt ??? - Cult of the Lamb",
    
    "titre": "Chlauneck",
    "description": ""
  },
  {
    "image": "images/Chlewbird.png",
    "alt": "alt ??? - Mario Bros",
    
    "titre": "Chlewbird",
    "description": ""
  },
  {
    "image": "images/Chluke Hermit.png",
    "alt": "alt Fluke Hermit - Hollow Knight",
    
    "titre": "Chluke Hermit",
    "description": ""
  },
  {
    "image": "images/Cho Cho.png",
    "alt": "alt Ho-Oh - Pokémon",
    
    "titre": "Cho-Cho",
    "description": ""
  },
  {
    "image": "images/Choald.png",
    "alt": "alt ??? - Animal Crossing",
    
    "titre": "Choald",
    "description": ""
  },
  {
    "image": "images/Chochogro.png",
    "alt": "alt - Totoro",
    
    "titre": "Chochogro",
    "description": ""
  },
  {
    "image": "images/Choeur.png",
    "alt": "alt coeur - Undertale",
    
    "titre": "Choeur",
    "description": ""
  },
  {
    "image": "images/Choker.png",
    "alt": "alt Joker - Persona",
    
    "titre": "Choker",
    "description": ""
  },
  {
    "image": "images/Cholas.png",
    "alt": "alt Stolas - Helluva Boss",
    
    "titre": "Cholas",
    "description": ""
  },
  {
    "image": "images/Chollie.png",
    "alt": "alt ??? - ???",
    
    "titre": "Chollie",
    "description": ""
  },
  {
    "image": "images/Chombre.png",
    "alt": "alt Ombre - Hollow Knight",
    
    "titre": "Chombre",
    "description": ""
  },
  {
    "image": "images/Chomokuma.png",
    "alt": "alt Momokuma - Danganrompa",
    
    "titre": "Chomokuma",
    "description": ""
  },
  {
    "image": "images/Chomori.png",
    "alt": "alt - Omori",
    
    "titre": "Chomori",
    "description": ""
  },
  {
    "image": "images/Chorgana.png",
    "alt": "alt Morgana - Persona",
    
    "titre": "Chorgana",
    "description": ""
  },
  {
    "image": "images/Chori.png",
    "alt": "alt - Ori",
    
    "titre": "Chori",
    "description": ""
  },
  {
    "image": "images/Chornet.png",
    "alt": "alt Hornet - Hollow Knight",
    
    "titre": "Chornet",
    "description": ""
  },
  {
    "image": "images/Chorusto.png",
    "alt": "alt Rorusto - Animal Crossing",
    
    "titre": "Chorusto",
    "description": ""
  },
  {
    "image": "images/Chote.png",
    "alt": "alt Zote - Hollow Knight",
    
    "titre": "Chote",
    "description": ""
  },
  {
    "image": "images/Choudoudou.png",
    "alt": "alt Rondoudou - Pokémon",
    
    "titre": "Choudoudou",
    "description": ""
  },
  {
    "image": "images/Chouge.png",
    "alt": "alt Rouge - Sonic",
    
    "titre": "Chouge",
    "description": ""
  },
  {
    "image": "images/Chounard.png",
    "alt": "alt Rounard - Animal Crossing",
    
    "titre": "Chounard",
    "description": ""
  },
  {
    "image": "images/Chpike.png",
    "alt": "alt Chpike - My Little Pony",
    
    "titre": "Chpike",
    "description": ""
  },
  {
    "image": "images/Chucky.png",
    "alt": "alt Ducky - Smash Legend",
    
    "titre": "Chucky",
    "description": ""
  },
  {
    "image": "images/Chuigi et Choshi.png",
    "alt": "alt Luigi Yoshi - Mario Bros",
    
    "titre": "Chuigi et Choshi",
    "description": ""
  },
  {
    "image": "images/Chullivar.png",
    "alt": "alt Gullivar - Animal Crossing",
    
    "titre": "Chullivar",
    "description": ""
  },
  {
    "image": "images/Chumine.png",
    "alt": "alt Lumine - Genshin Impact",
    
    "titre": "Chumine",
    "description": ""
  },
  {
    "image": "images/Chumper.png",
    "alt": "alt Thumper - Lethal Compagny",
    
    "titre": "Chumper",
    "description": ""
  },
  {
    "image": "images/Chunther.png",
    "alt": "alt Gunther - Adventure Time",
    
    "titre": "Chunther",
    "description": ""
  },
  {
    "image": "images/Churo.png",
    "alt": "alt Puro - Changed",
    
    "titre": "Churo",
    "description": ""
  },
  {
    "image": "images/Chutaba.png",
    "alt": "alt Futaba - Persona",
    
    "titre": "Chutaba",
    "description": ""
  },
  {
    "image": "images/Chutler.png",
    "alt": "alt Butler - Lethal Compagny",
    
    "titre": "Chutler",
    "description": ""
  },
  {
    "image": "images/Chyanja.png",
    "alt": "alt Nyanja - Fornite",
    
    "titre": "Chyanja",
    "description": ""
  },
  {
    "image": "images/Chyuk.png",
    "alt": "alt Ryuk - Death Note",
    
    "titre": "Chyuk",
    "description": ""
  },
  {
    "image": "images/CMO.png",
    "alt": "alt BMO - Adventure Time",
    
    "titre": "CMO",
    "description": ""
  },
  {
    "image": "images/Corvanard.png",
    "alt": "alt Corvus - Fornite",
    
    "titre": "Corvanard",
    "description": ""
  },
  {
    "image": "images/Cult of the Chanard.png",
    "alt": "alt - Cult of the Lamb",
    
    "titre": "Cult of the Chanard",
    "description": ""
  },
  {
    "image": "images/Daddy Crow v. Chanard.png",
    "alt": "alt Crow - Everhood",
    
    "titre": "Daddy Crow v. Chanard",
    "description": ""
  },
  {
    "image": "images/Duo Chanard Hunt.png",
    "alt": "alt - Duo Duck Hunt",
    
    "titre": "Duo Chanard Hunt",
    "description": ""
  },
  {
    "image": "images/Flunnard.png",
    "alt": "alt ??? - Mario Bros",
    
    "titre": "Flunnard",
    "description": ""
  },
  {
    "image": "images/Goro Chakechi.png",
    "alt": "alt Goro Akechi - Persona",
    
    "titre": "Goro Chakechi",
    "description": ""
  },
  {
    "image": "images/Hat in Chanard.png",
    "alt": "alt - Hat in Time",
    
    "titre": "Hat in Chanard",
    "description": ""
  },
  {
    "image": "images/Kranard.png",
    "alt": "alt Kris - Deltarune",
    
    "titre": "Kranard",
    "description": ""
  },
  {
    "image": "images/Chalarve.png",
    "alt": "alt Larve - Hollow Knight",
    
    "titre": "Chalarve",
    "description": ""
  },
  {
    "image": "images/Chalecet.png",
    "alt": "alt Bralecet - Fire Emblem",
    
    "titre": "Chalecet",
    "description": ""
  },
  {
    "image": "images/Chanardeduc.png",
    "alt": "alt Ardeduc - Pokémon",
    
    "titre": "Chanardeduc",
    "description": ""
  },
  {
    "image": "images/Chanolimar.png",
    "alt": "alt Olimar - Pikmin",
    
    "titre": "Chanolimar",
    "description": ""
  },
  {
    "image": "images/Chanoussu.png",
    "alt": "alt Moussue - Hollow Knight",
    
    "titre": "Chanoussu",
    "description": ""
  },
  {
    "image": "images/Chauru.png",
    "alt": "alt Rauru - The legend of Zelda",
    
    "titre": "Chauru",
    "description": ""
  },
  {
    "image": "images/Le Grand, Magnifique, Chanarticho.png",
    "alt": "alt Palarticho - Pokémon",
    
    "titre": "Le Grand, Magnifique, Chanarticho",
    "description": ""
  },
  {
    "image": "images/Violeur n°2.png",
    "alt": "alt Le Collectionneur - Hollow Knight",
    
    "titre": "Violeur n°2",
    "description": ""
  },
  {
    "image": "images/Le Chrisonnier.png",
    "alt": "alt Le Prisonnier - Outer Wilds",
    
    "titre": "Le Chrisonnier",
    "description": ""
  },
  {
    "image": "images/Luchas.png",
    "alt": "alt Lucas - EarthBound",
    
    "titre": "Luchas",
    "description": ""
  },
  {
    "image": "images/Tasse Chanard.png",
    "alt": "alt Tasse Chanard",
    
    "titre": "Tasse Chanard",
    "description": ""
  },
  {
    "image": "images/Maître Chanu.png",
    "alt": "alt Maître Wu - Kungfu Panda",
    
    "titre": "Maître Chanu",
    "description": ""
  },
  {
    "image": "images/Mini Chadam.png",
    "alt": "alt Adam - Hazbin Hotel",
    
    "titre": "Mini Chadam",
    "description": ""
  },
  {
    "image": "images/Monkey D. Chanard.png",
    "alt": "alt Monkey D. Luffy - One Piece",
    
    "titre": "Monkey D. Chanard",
    "description": ""
  },
  {
    "image": "images/Overchanard.png",
    "alt": "alt - Overcooked",
    
    "titre": "Overchanard",
    "description": ""
  },
  {
    "image": "images/Patate Chanard.png",
    "alt": "alt Patate",
    
    "titre": "Patate Chanard",
    "description": ""
  },
  {
    "image": "images/Peter Chaffrin.png",
    "alt": "alt Peter Griffrin - Family Guy",
    
    "titre": "Peter Chaffrin",
    "description": ""
  },
  {
    "image": "images/Peppino Chaghetti.png",
    "alt": "alt Peppino Spaghetti - Pizza Tower",
    
    "titre": "Peppino Chaghetti",
    "description": ""
  },
  {
    "image": "images/Chlumette.png",
    "alt": "alt Plumette",
    
    "titre": "Chlumette",
    "description": ""
  },
  {
    "image": "images/Poichinard.png",
    "alt": "alt Poichigeon - Pokémon",
    
    "titre": "Poichinard",
    "description": ""
  },
  {
    "image": "images/Prof Chanard.png",
    "alt": "alt - Professeur Layton",
    
    "titre": "Prof Chanard",
    "description": ""
  },
  {
    "image": "images/Professeur Charl Tastroff.png",
    "alt": "alt Professeur Karl Tastroff - Luigi Mansion",
    
    "titre": "Professeur Charl Tastroff",
    "description": ""
  },
  {
    "image": "images/Psykochwak.png",
    "alt": "alt Psykokwak - Pokémon",
    
    "titre": "Psykochwak",
    "description": ""
  },
  {
    "image": "images/Chanard Show.png",
    "alt": "alt - Regular Show",
    
    "titre": "Chanard Show",
    "description": ""
  },
  {
    "image": "images/Chevali.png",
    "alt": "alt Revali - The legend of Zelda",
    
    "titre": "Chevali",
    "description": ""
  },
  {
    "image": "images/Roi Charassé.png",
    "alt": "alt Roi Cuirassé - The legend of Zelda",
    
    "titre": "Roi Charassé",
    "description": ""
  },
  {
    "image": "images/Roi des Chlace.png",
    "alt": "alt Roi des Glace - Adventure Time",
    
    "titre": "Roi des Chlace",
    "description": ""
  },
  {
    "image": "images/Roronoa Chorro.png",
    "alt": "alt Roronoa Zorro - One piece",
    
    "titre": "Roronoa Chorro",
    "description": ""
  },
  {
    "image": "images/Ruchanard.png",
    "alt": "alt Budge - Fornite",
    
    "titre": "Chadge",
    "description": ""
  },
  {
    "image": "images/Shun-nard.png",
    "alt": "alt Shun-day - Les Légendaires",
    
    "titre": "Shun-nard",
    "description": ""
  },
  {
    "image": "images/Chlime.png",
    "alt": "alt Slime Chat - Slime Rancher",
    
    "titre": "Chlime",
    "description": ""
  },
  {
    "image": "images/Chanardtrap.png",
    "alt": "alt Chanardtrap - fnaf Five night at Freddy's",
    
    "titre": "Chanardtrap",
    "description": ""
  },
  {
    "image": "images/Sunard.png",
    "alt": "alt Susie - Deltarune",
    
    "titre": "Sunard",
    "description": ""
  },
  {
    "image": "images/The Chatcher.png",
    "alt": "alt The Snatcher - Hat in Time",
    
    "titre": "The Chatcher",
    "description": ""
  },
  {
    "image": "images/Tochanard.png",
    "alt": "alt Tora - Xenoblade Chronicles",
    
    "titre": "Toranard",
    "description": ""
  },
  {
    "image": "images/Trigger Chappy.png",
    "alt": "alt Trigger Happy - Skylanders",
    
    "titre": "Trigger Chappy",
    "description": ""
  },
  {
    "image": "images/Untitled Chanard Game.png",
    "alt": "alt - Untitled Goose Game",
    
    "titre": "Untitled Chanard Game",
    "description": ""
  },
  {
    "image": "images/Woody Woodcherper.png",
    "alt": "alt - Woody Woodpecker",
    
    "titre": "Woody Woodchecker",
    "description": ""
  },
  {
    "image": "images/Zechyr.png",
    "alt": "alt Zephyr - ???",
    
    "titre": "Zechyr",
    "description": ""
  }
]

const _fond = [
  {
    "image": "images/fond_ecran/Chark Knight.png",
    "alt": "alt Dark Knight - Deltarune",
    "titre": "Chark Knight",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chaouette.png",
    "alt": "alt Chouette - Avatar",
    "titre": "Chaouette",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Cheva.png",
    "alt": "alt - Neva",
    "titre": "Cheva",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Amis de Chomori.png",
    "alt": "alt Amis d' Omori",
    "titre": "Amis de Chomori",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chain World.png",
    "alt": "alt - Rain World",
    "titre": "Chain World",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chanard Bad.png",
    "alt": "alt - Breaking Bad",
    "titre": "Chanard Bad",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chanard en Editting.png",
    "alt": "alt - Miitopia",
    "titre": "Chanard en Editting",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Charinder.png",
    "alt": "alt Narinder - Cult of the Lamb",
    "titre": "Charinder",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chauru.png",
    "alt": "alt ??? - Le Chateau Ambulant",
    "titre": "Chauru",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chéleste.png",
    "alt": "alt Céleste - Animal Crossing",
    "titre": "Chéleste",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chiffrin.png",
    "alt": "alt ??? - ???",
    "titre": "Chiffrin",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chikachu Gigacul.png",
    "alt": "alt Pikachu Gigamax - Pokémon",
    "titre": "Chikachu Gigacul",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chisobelle.png",
    "alt": "alt Isabelle - Baldur Gate",
    "titre": "Chisobelle",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chobalt Core.png",
    "alt": "alt Cobalt Core",
    "titre": "Chobalt Core",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chobrey.png",
    "alt": "alt Aubrey - Omori",
    "titre": "Chobrey",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chragon.png",
    "alt": "alt Dragon - Fire Emblem",
    "titre": "Chragon",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chrisk.png",
    "alt": "alt Frisk - Undertale",
    "titre": "Chrisk",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chunard.png",
    "alt": "alt Ku - Ori",
    "titre": "Chunard",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Chuolinguo.png",
    "alt": "alt - Duolingo",
    "titre": "Chuolinguo",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Crownard.png",
    "alt": "alt Corbac Crow - Brawl Star",
    "titre": "Chorbac",
    "description": ""
  },
  {
    "image": "images/fond_ecran/David Goodchenough.png",
    "alt": "alt David Goodenough",
    "titre": "David Goodchenough",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Digital Charcus.png",
    "alt": "alt - Digital Circus",
    "titre": "Digital Charcus",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Eminence Of Shadow, Chanard.png",
    "alt": "alt - Eminence Of Shadow",
    "titre": "Eminence Of Shadow, Chanard",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Five Night At Chanard.png",
    "alt": "alt Five Night At Freddy",
    "titre": "Five Night At Chanard",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Good Confident.png",
    "alt": "alt Good Confident - Persona",
    "titre": "Good Confident",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Hollow Chight.png",
    "alt": "alt - Hollow Knight",
    "titre": "Hollow Chight",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Jenard.png",
    "alt": "alt Jevil - Deltarune",
    "titre": "Jenard",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Just Chonika.png",
    "alt": "alt Monika - ddlc Doki Doki Littérature Club",
    "titre": "Just Chonika",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Photo de famille.png",
    "alt": "alt - Fire Emblem",
    "titre": "Photo de famille",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Roi Chumkasaure.png",
    "alt": "alt Roi Yumkasaurus - Genshin Impact",
    "titre": "Roi Chumkasaure",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Le Violeur.png",
    "alt": "alt Leshy - Inscryption",
    "titre": "Le Violeur",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Night in the Chanard.png",
    "alt": "alt - Night in the Wood",
    "titre": "Night in the Chanard",
    "description": ""
  },
  {
    "image": "images/fond_ecran/Choleil.png",
    "alt": "alt Soleil - Teletubbies",
    "titre": "Choleil",
    "description": ""
  },
  {
    "image": "images/fond_ecran/The Stone Chanard Witch.png",
    "alt": "alt The Stone Witch - Islets",
    "titre": "The Stone Chanard Witch",
    "description": ""
  }
]

/* Démarre le JSON pour l'application automatisé des images */

//dessin.json
/*
fetch('_dessin.json')
    .then(response => response.json())
    .then(_dessin => {
*/
        _dessin.forEach(item => {
            const img = document.createElement('img');
            img.src = `${item.image}`;
            img.alt = `${item.alt}`;
        /*
            if (img.naturalWidth + img.naturalHeight < 1000) {
                img.classList.add("lowQuality");
            }
        */
            img.classList.add("smallThumb");
            dessin.appendChild(img);
            img.onload = () => {
                if (img.naturalWidth > img.naturalHeight) {
                    img.classList.add("largeur");
                }
                else {
                    img.classList.add("hauteur");
                }
            }
            console.log("spawn dessin ", `${item.image}`, " / largeur : ", img.naturalWidth, " / hauteur : ", img.naturalHeight);
        });
/*
    });
*/

//montage.json
/*
fetch('_montage.json')
    .then(response => response.json())
    .then(_montage => {
*/
        _montage.forEach(item => {
            const img = document.createElement('img');
            img.src = `${item.image}`;
            img.alt = `${item.alt}`;
        /*
            if (img.naturalWidth + img.naturalHeight < 1000) {
                img.classList.add("lowQuality");
            }
        */
            img.classList.add("smallThumb");
            montage.appendChild(img);
            img.onload = () => {
                if (img.naturalWidth > img.naturalHeight) {
                    img.classList.add("largeur");
                }
                else {
                    img.classList.add("hauteur");
                }
            }
            console.log("spawn montage ", `${item.image}`, " / largeur : ", img.naturalWidth, " / hauteur : ", img.naturalHeight);
        });
/*
    });
*/


//fond.json
/*
fetch('_fond.json')
    .then(response => response.json())
    .then(_fond => {
*/
        _fond.forEach(item => {
            const img = document.createElement('img');
            img.src = `${item.image}`;
            img.alt = `${item.alt}`;
            img.classList.add("smallThumb");
            fond.appendChild(img);
            img.onload = () => {
                if (img.naturalWidth > img.naturalHeight) {
                    img.classList.add("largeur");
                }
                else {
                    img.classList.add("hauteur");
                }
            }
            console.log("spawn fond ", `${item.image}`, " / largeur : ", img.Width, " / hauteur : ", img.Height);
        });
/*
    });
*/


const thumbnails = document.querySelectorAll(".smallThumb");
const favNone = document.querySelectorAll(".favNone");
const description = document.querySelector(".description")
const fond_noir_desc = document.querySelector(".fond_noir_desc")

let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
const data = _dessin.concat(_montage).concat(_fond);


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

        data.forEach(item => {
            if (nomFichier == nameFichier(`${item.image}`)) {
                title_desc.textContent = `${item.titre}`;
                desc.textContent = `${item.description}`;
            }
        });

        var width = window.innerWidth;
        if ((!smallThumb.closest(".grid4")) && (width >= tailleTel)) {
            description.style.transform = "translateX(0) translateY(5vh)";
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