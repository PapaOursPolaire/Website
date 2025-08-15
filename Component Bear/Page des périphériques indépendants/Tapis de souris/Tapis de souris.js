const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const surfaceFilter = document.querySelector("#surfaceFilter");
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
        name: "ASUS ROG Hone Ace (Aim Lab Edition)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Hone Ace (Aim Lab Edition).jpg",
        description: "Tapis de souris gaming ASUS ROG Hone Ace (Aim Lab Edition) - Conçu pour une précision optimale en collaboration avec Aim Lab.",
        price: 39.99,
        rating: 4,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Hone Ace (XXL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Hone Ace (XXL).jpg",
        description: "Tapis de souris gaming ASUS ROG Hone Ace (XXL) - Format XXL pour une surface de jeu étendue.",
        price: 49.99,
        rating: 5,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Moonstone Ace L (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Moonstone Ace L (Blanc).jpg",
        description: "Tapis de souris gaming ASUS ROG Moonstone Ace L (Blanc) - Design élégant et surface lisse pour une glisse précise.",
        price: 29.99,
        rating: 4,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Moonstone Ace L (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Moonstone Ace L (Noir).jpg",
        description: "Tapis de souris gaming ASUS ROG Moonstone Ace L (Noir) - Surface lisse et design sobre pour une expérience de jeu optimale.",
        price: 29.99,
        rating: 4,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Scabbard II (Medium)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Scabbard II (Medium).jpg",
        description: "Tapis de souris gaming ASUS ROG Scabbard II (Medium) - Surface résistante à l'eau et antidérapante.",
        price: 34.99,
        rating: 5,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Scabbard II (XXL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Scabbard II (XXL).jpg",
        description: "Tapis de souris gaming ASUS ROG Scabbard II (XXL) - Format XXL pour une surface de jeu étendue et une glisse précise.",
        price: 44.99,
        rating: 5,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Sheath BLK LTD",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Sheath BLK LTD.jpg",
        description: "Tapis de souris gaming ASUS ROG Sheath BLK LTD - Design exclusif et surface lisse pour une expérience de jeu optimale.",
        price: 59.99,
        rating: 4,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Sheath",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Sheath.jpg",
        description: "Tapis de souris gaming ASUS ROG Sheath - Surface lisse et design sobre pour une expérience de jeu optimale.",
        price: 49.99,
        rating: 4,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Edge",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS ROG Strix Edge.jpg",
        description: "Tapis de souris gaming ASUS ROG Strix Edge - Bordure en caoutchouc antidérapante et surface lisse.",
        price: 24.99,
        rating: 4,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ASUS TUF Gaming P1",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/ASUS/ASUS TUF Gaming P1.jpg",
        description: "Tapis de souris gaming ASUS TUF Gaming P1 - Conçu pour une durabilité et une précision optimales.",
        price: 19.99,
        rating: 4,
        brand: "ASUS",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Cooler Master MP750 Medium",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Cooler Master Ltd/Cooler Master MP750 Medium.jpg",
        description: "Tapis de souris gaming Cooler Master MP750 Medium - Surface en tissu et éclairage RGB personnalisable.",
        price: 39.99,
        rating: 4,
        brand: "Cooler Master Ltd",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM100 (medium)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM100 (medium).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM100 (medium) - Surface en tissu pour une glisse précise.",
        price: 14.99,
        rating: 4,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM200 Pro (XL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM200 Pro (XL).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM200 Pro (XL) - Format XL pour une surface de jeu étendue.",
        price: 24.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM250 (X-Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM250 Champion Series (X-Large).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM250 Champion Series (X-Large) - Surface en tissu et bordure cousue.",
        price: 34.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM300 Pro (Extended)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM300 Pro (Extended).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM300 Pro (Extended) - Surface en tissu et format étendu.",
        price: 29.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM300 Pro (Medium)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM300 Pro (Medium).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM300 Pro (Medium) - Surface en tissu pour une glisse précise.",
        price: 19.99,
        rating: 4,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM350 Champion Series",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM350 Champion Series (Médium).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM350 Champion Series (Médium) - Surface en tissu et bordure cousue.",
        price: 39.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM350 Champion Series (X-Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM350 Champion Series (X-Large).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM350 Champion Series (X-Large) - Surface en tissu et format XL.",
        price: 49.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM350 Pro (Extended XL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM350 Pro (Extended XL).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM350 Pro (Extended XL) - Surface en tissu et format étendu XL.",
        price: 59.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM350 Pro Noir (Extended XL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM350 Pro Noir (Extended XL).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM350 Pro Noir (Extended XL) - Surface en tissu et format étendu XL.",
        price: 59.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM5000 v2 (Extended)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM5000 v2 (Extended).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM5000 v2 (Extended) - Surface en tissu et format étendu.",
        price: 69.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM5000 v2 (Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM5000 v2 (Large).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM5000 v2 (Large) - Surface en tissu et format large.",
        price: 59.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM700 RGB (Extended XL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM700 RGB (Extended XL).jpg",
        description: "Tapis de souris gaming Corsair Gaming MM700 RGB (Extended XL) - Éclairage RGB personnalisable et format étendu XL.",
        price: 79.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM700 RGB Extended 3XL",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM700 RGB Extended 3XL.jpg",
        description: "Tapis de souris gaming Corsair Gaming MM700 RGB Extended 3XL - Éclairage RGB personnalisable et format 3XL.",
        price: 99.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Corsair Gaming MM800 RGB Polaris",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Corsair/Corsair Gaming MM800 RGB Polaris.jpg",
        description: "Tapis de souris gaming Corsair Gaming MM800 RGB Polaris - Éclairage RGB personnalisable et surface en tissu.",
        price: 89.99,
        rating: 5,
        brand: "Corsair",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Logitech G G240",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Logitech G/Logitech G G240.jpg",
        description: "Tapis de souris gaming Logitech G G240 - Surface en tissu pour une glisse précise.",
        price: 19.99,
        rating: 4,
        brand: "Logitech G",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Logitech G G440",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Logitech G/Logitech G G440.jpg",
        description: "Tapis de souris gaming Logitech G G440 - Surface en plastique pour une glisse rapide.",
        price: 24.99,
        rating: 4,
        brand: "Logitech G",
        surface: "Plastique",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Logitech G G640",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Logitech G/Logitech G G640.jpg",
        description: "Tapis de souris gaming Logitech G G640 - Surface en tissu pour une glisse précise.",
        price: 29.99,
        rating: 5,
        brand: "Logitech G",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Logitech G G840",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Logitech G/Logitech G G840.jpg",
        description: "Tapis de souris gaming Logitech G G840 - Format XL pour une surface de jeu étendue.",
        price: 49.99,
        rating: 5,
        brand: "Logitech G",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Logitech G Powerplay",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Logitech G/Logitech G Powerplay.jpg",
        description: "Tapis de souris gaming Logitech G Powerplay - Compatible avec la technologie sans fil Powerplay.",
        price: 119.99,
        rating: 5,
        brand: "Logitech G",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ON LAN AS-300 (Amazone)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/On Lan/ON LAN AS-300 (Amazone).jpg",
        description: "Tapis de souris gaming ON LAN AS-300 (Amazone) - Design unique et surface en tissu.",
        price: 14.99,
        rating: 4,
        brand: "On Lan",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ON LAN AS-300 (Athena)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/On Lan/ON LAN AS-300 (Athena).jpg",
        description: "Tapis de souris gaming ON LAN AS-300 (Athena) - Design unique et surface en tissu.",
        price: 14.99,
        rating: 4,
        brand: "On Lan",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "ON LAN AS-300 (Special OPS)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/On Lan/ON LAN AS-300 (Special OPS).jpg",
        description: "Tapis de souris gaming ON LAN AS-300 (Special OPS) - Design unique et surface en tissu.",
        price: 14.99,
        rating: 4,
        brand: "On Lan",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "OPLITE Mouse Pad XXXL",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/OPLITE/OPLITE Mouse Pad XXXL.jpg",
        description: "Tapis de souris gaming OPLITE Mouse Pad XXXL - Format XXXL pour une surface de jeu étendue.",
        price: 19.99,
        rating: 4,
        brand: "OPLITE",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Atlas (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Atlas (Noir).jpg",
        description: "Tapis de souris gaming Razer Atlas (Noir) - Surface en verre trempé pour une glisse ultra-rapide.",
        price: 99.99,
        rating: 5,
        brand: "Razer",
        surface: "Verre trempé",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Firefly v2 Chroma",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Firefly v2 Chroma.jpg",
        description: "Tapis de souris gaming Razer Firefly v2 Chroma - Éclairage RGB Chroma personnalisable.",
        price: 59.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Razer Firefly v2 Pro (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Firefly v2 Pro (Noir).jpg",
        description: "Tapis de souris gaming Razer Firefly v2 Pro (Noir) - Surface en tissu et éclairage RGB Chroma.",
        price: 69.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Razer Gigantus v2 (3XL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Gigantus v2 (3XL).jpg",
        description: "Tapis de souris gaming Razer Gigantus v2 (3XL) - Format 3XL pour une surface de jeu étendue.",
        price: 49.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Gigantus v2 (Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Gigantus v2 (Large).jpg",
        description: "Tapis de souris gaming Razer Gigantus v2 (Large) - Surface en tissu pour une glisse précise.",
        price: 29.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Gigantus v2 (Medium)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Gigantus v2 (Medium).jpg",
        description: "Tapis de souris gaming Razer Gigantus v2 (Medium) - Surface en tissu pour une glisse précise.",
        price: 24.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Gigantus v2 (XXL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Gigantus v2 (XXL).jpg",
        description: "Tapis de souris gaming Razer Gigantus v2 (XXL) - Format XXL pour une surface de jeu étendue.",
        price: 39.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Goliathus Chroma (Taille M)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Goliathus Chroma (Taille M).jpg",
        description: "Tapis de souris gaming Razer Goliathus Chroma (Taille M) - Éclairage RGB Chroma personnalisable.",
        price: 49.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Razer Goliathus Chroma 3XL",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Goliathus Chroma 3XL.jpg",
        description: "Tapis de souris gaming Razer Goliathus Chroma 3XL - Éclairage RGB Chroma personnalisable et format 3XL.",
        price: 79.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Razer Goliathus Chroma Extended (Fortnite Edition)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Goliathus Chroma Extended (Fortnite Edition).jpg",
        description: "Tapis de souris gaming Razer Goliathus Chroma Extended (Fortnite Edition) - Édition spéciale Fortnite avec éclairage RGB.",
        price: 59.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Goliathus Chroma Extended (Taille XL)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Goliathus Chroma Extended (Taille XL).jpg",
        description: "Tapis de souris gaming Razer Goliathus Chroma Extended (Taille XL) - Éclairage RGB Chroma personnalisable et format XL.",
        price: 69.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "Razer Goliathus Mobile - Stealth Edition",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Goliathus Mobile - Stealth Edition.jpg",
        description: "Tapis de souris gaming Razer Goliathus Mobile - Stealth Edition - Design compact et portable.",
        price: 19.99,
        rating: 4,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Pro Glide XXL",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Pro Glide XXL.jpg",
        description: "Tapis de souris gaming Razer Pro Glide XXL - Surface en tissu et format XXL.",
        price: 29.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Pro Glide",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Pro Glide.jpg",
        description: "Tapis de souris gaming Razer Pro Glide - Surface en tissu pour une glisse précise.",
        price: 19.99,
        rating: 4,
        brand: "Razer",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Sphex v3 (Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Sphex v3 (Large).jpg",
        description: "Tapis de souris gaming Razer Sphex v3 (Large) - Surface en plastique pour une glisse rapide.",
        price: 14.99,
        rating: 4,
        brand: "Razer",
        surface: "Plastique",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "Razer Strider Chroma",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/Razer/Razer Strider Chroma.jpg",
        description: "Tapis de souris gaming Razer Strider Chroma - Éclairage RGB Chroma personnalisable et surface hybride.",
        price: 59.99,
        rating: 5,
        brand: "Razer",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries QcK 3XL",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK 3XL.jpg",
        description: "Tapis de souris gaming SteelSeries QcK 3XL - Format 3XL pour une surface de jeu étendue.",
        price: 39.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Edge (Extra Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Edge (Extra Large).jpg",
        description: "Tapis de souris gaming SteelSeries QcK Edge (Extra Large) - Bordure cousue et surface en tissu.",
        price: 29.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Edge (Medium)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Edge (Medium).jpg",
        description: "Tapis de souris gaming SteelSeries QcK Edge (Medium) - Bordure cousue et surface en tissu.",
        price: 19.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Heavy (Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Heavy (Large).jpg",
        description: "Tapis de souris gaming SteelSeries QcK Heavy (Large) - Surface en tissu épais pour une glisse précise.",
        price: 24.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Heavy 2020 (Medium)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Heavy 2020 (Medium).jpg",
        description: "Tapis de souris gaming SteelSeries QcK Heavy 2020 (Medium) - Surface en tissu épais pour une glisse précise.",
        price: 19.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Heavy XXL",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Heavy XXL.jpg",
        description: "Tapis de souris gaming SteelSeries QcK Heavy XXL - Surface en tissu épais et format XXL.",
        price: 39.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Mini",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Mini.jpg",
        description: "Tapis de souris gaming SteelSeries QcK Mini - Format compact pour une portabilité optimale.",
        price: 9.99,
        rating: 4,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Prism Cloth (Extra Large)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Prism Cloth (Extra Large).jpg",
        description: "Tapis de souris gaming SteelSeries QcK Prism Cloth (Extra Large) - Éclairage RGB personnalisable et surface en tissu.",
        price: 59.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries QcK Prism Cloth 3XL",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK Prism Cloth 3XL.jpg",
        description: "Tapis de souris gaming SteelSeries QcK Prism Cloth 3XL - Éclairage RGB personnalisable et format 3XL.",
        price: 79.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "OUI",
        availability: "green",
    },
    {
        name: "SteelSeries QcK XXL (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK XXL (Noir).jpg",
        description: "Tapis de souris gaming SteelSeries QcK XXL (Noir) - Surface en tissu et format XXL.",
        price: 29.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK XXL (World of Warcraft Edition)",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK XXL (World of Warcraft Edition).jpg",
        description: "Tapis de souris gaming SteelSeries QcK XXL (World of Warcraft Edition) - Édition spéciale World of Warcraft.",
        price: 34.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK+",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK+.jpg",
        description: "Tapis de souris gaming SteelSeries QcK+ - Surface en tissu pour une glisse précise.",
        price: 19.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
        availability: "green",
    },
    {
        name: "SteelSeries QcK",
        image: "/Website Beta/IMAGES/images périphériques/Tapis de souris/SteelSeries/SteelSeries QcK.jpg",
        description: "Tapis de souris gaming SteelSeries QcK - Surface en tissu pour une glisse précise.",
        price: 14.99,
        rating: 5,
        brand: "SteelSeries",
        surface: "Tissu",
        RGB: "NON",
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
        const matchesSurface = !surfaceFilter.value || product.surface === surfaceFilter.value;
        const matchesRGB = !RGBFilter.value || product.RGB === RGBFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesSurface && matchesRGB && matchesSearch;
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

[brandFilter, surfaceFilter, RGBFilter, searchBar].forEach(filter => {
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
    const selectedAlim = [];
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']:checked");

    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr");
        const productName = row.querySelector("td:first-child").textContent.trim();
        const productPrice = row.querySelector(".price").textContent.trim();
        const productImage = productData.find(p => p.name === productName)?.image || "";

        selectedAlim.push({ 
            name: productName, 
            price: productPrice, 
            image: productImage 
        });
    });

    if (selectedAlim.length > 0) {

        let existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];

        existingProducts = existingProducts.concat(selectedAlim);

        localStorage.setItem("selectedProducts", JSON.stringify(existingProducts));

        console.log("Produits ajoutés au panier :", existingProducts);

        window.location.href = "/Website Beta/Page du panier/Panier.html";
    } else {
        alert("Veuillez sélectionner au moins un PRODUIT avant de valider.");
    }
});