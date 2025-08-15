const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const socketFilter = document.querySelector("#socketFilter");
const modelFilter = document.querySelector("#modelFilter");
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
            "name": "Processeur AMD Ryzen 3 3200G Wraith Stealth Edition",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 3 3200G Wraith Stealth Edition (3.6 GHz  4 GHz).jpg",
            "description": "Processeur AMD Ryzen 3 3200G avec ventilateur Wraith Stealth - 4 coeurs / 4 threads - 3.6 GHz / 4 GHz - Socket AM4",
            "price": 99,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 3",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 3 4100 Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 3 4100 Wraith Stealth (3.8 GHz  4.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 3 4100 avec ventilateur Wraith Stealth - 4 coeurs / 8 threads - 3.8 GHz / 4.0 GHz - Socket AM4",
            "price": 119,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 3",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 3 4300G Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 3 4300G Wraith Stealth (3.8 GHz  4.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 3 4300G avec ventilateur Wraith Stealth - 4 coeurs / 8 threads - 3.8 GHz / 4.0 GHz - Socket AM4",
            "price": 129,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 3",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 3400G BULK",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 3400G (3.7 GHz  4.2 GHz) BULK.jpg",
            "description": "Processeur AMD Ryzen 5 3400G (version bulk) - 4 coeurs / 8 threads - 3.7 GHz / 4.2 GHz - Socket AM4",
            "price": 149,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 3400G Wraith Spire Edition",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 3400G Wraith Spire Edition (3.7 GHz  4.2 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 3400G avec ventilateur Wraith Spire - 4 coeurs / 8 threads - 3.7 GHz / 4.2 GHz - Socket AM4",
            "price": 159,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 3600 avec ventilateur",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 3600 (3.6 GHz  4.2 GHz) avec ventilateur.jpg",
            "description": "Processeur AMD Ryzen 5 3600 avec ventilateur - 6 coeurs / 12 threads - 3.6 GHz / 4.2 GHz - Socket AM4",
            "price": 199,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 3600 Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 3600 Wraith Stealth (3.6 GHz  4.2 GHz) Boîte.jpg",
            "description": "Processeur AMD Ryzen 5 3600 avec ventilateur Wraith Stealth (version boîte) - 6 coeurs / 12 threads - 3.6 GHz / 4.2 GHz - Socket AM4",
            "price": 209,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 4500 Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 4500 Wraith Stealth (3.6 GHz  4.1 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 4500 avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.6 GHz / 4.1 GHz - Socket AM4",
            "price": 179,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 4600G Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 4600G Wraith Stealth (3.7 GHz  4.2 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 4600G avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.7 GHz / 4.2 GHz - Socket AM4",
            "price": 189,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5500 sans ventilateur",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5500 (3.6 GHz  4.2 GHz) SV.jpg",
            "description": "Processeur AMD Ryzen 5 5500 (version SV) - 6 coeurs / 12 threads - 3.6 GHz / 4.2 GHz - Socket AM4",
            "price": 169,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5500 Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5500 Wraith Stealth (3.6 GHz  4.2 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5500 avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.6 GHz / 4.2 GHz - Socket AM4",
            "price": 179,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5500GT Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5500GT Wraith Stealth (3.6 GHz  4.4 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5500GT avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.6 GHz / 4.4 GHz - Socket AM4",
            "price": 199,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5600 Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5600 Wraith Stealth (3.5 GHz  4.4 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5600 avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.5 GHz / 4.4 GHz - Socket AM4",
            "price": 229,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5600G Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5600G Wraith Stealth (3.9 GHz  4.4 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5600G avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.9 GHz / 4.4 GHz - Socket AM4",
            "price": 239,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5600GT Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5600GT Wraith Stealth (3.6 GHz  4.6 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5600GT avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.6 GHz / 4.6 GHz - Socket AM4",
            "price": 249,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5600T Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5600T Wraith Stealth (3.7 GHz  4.5 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5600T avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.7 GHz / 4.5 GHz - Socket AM4",
            "price": 259,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5600X Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5600X Wraith Stealth (3.7 GHz  4.6 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5600X avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.7 GHz / 4.6 GHz - Socket AM4",
            "price": 299,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 5600XT Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 5600XT Wraith Stealth (3.7 GHz  4.7 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 5600XT avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.7 GHz / 4.7 GHz - Socket AM4",
            "price": 319,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 7500F Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 7500F Wraith Stealth (3.7 GHz  5.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 7500F avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.7 GHz / 5.0 GHz - Socket AM5",
            "price": 349,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 7600 Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 7600 Wraith Stealth (3.8 GHz  5.1 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 7600 avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.8 GHz / 5.1 GHz - Socket AM5",
            "price": 399,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 7600X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 7600X (4.7 GHz  5.3 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 7600X - 6 coeurs / 12 threads - 4.7 GHz / 5.3 GHz - Socket AM5",
            "price": 449,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 8400F Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 8400F Wraith Stealth (4.2 GHz  4.7 GHz) - Version tray.jpg",
            "description": "Processeur AMD Ryzen 5 8400F (version tray) - 6 coeurs / 12 threads - 4.2 GHz / 4.7 GHz - Socket AM5",
            "price": 299,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 8400F Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 8400F Wraith Stealth (4.2 GHz  4.7 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 8400F avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 4.2 GHz / 4.7 GHz - Socket AM5",
            "price": 309,
            "rating": 4,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 8500G Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 8500G Wraith Stealth (3.5 GHz  5.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 8500G avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.5 GHz / 5.0 GHz - Socket AM5",
            "price": 349,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 8600G Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 8600G Wraith Stealth (4.3 GHz  5.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 8600G avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 4.3 GHz / 5.0 GHz - Socket AM5",
            "price": 399,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 9600 Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 9600 Wraith Stealth (3.8 GHz  5.2 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 9600 avec ventilateur Wraith Stealth - 6 coeurs / 12 threads - 3.8 GHz / 5.2 GHz - Socket AM5",
            "price": 449,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 5 9600X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 5 9600X (3.9 GHz  5.4 GHz).jpg",
            "description": "Processeur AMD Ryzen 5 9600X - 6 coeurs / 12 threads - 3.9 GHz / 5.4 GHz - Socket AM5",
            "price": 499,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 5",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 5700 Wraith Spire",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 5700 Wraith Spire (3.7 GHz  4.6 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 5700 avec ventilateur Wraith Spire - 8 coeurs / 16 threads - 3.7 GHz / 4.6 GHz - Socket AM4",
            "price": 349,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 5700G Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 5700G Wraith Stealth (3.8 GHz  4.6 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 5700G avec ventilateur Wraith Stealth - 8 coeurs / 16 threads - 3.8 GHz / 4.6 GHz - Socket AM4",
            "price": 369,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 5700X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 5700X (3.4 GHz  4.6 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 5700X - 8 coeurs / 16 threads - 3.4 GHz / 4.6 GHz - Socket AM4",
            "price": 399,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 5700X3D",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 5700X3D (3.0 GHz  4.1 GHz) - Version tray.jpg",
            "description": "Processeur AMD Ryzen 7 5700X3D (version tray) - 8 coeurs / 16 threads - 3.0 GHz / 4.1 GHz - Socket AM4",
            "price": 449,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 5700X3D",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 5700X3D (3.0 GHz  4.1 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 5700X3D - 8 coeurs / 16 threads - 3.0 GHz / 4.1 GHz - Socket AM4",
            "price": 459,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 5800X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 5800X (3.8 GHz  4.7 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 5800X - 8 coeurs / 16 threads - 3.8 GHz / 4.7 GHz - Socket AM4",
            "price": 499,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 5800XT Wraith Prism",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 5800XT Wraith Prism (3.8 GHz  4.8 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 5800XT avec ventilateur Wraith Prism - 8 coeurs / 16 threads - 3.8 GHz / 4.8 GHz - Socket AM4",
            "price": 529,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 7700 Wraith Prism",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 7700 Wraith Prism (3.8 GHz  5.3 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 7700 avec ventilateur Wraith Prism - 8 coeurs / 16 threads - 3.8 GHz / 5.3 GHz - Socket AM5",
            "price": 599,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 7700X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 7700X (4.5 GHz  5.4 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 7700X - 8 coeurs / 16 threads - 4.5 GHz / 5.4 GHz - Socket AM5",
            "price": 649,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 7800X3D",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 7800X3D (4.2 GHz  5.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 7800X3D - 8 coeurs / 16 threads - 4.2 GHz / 5.0 GHz - Socket AM5",
            "price": 699,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 7800X3D Bundle The Force",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 7800X3D Bundle The Force.jpg",
            "description": "Processeur AMD Ryzen 7 7800X3D (bundle The Force) - 8 coeurs / 16 threads - 4.2 GHz / 5.0 GHz - Socket AM5",
            "price": 749,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 8700F",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 8700F (4.1 GHz  5.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 8700F - 8 coeurs / 16 threads - 4.1 GHz / 5.0 GHz - Socket AM5",
            "price": 499,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 8700F Wraith Stealth",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 8700F Wraith Stealth (4.1 GHz  5.0 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 8700F avec ventilateur Wraith Stealth - 8 coeurs / 16 threads - 4.1 GHz / 5.0 GHz - Socket AM5",
            "price": 519,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 8700G Wraith Spire",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 8700G Wraith Spire (4.2 GHz  5.1 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 8700G avec ventilateur Wraith Spire - 8 coeurs / 16 threads - 4.2 GHz / 5.1 GHz - Socket AM5",
            "price": 549,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 9700X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 9700X (3.8 GHz  5.5 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 9700X - 8 coeurs / 16 threads - 3.8 GHz / 5.5 GHz - Socket AM5",
            "price": 699,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 9800X3D sans ventilateur",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 9800X3D (4.7 GHz  5.2 GHz) SV.jpg",
            "description": "Processeur AMD Ryzen 7 9800X3D (version boite sans ventilateur) - 8 coeurs / 16 threads - 4.7 GHz / 5.2 GHz - Socket AM5",
            "price": 799,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 7 9800X3D",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 7 9800X3D (4.7 GHz  5.2 GHz).jpg",
            "description": "Processeur AMD Ryzen 7 9800X3D - 8 coeurs / 16 threads - 4.7 GHz / 5.2 GHz - Socket AM5",
            "price": 809,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 7",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 5900X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 5900X (3.7 GHz  4.8 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 5900X - 12 coeurs / 24 threads - 3.7 GHz / 4.8 GHz - Socket AM4",
            "price": 549,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 5900XT",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 5900XT (3.3 GHz  4.8 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 5900XT - 12 coeurs / 24 threads - 3.3 GHz / 4.8 GHz - Socket AM4",
            "price": 599,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 5950X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 5950X (3.4 GHz  4.9 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 5950X - 16 coeurs / 32 threads - 3.4 GHz / 4.9 GHz - Socket AM4",
            "price": 799,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM4",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 7900 Wraith Prism",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 7900 Wraith Prism (3.7 GHz  5.4 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 7900 avec ventilateur Wraith Prism - 12 coeurs / 24 threads - 3.7 GHz / 5.4 GHz - Socket AM5",
            "price": 899,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 7900X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 7900X (4.7 GHz  5.6 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 7900X - 12 coeurs / 24 threads - 4.7 GHz / 5.6 GHz - Socket AM5",
            "price": 999,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 7950X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 7950X (4.5 GHz  5.7 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 7950X - 16 coeurs / 32 threads - 4.5 GHz / 5.7 GHz - Socket AM5",
            "price": 1199,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 7950X3D",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 7950X3D (4.2 GHz  5.7 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 7950X3D - 16 coeurs / 32 threads - 4.2 GHz / 5.7 GHz - Socket AM5",
            "price": 1299,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 9900X sans ventilateur",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 9900X (4.4 GHz  5.6 GHz) SV.jpg",
            "description": "Processeur AMD Ryzen 9 9900X (version SV) - 12 coeurs / 24 threads - 4.4 GHz / 5.6 GHz - Socket AM5",
            "price": 1099,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            "name": "Processeur AMD Ryzen 9 9900X",
            "image": "/Website Beta/IMAGES/images composants/Processeurs/AMD/AMD Ryzen 9 9900X (4.4 GHz  5.6 GHz).jpg",
            "description": "Processeur AMD Ryzen 9 9900X - 12 coeurs / 24 threads - 4.4 GHz / 5.6 GHz - Socket AM5",
            "price": 1099,
            "rating": 5,
            "brand": "AMD",
            "socket": "AMD AM5",
            "model": "AMD Ryzen 9",
            "availability": "green"
        },
        {
            name: "Processeur Intel Celeron G5905",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Celeron G5905 (3.5 GHz).jpg",
            description: "Processeur Intel Celeron G5905 (3.5 GHz) - Socket LGA1200 - 2 cores / 2 threads - Cache 4 Mo - 58W",
            price: 49,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1200",
            model: "Intel Celeron",
            availability: "green",
        },
        {
            name: "Processeur Intel Celeron G5925",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Celeron G5925 (3.6 GHz).jpg",
            description: "Processeur Intel Celeron G5925 (3.6 GHz) - Socket LGA1200 - 2 cores / 2 threads - Cache 4 Mo - 58W",
            price: 54,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1200",
            model: "Intel Celeron",
            availability: "green",
        },
        {
            name: "Processeur Intel Celeron G6900",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Celeron G6900 (3.4 GHz).jpg",
            description: "Processeur Intel Celeron G6900 (3.4 GHz) - Socket LGA1700 - 2 cores / 2 threads - Cache 4 Mo - 46W",
            price: 59,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Celeron",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 5 225",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 5 225 (3.3 GHz  4.9 GHz).jpg",
            description: "Processeur Intel Core Ultra 5 225 (3.3 GHz  4.9 GHz) - Socket LGA1700 - 6 cores / 12 threads - Cache 18 Mo - 65W",
            price: 199,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 5 225F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 5 225F (3.3 GHz  4.9 GHz).jpg",
            description: "Processeur Intel Core Ultra 5 225F (3.3 GHz  4.9 GHz) - Socket LGA1700 - 6 cores / 12 threads - Cache 18 Mo - 65W",
            price: 189,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 5 235",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 5 235 (3.4 GHz  5.0 GHz).jpg",
            description: "Processeur Intel Core Ultra 5 235 (3.4 GHz  5.0 GHz) - Socket LGA1700 - 6 cores / 12 threads - Cache 18 Mo - 65W",
            price: 219,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 5 245K - Version tray",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 5 245K (4.2 GHz  5.2 GHz) - Version tray.jpg",
            description: "Processeur Intel Core Ultra 5 245K (4.2 GHz  5.2 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 125W",
            price: 299,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 5 245K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 5 245K (4.2 GHz  5.2 GHz).jpg",
            description: "Processeur Intel Core Ultra 5 245K (4.2 GHz  5.2 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 125W",
            price: 309,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 5 245KF - Version tray",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 5 245KF (4.2 GHz  5.2 GHz) - Version tray.jpg",
            description: "Processeur Intel Core Ultra 5 245KF (4.2 GHz  5.2 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 125W",
            price: 289,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 5 245KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 5 245KF (4.2 GHz  5.2 GHz).jpg",
            description: "Processeur Intel Core Ultra 5 245KF (4.2 GHz  5.2 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 125W",
            price: 299,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 7 265",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 7 265 (2.4 GHz  5.3 GHz).jpg",
            description: "Processeur Intel Core Ultra 7 265 (2.4 GHz  5.3 GHz) - Socket LGA1700 - 12 cores / 20 threads - Cache 25 Mo - 125W",
            price: 399,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 7 265F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 7 265F (2.4 GHz  5.3 GHz).jpg",
            description: "Processeur Intel Core Ultra 7 265F (2.4 GHz  5.3 GHz) - Socket LGA1700 - 12 cores / 20 threads - Cache 25 Mo - 125W",
            price: 389,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 7 265K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 7 265K (3.9 GHz  5.5 GHz).jpg",
            description: "Processeur Intel Core Ultra 7 265K (3.9 GHz  5.5 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 499,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 7 265KF - Version tray",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 7 265KF (3.9 GHz  5.5 GHz) - Version tray.jpg",
            description: "Processeur Intel Core Ultra 7 265KF (3.9 GHz  5.5 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 489,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 7 265KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 7 265KF (3.9 GHz  5.5 GHz).jpg",
            description: "Processeur Intel Core Ultra 7 265KF (3.9 GHz  5.5 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 499,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 9 285",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 9 285 (2.5 GHz  5.6 GHz).jpg",
            description: "Processeur Intel Core Ultra 9 285 (2.5 GHz  5.6 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 599,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 9 285K - Version tray",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 9 285K (3.7 GHz  5.7 GHz) - Version tray.jpg",
            description: "Processeur Intel Core Ultra 9 285K (3.7 GHz  5.7 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 589,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core Ultra 9 285K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core Ultra 9 285K (3.7 GHz  5.7 GHz).jpg",
            description: "Processeur Intel Core Ultra 9 285K (3.7 GHz  5.7 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 599,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-10100",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-10100 (3.6 GHz  4.3 GHz).jpg",
            description: "Processeur Intel Core i3-10100 (3.6 GHz  4.3 GHz) - Socket LGA1200 - 4 cores / 8 threads - Cache 6 Mo - 65W",
            price: 99,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1200",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-12100",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-12100 (3.3 GHz  4.3 GHz).jpg",
            description: "Processeur Intel Core i3-12100 (3.3 GHz  4.3 GHz) - Socket LGA1700 - 4 cores / 8 threads - Cache 12 Mo - 60W",
            price: 129,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-12100F - Version tray",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-12100F (3.3 GHz  4.3 GHz) - Version tray.jpg",
            description: "Processeur Intel Core i3-12100F (3.3 GHz  4.3 GHz) - Socket LGA1700 - 4 cores / 8 threads - Cache 12 Mo - 58W",
            price: 119,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-12100F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-12100F (3.3 GHz  4.3 GHz).jpg",
            description: "Processeur Intel Core i3-12100F (3.3 GHz  4.3 GHz) - Socket LGA1700 - 4 cores / 8 threads - Cache 12 Mo - 58W",
            price: 129,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-13100",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-13100 (3.4 GHz  4.5 GHz).jpg",
            description: "Processeur Intel Core i3-13100 (3.4 GHz  4.5 GHz) - Socket LGA1700 - 4 cores / 8 threads - Cache 12 Mo - 60W",
            price: 149,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-13100F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-13100F (3.4 GHz  4.5 GHz).jpg",
            description: "Processeur Intel Core i3-13100F (3.4 GHz  4.5 GHz) - Socket LGA1700 - 4 cores / 8 threads - Cache 12 Mo - 58W",
            price: 139,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-14100",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-14100 (jusqu'à 4.7 GHz).jpg",
            description: "Processeur Intel Core i3-14100 (jusqu'à 4.7 GHz) - Socket LGA1700 - 4 cores / 8 threads - Cache 12 Mo - 60W",
            price: 159,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i3-14100F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i3-14100F (jusqu'à 4.7 GHz).jpg",
            description: "Processeur Intel Core i3-14100F (jusqu'à 4.7 GHz) - Socket LGA1700 - 4 cores / 8 threads - Cache 12 Mo - 58W",
            price: 149,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I3",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-10400",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-10400 (2.9 GHz  4.3 GHz).jpg",
            description: "Processeur Intel Core i5-10400 (2.9 GHz  4.3 GHz) - Socket LGA1200 - 6 cores / 12 threads - Cache 12 Mo - 65W",
            price: 179,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1200",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-10400F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-10400F (2.9 GHz  4.3 GHz).jpg",
            description: "Processeur Intel Core i5-10400F (2.9 GHz  4.3 GHz) - Socket LGA1200 - 6 cores / 12 threads - Cache 12 Mo - 65W",
            price: 169,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1200",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-12400",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-12400 (2.5 GHz  4.4 GHz).jpg",
            description: "Processeur Intel Core i5-12400 (2.5 GHz  4.4 GHz) - Socket LGA1700 - 6 cores / 12 threads - Cache 18 Mo - 65W",
            price: 199,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-12400F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-12400F (2.5 GHz  4.4 GHz).jpg",
            description: "Processeur Intel Core i5-12400F (2.5 GHz  4.4 GHz) - Socket LGA1700 - 6 cores / 12 threads - Cache 18 Mo - 65W",
            price: 189,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-12500",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-12500 (3.0 GHz  4.6 GHz).jpg",
            description: "Processeur Intel Core i5-12500 (3.0 GHz  4.6 GHz) - Socket LGA1700 - 6 cores / 12 threads - Cache 18 Mo - 65W",
            price: 219,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-12600K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-12600K (3.7 GHz  4.9 GHz).jpg",
            description: "Processeur Intel Core i5-12600K (3.7 GHz  4.9 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 125W",
            price: 299,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-12600KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-12600KF (3.7 GHz  4.9 GHz).jpg",
            description: "Processeur Intel Core i5-12600KF (3.7 GHz  4.9 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 125W",
            price: 289,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-13400",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-13400 (2.5 GHz  4.6 GHz).jpg",
            description: "Processeur Intel Core i5-13400 (2.5 GHz  4.6 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 65W",
            price: 249,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-13400F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-13400F (2.5 GHz  4.6 GHz).jpg",
            description: "Processeur Intel Core i5-13400F (2.5 GHz  4.6 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 65W",
            price: 239,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-13500",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-13500 (2.5 GHz  4.8 GHz).jpg",
            description: "Processeur Intel Core i5-13500 (2.5 GHz  4.8 GHz) - Socket LGA1700 - 14 cores / 20 threads - Cache 24 Mo - 65W",
            price: 279,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-14400",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-14400 (jusqu'à 4.7 GHz).jpg",
            description: "Processeur Intel Core i5-14400 (jusqu'à 4.7 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 65W",
            price: 259,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-14400F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-14400F (jusqu'à 4.7 GHz).jpg",
            description: "Processeur Intel Core i5-14400F (jusqu'à 4.7 GHz) - Socket LGA1700 - 10 cores / 16 threads - Cache 20 Mo - 65W",
            price: 249,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-14500",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-14500 (jusqu'à 5.0 GHz).jpg",
            description: "Processeur Intel Core i5-14500 (jusqu'à 5.0 GHz) - Socket LGA1700 - 14 cores / 20 threads - Cache 24 Mo - 65W",
            price: 299,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-14600K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-14600K (3.5 GHz  5.3 GHz).jpg",
            description: "Processeur Intel Core i5-14600K (3.5 GHz  5.3 GHz) - Socket LGA1700 - 14 cores / 20 threads - Cache 24 Mo - 125W",
            price: 349,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i5-14600KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i5-14600KF (3.5 GHz  5.3 GHz).jpg",
            description: "Processeur Intel Core i5-14600KF (3.5 GHz  5.3 GHz) - Socket LGA1700 - 14 cores / 20 threads - Cache 24 Mo - 125W",
            price: 339,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I5",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-12700",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-12700 (2.1 GHz  4.9 GHz).jpg",
            description: "Processeur Intel Core i7-12700 (2.1 GHz  4.9 GHz) - Socket LGA1700 - 12 cores / 20 threads - Cache 25 Mo - 65W",
            price: 399,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-12700F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-12700F (2.1 GHz  4.9 GHz).jpg",
            description: "Processeur Intel Core i7-12700F (2.1 GHz  4.9 GHz) - Socket LGA1700 - 12 cores / 20 threads - Cache 25 Mo - 65W",
            price: 389,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-12700K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-12700K (3.6 GHz  5.0 GHz).jpg",
            description: "Processeur Intel Core i7-12700K (3.6 GHz  5.0 GHz) - Socket LGA1700 - 12 cores / 20 threads - Cache 25 Mo - 125W",
            price: 449,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-12700KF - Version tray",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-12700KF (3.6 GHz  5.0 GHz) - Version tray.jpg",
            description: "Processeur Intel Core i7-12700KF (3.6 GHz  5.0 GHz) - Socket LGA1700 - 12 cores / 20 threads - Cache 25 Mo - 125W",
            price: 439,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-12700KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-12700KF (3.6 GHz  5.0 GHz).jpg",
            description: "Processeur Intel Core i7-12700KF (3.6 GHz  5.0 GHz) - Socket LGA1700 - 12 cores / 20 threads - Cache 25 Mo - 125W",
            price: 449,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-14700",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-14700 (jusqu'à 5.4 GHz).jpg",
            description: "Processeur Intel Core i7-14700 (jusqu'à 5.4 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 65W",
            price: 499,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-14700F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-14700F (jusqu'à 5.4 GHz).jpg",
            description: "Processeur Intel Core i7-14700F (jusqu'à 5.4 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 65W",
            price: 489,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-14700K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-14700K (3.4 GHz  5.6 GHz).jpg",
            description: "Processeur Intel Core i7-14700K (3.4 GHz  5.6 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 549,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-14700KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-14700KF (3.4 GHz  5.6 GHz).jpg",
            description: "Processeur Intel Core i7-14700KF (3.4 GHz  5.6 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 539,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i7-14700KF Bundle The Force",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i7-14700KF Bundle The Force.jpg",
            description: "Processeur Intel Core i7-14700KF Bundle The Force - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 559,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I7",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-12900F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-12900F (2.4 GHz  5.1 GHz).jpg",
            description: "Processeur Intel Core i9-12900F (2.4 GHz  5.1 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 65W",
            price: 599,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-12900K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-12900K (3.2 GHz  5.2 GHz).jpg",
            description: "Processeur Intel Core i9-12900K (3.2 GHz  5.2 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 649,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-12900KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-12900KF (3.2 GHz  5.2 GHz).jpg",
            description: "Processeur Intel Core i9-12900KF (3.2 GHz  5.2 GHz) - Socket LGA1700 - 16 cores / 24 threads - Cache 30 Mo - 125W",
            price: 639,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-13900K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-13900K (3.0 GHz  5.8 GHz).jpg",
            description: "Processeur Intel Core i9-13900K (3.0 GHz  5.8 GHz) - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 125W",
            price: 749,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-13900KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-13900KF (3.0 GHz  5.8 GHz).jpg",
            description: "Processeur Intel Core i9-13900KF (3.0 GHz  5.8 GHz) - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 125W",
            price: 739,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-14900",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-14900 (jusqu'à 5.8 GHz).jpg",
            description: "Processeur Intel Core i9-14900 (jusqu'à 5.8 GHz) - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 65W",
            price: 799,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-14900F",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-14900F (jusqu'à 5.8 GHz).jpg",
            description: "Processeur Intel Core i9-14900F (jusqu'à 5.8 GHz) - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 65W",
            price: 789,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-14900K",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-14900K (3.2 GHz  5.8 GHz).jpg",
            description: "Processeur Intel Core i9-14900K (3.2 GHz  5.8 GHz) - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 125W",
            price: 849,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-14900K Bundle The Force",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-14900K Bundle The Force.jpg",
            description: "Processeur Intel Core i9-14900K Bundle The Force - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 125W",
            price: 869,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-14900KF",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-14900KF (3.2 GHz  5.8 GHz).jpg",
            description: "Processeur Intel Core i9-14900KF (3.2 GHz  5.8 GHz) - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 125W",
            price: 839,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Core i9-14900KS",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Core i9-14900KS (3.2 GHz  6.2 GHz).jpg",
            description: "Processeur Intel Core i9-14900KS (3.2 GHz  6.2 GHz) - Socket LGA1700 - 24 cores / 32 threads - Cache 36 Mo - 150W",
            price: 899,
            rating: 5,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Core I9",
            availability: "green",
        },
        {
            name: "Processeur Intel Pentium G7400",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Pentium G7400 (3.7 GHz).jpg",
            description: "Processeur Intel Pentium G7400 (3.7 GHz) - Socket LGA1700 - 2 cores / 4 threads - Cache 6 Mo - 46W",
            price: 69,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Pentium",
            availability: "green",
        },
        {
            name: "Processeur Intel Pentium Gold G6400",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Pentium Gold G6400 (4.0 GHz).jpg",
            description: "Processeur Intel Pentium Gold G6400 (4.0 GHz) - Socket LGA1200 - 2 cores / 4 threads - Cache 4 Mo - 58W",
            price: 59,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1200",
            model: "Intel Pentium",
            availability: "green",
        },
        {
            name: "Processeur Intel Pentium Gold G6405",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Pentium Gold G6405 (4.1 GHz).jpg",
            description: "Processeur Intel Pentium Gold G6405 (4.1 GHz) - Socket LGA1200 - 2 cores / 4 threads - Cache 4 Mo - 58W",
            price: 64,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1200",
            model: "Intel Pentium",
            availability: "green",
        },
        {
            name: "Processeur Intel Processor 300",
            image: "/Website Beta/IMAGES/images composants/Processeurs/INTEL/Intel Processor 300 (3.9 GHz).jpg",
            description: "Processeur Intel Processor 300 (3.9 GHz) - Socket LGA1700 - 2 cores / 4 threads - Cache 6 Mo - 46W",
            price: 49,
            rating: 4,
            brand: "Intel",
            socket: "Intel 1700",
            model: "Intel Processor",
            availability: "green",
        }
];

let sortOrder = {
    rating: 1,
    price: 1,
    availability: 1
};

function applyFiltersAndSort() {
    let filteredData = productData.filter(product => {
        const matchesBrand = !brandFilter.value || product.brand === brandFilter.value;
        const matchesSocket = !socketFilter.value || product.socket === socketFilter.value;
        const matchesModel = !modelFilter.value || product.model === modelFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesSocket && matchesModel && matchesSearch;
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
        productImage.src = "/Website Beta/IMAGES/Interdiction.jpg";
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

[brandFilter, socketFilter, modelFilter, searchBar].forEach(filter => {
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