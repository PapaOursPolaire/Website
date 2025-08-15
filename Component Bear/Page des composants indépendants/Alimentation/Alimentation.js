const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const Marques = document.querySelector("#Marques");
const Puissance = document.querySelector("#Puissance");
const Normes = document.querySelector("#Normes");
const searchBar = document.querySelector("#searchBar");
const productImage = document.querySelector(".col-span-3 img");
const productTitle = document.querySelector(".col-span-3 h2");
const productDescription = document.querySelector(".col-span-3 p");
const errorMessage = document.createElement("p");
errorMessage.textContent = "Aucun produit ne correspond aux filtres sélectionnés.";
errorMessage.style.color = "red";
errorMessage.style.textAlign = "center";
errorMessage.style.marginTop = "20px";

const productData = [
    {
        name: "AeroCool LUX RGB 750M",
        image: "/Website Beta/IMAGES/images composants/Alimentation/AeroCool/LUX RGB.jpg",
        description: "Alimentation semi-modulaire 750W ATX/EPS 12V - 80PLUS Bronze",
        price: 99.95,
        rating: 4,
        Marques: "AeroCool",
        Puissance: "750W",
        Normes: "Bronze",
        availability: "orange"
    },
    {
        name: "Antec HCG1200 Pro Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Antec/HCG1200 Pro Platinum.jpg",
        description: "Alimentation 100% modulaire 1000 Watts ATX12V 3.1 80 PLUS Platinum",
        price: 289.95,
        rating: 0,
        Marques: "Antec",
        Puissance: "1200W",
        Normes: "Platinum",
        availability: "blue"
    },
    {
        name: "be quiet! Pure Power 11 400W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 11 400W.jpg",
        description: "Alimentation 400W ATX 12V 2.4 - 80PLUS Gold",
        price: 68.95,
        rating: 4,
        Marques: "be quiet !",
        Puissance: "400W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Cooler Master MWE Bronze 650W V3",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Cooler Master/MWE 650W.jpg",
        description: "Alimentation 750W ATX3.1 - 80PLUS Bronze",
        price: 69.95,
        rating: 4,
        Marques: "Cooler Master",
        Puissance: "650W",
        Normes: "Option15",
        availability: "red"
    },
    {
        name: "Corsair CX550 80PLUS Bronze (2023)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/CX550.jpg",
        description: "Alimentation 550W ATX12V 2.4/EPS12V 2.92 - 80PLUS Bronze",
        price: 79.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "550W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "MSI MAG A750GL PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A750GL.jpg",
        description: "Alimentation 100% modulaire 750W ATX12V 3.0 - 80PLUS Gold",
        price: 129.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "750W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic PRIME PX-2200 ATX 3 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/PRIME PX-2200.jpg",
        description: "Alimentation 100% modulaire 2200W ATX12V 3.1 - 80PLUS Platinum",
        price: 699.95,
        rating: 0,
        Marques: "Seasonic",
        Puissance: "2200W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "HCG850 Pro Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Antec/HCG850 Pro Platinum.jpg",
        description: "Alimentation 100% modulaire 850 Watts ATX12V 3.1 80 PLUS Platinum",
        price: 219.95,
        rating: 0,
        Marques: "Antec",
        Puissance: "850W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "HCG1000 Pro Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Antec/HCG1000 Pro Platinum.jpg",
        description: "Alimentation 100% modulaire 1000 Watts ATX12V 3.1 80 PLUS Platinum",
        price: 259.95,
        rating: 0,
        Marques: "Antec",
        Puissance: "1000W",
        Normes: "Platinum",
        availability: "red"
    },
    {
        name: "NeoECO NE750G M",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Antec/NeoECO NE750G M.jpg",
        description: "Alimentation 100% modulaire 750 Watts ATX12V 2.4 80 PLUS Gold",
        price: 129.95,
        rating: 5,
        Marques: "Antec",
        Puissance: "750W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "ASUS ROG LOKI 750W",
        image: "/Website Beta/IMAGES/images composants/Alimentation/ASUS/ASUS ROG LOKI 750W.jpg",
        description: "Alimentation modulaire 750W ATX12V 3.0 - Ventilateur 120 mm - Aura Sync RGB - 80 PLUS Platinum",
        price: 199.95,
        rating: 5,
        Marques: "ASUS",
        Puissance: "750W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "ASUS ROG Thor 1000W Platinum II",
        image: "/Website Beta/IMAGES/images composants/Alimentation/ASUS/ASUS ROG Thor 1000W.jpg",
        description: "Alimentation modulaire 1000W ATX12V v3.0 - Ventilateur 135 mm - Aura Sync RGB - 80 PLUS Platinum",
        price: 399.95,
        rating: 5,
        Marques: "ASUS",
        Puissance: "1000W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "ASUS ROG LOKI 850W",
        image: "/Website Beta/IMAGES/images composants/Alimentation/ASUS/ASUS ROG LOKI 1000W.jpg",
        description: "Alimentation modulaire 850W ATX12V 3.0 - Ventilateur 120 mm - Aura Sync RGB - 80 PLUS Platinum",
        price: 229.95,
        rating: 5,
        Marques: "ASUS",
        Puissance: "750W",
        Normes: "Platinum",
        availability: "orange"
    },
    {
        name: "ASUS ROG LOKI SFX-L 850W Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/ASUS/ASUS ROG LOKI 850W.jpg",
        description: "Alimentation modulaire 850W ATX12V 3.0 - Ventilateur 120 mm - Aura Sync RGB - 80 PLUS Platinum",
        price: 229.95,
        rating: 5,
        Marques: "ASUS",
        Puissance: "850W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "ASUS ROG Thor 1600W Titanium",
        image: "/Website Beta/IMAGES/images composants/Alimentation/ASUS/ASUS ROG Thor 1600W.jpg",
        description: "Alimentation modulaire 750W ATX12V 3.0 - Ventilateur 120 mm - Aura Sync RGB - 80 PLUS Platinum",
        price: 579.95,
        rating: 5,
        Marques: "ASUS",
        Puissance: "1600W",
        Normes: "Platinum",
        availability: "red"
    },
    {
        name: "ASUS ROG LOKI SFX-L 1200W Titanium",
        image: "/Website Beta/IMAGES/images composants/Alimentation/ASUS/ASUS ROG LOKI 1200W.jpg",
        description: "Alimentation modulaire 1200W ATX12V 3.0 - Ventilateur 120 mm - Aura Sync RGB - 80 PLUS Titanium",
        price: 369.95,
        rating: 5,
        Marques: "ASUS",
        Puissance: "1200W",
        Normes: "Titanium",
        availability: "red"
    },
    {
        name: "be quiet ! Dark Power 13 750W",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Dark Power 13 750W.jpg",
        description: "Alimentation 300W TFX12V 2.52 / EPS12V 2.92 80PLUS Gold",
        price: 76.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "300W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "be quiet ! TFX Power 3 300W 80PLUS Bronze",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/TFX Power 3 300W Bronze.jpg",
        description: "Alimentation 300W TFX12V 2.52 / EPS12V 2.92 80PLUS Bronze",
        price: 62.95,
        rating: 4,
        Marques: "BQ",
        Puissance: "300W",
        Normes: "Bronze",
        availability: "green"
    },
    {
        name: "be quiet ! System Power 10 850W",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/System Power 10 850W.jpg",
        description: "Alimentation 850W ATX12V 2.52 / EPS12V 2.92",
        price: 129.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "850W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! System Power 10 650W 80PLUS Bronze",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/System Power 10 650W.jpg",
        description: "Alimentation 650W ATX12V 2.52 / EPS12V 2.92",
        price: 82.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "650W",
        Normes: "Bronze",
        availability: "green"
    },
    {
        name: "be quiet! System Power 10 550W 80PLUS Bronze",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/System Power 10 550W.jpg",
        description: "Alimentation 550W ATX12V 2.52 / EPS12V 2.92",
        price: 70.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "550W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "be quiet! System Power 10 450W 80PLUS Bronze",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/System Power 10 450W.jpg",
        description: "Alimentation 450W ATX12V 2.52 / EPS12V 2.92",
        price: 59.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "450W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "be quiet! Straight Power 12 850W 80PLUS Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Straight Power 12 850W.jpg",
        description: "Alimentation 300W SFX12V 3.42 / EPS12V 2.92 80PLUS Bronze",
        price: 194.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "300W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "be quiet! Straight Power 12 750W 80PLUS Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 M 750W.jpg",
        description: "Alimentation modulaire 750W ATX 12V 3.0/EPS 12V 2.92",
        price: 172.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "red",
        Normes: "Platinum",
        availability: "red"
    },
    {
        name: "be quiet! Straight Power 12 1200W 80PLUS Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Straight Power 12 1200W.jpg",
        description: "Alimentation modulaire 1200W ATX 12V 3.0/EPS 12V 2.92",
        price: 249.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "1200W",
        Normes: "Platinum",
        availability: "red"
    },
    {
        name: "be quiet! Straight Power 12 1000W 80PLUS Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Straight Power 12 1000W.jpg",
        description: "Alimentation modulaire 1000W ATX 12V 3.0/EPS 12V 2.92",
        price: 232.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "1000W",
        Normes: "Platinum",
        availability: "red"
    },
    {
        name: "be quiet! SFX Power 3 450W 80PLUS Bronze",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/SFX Power 3 450W.jpg",
        description: "Alimentation 450W SFX12V 3.42 / EPS12V 2.92 80PLUS Bronze",
        price: 76.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "450W",
        Normes: "Bronze",
        availability: "green"
    },
    {
        name: "be quiet! SFX Power 3 300W 80PLUS Bronze",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/SFX Power 3 300W.jpg",
        description: "Alimentation 300W SFX12V 3.42 / EPS12V 2.92 80PLUS Bronze",
        price: 64.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "300W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 M 850W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 M 850W.jpg",
        description: "Alimentation 100% modulaire 850W ATX12V 3.0 / EPS12V - 80PLUS Gold",
        price: 149.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "850W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 M 750W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 M 750W.jpg",
        description: "Alimentation 100% modulaire 750W ATX12V 3.0 / EPS12V - 80PLUS Gold",
        price: 132.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "750W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "be quiet! Pure Power 12 M 650W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 M 650W.jpg",
        description: "Alimentation 100% modulaire 650W ATX12V 3.0 / EPS12V - 80PLUS Gold",
        price: 121.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "650W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "be quiet! Pure Power 12 M 550W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 M 550W.jpg",
        description: "Alimentation 100% modulaire 550W ATX12V 3.0 / EPS12V - 80PLUS Gold",
        price: 104.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "550W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "be quiet! Pure Power 12 M 1200W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 M 1200W.jpg",
        description: "Alimentation 100% modulaire 1200W ATX12V 3.0 / EPS12V 2.92 - 80PLUS Gold",
        price: 229.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "1200W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 M 1000W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 M 1000W.jpg",
        description: "Alimentation 100% modulaire 1000W ATX12V 3.0 / EPS12V - 80PLUS Gold",
        price: 184.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "1000W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 850W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 850W.jpg",
        description: "Alimentation 850W ATX 3.1 - 80PLUS Gold",
        price: 124.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "850W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 750W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 750W.jpg",
        description: "Alimentation 750W ATX 3.1 - 80PLUS Gold",
        price: 114.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "750W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 650W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 650W.jpg",
        description: "Alimentation 650W ATX 3.1 - 80PLUS Gold",
        price: 99.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "650W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 550W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 550W.jpg",
        description: "Alimentation 550W ATX 3.1 - 80PLUS Gold",
        price: 84.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "550W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Pure Power 12 1000W 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Pure Power 12 1000W.jpg",
        description: "Alimentation 1000W ATX 3.1 - 80PLUS Gold",
        price: 149.95,
        rating: 5,
        Marques: "BQ",
        Puissance: "1000W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "be quiet! Dark Power 13 850W 80PLUS Titanium",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Dark Power 13 850W.jpg",
        description: "Alimentation modulaire 850W ATX 12V 3.0/EPS 12V",
        price: 279.95,
        rating: 4,
        Marques: "BQ",
        Puissance: "850W",
        Normes: "Titanium",
        availability: "green"
    },
    {
        name: "be quiet! Dark Power 13 750W 80PLUS Titanium",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Dark Power 13 750W.jpg",
        description: "Alimentation modulaire 850W ATX 12V 3.0/EPS 12V",
        price: 229.95,
        rating: 4,
        Marques: "BQ",
        Puissance: "750W",
        Normes: "Titanium",
        availability: "red"
    },
    {
        name: "be quiet! Dark Power 13 1000W 80PLUS Titanium",
        image: "/Website Beta/IMAGES/images composants/Alimentation/be quiet !/Dark Power 13 1000W.jpg",
        description: "Alimentation modulaire 1000W ATX 12V 3.0/EPS 12V",
        price: 319.95,
        rating: 4,
        Marques: "BQ",
        Puissance: "1000W",
        Normes: "Titanium",
        availability: "green"
    },
    {
        name: "Cooler Master MWE Bronze 750W V3",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Cooler Master/MWE 750W.jpg",
        description: "Alimentation 750W ATX3.1 - 80PLUS Bronze",
        price: 77.95,
        rating: 4,
        Marques: "CM",
        Puissance: "750W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "Cooler Master MWE Bronze 650W V3",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Cooler Master/MWE 750W.jpg",
        description: "Alimentation 750W ATX3.1 - 80PLUS Bronze",
        price: 69.95,
        rating: 4,
        Marques: "CM",
        Puissance: "750W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "Corsair AX1600i 80PLUS Titanium",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/AX1600I.jpg",
        description: "Alimentation modulaire 1600W ATX 12V 2.4 / EPS 2.92 - 80PLUS Titanium",
        price: 699.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "1600W",
        Normes: "Titanium",
        availability: "red"
    },
    {
        name: "Corsair CX550 80PLUS Bronze (2023)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/CX 550.jpg",
        description: "Alimentation 550W ATX12V 2.4/EPS12V 2.92 - 80PLUS Bronze",
        price: 79.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "550w",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "Corsair CX650 80PLUS Bronze (2023)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/CX650.jpg",
        description: "Alimentation 650W ATX12V 2.4/EPS12V 2.92 - 80PLUS Bronze",
        price: 84.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "650w",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "Corsair CX750 80PLUS Bronze (2023)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/CX750.jpg",
        description: "Alimentation 750W ATX12V 2.4/EPS12V 2.92 - 80PLUS Bronze",
        price: 89.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "750w",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "Corsair HX1000i 80PLUS Platinum ATX 3.1",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/HX1000I.jpg",
        description: "Alimentation 100% modulaire semi-passive 1000W ATX12V 3.1/EPS12V 2.92 - 80PLUS Platinum",
        price: 299.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "1000W",
        Normes: "Platinum",
        availability: "red"
    },
    {
        name: "Corsair HX1500i 80PLUS Platinum ATX 3.1",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/HX1000I.jpg",
        description: "Alimentation 100% modulaire semi-passive 1000W ATX12V 3.1/EPS12V 2.92 - 80PLUS Platinum",
        price: 399.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "1500W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "Corsair HX750 80PLUS Platinum",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/HX750.jpg",
        description: "Alimentation modulaire semi-passive 750W ATX 12V 2.4/EPS 12V - 80PLUS Platinum",
        price: 159.95,
        rating: 4,
        Marques: "Corsair",
        Puissance: "750W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "Corsair RM1000e (2025)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM1000e 2025.jpg",
        description: "Alimentation modulaire ATX 1000W ATX12V 3.1 - Cybenetics Gold",
        price: 174.95,
        rating: 0,
        Marques: "Corsair",
        Puissance: "1000W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Corsair RM1000x Cybenetics Gold (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM1000x 2024.jpg",
        description: "Alimentation 100% modulaire 1000W ATX 3.1 - Cybenetics Gold",
        price: 219.95,
        rating: 0,
        Marques: "Corsair",
        Puissance: "1000W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Corsair RM750e (2025)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM750 2025.jpg",
        description: "Alimentation modulaire ATX 750W ATX12V 3.1 - Cybenetics Gold",
        price: 129.95,
        rating: 0,
        Marques: "Corsair",
        Puissance: "750W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Corsair RM750x Cybenetics Gold (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM750x 2024.jpg",
        description: "Alimentation 100% modulaire 750W ATX 3.1 - Cybenetics Gold",
        price: 164.95,
        rating: 0,
        Marques: "Corsair",
        Puissance: "750W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Corsair RM850e (2025)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM850e 2025.jpg",
        description: "Alimentation modulaire ATX 850W ATX12V 3.1 - Cybenetics Gold",
        price: 139.95,
        rating: 0,
        Marques: "Corsair",
        Puissance: "850W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Corsair RM850e 80PLUS Gold (ATX 3.0)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM850e.jpg",
        description: "Alimentation modulaire ATX 850W ATX12V 3.0 - 80PLUS Gold",
        price: 199.95,
        rating: 4,
        Marques: "Corsair",
        Puissance: "850W",
        Normes: "Gold",
        availability: "black"
    },
    {
        name: "Corsair RM850x Cybenetics Gold (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM850x.jpg",
        description: "Alimentation 100% modulaire 850W ATX 3.1 - Cybenetics Gold",
        price: 179.95,
        rating: 0,
        Marques: "Corsair",
        Puissance: "850W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Corsair RMx Series (2021) RM750x 80PLUS Gold",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Corsair/RM750x 2021.jpg",
        description: "Alimentation 100% modulaire 750W ATX 12V / EPS 12V - 80PLUS Gold",
        price: 169.95,
        rating: 5,
        Marques: "Corsair",
        Puissance: "750W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MPG A850GS PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/MPG A850GS.jpg",
        description: "Alimentation 100% modulaire 850W ATX12V 3.1 - 80PLUS Gold",
        price: 179.95,
        rating: 0,
        Marques: "MSI",
        Puissance: "850W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MPG A850G PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/MPG A850G.jpg",
        description: "Alimentation 100% modulaire 850W ATX12V 3.0 - 80PLUS Gold",
        price: 164.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "850W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MPG A1250GS PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/MPG A1250GS.jpg",
        description: "Alimentation 100% modulaire 1250W ATX12V 3.1 - 80PLUS Gold",
        price: 249.95,
        rating: 0,
        Marques: "MSI",
        Puissance: "1250W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MPG A1000GS PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/MPG A1000GS.jpg",
        description: "Alimentation 100% modulaire 1000W ATX12V 3.1 - 80PLUS Gold",
        price: 229.95,
        rating: 0,
        Marques: "MSI",
        Puissance: "1000W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MEG Ai1600T PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/MEG AI1600T.jpg",
        description: "Alimentation 100% modulaire 1600W ATX12V 3.1 - 80PLUS Titanium",
        price: 799.95,
        rating: 0,
        Marques: "MSI",
        Puissance: "1600W",
        Normes: "Titanium",
        availability: "green"
    },
    {
        name: "MSI MAG A850GL PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A850GL.jpg",
        description: "Alimentation 100% modulaire 850W ATX12V 3.0 - 80PLUS Gold",
        price: 144.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "850W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MAG A750GL PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A750GL.jpg",
        description: "Alimentation 100% modulaire 750W ATX12V 3.0 - 80PLUS Gold",
        price: 129.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "750W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "MSI MAG A750BN PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A750BN.jpg",
        description: "Alimentation 750W ATX12V 3.0 - 80PLUS Bronze",
        price: 99.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "750W",
        Normes: "Bronze",
        availability: "red"
    },
    {
        name: "MSI MAG A750BE",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A750BE.jpg",
        description: "Alimentation semi-modulaire 750W ATX12V - 80PLUS Bronze",
        price: 89.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "750W",
        Normes: "Bronze",
        availability: "green"
    },
    {
        name: "MSI MAG A650GL",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A650GL.jpg",
        description: "Alimentation 100% modulaire 650W ATX12V - 80PLUS Gold",
        price: 99.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "650W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MAG A650BN",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A650BN.jpg",
        description: "Alimentation 650W ATX 12V - 80PLUS Bronze",
        price: 79.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "650W",
        Normes: "Bronze",
        availability: "green"
    },
    {
        name: "MSI MAG A650BE",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A650BE.jpg",
        description: "Alimentation semi-modulaire 650W ATX12V - 80PLUS Bronze",
        price: 79.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "650W",
        Normes: "Bronze",
        availability: "green"
    },
    {
        name: "MSI MAG A550BN",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A550BN.jpg",
        description: "Alimentation 550W ATX 12V - 80PLUS Bronze",
        price: 69.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "550W",
        Normes: "Bronze",
        availability: "green"
    },
    {
        name: "MSI MAG A1250GL PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A1250GL.jpg",
        description: "Alimentation 100% modulaire 1250W ATX12V 3.1 - 80PLUS Gold",
        price: 229.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "1250W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "MSI MAG A1000GL PCIE5",
        image: "/Website Beta/IMAGES/images composants/Alimentation/MSi/A1000GL.jpg",
        description: "Alimentation 100% modulaire 1000W ATX12V 3.1 - 80PLUS Gold",
        price: 189.95,
        rating: 5,
        Marques: "MSI",
        Puissance: "1000W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Seasonic FOCUS GX-850 ATX 3 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS GX-850 2024.jpg",
        description: "Alimentation modulaire 850W ATX12V 3.1 - 80PLUS Gold",
        price: 209.95,
        rating: 0,
        Marques: "SS",
        Puissance: "850W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic FOCUS GX-1000 ATX 3 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS GX-1000.jpg",
        description: "Alimentation modulaire 1000W ATX12V 3.1 - 80PLUS Gold",
        price: 249.95,
        rating: 0,
        Marques: "SS",
        Puissance: "1000W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Seasonic G12 GC-850 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/G12 GC-850 2024.jpg",
        description: "Alimentation 850W ATX12V - 80PLUS Gold",
        price: 139.95,
        rating: 5,
        Marques: "SS",
        Puissance: "850W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic PRIME PX-650",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/PRIME PX-650.jpg",
        description: "Alimentation 100% modulaire 650W ATX/EPS 12V - 80PLUS Platinum",
        price: 139.95,
        rating: 4,
        Marques: "SS",
        Puissance: "650W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "Seasonic G12 GM-650 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/G12 GM-650 2024.jpg",
        description: "Alimentation semi-modulaire 650W ATX12V - 80PLUS Gold",
        price: 109.95,
        rating: 5,
        Marques: "SS",
        Puissance: "650W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic CORE GX ATX 3 (2024) 850 W",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/CORE GX ATX.jpg",
        description: "Alimentation 100% modulaire ATX12V 3.1 850W - 80PLUS Gold",
        price: 169.95,
        rating: 0,
        Marques: "SS",
        Puissance: "850W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic G12 GC-750 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/G12 GC-750 2024.jpg",
        description: "Alimentation 750W ATX12V - 80PLUS Gold",
        price: 119.95,
        rating: 5,
        Marques: "SS",
        Puissance: "750W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic FOCUS GX-750 ATX 3 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS GX-750 2024.jpg",
        description: "Alimentation modulaire 750W ATX12V 3.1 - 80PLUS Gold",
        price: 169.95,
        rating: 0,
        Marques: "SS",
        Puissance: "750W",
        Normes: "Gold",
        availability: "blue"
    },
    {
        name: "Seasonic FOCUS GX-750 ATX 3 (2024) - Blanc",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS GX-750 2024 WHITE.jpg",
        description: "Alimentation modulaire 750W ATX12V 3.1 - 80PLUS Gold",
        price: 189.95,
        rating: 0,
        Marques: "SS",
        Puissance: "750W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic FOCUS GX-850 ATX 3 (2024) - Blanc",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS GX-850 WHITE.jpg",
        description: "Alimentation modulaire 850W ATX12V 3.1 - 80PLUS Gold",
        price: 209.95,
        rating: 0,
        Marques: "SS",
        Puissance: "850W",
        Normes: "Gold",
        availability: "red"
    },
    {
        name: "Seasonic G12 GM-750 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/G12 GM-750 2024.jpg",
        description: "Alimentation semi-modulaire 750W ATX12V - 80PLUS Gold",
        price: 129.95,
        rating: 5,
        Marques: "SS",
        Puissance: "750W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic VERTEX PX-750",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/VERTEX PX-750.jpg",
        description: "Alimentation modulaire 750W ATX12V 3.0/EPS 12V - 80PLUS Platinum",
        price: 189.95,
        rating: 5,
        Marques: "SS",
        Puissance: "750W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "Seasonic FOCUS SPX-650",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS SPX-650.jpg",
        description: "Alimentation modulaire 650W SFX12V/ATX12V - 80PLUS Platinum",
        price: 199.95,
        rating: 4,
        Marques: "SS",
        Puissance: "650W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "Seasonic FOCUS SPX-750",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS SPX-750.jpg",
        description: "Alimentation modulaire 750W SFX12V/ATX12V - 80PLUS Platinum",
        price: 219.95,
        rating: 4,
        Marques: "SS",
        Puissance: "750W",
        Normes: "Platinum",
        availability: "green"
    },
    {
        name: "Seasonic G12 GC-650 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/G12 GC-650 2024.jpg",
        description: "Alimentation 650W ATX12V - 80PLUS Gold",
        price: 99.95,
        rating: 5,
        Marques: "SS",
        Puissance: "650W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic CORE GX ATX 3 (2024) 650 W",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/CORE GX 2024 650.jpg",
        description: "Alimentation 100% modulaire ATX12V 3.1 650W - 80PLUS Gold",
        price: 129.95,
        rating: 0,
        Marques: "SS",
        Puissance: "650W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic CORE GX ATX 3 (2024) 750 W",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/CORE GX 2024 750.jpg",
        description: "Alimentation 100% modulaire ATX12V 3.1 750W - 80PLUS Gold",
        price: 149.95,
        rating: 0,
        Marques: "SS",
        Puissance: "750W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic FOCUS SGX-650",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/FOCUS SGX-650.jpg",
        description: "Alimentation modulaire 650W SFX12V/ATX12V - 80PLUS Gold",
        price: 169.95,
        rating: 4,
        Marques: "SS",
        Puissance: "650W",
        Normes: "Gold",
        availability: "green"
    },
    {
        name: "Seasonic G12 GM-850 (2024)",
        image: "/Website Beta/IMAGES/images composants/Alimentation/Seasonic/G12 GM-850 2024.jpg",
        description: "Alimentation semi-modulaire 850W ATX12V - 80PLUS Gold",
        price: 149.95,
        rating: 5,
        Marques: "SS",
        Puissance: "850W",
        Normes: "Gold",
        availability: "red"
    },
];

let sortOrder = {
    rating: 1,
    price: 1,
    availability: 1
};

function applyFiltersAndSort() {
    let filteredData = productData.filter(product => {
        const matchesMarques = !Marques.value || product.Marques === Marques.value;
        const matchesPuissance = !Puissance.value || product.Puissance === Puissance.value;
        const matchesNormes = !Normes.value || product.Normes === Normes.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesMarques && matchesPuissance && matchesNormes && matchesSearch;
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

    if (filteredData.length === 0) {
        tableBody.innerHTML = "";
        tableBody.parentNode.appendChild(errorMessage);
        productImage.src ="/Website Beta/IMAGES/Image complémentaires/Interdiction.jpg";
        productTitle.textContent = "";
        productDescription.textContent = "";
    } else {
        if (errorMessage.parentNode) {
            errorMessage.parentNode.removeChild(errorMessage);
        }
    }
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

function initializeTable() {
    const sortedData = [...productData].sort((a, b) => a.name.localeCompare(b.name));
    renderTable(sortedData);
}

initializeTable();


[Marques, Puissance, Normes, searchBar].forEach(filter => {
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

tableBody.addEventListener("mouseover", (e) => {
    const row = e.target.closest("tr");
    if (!row) return;

    const productName = row.querySelector("td:first-child").textContent.trim();
    const product = productData.find(p => p.name === productName);

    if (product) {
        productImage.src = product.image;
        productTitle.textContent = product.name;
        productDescription.textContent = product.description;
    }
});

function updateProductCount(count) {
    const productCountElement = document.getElementById("productCount");
    productCountElement.textContent = `(${count})`;
}

function applyFiltersAndSort() {
    let filteredData = productData.filter(product => {
        const matchesMarques = !Marques.value || product.Marques === Marques.value;
        const matchesPuissance = !Puissance.value || product.Puissance === Puissance.value;
        const matchesNormes = !Normes.value || product.Normes === Normes.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesMarques && matchesPuissance && matchesNormes && matchesSearch;
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

function initializeTable() {
    const sortedData = [...productData].sort((a, b) => a.name.localeCompare(b.name));
    renderTable(sortedData);
    updateProductCount(sortedData.length);
}

initializeTable();

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

validateButton.addEventListener("click", () => {
    const selectedProducts = [];
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']:checked");

    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr");
        const productName = row.querySelector("td:first-child").textContent.trim();
        const productPrice = row.querySelector(".price").textContent.trim();
        const productImage = productData.find(p => p.name === productName)?.image || "";

        selectedProducts.push({ 
            name: productName, 
            price: productPrice, 
            image: productImage 
        });
    });

    if (selectedProducts.length > 0) {

        let existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];

        existingProducts = existingProducts.concat(selectedProducts);

        localStorage.setItem("selectedProducts", JSON.stringify(existingProducts));


        console.log("Produits ajoutés au panier :", existingProducts);

        window.location.href = "/Website Beta/Page du panier/Panier.html";
    } else {
        alert("Veuillez sélectionner au moins une alimentation avant de valider.");
    }
});