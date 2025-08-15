const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const TDRFilter = document.querySelector("#TDRFilter");
const RGBFilter = document.querySelector("#RGBFilter");
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
        name: "ASUS Ryujin III 360 ARGB Extreme",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS Ryujin III 360 ARGB Extreme.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec écran LCD, pompe à eau, radiateur 360 mm et ventilateurs ARGB pour une dissipation thermique optimale.",
        price: 399,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "red"
    },
    {
        name: "Aerocool Cylon 4 avec fixations LGA1700",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/AeroCool/Aerocool Cylon 4 avec fixations LGA1700.jpg",
        description: "Ventirad avec ventilateur ARGB, compatible avec les sockets Intel et AMD, idéal pour les configurations gaming.",
        price: 49,
        rating: 3,
        brand: "Aerocool",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "black"
    },
    {
        name: "Akasa AK-CC7122BP01",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Akasa/Akasa AK-CC7122BP01.jpg",
        description: "Ventirad compact et silencieux, compatible avec les processeurs Intel et AMD.",
        price: 29,
        rating: 4,
        brand: "Akasa",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Antec A30 Pro",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Antec/Antec A30 Pro.jpg",
        description: "Ventirad économique avec ventilateur PWM pour un refroidissement efficace des processeurs.",
        price: 19,
        rating: 3,
        brand: "Antec",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Antec FrigusAir 400 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Antec/Antec FrigusAir 400 ARGB.jpg",
        description: "Ventirad ARGB avec ventilateur PWM pour un refroidissement performant et esthétique.",
        price: 45,
        rating: 4,
        brand: "Antec",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Antec Symphony 240 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Antec/Antec Symphony 240 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 89,
        rating: 4,
        brand: "Antec",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Antec Symphony 360 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Antec/Antec Symphony 360 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "Antec",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Antec Vortex 240 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Antec/Antec Vortex 240 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 79,
        rating: 4,
        brand: "Antec",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Antec Vortex 360 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Antec/Antec Vortex 360 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "Antec",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Alpine 23 CO",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Alpine 23 CO.jpg",
        description: "Ventirad compact et silencieux pour les configurations basse consommation.",
        price: 15,
        rating: 3,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Alpine 23",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Alpine 23.jpg",
        description: "Ventirad économique pour les configurations basse consommation.",
        price: 12,
        rating: 3,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 34 eSports DUO (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 34 eSports DUO (Blanc).jpg",
        description: "Ventirad performant avec double ventilateur pour les configurations gaming.",
        price: 49,
        rating: 4,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 34 eSports DUO (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 34 eSports DUO (Noir).jpg",
        description: "Ventirad performant avec double ventilateur pour les configurations gaming.",
        price: 49,
        rating: 4,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 34 eSports DUO (NoirBlanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 34 eSports DUO (NoirBlanc).jpg",
        description: "Ventirad performant avec double ventilateur pour les configurations gaming.",
        price: 49,
        rating: 4,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 34 eSports DUO (NoirRouge)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 34 eSports DUO (NoirRouge).jpg",
        description: "Ventirad performant avec double ventilateur pour les configurations gaming.",
        price: 49,
        rating: 4,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 36 A-RGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 36 A-RGB (Noir).jpg",
        description: "Ventirad ARGB avec ventilateur PWM pour un refroidissement performant et esthétique.",
        price: 59,
        rating: 4,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Freezer 36 Black",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 36 Black.jpg",
        description: "Ventirad performant avec ventilateur PWM pour un refroidissement efficace.",
        price: 49,
        rating: 4,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 36 CO",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 36 CO.jpg",
        description: "Ventirad compact et silencieux pour les configurations basse consommation.",
        price: 39,
        rating: 3,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 36",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 36.jpg",
        description: "Ventirad performant avec ventilateur PWM pour un refroidissement efficace.",
        price: 49,
        rating: 4,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 4U-M V2",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 4U-M V2.jpg",
        description: "Ventirad compact pour les serveurs et configurations 4U.",
        price: 29,
        rating: 3,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 4U-M",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 4U-M.jpg",
        description: "Ventirad compact pour les serveurs et configurations 4U.",
        price: 25,
        rating: 3,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Freezer 7 X",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Freezer 7 X.jpg",
        description: "Ventirad économique pour les configurations basse consommation.",
        price: 19,
        rating: 3,
        brand: "Arctic",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 240 A-RGB (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 240 A-RGB (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 240 A-RGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 240 A-RGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 240",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 240.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm pour une dissipation thermique optimale.",
        price: 89,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 280 A-RGB (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 280 A-RGB (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 280 A-RGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 280 A-RGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 280",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 280.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 360 A-RGB (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 360 A-RGB (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 360 A-RGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 360 A-RGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 360",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 360.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 420 A-RGB (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 420 A-RGB (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 420 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Arctic Liquid Freezer III 420 A-RGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Arctic/Arctic Liquid Freezer III 420 A-RGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 420 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "Arctic",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    
    {
        name: "ASUS PRIME LC240 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS PRIME LC240 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS PRIME LC360 ARGB LCD",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS PRIME LC360 ARGB LCD.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 149,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS PRIME LC360 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS PRIME LC360 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ProArt LC 420",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ProArt LC 420.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 420 mm pour une dissipation thermique optimale, idéal pour les stations de travail.",
        price: 199,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "ASUS ROG Ryuo III 360 ARGB White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Ryuo III 360 ARGB White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 229,
        rating: 5,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Ryuo III 360 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Ryuo III 360 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 219,
        rating: 5,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC II 240 ARGB White Edition - Avec support socket AM5",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC II 240 ARGB White Edition - Avec support socket AM5.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB, compatible avec les sockets AM5.",
        price: 129,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC II 360 ARGB White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC II 360 ARGB White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 159,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC III 240 ARGB White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC III 240 ARGB White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 139,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC III 240 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC III 240 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC III 360 ARGB LCD White",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC III 360 ARGB LCD White.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 199,
        rating: 5,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC III 360 ARGB LCD",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC III 360 ARGB LCD.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 189,
        rating: 5,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC III 360 ARGB White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC III 360 ARGB White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 179,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS ROG Strix LC III 360 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS ROG Strix LC III 360 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 169,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS Ryujin III 240 ARGB White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS Ryujin III 240 ARGB White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 199,
        rating: 5,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS Ryujin III 240 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS Ryujin III 240 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 189,
        rating: 5,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS Ryujin III 240",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS Ryujin III 240.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm pour une dissipation thermique optimale.",
        price: 179,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "ASUS Ryujin III 360 ARGB Extreme",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS Ryujin III 360 ARGB Extreme.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 299,
        rating: 5,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS Ryujin III 360",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS Ryujin III 360.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm pour une dissipation thermique optimale.",
        price: 279,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "ASUS TUF GAMING LCII 240 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS TUF GAMING LCII 240 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "ASUS TUF GAMING LCII 360 ARGB",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/ASUS/ASUS TUF GAMING LCII 360 ARGB.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 149,
        rating: 4,
        brand: "ASUS",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Dark Rock 5",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Dark Rock 5.jpg",
        description: "Ventirad performant avec design sobre et silencieux, idéal pour les configurations gaming.",
        price: 79,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Dark Rock Slim",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Dark Rock Slim.jpg",
        description: "Ventirad compact et silencieux pour les configurations à espace limité.",
        price: 69,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Dark Rock TF 2",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Dark Rock TF 2.jpg",
        description: "Ventirad performant avec design sobre et silencieux, idéal pour les configurations gaming.",
        price: 89,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Light Loop 240 mm White",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Light Loop 240 mm White.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Light Loop 240 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Light Loop 240 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Light Loop 360 mm White",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Light Loop 360 mm White.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 149,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Light Loop 360 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Light Loop 360 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 139,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Pure Loop 2 120 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Loop 2 120 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 120 mm pour une dissipation thermique optimale.",
        price: 89,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Pure Loop 2 240 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Loop 2 240 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Pure Loop 2 280 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Loop 2 280 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Pure Loop 2 360 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Loop 2 360 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Pure Loop 2 FX 240 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Loop 2 FX 240 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Pure Loop 2 FX 280 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Loop 2 FX 280 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Pure Loop 2 FX 360 mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Loop 2 FX 360 mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 139,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Pure Rock 2 Black",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Rock 2 Black.jpg",
        description: "Ventirad compact et silencieux pour les configurations basse consommation.",
        price: 39,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Pure Rock 2 FX Black",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Rock 2 FX Black.jpg",
        description: "Ventirad compact et silencieux avec éclairage ARGB pour les configurations gaming.",
        price: 49,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "be quiet! Pure Rock LP",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Rock LP.jpg",
        description: "Ventirad compact et silencieux pour les configurations à espace limité.",
        price: 29,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Pure Rock Slim 2",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Pure Rock Slim 2.jpg",
        description: "Ventirad compact et silencieux pour les configurations basse consommation.",
        price: 34,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Shadow Rock LP",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Shadow Rock LP.jpg",
        description: "Ventirad compact et silencieux pour les configurations à espace limité.",
        price: 39,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Shadow Rock Slim 2",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Shadow Rock Slim 2.jpg",
        description: "Ventirad compact et silencieux pour les configurations basse consommation.",
        price: 44,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Shadow Rock TF 2",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Shadow Rock TF 2.jpg",
        description: "Ventirad performant avec design sobre et silencieux, idéal pour les configurations gaming.",
        price: 59,
        rating: 4,
        brand: "be quiet!",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Silent Loop 2 120mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Silent Loop 2 120mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 120 mm pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Silent Loop 2 240mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Silent Loop 2 240mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Silent Loop 2 280mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Silent Loop 2 280mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "be quiet! Silent Loop 2 360mm",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/be quiet !/be quiet! Silent Loop 2 360mm.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm pour une dissipation thermique optimale.",
        price: 139,
        rating: 4,
        brand: "be quiet!",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "BitFenix CUBE 240 mm (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/BitFenix/BitFenix CUBE 240 mm (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et design blanc pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "BitFenix",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "BitFenix CUBE 240 mm (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/BitFenix/BitFenix CUBE 240 mm (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et design noir pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "BitFenix",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "BitFenix CUBE 360 mm (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/BitFenix/BitFenix CUBE 360 mm (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et design blanc pour une dissipation thermique optimale.",
        price: 139,
        rating: 4,
        brand: "BitFenix",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master Hyper 212 Black",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master Hyper 212 Black.jpg",
        description: "Ventirad performant avec design sobre et silencieux, idéal pour les configurations gaming.",
        price: 39,
        rating: 4,
        brand: "Cooler Master",
        TDR: "VENTIRAD",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Cooler Master Hyper 212 Halo Black",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master Hyper 212 Halo Black.jpg",
        description: "Ventirad performant avec éclairage ARGB et design sobre, idéal pour les configurations gaming.",
        price: 49,
        rating: 4,
        brand: "Cooler Master",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master Hyper 212 Halo White",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master Hyper 212 Halo White.jpg",
        description: "Ventirad performant avec éclairage ARGB et design blanc, idéal pour les configurations gaming.",
        price: 49,
        rating: 4,
        brand: "Cooler Master",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master Hyper 622 Halo Black",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master Hyper 622 Halo Black.jpg",
        description: "Ventirad performant avec éclairage ARGB et design sobre, idéal pour les configurations gaming.",
        price: 69,
        rating: 4,
        brand: "Cooler Master",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master Hyper 622 Halo White",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master Hyper 622 Halo White.jpg",
        description: "Ventirad performant avec éclairage ARGB et design blanc, idéal pour les configurations gaming.",
        price: 69,
        rating: 4,
        brand: "Cooler Master",
        TDR: "VENTIRAD",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid 240 Atmos",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid 240 Atmos.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid 240L Core ARGB White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid 240L Core ARGB White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid 240L Core",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid 240L Core.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm pour une dissipation thermique optimale.",
        price: 99,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid 360 Atmos",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid 360 Atmos.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm pour une dissipation thermique optimale.",
        price: 129,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid 360 ION",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid 360 ION.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm pour une dissipation thermique optimale.",
        price: 139,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid 360L Core ARGB Black Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid 360L Core ARGB Black Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 149,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid 360L Core ARGB White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid 360L Core ARGB White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 149,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Cooler Master MasterLiquid ML240 Illusion White Edition",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Cooler Master Ltd/Cooler Master MasterLiquid ML240 Illusion White Edition.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "Cooler Master",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair Nautilus 240 RS (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair Nautilus 240 RS (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm pour une dissipation thermique optimale.",
        price: 109,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Corsair Nautilus 240 RS ARGB (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair Nautilus 240 RS ARGB (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair Nautilus 240 RS ARGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair Nautilus 240 RS ARGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 119,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair Nautilus 360 RS (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair Nautilus 360 RS (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm pour une dissipation thermique optimale.",
        price: 139,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "NON",
        availability: "green"
    },
    {
        name: "Corsair Nautilus 360 RS ARGB (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair Nautilus 360 RS ARGB (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 149,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair Nautilus 360 RS ARGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair Nautilus 360 RS ARGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 149,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE H100i ELITE LCD XT (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE H100i ELITE LCD XT (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 199,
        rating: 5,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE H115i RGB ELITE",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE H115i RGB ELITE.jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 159,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE H150i ELITE CAPELLIX XT (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE H150i ELITE CAPELLIX XT (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 189,
        rating: 5,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE H150i ELITE LCD XT (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE H150i ELITE LCD XT (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 360 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 219,
        rating: 5,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE H170i ELITE LCD XT (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE H170i ELITE LCD XT (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 420 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 249,
        rating: 5,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE LINK H100i LCD (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE LINK H100i LCD (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm, écran LCD et éclairage ARGB pour une dissipation thermique optimale.",
        price: 199,
        rating: 5,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE LINK H100i RGB (Blanc)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE LINK H100i RGB (Blanc).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 240 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 179,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE LINK H115i RGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE LINK H115i RGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 280 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 189,
        rating: 4,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
    {
        name: "Corsair iCUE LINK H170i RGB (Noir)",
        image: "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCUE LINK H170i RGB (Noir).jpg",
        description: "Kit de Watercooling tout-en-un (AIO) avec radiateur 420 mm et éclairage ARGB pour une dissipation thermique optimale.",
        price: 229,
        rating: 5,
        brand: "Corsair",
        TDR: "AIO",
        RGB: "OUI",
        availability: "green"
    },
        {
            "name": "Corsair iCue H170i Elite Capellix",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Corsair/Corsair iCue H170i Elite Capellix.jpg",
            "description": "Le Corsair iCue H170i Elite Capellix est un refroidissement liquide tout-en-un (AIO) de 420 mm offrant des performances de refroidissement exceptionnelles pour les processeurs haut de gamme. Avec des ventilateurs ML140 RGB PWM et une pompe Capellix RGB, il allie performance et esthétique.",
            "price": 199,
            "rating": 4,
            "brand": "Corsair",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "DeepCool LE520 (Blanc)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/DeepCool/DeepCool LE520 (Blanc).jpg",
            "description": "Le DeepCool LE520 est un refroidissement liquide tout-en-un (AIO) de 240 mm avec un design épuré en blanc. Il est équipé de ventilateurs ARGB pour un éclairage personnalisable et offre des performances de refroidissement silencieuses et efficaces.",
            "price": 89,
            "rating": 4,
            "brand": "DeepCool",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "orange"
        },
        {
            "name": "DeepCool LE520 (Noir)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/DeepCool/DeepCool LE520 (Noir).jpg",
            "description": "Le DeepCool LE520 en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, parfait pour les builds sombres. Avec ses ventilateurs ARGB et sa pompe performante, il assure un refroidissement optimal tout en ajoutant une touche de style à votre PC.",
            "price": 89,
            "rating": 4,
            "brand": "DeepCool",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "DeepCool LS520 (Blanc)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/DeepCool/DeepCool LS520 (Blanc).jpg",
            "description": "Le DeepCool LS520 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, conçu pour les amateurs de builds clairs et lumineux. Il offre des performances de refroidissement exceptionnelles avec un design ARGB élégant.",
            "price": 99,
            "rating": 5,
            "brand": "DeepCool",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "DeepCool LT520 (Blanc)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/DeepCool/DeepCool LT520 (Blanc).jpg",
            "description": "Le DeepCool LT520 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, idéal pour les configurations compactes. Avec ses ventilateurs ARGB et sa pompe performante, il allie esthétique et performance.",
            "price": 109,
            "rating": 5,
            "brand": "DeepCool",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "blue"
        },
        {
            "name": "Enermax AquaFusion 120 ARGB",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax AquaFusion 120 ARGB.jpg",
            "description": "L'Enermax AquaFusion 120 ARGB est un refroidissement liquide tout-en-un (AIO) de 120 mm, équipé de ventilateurs ARGB pour un éclairage personnalisable. Il offre des performances de refroidissement fiables pour les configurations de petite taille.",
            "price": 69,
            "rating": 3,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax AquaFusion ADV 240 ARGB - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax AquaFusion ADV 240 ARGB - Blanc.jpg",
            "description": "L'Enermax AquaFusion ADV 240 ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement supérieures avec un design ARGB élégant. Parfait pour les builds clairs et lumineux.",
            "price": 99,
            "rating": 4,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax AquaFusion ADV 240 ARGB",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax AquaFusion ADV 240 ARGB.jpg",
            "description": "L'Enermax AquaFusion ADV 240 ARGB est un refroidissement liquide tout-en-un (AIO) de 240 mm, équipé de ventilateurs ARGB pour un éclairage personnalisable. Il offre des performances de refroidissement exceptionnelles pour les configurations moyennes.",
            "price": 99,
            "rating": 4,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax AquaFusion ADV 360 ARGB - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax AquaFusion ADV 360 ARGB - Blanc.jpg",
            "description": "L'Enermax AquaFusion ADV 360 ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec son design ARGB, il ajoute une touche de style à votre build.",
            "price": 129,
            "rating": 5,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax AquaFusion ADV 360 ARGB",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax AquaFusion ADV 360 ARGB.jpg",
            "description": "L'Enermax AquaFusion ADV 360 ARGB est un refroidissement liquide tout-en-un (AIO) de 360 mm, équipé de ventilateurs ARGB pour un éclairage personnalisable. Il offre des performances de refroidissement exceptionnelles pour les configurations haut de gamme.",
            "price": 129,
            "rating": 5,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax ETS-N31",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax ETS-N31.jpg",
            "description": "L'Enermax ETS-N31 est un ventirad classique offrant des performances de refroidissement fiables pour les processeurs de milieu de gamme. Son design compact le rend compatible avec la plupart des configurations.",
            "price": 29,
            "rating": 3,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax LIQMAX III 120",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax LIQMAX III 120.jpg",
            "description": "L'Enermax LIQMAX III 120 est un refroidissement liquide tout-en-un (AIO) de 120 mm, offrant des performances de refroidissement silencieuses et efficaces pour les configurations compactes.",
            "price": 59,
            "rating": 3,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax LIQMAXFLO 240",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax LIQMAXFLO 240.jpg",
            "description": "L'Enermax LIQMAXFLO 240 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement exceptionnelles pour les configurations moyennes. Son design épuré et ses ventilateurs performants en font un choix idéal pour les gamers.",
            "price": 89,
            "rating": 4,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax LIQMAXFLO 360",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax LIQMAXFLO 360.jpg",
            "description": "L'Enermax LIQMAXFLO 360 est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal même sous charge lourde.",
            "price": 119,
            "rating": 5,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Enermax LIQMAXFLO SR 120",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Enermax/Enermax LIQMAXFLO SR 120.jpg",
            "description": "L'Enermax LIQMAXFLO SR 120 est un refroidissement liquide tout-en-un (AIO) de 120 mm, offrant des performances de refroidissement silencieuses et efficaces pour les configurations compactes. Son design sobre et ses performances en font un choix idéal pour les builds discrets.",
            "price": 59,
            "rating": 3,
            "brand": "Enermax",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Fox Spirit LightFlow XT240 ARGB",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Fox Spirit/Fox Spirit LightFlow XT240 ARGB.jpg",
            "description": "Le Fox Spirit LightFlow XT240 ARGB est un refroidissement liquide tout-en-un (AIO) de 240 mm, équipé de ventilateurs ARGB pour un éclairage personnalisable. Il offre des performances de refroidissement fiables pour les configurations moyennes.",
            "price": 79,
            "rating": 4,
            "brand": "Fox Spirit",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Fox Spirit LightFlow XT360 ARGB",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Fox Spirit/Fox Spirit LightFlow XT360 ARGB.jpg",
            "description": "Le Fox Spirit LightFlow XT360 ARGB est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses ventilateurs ARGB, il ajoute une touche de style à votre build.",
            "price": 99,
            "rating": 4,
            "brand": "Fox Spirit",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Lian Li Galahad II 240 Trinity SL-INF (noir)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Lian Li/Lian Li Galahad II 240 Trinity SL-INF (noir).jpg",
            "description": "Le Lian Li Galahad II 240 Trinity SL-INF en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement exceptionnelles avec un design ARGB élégant. Parfait pour les builds sombres et stylés.",
            "price": 149,
            "rating": 5,
            "brand": "Lian Li",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Lian Li Galahad II 360 Trinity (noir)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Lian Li/Lian Li Galahad II 360 Trinity (noir).jpg",
            "description": "Le Lian Li Galahad II 360 Trinity en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec son design ARGB, il ajoute une touche de style à votre build.",
            "price": 169,
            "rating": 5,
            "brand": "Lian Li",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Lian Li Galahad II LCD 280 (blanc)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Lian Li/Lian Li Galahad II LCD 280 (blanc).jpg",
            "description": "Le Lian Li Galahad II LCD 280 en blanc est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement exceptionnelles avec un écran LCD personnalisable. Parfait pour les builds clairs et lumineux.",
            "price": 199,
            "rating": 5,
            "brand": "Lian Li",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Lian Li Hydroshift LCD 360R (blanc)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Lian Li/Lian Li Hydroshift LCD 360R (blanc).jpg",
            "description": "Le Lian Li Hydroshift LCD 360R en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles avec un écran LCD personnalisable. Parfait pour les builds clairs et lumineux.",
            "price": 249,
            "rating": 5,
            "brand": "Lian Li",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Lian Li Hydroshift LCD 360R (noir)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Lian Li/Lian Li Hydroshift LCD 360R (noir).jpg",
            "description": "Le Lian Li Hydroshift LCD 360R en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles avec un écran LCD personnalisable. Parfait pour les builds sombres et stylés.",
            "price": 249,
            "rating": 5,
            "brand": "Lian Li",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Lian Li Hydroshift LCD 360S (blanc)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Lian Li/Lian Li Hydroshift LCD 360S (blanc).jpg",
            "description": "Le Lian Li Hydroshift LCD 360S en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles avec un écran LCD personnalisable. Parfait pour les builds clairs et lumineux.",
            "price": 229,
            "rating": 5,
            "brand": "Lian Li",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Lian Li Hydroshift LCD 360S (noir)",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Lian Li/Lian Li Hydroshift LCD 360S (noir).jpg",
            "description": "Le Lian Li Hydroshift LCD 360S en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles avec un écran LCD personnalisable. Parfait pour les builds sombres et stylés.",
            "price": 229,
            "rating": 5,
            "brand": "Lian Li",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
        {
            "name": "Mars Gaming MCPU44",
            "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Mars Gaming/Mars Gaming MCPU44.jpg",
            "description": "Le Mars Gaming MCPU44 est un ventirad abordable offrant des performances de refroidissement de base pour les processeurs d'entrée de gamme. Son design compact le rend compatible avec la plupart des configurations.",
            "price": 19,
            "rating": 2,
            "brand": "Mars Gaming",
            "TDR": "VENTIRAD",
            "RGB": "OUI",
            "availability": "green"
        },
            {
                "name": "MSI MAG CORELIQUID 240R V2 WHITE",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID 240R V2 WHITE.jpg",
                "description": "Le MSI MAG CORELIQUID 240R V2 WHITE est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement exceptionnelles avec un design épuré en blanc. Parfait pour les builds clairs et lumineux.",
                "price": 109,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID 240R V2",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID 240R V2.jpg",
                "description": "Le MSI MAG CORELIQUID 240R V2 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement exceptionnelles pour les configurations moyennes. Son design sobre et ses ventilateurs performants en font un choix idéal.",
                "price": 109,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID 280R V2",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID 280R V2.jpg",
                "description": "Le MSI MAG CORELIQUID 280R V2 est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal.",
                "price": 129,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID 360R V2",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID 360R V2.jpg",
                "description": "Le MSI MAG CORELIQUID 360R V2 est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal même sous charge lourde.",
                "price": 149,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID A13 240 Black",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID A13 240 Black.jpg",
                "description": "Le MSI MAG CORELIQUID A13 240 Black est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 99,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID A13 240 White",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID A13 240 White.jpg",
                "description": "Le MSI MAG CORELIQUID A13 240 White est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 99,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID A13 360 Black",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID A13 360 Black.jpg",
                "description": "Le MSI MAG CORELIQUID A13 360 Black est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 139,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID A15 240 Black",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID A15 240 Black.jpg",
                "description": "Le MSI MAG CORELIQUID A15 240 Black est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 99,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID A15 360 Black",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID A15 360 Black.jpg",
                "description": "Le MSI MAG CORELIQUID A15 360 Black est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 139,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID C280",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID C280.jpg",
                "description": "Le MSI MAG CORELIQUID C280 est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal.",
                "price": 129,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID E240 White",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID E240 White.jpg",
                "description": "Le MSI MAG CORELIQUID E240 White est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 99,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID E240",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID E240.jpg",
                "description": "Le MSI MAG CORELIQUID E240 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre et ses ventilateurs performants en font un choix idéal.",
                "price": 99,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID E360 White",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID E360 White.jpg",
                "description": "Le MSI MAG CORELIQUID E360 White est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 139,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID E360",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID E360.jpg",
                "description": "Le MSI MAG CORELIQUID E360 est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal même sous charge lourde.",
                "price": 139,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID I240 + Offset Kit LGA1851",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID I240 + Offset Kit LGA1851.jpg",
                "description": "Le MSI MAG CORELIQUID I240 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Inclus avec un kit de décalage pour socket LGA1851.",
                "price": 109,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID I240 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID I240 - Blanc.jpg",
                "description": "Le MSI MAG CORELIQUID I240 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 109,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID I240",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID I240.jpg",
                "description": "Le MSI MAG CORELIQUID I240 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre et ses ventilateurs performants en font un choix idéal.",
                "price": 109,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID I360 + Offset Kit LGA1851",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID I360 + Offset Kit LGA1851.jpg",
                "description": "Le MSI MAG CORELIQUID I360 est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Inclus avec un kit de décalage pour socket LGA1851.",
                "price": 149,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID I360 - Blanc + Offset Kit LGA1851",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID I360 - Blanc + Offset Kit LGA1851.jpg",
                "description": "Le MSI MAG CORELIQUID I360 en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Inclus avec un kit de décalage pour socket LGA1851.",
                "price": 149,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID I360 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID I360 - Blanc.jpg",
                "description": "Le MSI MAG CORELIQUID I360 en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 149,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID I360",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID I360.jpg",
                "description": "Le MSI MAG CORELIQUID I360 est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal même sous charge lourde.",
                "price": 149,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MAG CORELIQUID M240",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MAG CORELIQUID M240.jpg",
                "description": "Le MSI MAG CORELIQUID M240 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre et ses ventilateurs performants en font un choix idéal.",
                "price": 99,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MEG CORELIQUID S280",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MEG CORELIQUID S280.jpg",
                "description": "Le MSI MEG CORELIQUID S280 est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal.",
                "price": 169,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MEG CORELIQUID S360",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MEG CORELIQUID S360.jpg",
                "description": "Le MSI MEG CORELIQUID S360 est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal même sous charge lourde.",
                "price": 199,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MPG CORELIQUID D240",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MPG CORELIQUID D240.jpg",
                "description": "Le MSI MPG CORELIQUID D240 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre et ses ventilateurs performants en font un choix idéal.",
                "price": 119,
                "rating": 4,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "MSI MPG CORELIQUID D360",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/MSI/MSI MPG CORELIQUID D360.jpg",
                "description": "Le MSI MPG CORELIQUID D360 est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses ventilateurs performants, il assure un refroidissement optimal même sous charge lourde.",
                "price": 159,
                "rating": 5,
                "brand": "MSI",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "NZXT Kraken 240 RGB Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/NZXT/NZXT Kraken 240 RGB Blanc.jpg",
                "description": "Le NZXT Kraken 240 RGB Blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc et ses effets RGB en font un choix esthétique et performant.",
                "price": 129,
                "rating": 4,
                "brand": "NZXT",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "NZXT Kraken 280 RGB Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/NZXT/NZXT Kraken 280 RGB Blanc.jpg",
                "description": "Le NZXT Kraken 280 RGB Blanc est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Son design épuré en blanc et ses effets RGB en font un choix esthétique et performant.",
                "price": 149,
                "rating": 5,
                "brand": "NZXT",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "NZXT Kraken Elite 360 RGB",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/NZXT/NZXT Kraken Elite 360 RGB.jpg",
                "description": "Le NZXT Kraken Elite 360 RGB est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets RGB personnalisables, il ajoute une touche de style à votre build.",
                "price": 199,
                "rating": 5,
                "brand": "NZXT",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Aqua Elite 240 V3 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Aqua Elite 240 V3 - Blanc.jpg",
                "description": "Le Thermalright Aqua Elite 240 V3 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 79,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Aqua Elite 240 V3 - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Aqua Elite 240 V3 - Noir.jpg",
                "description": "Le Thermalright Aqua Elite 240 V3 en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 79,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Aqua Elite 360 V3 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Aqua Elite 360 V3 - Blanc.jpg",
                "description": "Le Thermalright Aqua Elite 360 V3 en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 109,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Aqua Elite 360 V3 - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Aqua Elite 360 V3 - Noir.jpg",
                "description": "Le Thermalright Aqua Elite 360 V3 en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 109,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Assassin Spirit 120 Vision ARGB Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Assassin Spirit 120 Vision ARGB Blanc.jpg",
                "description": "Le Thermalright Assassin Spirit 120 Vision ARGB en blanc est un ventirad compact offrant des performances de refroidissement fiables pour les configurations compactes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 39,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Assassin Spirit 120 Vision ARGB Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Assassin Spirit 120 Vision ARGB Noir.jpg",
                "description": "Le Thermalright Assassin Spirit 120 Vision ARGB en noir est un ventirad compact offrant des performances de refroidissement fiables pour les configurations compactes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 39,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Elite Vision 360 ARGB - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Elite Vision 360 ARGB - Blanc.jpg",
                "description": "Le Thermalright Elite Vision 360 ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 129,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Elite Vision 360 ARGB - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Elite Vision 360 ARGB - Noir.jpg",
                "description": "Le Thermalright Elite Vision 360 ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 129,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Infinity 240 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Infinity 240 - Blanc.jpg",
                "description": "Le Thermalright Frozen Infinity 240 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 89,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Infinity 240 - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Infinity 240 - Noir.jpg",
                "description": "Le Thermalright Frozen Infinity 240 en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 89,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Infinity 360 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Infinity 360 - Blanc.jpg",
                "description": "Le Thermalright Frozen Infinity 360 en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 119,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Infinity 360 - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Infinity 360 - Noir.jpg",
                "description": "Le Thermalright Frozen Infinity 360 en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 119,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Notte 240 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Notte 240 - Blanc.jpg",
                "description": "Le Thermalright Frozen Notte 240 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 79,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Notte 240 - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Notte 240 - Noir.jpg",
                "description": "Le Thermalright Frozen Notte 240 en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 79,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Notte 360 - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Notte 360 - Blanc.jpg",
                "description": "Le Thermalright Frozen Notte 360 en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                "price": 109,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Notte 360 - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Notte 360 - Noir.jpg",
                "description": "Le Thermalright Frozen Notte 360 en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                "price": 109,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Warframe 420 ARGB - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Warframe 420 ARGB - Blanc.jpg",
                "description": "Le Thermalright Frozen Warframe 420 ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 420 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 149,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Warframe 420 ARGB - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Warframe 420 ARGB - Noir.jpg",
                "description": "Le Thermalright Frozen Warframe 420 ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 420 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 149,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Warframe PRO 360 ARGB - Blanc",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Warframe PRO 360 ARGB - Blanc.jpg",
                "description": "Le Thermalright Frozen Warframe PRO 360 ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 139,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Frozen Warframe PRO 360 ARGB - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Frozen Warframe PRO 360 ARGB - Noir.jpg",
                "description": "Le Thermalright Frozen Warframe PRO 360 ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 139,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Grand Vision 360 ARGB - Noir",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Grand Vision 360 ARGB - Noir.jpg",
                "description": "Le Thermalright Grand Vision 360 ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 129,
                "rating": 5,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Peerless Assassin 120 SE BLACK ARGB",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Peerless Assassin 120 SE BLACK ARGB.jpg",
                "description": "Le Thermalright Peerless Assassin 120 SE BLACK ARGB est un ventirad compact offrant des performances de refroidissement fiables pour les configurations compactes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 49,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
            {
                "name": "Thermalright Peerless Assassin 120 SE WHITE ARGB",
                "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Thermalright/Thermalright Peerless Assassin 120 SE WHITE ARGB.jpg",
                "description": "Le Thermalright Peerless Assassin 120 SE WHITE ARGB est un ventirad compact offrant des performances de refroidissement fiables pour les configurations compactes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                "price": 49,
                "rating": 4,
                "brand": "Thermalright",
                "TDR": "VENTIRAD",
                "RGB": "OUI",
                "availability": "green"
            },
                {
                    "name": "TRYX PANORAMA 240 - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA 240 - Blanc.jpg",
                    "description": "Le TRYX PANORAMA 240 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                    "price": 99,
                    "rating": 4,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA 240 - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA 240 - Noir.jpg",
                    "description": "Le TRYX PANORAMA 240 en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                    "price": 99,
                    "rating": 4,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA 280 - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA 280 - Blanc.jpg",
                    "description": "Le TRYX PANORAMA 280 en blanc est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                    "price": 119,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA 280 - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA 280 - Noir.jpg",
                    "description": "Le TRYX PANORAMA 280 en noir est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                    "price": 119,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA 360 - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA 360 - Blanc.jpg",
                    "description": "Le TRYX PANORAMA 360 en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design épuré en blanc s'intègre parfaitement dans les builds clairs.",
                    "price": 139,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA 360 - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA 360 - Noir.jpg",
                    "description": "Le TRYX PANORAMA 360 en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                    "price": 139,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA ARGB 240 - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA ARGB 240 - Blanc.jpg",
                    "description": "Le TRYX PANORAMA ARGB 240 en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 109,
                    "rating": 4,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA ARGB 240 - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA ARGB 240 - Noir.jpg",
                    "description": "Le TRYX PANORAMA ARGB 240 en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 109,
                    "rating": 4,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA ARGB 280 - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA ARGB 280 - Blanc.jpg",
                    "description": "Le TRYX PANORAMA ARGB 280 en blanc est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 129,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA ARGB 280 - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA ARGB 280 - Noir.jpg",
                    "description": "Le TRYX PANORAMA ARGB 280 en noir est un refroidissement liquide tout-en-un (AIO) de 280 mm, offrant des performances de refroidissement supérieures pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 129,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA ARGB 360 - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA ARGB 360 - Blanc.jpg",
                    "description": "Le TRYX PANORAMA ARGB 360 en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 149,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "TRYX PANORAMA ARGB 360 - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/TRYX/TRYX PANORAMA ARGB 360 - Noir.jpg",
                    "description": "Le TRYX PANORAMA ARGB 360 en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 149,
                    "rating": 5,
                    "brand": "TRYX",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie A240 ARGB - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie A240 ARGB - Blanc.jpg",
                    "description": "Le Valkyrie A240 ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 89,
                    "rating": 4,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie A240 ARGB - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie A240 ARGB - Noir.jpg",
                    "description": "Le Valkyrie A240 ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 89,
                    "rating": 4,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie A360 ARGB - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie A360 ARGB - Blanc.jpg",
                    "description": "Le Valkyrie A360 ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 119,
                    "rating": 5,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie A360 ARGB - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie A360 ARGB - Noir.jpg",
                    "description": "Le Valkyrie A360 ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 119,
                    "rating": 5,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie V240 Lite ARGB - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie V240 Lite ARGB - Blanc.jpg",
                    "description": "Le Valkyrie V240 Lite ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 79,
                    "rating": 4,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie V240 Lite ARGB - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie V240 Lite ARGB - Noir.jpg",
                    "description": "Le Valkyrie V240 Lite ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 79,
                    "rating": 4,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie V360 Lite ARGB - Blanc",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie V360 Lite ARGB - Blanc.jpg",
                    "description": "Le Valkyrie V360 Lite ARGB en blanc est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 109,
                    "rating": 5,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Valkyrie V360 Lite ARGB - Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Valkyrie/Valkyrie V360 Lite ARGB - Noir.jpg",
                    "description": "Le Valkyrie V360 Lite ARGB en noir est un refroidissement liquide tout-en-un (AIO) de 360 mm, offrant des performances de refroidissement exceptionnelles pour les configurations haut de gamme. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 109,
                    "rating": 5,
                    "brand": "Valkyrie",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Xigmatek Apache Plus",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Xigmatek/Xigmatek Apache Plus.jpg",
                    "description": "Le Xigmatek Apache Plus est un ventirad compact offrant des performances de refroidissement fiables pour les configurations compactes. Son design sobre et ses performances en font un choix idéal pour les builds discrets.",
                    "price": 29,
                    "rating": 3,
                    "brand": "Xigmatek",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Xigmatek Neon Aqua 240",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Xigmatek/Xigmatek Neon Aqua 240.jpg",
                    "description": "Le Xigmatek Neon Aqua 240 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Avec ses effets ARGB, il ajoute une touche de style à votre build.",
                    "price": 89,
                    "rating": 4,
                    "brand": "Xigmatek",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Zalman Alpha 28 Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Zalman/Zalman Alpha 28 Noir.jpg",
                    "description": "Le Zalman Alpha 28 Noir est un ventirad compact offrant des performances de refroidissement fiables pour les configurations compactes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                    "price": 39,
                    "rating": 4,
                    "brand": "Zalman",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Zalman Alpha 36 Noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Zalman/Zalman Alpha 36 Noir.jpg",
                    "description": "Le Zalman Alpha 36 Noir est un ventirad compact offrant des performances de refroidissement fiables pour les configurations compactes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                    "price": 49,
                    "rating": 4,
                    "brand": "Zalman",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Zalman Reserator5 Z24 (LGA 1700) - noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Zalman/Zalman Reserator5 Z24 (LGA 1700) - noir.jpg",
                    "description": "Le Zalman Reserator5 Z24 est un refroidissement liquide tout-en-un (AIO) de 240 mm, compatible avec le socket LGA 1700. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                    "price": 79,
                    "rating": 4,
                    "brand": "Zalman",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
                },
                {
                    "name": "Zalman Reserator5 Z24 - noir",
                    "image": "/Website Beta/IMAGES/images composants/Ventirad et AIO/Zalman/Zalman Reserator5 Z24 - noir.jpg",
                    "description": "Le Zalman Reserator5 Z24 est un refroidissement liquide tout-en-un (AIO) de 240 mm, offrant des performances de refroidissement fiables pour les configurations moyennes. Son design sobre en noir s'intègre parfaitement dans les builds sombres.",
                    "price": 79,
                    "rating": 4,
                    "brand": "Zalman",
                    "TDR": "VENTIRAD",
                    "RGB": "OUI",
                    "availability": "green"
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
        const matchesTDR = !TDRFilter.value || product.TDR === TDRFilter.value;
        const matchesRGB = !RGBFilter.value || product.RGB === RGBFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesTDR && matchesRGB && matchesSearch;
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

[brandFilter, TDRFilter, RGBFilter, searchBar].forEach(filter => {
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
            productImage.alt = product.name;
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
       
        localStorage.setItem("selectedRefroidissement", JSON.stringify(selectedProducts));

        window.location.href = "/Website Beta/Page principale/Configurateur PC.html";
    } else {
        alert("Veuillez sélectionner un refroidissement avant de valider.");
    }
});

