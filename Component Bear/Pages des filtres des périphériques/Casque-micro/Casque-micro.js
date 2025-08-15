const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const SFFilter = document.querySelector("#SFFilter");
const CDVFilter = document.querySelector("#CDVFilter");
const searchBar = document.querySelector("#searchBar");
const productImage = document.querySelector(".col-span-3 img");
const productTitle = document.querySelector(".col-span-3 h2");
const productDescription = document.querySelector(".col-span-3 p");
const productCount = document.querySelector("#productCount");

const errorMessage = document.createElement("p");
errorMessage.textContent = "Aucun produit ne correspond aux filtres sélectionnés.";
errorMessage.style.color = "red";
errorMessage.style.textAlign = "center";
errorMessage.style.marginTop = "20px";

const productData = [
    {
        name: "Acer Predator Galea 550 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Acer/Acer Predator Galea 550 (Noir).jpg",
        description: "Casque gaming Acer Predator Galea 550 avec micro intégré, son surround 7.1, et éclairage RGB.",
        price: 199,
        rating: 4,
        brand: "ACER",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "AceZone A-Spire",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Acezone/AceZone A-Spire.jpg",
        description: "Casque gaming AceZone A-Spire avec micro détachable, son surround 7.1, et design ergonomique.",
        price: 249,
        rating: 5,
        brand: "AZ",
        SF: "OUI",
        CDV: "OUI",
        availability: "orange",
    },
    {
        name: "Antlion Kimura Duo",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/AntLion Audio/Antlion Kimura Duo.jpg",
        description: "Microphone Antlion Kimura Duo pour streamers et gamers, qualité studio et fixation flexible.",
        price: 99,
        rating: 4,
        brand: "AA",
        SF: "OUI",
        CDV: "OUI",
        availability: "red",
    },
    {
        name: "Antlion Kimura Solo",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/AntLion Audio/Antlion Kimura Solo.jpg",
        description: "Microphone Antlion Kimura Solo pour streamers et gamers, qualité studio et fixation flexible.",
        price: 79,
        rating: 4,
        brand: "AA",
        SF: "OUI",
        CDV: "OUI",
        availability: "blue",
    },
    {
        name: "Astro A10 Gris (2e Génération)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A10 Gris (2e Génération).jpg",
        description: "Casque gaming Astro A10 avec micro intégré, compatible avec PC, PS4, Xbox One, et Nintendo Switch.",
        price: 59,
        rating: 4,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Astro A10 GrisBleu",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A10 GrisBleu (PCMacXbox OnePlayStation 4SwitchMobiles).jpg",
        description: "Casque gaming Astro A10 GrisBleu avec micro intégré, compatible avec PC, PS4, Xbox One, et Nintendo Switch.",
        price: 59,
        rating: 4,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Astro A10 GrisRouge",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A10 GrisRouge (PCMacXbox OnePlayStation 4SwitchMobiles).jpg",
        description: "Casque gaming Astro A10 GrisRouge avec micro intégré, compatible avec PC, PS4, Xbox One, et Nintendo Switch.",
        price: 59,
        rating: 4,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Astro A10 Xbox Noir (2e Génération)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A10 Xbox Noir (2e Génération).jpg",
        description: "Casque gaming Astro A10 Xbox Noir avec micro intégré, compatible avec Xbox One, PC, et PS4.",
        price: 59,
        rating: 4,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Astro A40 + MixAmp Pro (PS4&PC)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A40 + MixAmp Pro (PS4&PC).jpg",
        description: "Casque gaming Astro A40 avec MixAmp Pro pour PS4 et PC, son surround Dolby 7.1 et micro détachable.",
        price: 249,
        rating: 5,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Astro A40 + MixAmp Pro (PS4)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A40 + MixAmp Pro (PS4).jpg",
        description: "Casque gaming Astro A40 avec MixAmp Pro pour PS4, son surround Dolby 7.1 et micro détachable.",
        price: 249,
        rating: 5,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Astro A50 + Station d'accueil (Xbox One&PC)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A50 + Station d'accueil (Xbox One&PC).jpg",
        description: "Casque gaming Astro A50 sans fil avec station d'accueil pour Xbox One et PC, son surround Dolby 7.1.",
        price: 299,
        rating: 5,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Astro A50 Wireless Noir + Base Station (PCMacPS4PS5)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Astro/Astro A50 Wireless Noir + Base Station (PCMacPS4PS5).jpg",
        description: "Casque gaming Astro A50 sans fil avec base station pour PC, Mac, PS4, et PS5, son surround Dolby 7.1.",
        price: 299,
        rating: 5,
        brand: "Astro",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS ROG Delta II Noir",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS ROG Delta II Noir.jpg",
        description: "Casque gaming ASUS ROG Delta II avec son Hi-Res Audio, éclairage RGB, et micro détachable.",
        price: 179,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS ROG Delta S (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS ROG Delta S (Noir).jpg",
        description: "Casque gaming ASUS ROG Delta S avec son Hi-Res Audio, éclairage RGB, et micro détachable.",
        price: 159,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS ROG Delta S Core (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS ROG Delta S Core (Noir).jpg",
        description: "Casque gaming ASUS ROG Delta S Core avec son Hi-Res Audio, éclairage RGB, et micro détachable.",
        price: 129,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS ROG Delta S Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS ROG Delta S Wireless (Noir).jpg",
        description: "Casque gaming ASUS ROG Delta S sans fil avec son Hi-Res Audio, éclairage RGB, et micro détachable.",
        price: 199,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS ROG Fusion II 500",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS ROG Fusion II 500.jpg",
        description: "Casque gaming ASUS ROG Fusion II 500 avec son surround 7.1, éclairage RGB, et micro détachable.",
        price: 149,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS ROG Pelta",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS ROG Pelta.jpg",
        description: "Casque gaming ASUS ROG Pelta avec son surround 7.1, éclairage RGB, et micro détachable.",
        price: 99,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS ROG Theta 7.1",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS ROG Theta 7.1.jpg",
        description: "Casque gaming ASUS ROG Theta 7.1 avec son surround 7.1, éclairage RGB, et micro détachable.",
        price: 199,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS TUF Gaming H1 Gen II",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS TUF Gaming H1 Gen II.jpg",
        description: "Casque gaming ASUS TUF Gaming H1 Gen II avec son surround 7.1, éclairage RGB, et micro détachable.",
        price: 79,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "ASUS TUF Gaming H3 (Gris)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/ASUS/ASUS TUF Gaming H3 (Gris).jpg",
        description: "Casque gaming ASUS TUF Gaming H3 avec son surround 7.1, éclairage RGB, et micro détachable.",
        price: 69,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair Gaming VOID RGB ELITE Wireless (blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair Gaming VOID RGB ELITE Wireless (blanc).jpg",
        description: "Casque gaming Corsair VOID RGB ELITE sans fil, son surround 7.1, éclairage RGB, et micro détachable.",
        price: 129,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS35 v2 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS35 v2 (Noir).jpg",
        description: "Casque gaming Corsair HS35 v2 avec micro intégré, son stéréo, et design léger et confortable.",
        price: 49,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS55 Stéréo (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS55 Stéréo (Blanc).jpg",
        description: "Casque gaming Corsair HS55 Stéréo avec micro détachable, son stéréo, et design élégant en blanc.",
        price: 59,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS55 Stéréo (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS55 Stéréo (Noir).jpg",
        description: "Casque gaming Corsair HS55 Stéréo avec micro détachable, son stéréo, et design sobre en noir.",
        price: 59,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS55 Surround (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS55 Surround (Blanc).jpg",
        description: "Casque gaming Corsair HS55 Surround avec son surround 7.1, micro détachable, et design en blanc.",
        price: 69,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS55 Wireless (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS55 Wireless (Blanc).jpg",
        description: "Casque gaming Corsair HS55 sans fil avec son surround 7.1, micro détachable, et design en blanc.",
        price: 99,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS55 Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS55 Wireless (Noir).jpg",
        description: "Casque gaming Corsair HS55 sans fil avec son surround 7.1, micro détachable, et design en noir.",
        price: 99,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS65 (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS65 (Blanc).jpg",
        description: "Casque gaming Corsair HS65 avec son surround 7.1, micro détachable, et design élégant en blanc.",
        price: 79,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS65 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS65 (Noir).jpg",
        description: "Casque gaming Corsair HS65 avec son surround 7.1, micro détachable, et design sobre en noir.",
        price: 79,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS65 Wireless v2 (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS65 Wireless v2 (Blanc).jpg",
        description: "Casque gaming Corsair HS65 sans fil avec son surround 7.1, micro détachable, et design en blanc.",
        price: 129,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS65 Wireless v2 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS65 Wireless v2 (Noir).jpg",
        description: "Casque gaming Corsair HS65 sans fil avec son surround 7.1, micro détachable, et design en noir.",
        price: 129,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS80 Max Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS80 Max Wireless (Noir).jpg",
        description: "Casque gaming Corsair HS80 Max sans fil avec son Hi-Res Audio, micro détachable, et design en noir.",
        price: 199,
        rating: 5,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS80 RGB USB (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS80 RGB USB (Blanc).jpg",
        description: "Casque gaming Corsair HS80 RGB USB avec son Hi-Res Audio, micro détachable, et design en blanc.",
        price: 149,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS80 RGB USB (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS80 RGB USB (Noir).jpg",
        description: "Casque gaming Corsair HS80 RGB USB avec son Hi-Res Audio, micro détachable, et design en noir.",
        price: 149,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS80 RGB Wireless (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS80 RGB Wireless (Blanc).jpg",
        description: "Casque gaming Corsair HS80 RGB sans fil avec son Hi-Res Audio, micro détachable, et design en blanc.",
        price: 179,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair HS80 RGB Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair HS80 RGB Wireless (Noir).jpg",
        description: "Casque gaming Corsair HS80 RGB sans fil avec son Hi-Res Audio, micro détachable, et design en noir.",
        price: 179,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair Virtuoso Pro (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair Virtuoso Pro (Blanc).jpg",
        description: "Casque gaming Corsair Virtuoso Pro avec son Hi-Res Audio, micro détachable, et design en blanc.",
        price: 249,
        rating: 5,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Corsair Virtuoso Pro (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Corsair/Corsair Virtuoso Pro (Noir).jpg",
        description: "Casque gaming Corsair Virtuoso Pro avec son Hi-Res Audio, micro détachable, et design en noir.",
        price: 249,
        rating: 5,
        brand: "Corsair",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum 100 Bleu",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum 100 Bleu.jpg",
        description: "Casque gaming JBL Quantum 100 avec micro intégré, son stéréo, et design confortable en bleu.",
        price: 39,
        rating: 4,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum 100 Noir",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum 100 Noir.jpg",
        description: "Casque gaming JBL Quantum 100 avec micro intégré, son stéréo, et design sobre en noir.",
        price: 39,
        rating: 4,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum 200 Noir",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum 200 Noir.jpg",
        description: "Casque gaming JBL Quantum 200 avec micro intégré, son surround, et design confortable en noir.",
        price: 59,
        rating: 4,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum 400 Noir",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum 400 Noir.jpg",
        description: "Casque gaming JBL Quantum 400 avec micro intégré, son surround, et design confortable en noir.",
        price: 99,
        rating: 4,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum 810 Wireless",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum 810 Wireless.jpg",
        description: "Casque gaming JBL Quantum 810 sans fil avec son surround, micro intégré, et design confortable.",
        price: 149,
        rating: 4,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum 910P Wireless",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum 910P Wireless for PlayStation&PC.jpg",
        description: "Casque gaming JBL Quantum 910P sans fil avec son surround, micro intégré, et design confortable.",
        price: 199,
        rating: 5,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum 910X Wireless",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum 910X Wireless for XBOX&PC.jpg",
        description: "Casque gaming JBL Quantum 910X sans fil avec son surround, micro intégré, et design confortable.",
        price: 199,
        rating: 5,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "JBL Quantum ONE Noir",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/JBL/JBL Quantum ONE Noir.jpg",
        description: "Casque gaming JBL Quantum ONE avec son Hi-Res Audio, micro intégré, et design haut de gamme en noir.",
        price: 299,
        rating: 5,
        brand: "JBL",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Astro A30 Blanc",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Astro A30 Blanc (PCPlayStationMobiles).jpg",
        description: "Casque gaming Logitech G Astro A30 avec son surround, micro intégré, et design élégant en blanc.",
        price: 149,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Astro A30 Blanc",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Astro A30 Blanc (PCXboxMobiles).jpg",
        description: "Casque gaming Logitech G Astro A30 avec son surround, micro intégré, et design élégant en blanc.",
        price: 149,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Astro A30 Bleu Marine",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Astro A30 Bleu Marine (PCPlayStationMobiles).jpg",
        description: "Casque gaming Logitech G Astro A30 avec son surround, micro intégré, et design en bleu marine.",
        price: 149,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Astro A30 Bleu Marine",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Astro A30 Bleu Marine (PCXboxMobiles).jpg",
        description: "Casque gaming Logitech G Astro A30 avec son surround, micro intégré, et design en bleu marine.",
        price: 149,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G G432",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G G432.jpg",
        description: "Casque gaming Logitech G G432 avec son surround 7.1, micro intégré, et design confortable.",
        price: 79,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G G435 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G G435 (Noir).jpg",
        description: "Casque gaming Logitech G G435 sans fil avec son stéréo, micro intégré, et design léger en noir.",
        price: 99,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G G733 Lightspeed (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G G733 Lightspeed (Blanc).jpg",
        description: "Casque gaming Logitech G G733 Lightspeed sans fil avec éclairage RGB, micro intégré, et design en blanc.",
        price: 149,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G G733 Lightspeed (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G G733 Lightspeed (Noir).jpg",
        description: "Casque gaming Logitech G G733 Lightspeed sans fil avec éclairage RGB, micro intégré, et design en noir.",
        price: 149,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Pro X 2 Lightspeed (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Pro X 2 Lightspeed (Blanc).jpg",
        description: "Casque gaming Logitech G Pro X 2 Lightspeed sans fil avec son Hi-Res Audio, micro détachable, et design en blanc.",
        price: 249,
        rating: 5,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Pro X 2 Lightspeed (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Pro X 2 Lightspeed (Noir).jpg",
        description: "Casque gaming Logitech G Pro X 2 Lightspeed sans fil avec son Hi-Res Audio, micro détachable, et design en noir.",
        price: 249,
        rating: 5,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Pro X Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Pro X Gaming Headset (Noir).jpg",
        description: "Casque gaming Logitech G Pro X avec son Hi-Res Audio, micro détachable, et design professionnel en noir.",
        price: 129,
        rating: 4,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G Pro X Wireless Lightspeed Gaming Headset (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Logitech G/Logitech G Pro X Wireless Lightspeed Gaming Headset (Noir).jpg",
        description: "Casque gaming Logitech G Pro X sans fil avec son Hi-Res Audio, micro détachable, et design professionnel en noir.",
        price: 199,
        rating: 5,
        brand: "G",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Barracuda (Mercury)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Barracuda (Mercury).jpg",
        description: "Casque gaming Razer Barracuda avec son surround, micro intégré, et design élégant en mercure.",
        price: 149,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Barracuda (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Barracuda (Noir).jpg",
        description: "Casque gaming Razer Barracuda avec son surround, micro intégré, et design sobre en noir.",
        price: 149,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Barracuda X 2022 (Mercury)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Barracuda X 2022 (Mercury).jpg",
        description: "Casque gaming Razer Barracuda X 2022 avec son surround, micro intégré, et design en mercure.",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Barracuda X 2022 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Barracuda X 2022 (Noir).jpg",
        description: "Casque gaming Razer Barracuda X 2022 avec son surround, micro intégré, et design en noir.",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Barracuda X Chroma (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Barracuda X Chroma (Noir).jpg",
        description: "Casque gaming Razer Barracuda X Chroma avec éclairage RGB, micro intégré, et design en noir.",
        price: 129,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 HyperSpeed (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 HyperSpeed (Blanc).jpg",
        description: "Casque gaming Razer Blackshark V2 HyperSpeed sans fil avec son surround, micro intégré, et design en blanc.",
        price: 179,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 HyperSpeed (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 HyperSpeed (Noir).jpg",
        description: "Casque gaming Razer Blackshark V2 HyperSpeed sans fil avec son surround, micro intégré, et design en noir.",
        price: 179,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 Pro 2023 (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 Pro 2023 (Blanc).jpg",
        description: "Casque gaming Razer Blackshark V2 Pro 2023 sans fil avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 199,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 Pro 2023 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 Pro 2023 (Noir).jpg",
        description: "Casque gaming Razer Blackshark V2 Pro 2023 sans fil avec son Hi-Res Audio, micro intégré, et design en noir.",
        price: 199,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 Pro for PlayStation (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 Pro for PlayStation (Blanc).jpg",
        description: "Casque gaming Razer Blackshark V2 Pro sans fil avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 199,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 Pro for PlayStation (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 Pro for PlayStation (Noir).jpg",
        description: "Casque gaming Razer Blackshark V2 Pro sans fil avec son Hi-Res Audio, micro intégré, et design en noir.",
        price: 199,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 Pro for Xbox (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 Pro for Xbox (Blanc).jpg",
        description: "Casque gaming Razer Blackshark V2 Pro sans fil avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 199,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 X USB (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 X USB (Noir).jpg",
        description: "Casque gaming Razer Blackshark V2 X avec son surround, micro intégré, et design en noir.",
        price: 79,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 X for PlayStation (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 X for PlayStation (Noir).jpg",
        description: "Casque gaming Razer Blackshark V2 X avec son surround, micro intégré, et design en noir.",
        price: 79,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Blackshark V2 X for Xbox (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Blackshark V2 X for Xbox (Noir).jpg",
        description: "Casque gaming Razer Blackshark V2 X avec son surround, micro intégré, et design en noir.",
        price: 79,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Kraken X Lite",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Kraken X Lite.jpg",
        description: "Casque gaming Razer Kraken X Lite avec son stéréo, micro intégré, et design léger.",
        price: 49,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Kraken v3 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Kraken v3 (Noir).jpg",
        description: "Casque gaming Razer Kraken v3 avec son surround, micro intégré, et design confortable en noir.",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Kraken v3 X (Fortnite Edition)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Kraken v3 X (Fortnite Edition).jpg",
        description: "Casque gaming Razer Kraken v3 X édition Fortnite avec son surround, micro intégré, et design spécial.",
        price: 79,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Kraken v3 X USB (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Kraken v3 X USB (Noir).jpg",
        description: "Casque gaming Razer Kraken v3 X avec son surround, micro intégré, et design en noir.",
        price: 79,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Kraken v4 Pro (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Kraken v4 Pro (Noir).jpg",
        description: "Casque gaming Razer Kraken v4 Pro avec son Hi-Res Audio, micro intégré, et design professionnel en noir.",
        price: 149,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Kraken v4 X",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Kraken v4 X.jpg",
        description: "Casque gaming Razer Kraken v4 X avec son surround, micro intégré, et design confortable.",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "Razer Kraken v4",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/Razer/Razer Kraken v4.jpg",
        description: "Casque gaming Razer Kraken v4 avec son surround, micro intégré, et design confortable.",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 1 (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 1 (Blanc).jpg",
        description: "Casque gaming avec micro intégré, son surround, et design confortable.",
        price: 59,
        rating: 4,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 1 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 1 (Noir).jpg",
        description: "Casque gaming avec micro intégré, son surround, et design confortable.",
        price: 59,
        rating: 4,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 3 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 3 (Noir).jpg",
        description: "Casque gaming avec son surround, RGB personnalisable, et micro détachable.",
        price: 99,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "orange",
    },
    {
        name: "SteelSeries Arctis Nova 5 (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5 (Blanc).jpg",
        description: "Casque gaming sans fil avec son surround, RGB, et autonomie longue durée.",
        price: 149,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5 Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5 Wireless (Noir).jpg",
        description: "Casque gaming sans fil avec son surround, RGB, et autonomie longue durée.",
        price: 149,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5P (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5P (Blanc).jpg",
        description: "Casque gaming sans fil compatible PS5, son surround, et RGB personnalisable.",
        price: 159,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "blue",
    },
    {
        name: "SteelSeries Arctis Nova 5P (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5P (Noir).jpg",
        description: "Casque gaming sans fil compatible PS5, son surround, et RGB personnalisable.",
        price: 159,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "blue",
    },
    {
        name: "SteelSeries Arctis Nova 5X (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5X (Blanc).jpg",
        description: "Casque gaming sans fil compatible Xbox, son surround, et RGB personnalisable.",
        price: 159,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5X (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5X (Noir).jpg",
        description: "Casque gaming sans fil compatible Xbox, son surround, et RGB personnalisable.",
        price: 159,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 7 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 7 (Noir).jpg",
        description: "Casque gaming sans fil haut de gamme, son surround, et autonomie longue durée.",
        price: 199,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 7X (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 7X (Blanc).jpg",
        description: "Casque gaming sans fil compatible Xbox, son surround, et autonomie longue durée.",
        price: 199,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless (Blanc).jpg",
        description: "Casque gaming sans fil haut de gamme avec station de charge, son surround, et micro détachable.",
        price: 349,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless P (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless P (Blanc).jpg",
        description: "Casque gaming sans fil compatible PS5 avec station de charge, son surround, et micro détachable.",
        price: 349,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless X (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless X (Blanc).jpg",
        description: "Casque gaming sans fil compatible Xbox avec station de charge, son surround, et micro détachable.",
        price: 349,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless X (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless X (Noir).jpg",
        description: "Casque gaming sans fil compatible Xbox avec station de charge, son surround, et micro détachable.",
        price: 349,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Prime (noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Prime (noir).jpg",
        description: "Casque gaming filaire avec son surround, micro détachable, et design confortable.",
        price: 89,
        rating: 4,
        brand: "SteelSeries",
        SF: "NON",
        CDV: "OUI",
        availability: "black",
    },
    {
        name: "SteelSeries Arctis Nova 1 (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 1 (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 1 avec son stéréo, micro intégré, et design confortable en blanc.",
        price: 69,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 1 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 1 (Noir).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 1 avec son stéréo, micro intégré, et design sobre en noir.",
        price: 69,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 3 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 3 (Noir).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 3 avec son surround, micro intégré, et design élégant en noir.",
        price: 99,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5 (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5 (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 5 avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 129,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5 Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5 Wireless (Noir).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 5 sans fil avec son Hi-Res Audio, micro intégré, et design en noir.",
        price: 149,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5P (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5P (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 5P avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 129,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5P (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5P (Noir).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 5P avec son Hi-Res Audio, micro intégré, et design en noir.",
        price: 129,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5X (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5X (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 5X avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 129,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 5X (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 5X (Noir).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 5X avec son Hi-Res Audio, micro intégré, et design en noir.",
        price: 129,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 7 (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 7 (Noir).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 7 avec son Hi-Res Audio, micro intégré, et design élégant en noir.",
        price: 179,
        rating: 5,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova 7X (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova 7X (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova 7X avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 179,
        rating: 5,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova Pro sans fil avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 349,
        rating: 5,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless P (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless P (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova Pro sans fil pour PlayStation avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 349,
        rating: 5,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless X (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless X (Blanc).jpg",
        description: "Casque gaming SteelSeries Arctis Nova Pro sans fil pour Xbox avec son Hi-Res Audio, micro intégré, et design en blanc.",
        price: 349,
        rating: 5,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Nova Pro Wireless X (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Nova Pro Wireless X (Noir).jpg",
        description: "Casque gaming SteelSeries Arctis Nova Pro sans fil pour Xbox avec son Hi-Res Audio, micro intégré, et design en noir.",
        price: 349,
        rating: 5,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries Arctis Prime (noir)",
        image: "/Website Beta/IMAGES/images périphériques/Casque-micro/SteelSeries/SteelSeries Arctis Prime (noir).jpg",
        description: "Casque gaming SteelSeries Arctis Prime avec son Hi-Res Audio, micro intégré, et design professionnel en noir.",
        price: 99,
        rating: 4,
        brand: "SS",
        SF: "OUI",
        CDV: "OUI",
        availability: "green",
    },
];

let sortOrder = {
    rating: 1,
    price: 1,
    availability: 1
};

function applyFiltersAndSort() {
    let filteredData = productData.filter(product => {
        const matchesBrand = !brandFilter.value || product.brand === brandFilter.value;
        const matchesSF = !SFFilter.value || product.SF === SFFilter.value;
        const matchesCDV = !CDVFilter.value || product.CDV === CDVFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesSF && matchesCDV && matchesSearch;
    });

    const headerClicked = Array.from(headers).find(h => h.classList.contains("sorted"));
    if (headerClicked) {
        const index = Array.from(headers).indexOf(headerClicked);
        if (index === 2) {
            filteredData.sort((a, b) => sortOrder.rating * (a.rating - b.rating));
        } else if (index === 3) {
            filteredData.sort((a, b) => sortOrder.price * (a.price - b.price));
        } else if (index === 4) {
            filteredData.sort((a, b) => sortOrder.availability * (a.availability.localeCompare(b.availability)));
        }
    }

    renderTable(filteredData);
    updateProductCount(filteredData.length);

    if (filteredData.length === 0) {
        tableBody.innerHTML = "";
        tableBody.parentNode.appendChild(errorMessage);
        productImage.src = "/Website Beta/IMAGES/Image complémentaires/Interdiction.jpg";
        productTitle.textContent = "";
        productDescription.textContent = "";
    } else {
        if (errorMessage.parentNode) {
            errorMessage.parentNode.removeChild(errorMessage);
        }
    }
}

function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(product => {
        const row = `
            <tr class="border-t">
                <td class="p-3">
                    <input type="checkbox" class="mr-2">${product.name}
                </td>
                <td class="p-3"></td>
                <td class="p-3">
                    <div class="star-rating" data-rating="${product.rating}">
                        ${renderStars(product.rating)}
                    </div>
                </td>
                <td class="p-3 price">${product.price.toFixed(2)}€</td>
                <td class="p-3">${getAvailabilityBadge(product.availability)}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML("beforeend", row);
    });
}

function updateProductCount(count) {
    productCount.textContent = `(${count})`;
}

function initializeTable() {
    const sortedData = [...productData].sort((a, b) => a.name.localeCompare(b.name));
    renderTable(sortedData);
    updateProductCount(sortedData.length);
}

initializeTable();

[brandFilter, SFFilter, CDVFilter, searchBar].forEach(filter => {
    filter.addEventListener("input", applyFiltersAndSort);
});

headers.forEach((header, index) => {
    if (index === 2 || index === 3 || index === 4) {
        header.addEventListener("click", () => {
            headers.forEach(h => h.classList.remove("sorted"));
            header.classList.add("sorted");
            if (index === 2) {
                sortOrder.rating *= -1;
            } else if (index === 3) {
                sortOrder.price *= -1;
            } else if (index === 4) {
                sortOrder.availability *= -1;
            }
            updateSortArrow(header);
            applyFiltersAndSort();
        });
    }
});

function updateSortArrow(header) {
    headers.forEach(h => {
        if (h === header) {
            const index = Array.from(headers).indexOf(header);
            const order =
                (index === 2 && sortOrder.rating === 1) ||
                (index === 3 && sortOrder.price === 1) ||
                (index === 4 && sortOrder.availability === 1)
                    ? " \u25B2"
                    : " \u25BC";
            h.textContent = h.textContent.replace(/[\u25B2\u25BC]/g, "") + order;
        } else if (h.classList.contains("cursor-pointer")) {
            h.textContent = h.textContent.replace(/[\u25B2\u25BC]/g, "");
        }
    });
}

function getAvailabilityBadge(availability) {
    const availabilityMap = {
        green: { class: "availability-green", label: "Disponible" },
        red: { class: "availability-red", label: "Indisponible" },
        orange: { class: "availability-orange", label: "Peu de stock" },
        blue: { class: "availability-blue", label: "Bientôt disponible" },
        black: { class: "availability-black", label: "Fin de série" },
    };

    const { class: className, label } = availabilityMap[availability] || { class: "availability-gray", label: "Inconnu" };

    return `
        <span class="availability-badge ${className}" title="${label}">●</span>
    `;
}

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push('<span class="star filled">&#9733;</span>');
        } else if (i - 0.5 === rating) {
            stars.push('<span class="star half-filled">&#9733;</span>');
        } else {
            stars.push('<span class="star">&#9733;</span>');
        }
    }
    return stars.join("");
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("star")) {
        const starRating = e.target.closest(".star-rating");
        const ratingValue = parseFloat(e.target.getAttribute("data-value"));
        starRating.setAttribute("data-rating", ratingValue);

        const stars = starRating.querySelectorAll(".star");
        stars.forEach((star, index) => {
            if (index + 1 <= ratingValue) {
                star.classList.add("filled");
                star.classList.remove("half-filled");
            } else if (index + 0.5 === ratingValue) {
                star.classList.add("half-filled");
                star.classList.remove("filled");
            } else {
                star.classList.remove("filled", "half-filled");
            }
        });
    }
});

tableBody.addEventListener("mouseover", (e) => {
    const row = e.target.closest("tr");
    if (row) {
        const productName = row.querySelector("td:first-child").textContent.trim();
        const product = productData.find(p => p.name === productName);

        if (product) {
            productImage.src = product.image;
            productTitle.textContent = product.name;
            productDescription.textContent = product.description;
        }
    }
});

validateButton.addEventListener("click", () => {
    const selectedProducts = [];
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']:checked");

    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr");
        const productName = row.querySelector("td:first-child").textContent.trim();
        const productPrice = row.querySelector(".price").textContent.trim();
        selectedProducts.push({ name: productName, price: productPrice });
    });

    if (selectedProducts.length > 0) {
        localStorage.setItem("selectedCasqueMicro", JSON.stringify(selectedProducts));
        window.location.href = "/Website Beta/Page principale/Configurateur PC.html";
    } else {
        alert("Veuillez sélectionner un casque-micro avant de valider.");
    }
});