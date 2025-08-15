const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const DDRFilter = document.querySelector("#DDRFilter");
const GOFilter = document.querySelector("#GOFilter");
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
            "name": "Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 5600 MHz CL36",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 5600 MHz CL36.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) 5600 MHz CL36",
            "price": 300,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) 6000 MHz CL30 Noir",
            "price": 350,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL36 (CMT32GX5M2E6000C36)",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL36 (CMT32GX5M2E6000C36).jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) 6000 MHz CL36",
            "price": 340,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 7200 MHz CL34",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum DDR5 RGB 32 Go (2 x 16 Go) 7200 MHz CL34.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) 7200 MHz CL34",
            "price": 400,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30 NoirGris",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30 NoirGris.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Platinum RGB 64 Go (2 x 32 Go) 6000 MHz CL30 NoirGris",
            "price": 600,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Platinum RGB 64 Go (2 x 32 Go) 6000 MHz CL30",
            "price": 600,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum DDR5 RGB 64 Go (2 x 32 Go) 6600 MHz CL40",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum DDR5 RGB 64 Go (2 x 32 Go) 6600 MHz CL40.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Platinum RGB 64 Go (2 x 32 Go) 6600 MHz CL40",
            "price": 650,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) 3200 MHz CL16",
            "price": 250,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) DDR4 3600 MHz CL18 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) DDR4 3600 MHz CL18 - Blanc.jpg",
            "description": "Kit de mémoire DDR4 Corsair Dominator Platinum RGB 32 Go (2 x 16 Go) 3600 MHz CL18 - Blanc",
            "price": 270,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc",
            "price": 380,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Gris",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Gris.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Gris",
            "price": 380,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir",
            "price": 380,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6400 MHz CL32 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 6400 MHz CL32 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 32 Go (2 x 16 Go) 6400 MHz CL32 - Noir",
            "price": 400,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 7000 MHz CL34 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 7000 MHz CL34 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 32 Go (2 x 16 Go) 7000 MHz CL34 - Blanc",
            "price": 420,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 7200 MHz CL34 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 7200 MHz CL34 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 32 Go (2 x 16 Go) 7200 MHz CL34 - Blanc",
            "price": 430,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir",
            "price": 430,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 48 Go (2 x 24 Go) 7200 MHz CL36 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 48 Go (2 x 24 Go) 7200 MHz CL36 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 48 Go (2 x 24 Go) 7200 MHz CL36 - Noir",
            "price": 500,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7200",
            "GO": "48",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Blanc",
            "price": 700,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Gris",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Gris.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Gris",
            "price": 700,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 64 Go (2 x 32 Go) 6600 MHz CL32 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 64 Go (2 x 32 Go) 6600 MHz CL32 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 64 Go (2 x 32 Go) 6600 MHz CL32 - Blanc",
            "price": 720,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6000 MHz CL36 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6000 MHz CL36 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 64 Go (4 x 16 Go) 6000 MHz CL36 - Noir",
            "price": 710,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6000 MHz CL36 - White",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6000 MHz CL36 - White.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 64 Go (4 x 16 Go) 6000 MHz CL36 - White",
            "price": 710,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6400 MHz CL32 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6400 MHz CL32 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 64 Go (4 x 16 Go) 6400 MHz CL32 - Blanc",
            "price": 730,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6400 MHz CL32 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 64 Go (4 x 16 Go) 6400 MHz CL32 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 64 Go (4 x 16 Go) 6400 MHz CL32 - Noir",
            "price": 730,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 96 Go (2 x 48 Go) 6400 MHz CL32 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 96 Go (2 x 48 Go) 6400 MHz CL32 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 96 Go (2 x 48 Go) 6400 MHz CL32 - Noir",
            "price": 900,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "96",
            "availability": "green"
        },
        {
            "name": "Corsair Dominator Titanium DDR5 RGB 96 Go (2 x 48 Go) 7000 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Dominator Titanium DDR5 RGB 96 Go (2 x 48 Go) 7000 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Dominator Titanium RGB 96 Go (2 x 48 Go) 7000 MHz CL40 - Noir",
            "price": 950,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7000",
            "GO": "96",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 4800 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 4800 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 4800 MHz CL40 - Noir",
            "price": 150,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-4800",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir",
            "price": 160,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5200 MHz CL40",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5200 MHz CL40.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 5200 MHz CL40",
            "price": 160,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5600 MHz CL40 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5600 MHz CL40 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 5600 MHz CL40 - Blanc",
            "price": 170,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5600 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 5600 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 5600 MHz CL40 - Noir",
            "price": 170,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir",
            "price": 200,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 - CMK32GX5M2E6000Z36",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 - CMK32GX5M2E6000Z36.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 6000 MHz CL36",
            "price": 190,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 6000 MHz CL36 - Noir",
            "price": 190,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6200 MHz CL36 1.4V - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 6200 MHz CL36 1.4V - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 6200 MHz CL36 1.4V - Noir",
            "price": 210,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 7000 MHz CL34 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 7000 MHz CL34 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 7000 MHz CL34 - Noir",
            "price": 250,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir",
            "price": 260,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 64 Go (2 x 32 Go) 4800 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 64 Go (2 x 32 Go) 4800 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 64 Go (2 x 32 Go) 4800 MHz CL40 - Noir",
            "price": 300,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-4800",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 64 Go (2 x 32 Go) 5200 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 64 Go (2 x 32 Go) 5200 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 64 Go (2 x 32 Go) 5200 MHz CL40 - Noir",
            "price": 320,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5200",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 64 Go (2 x 32 Go) 5600 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 64 Go (2 x 32 Go) 5600 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 64 Go (2 x 32 Go) 5600 MHz CL40 - Noir",
            "price": 330,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 64 Go (2 x 32 Go) 6000 MHz CL30 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 64 Go (2 x 32 Go) 6000 MHz CL30 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 64 Go (2 x 32 Go) 6000 MHz CL30 - Noir",
            "price": 400,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance DDR5 64 Go (2 x 32 Go) 6000 MHz CL40",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance DDR5 64 Go (2 x 32 Go) 6000 MHz CL40.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance 64 Go (2 x 32 Go) 6000 MHz CL40",
            "price": 390,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 16 Go (2 x 8 Go) DDR4 3600 MHz CL18",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 16 Go (2 x 8 Go) DDR4 3600 MHz CL18.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 16 Go (2 x 8 Go) 3600 MHz CL18",
            "price": 90,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 16 Go (2x 8 Go) DDR4 3000 MHz CL15",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 16 Go (2x 8 Go) DDR4 3000 MHz CL15.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 16 Go (2x 8 Go) 3000 MHz CL15",
            "price": 80,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3000",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 16 Go (2x 8 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 16 Go (2x 8 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 16 Go (2x 8 Go) 3200 MHz CL16",
            "price": 85,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 32 Go (2 x 16 Go) DDR4 3600 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 32 Go (2 x 16 Go) DDR4 3600 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 32 Go (2 x 16 Go) 3600 MHz CL16",
            "price": 160,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 32 Go (2 x 16 Go) DDR4 3600 MHz CL18",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 32 Go (2 x 16 Go) DDR4 3600 MHz CL18.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 32 Go (2 x 16 Go) 3600 MHz CL18",
            "price": 150,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 32 Go (2x 16 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 32 Go (2x 16 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 32 Go (2x 16 Go) 3200 MHz CL16",
            "price": 140,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 64 Go (2 x 32 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 64 Go (2 x 32 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 64 Go (2 x 32 Go) 3200 MHz CL16",
            "price": 300,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance LPX Series Low Profile 64 Go (2 x 32 Go) DDR4 3600 MHz CL18",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance LPX Series Low Profile 64 Go (2 x 32 Go) DDR4 3600 MHz CL18.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance LPX 64 Go (2 x 32 Go) 3600 MHz CL18",
            "price": 310,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 128 Go (4 x 32 Go) 5600 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 128 Go (4 x 32 Go) 5600 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 128 Go (4 x 32 Go) 5600 MHz CL40 - Noir",
            "price": 800,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "128",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 192 Go (4 x 48 Go) 5200 MHz CL38 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 192 Go (4 x 48 Go) 5200 MHz CL38 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 192 Go (4 x 48 Go) 5200 MHz CL38 - Noir",
            "price": 1200,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-5200",
            "GO": "192",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5200 MHz CL40 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5200 MHz CL40 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 5200 MHz CL40 - Blanc",
            "price": 180,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir",
            "price": 180,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5200 MHz CL40",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5200 MHz CL40.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 5200 MHz CL40",
            "price": 180,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5600 MHz CL36",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5600 MHz CL36.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 5600 MHz CL36",
            "price": 190,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5600 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 5600 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 5600 MHz CL40 - Noir",
            "price": 190,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc",
            "price": 220,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Noir",
            "price": 220,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL30",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL30.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL30",
            "price": 220,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 (CMH32GX5M2E6000Z36)",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 (CMH32GX5M2E6000Z36).jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL36",
            "price": 210,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 - Noir (CMH32GX5M2E6000C36)",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 - Noir (CMH32GX5M2E6000C36).jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL36 - Noir",
            "price": 210,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 1.25V - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 1.25V - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL36 1.25V - Blanc",
            "price": 210,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 1.4V - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL36 1.4V - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL36 1.4V - Blanc",
            "price": 210,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL38 1.35V - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6000 MHz CL38 1.35V - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6000 MHz CL38 1.35V - Noir",
            "price": 200,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6200 MHz CL36 - Noir (CMH32GX5M2E6200C36)",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6200 MHz CL36 - Noir (CMH32GX5M2E6200C36).jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6200 MHz CL36 - Noir",
            "price": 220,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL32 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL32 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6400 MHz CL32 - Blanc",
            "price": 240,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL32 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL32 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6400 MHz CL32 - Noir",
            "price": 240,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL32",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL32.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6400 MHz CL32",
            "price": 240,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL36 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL36 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6400 MHz CL36 - Blanc",
            "price": 230,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL36 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 6400 MHz CL36 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 6400 MHz CL36 - Noir",
            "price": 230,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 7000 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 7000 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 7000 MHz CL40 - Noir",
            "price": 260,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7000",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 32 Go (2 x 16 Go) 7200 MHz CL34 - Noir",
            "price": 270,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 48 Go (2 x 24 Go) 7200 MHz CL36 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 48 Go (2 x 24 Go) 7200 MHz CL36 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 48 Go (2 x 24 Go) 7200 MHz CL36 - Noir",
            "price": 350,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-7200",
            "GO": "48",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 5600 MHz CL36 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 5600 MHz CL36 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 5600 MHz CL36 - Noir",
            "price": 400,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 5600 MHz CL40",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 5600 MHz CL40.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 5600 MHz CL40",
            "price": 390,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-5600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL30 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL30 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Blanc",
            "price": 450,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL30 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL30 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 6000 MHz CL30 - Noir",
            "price": 450,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL30",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL30.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 6000 MHz CL30",
            "price": 450,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL38 1.35V - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL38 1.35V - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 6000 MHz CL38 1.35V - Noir",
            "price": 440,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL40 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6000 MHz CL40 - Blanc.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 6000 MHz CL40 - Blanc",
            "price": 430,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR5-6000",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6400 MHz CL32 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6400 MHz CL32 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 6400 MHz CL32 - Noir",
            "price": 470,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6400",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6600 MHz CL32 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 64 Go (2 x 32 Go) 6600 MHz CL32 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 64 Go (2 x 32 Go) 6600 MHz CL32 - Noir",
            "price": 480,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB DDR5 96 Go (2 x 48 Go) 6800 MHz CL40 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB DDR5 96 Go (2 x 48 Go) 6800 MHz CL40 - Noir.jpg",
            "description": "Kit de mémoire DDR5 Corsair Vengeance RGB 96 Go (2 x 48 Go) 6800 MHz CL40 - Noir",
            "price": 900,
            "rating": 5,
            "brand": "Corsair",
            "DDR": "DDR5-6800",
            "GO": "96",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 16 Go (2 x 8 Go) DDR4 3200 MHz CL16 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 16 Go (2 x 8 Go) DDR4 3200 MHz CL16 - Blanc.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 16 Go (2 x 8 Go) 3200 MHz CL16 - Blanc",
            "price": 100,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 16 Go (2 x 8 Go) DDR4 3200 MHz CL16 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 16 Go (2 x 8 Go) DDR4 3200 MHz CL16 - Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 16 Go (2 x 8 Go) 3200 MHz CL16 - Noir",
            "price": 100,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3200 MHz CL16 - Noir (CMH32GX4M2Z3200C16)",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3200 MHz CL16 - Noir (CMH32GX4M2Z3200C16).jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 32 Go (2 x 16 Go) 3200 MHz CL16 - Noir",
            "price": 200,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3200 MHz CL16 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3200 MHz CL16 - Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 32 Go (2 x 16 Go) 3200 MHz CL16 - Noir",
            "price": 200,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3600 MHz CL18 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3600 MHz CL18 - Blanc.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 32 Go (2 x 16 Go) 3600 MHz CL18 - Blanc",
            "price": 220,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3600 MHz CL18 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 32 Go (2 x 16 Go) DDR4 3600 MHz CL18 - Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 32 Go (2 x 16 Go) 3600 MHz CL18 - Noir",
            "price": 220,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 32 Go (4 x 8 Go) DDR4 3200 MHz CL16 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 32 Go (4 x 8 Go) DDR4 3200 MHz CL16 - Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 32 Go (4 x 8 Go) 3200 MHz CL16 - Noir",
            "price": 210,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 32 Go (4 x 8 Go) DDR4 3600 MHz CL18 - Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 32 Go (4 x 8 Go) DDR4 3600 MHz CL18 - Blanc.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 32 Go (4 x 8 Go) 3600 MHz CL18 - Blanc",
            "price": 230,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 64 Go (2 x 32 Go) DDR4 3200 MHz CL16 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 64 Go (2 x 32 Go) DDR4 3200 MHz CL16 - Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 64 Go (2 x 32 Go) 3200 MHz CL16 - Noir",
            "price": 400,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 64 Go (2 x 32 Go) DDR4 3600 MHz CL18 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 64 Go (2 x 32 Go) DDR4 3600 MHz CL18 - Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 64 Go (2 x 32 Go) 3600 MHz CL18 - Noir",
            "price": 420,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO SL Series 64 Go (4 x 16 Go) DDR4 3200 MHz CL16 - Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO SL Series 64 Go (4 x 16 Go) DDR4 3200 MHz CL16 - Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO SL 64 Go (4 x 16 Go) 3200 MHz CL16 - Noir",
            "price": 410,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3000 MHz CL15 Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3000 MHz CL15 Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO 16 Go (2x 8 Go) 3000 MHz CL15 Noir",
            "price": 90,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3000",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3200 MHz CL16 Blanc",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3200 MHz CL16 Blanc.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO 16 Go (2x 8 Go) 3200 MHz CL16 Blanc",
            "price": 95,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3200 MHz CL16 Noir",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3200 MHz CL16 Noir.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO 16 Go (2x 8 Go) 3200 MHz CL16 Noir",
            "price": 95,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO 16 Go (2x 8 Go) 3200 MHz CL16",
            "price": 95,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3600 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB PRO Series 16 Go (2x 8 Go) DDR4 3600 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB PRO 16 Go (2x 8 Go) 3600 MHz CL16",
            "price": 100,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB RS 16 Go (2 x 8 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB RS 16 Go (2 x 8 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB RS 16 Go (2 x 8 Go) 3200 MHz CL16",
            "price": 90,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB RS 16 Go (2 x 8 Go) DDR4 3600 MHz CL18",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB RS 16 Go (2 x 8 Go) DDR4 3600 MHz CL18.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB RS 16 Go (2 x 8 Go) 3600 MHz CL18",
            "price": 95,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "16",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB RS 32 Go (2 x 16 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB RS 32 Go (2 x 16 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB RS 32 Go (2 x 16 Go) 3200 MHz CL16",
            "price": 180,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB RS 32 Go (2 x 16 Go) DDR4 3600 MHz CL18",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB RS 32 Go (2 x 16 Go) DDR4 3600 MHz CL18.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB RS 32 Go (2 x 16 Go) 3600 MHz CL18",
            "price": 190,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB RS 64 Go (2 x 32 Go) DDR4 3200 MHz CL16",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB RS 64 Go (2 x 32 Go) DDR4 3200 MHz CL16.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB RS 64 Go (2 x 32 Go) 3200 MHz CL16",
            "price": 350,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3200",
            "GO": "64",
            "availability": "green"
        },
        {
            "name": "Corsair Vengeance RGB RT 32 Go (2 x 16 Go) DDR4 3600 MHz CL18",
            "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Corsair/Corsair Vengeance RGB RT 32 Go (2 x 16 Go) DDR4 3600 MHz CL18.jpg",
            "description": "Kit de mémoire DDR4 Corsair Vengeance RGB RT 32 Go (2 x 16 Go) 3600 MHz CL18",
            "price": 200,
            "rating": 4,
            "brand": "Corsair",
            "DDR": "DDR4-3600",
            "GO": "32",
            "availability": "green"
        },
{
       "name": "G.Skill G.Skill Aegis 32 Go (2 x 16 Go) DDR4 3200 MHz CL16",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Aegis 32 Go (2 x 16 Go) DDR4 3200 MHz CL16.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Aegis 32 Go (2 x 16 Go) 3200 MHz CL16",
       "price": 120,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3200",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Ripjaws M5 Neo RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL36 - Blanc",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Ripjaws M5 Neo RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL36 - Blanc.jpg",
       "description": "Kit de mémoire DDR5 G.Skill Ripjaws M5 Neo RGB 32 Go (2 x 16 Go) 6000 MHz CL36 - Blanc",
       "price": 280,
       "rating": 5,
       "brand": "G.Skill",
       "DDR": "DDR5-6000",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL40 - Noir",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL40 - Noir.jpg",
       "description": "Kit de mémoire DDR5 G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir",
       "price": 250,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR5-5200",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL46 - Blanc",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL46 - Blanc.jpg",
       "description": "Kit de mémoire DDR5 G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) 5600 MHz CL46 - Blanc",
       "price": 260,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR5-5600",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL46 - Noir",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL46 - Noir.jpg",
       "description": "Kit de mémoire DDR5 G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) 5600 MHz CL46 - Noir",
       "price": 260,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR5-5600",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL30 - Blanc",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL30 - Blanc.jpg",
       "description": "Kit de mémoire DDR5 G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc",
       "price": 300,
       "rating": 5,
       "brand": "G.Skill",
       "DDR": "DDR5-6000",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL32 - Blanc",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL32 - Blanc.jpg",
       "description": "Kit de mémoire DDR5 G.Skill Ripjaws M5 RGB 32 Go (2 x 16 Go) 6000 MHz CL32 - Blanc",
       "price": 310,
       "rating": 5,
       "brand": "G.Skill",
       "DDR": "DDR5-6000",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Neo 16 Go (2x 8 Go) DDR4 3600 MHz CL18",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Neo 16 Go (2x 8 Go) DDR4 3600 MHz CL18.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Neo 16 Go (2x 8 Go) 3600 MHz CL18",
       "price": 100,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3600",
       "GO": "16",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Neo 32 Go (2x 16 Go) DDR4 3200 MHz CL16",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Neo 32 Go (2x 16 Go) DDR4 3200 MHz CL16.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Neo 32 Go (2x 16 Go) 3200 MHz CL16",
       "price": 150,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3200",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Neo 32 Go (2x 16 Go) DDR4 3600 MHz CL16",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Neo 32 Go (2x 16 Go) DDR4 3600 MHz CL16.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Neo 32 Go (2x 16 Go) 3600 MHz CL16",
       "price": 160,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3600",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Neo 32 Go (2x 16 Go) DDR4 3600 MHz CL18",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Neo 32 Go (2x 16 Go) DDR4 3600 MHz CL18.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Neo 32 Go (2x 16 Go) 3600 MHz CL18",
       "price": 155,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3600",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z RGB 16 Go (2 x 8 Go) DDR4 3600 MHz CL18",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z RGB 16 Go (2 x 8 Go) DDR4 3600 MHz CL18.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z RGB 16 Go (2 x 8 Go) 3600 MHz CL18",
       "price": 110,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3600",
       "GO": "16",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z RGB 16 Go (2x 8 Go) DDR4 3200 MHz CL16 - F4-3200C16D-16GTZR",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z RGB 16 Go (2x 8 Go) DDR4 3200 MHz CL16 - F4-3200C16D-16GTZR.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z RGB 16 Go (2x 8 Go) 3200 MHz CL16 - F4-3200C16D-16GTZR",
       "price": 105,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3200",
       "GO": "16",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z RGB 32 Go (2 x 16 Go) DDR4 3600 MHz CL18",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z RGB 32 Go (2 x 16 Go) DDR4 3600 MHz CL18.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z RGB 32 Go (2 x 16 Go) 3600 MHz CL18",
       "price": 160,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3600",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z RGB 32 Go (2 x 16 Go) DDR4 4000 MHz CL18",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z RGB 32 Go (2 x 16 Go) DDR4 4000 MHz CL18.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z RGB 32 Go (2 x 16 Go) 4000 MHz CL18",
       "price": 180,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-4000",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z RGB 32 Go (2 x 16 Go) DDR4 4600 MHz CL20",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z RGB 32 Go (2 x 16 Go) DDR4 4600 MHz CL20.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z RGB 32 Go (2 x 16 Go) 4600 MHz CL20",
       "price": 200,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-4600",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z RGB 32 Go (2x 16 Go) DDR4 3200 MHz CL16",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z RGB 32 Go (2x 16 Go) DDR4 3200 MHz CL16.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z RGB 32 Go (2x 16 Go) 3200 MHz CL16",
       "price": 150,
       "rating": 4,
       "brand": "G.Skill",
       "DDR": "DDR4-3200",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Royal 16 Go (2 x 8 Go) DDR4 3600 MHz CL16 - Argent",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Royal 16 Go (2 x 8 Go) DDR4 3600 MHz CL16 - Argent.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Royal 16 Go (2 x 8 Go) 3600 MHz CL16 - Argent",
       "price": 130,
       "rating": 5,
       "brand": "G.Skill",
       "DDR": "DDR4-3600",
       "GO": "16",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Royal 32 Go (2 x 16 Go) DDR4 3600 MHz CL16 - Argent",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Royal 32 Go (2 x 16 Go) DDR4 3600 MHz CL16 - Argent.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Royal 32 Go (2 x 16 Go) 3600 MHz CL16 - Argent",
       "price": 170,
       "rating": 5,
       "brand": "G.Skill",
       "DDR": "DDR4-3600",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Royal 32 Go (2 x 16 Go) DDR4 4000 MHz CL18 - Argent",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Royal 32 Go (2 x 16 Go) DDR4 4000 MHz CL18 - Argent.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Royal 32 Go (2 x 16 Go) 4000 MHz CL18 - Argent",
       "price": 190,
       "rating": 5,
       "brand": "G.Skill",
       "DDR": "DDR4-4000",
       "GO": "32",
       "availability": "green"
   },
   {
       "name": "G.Skill G.Skill Trident Z Royal 32 Go (2 x 16 Go) DDR4 4266 MHz CL19 - Or",
       "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z Royal 32 Go (2 x 16 Go) DDR4 4266 MHz CL19 - Or.jpg",
       "description": "Kit de mémoire DDR4 G.Skill Trident Z Royal 32 Go (2 x 16 Go) 4266 MHz CL19 - Or",
       "price": 210,
       "rating": 5,
       "brand": "G.Skill",
       "DDR": "DDR4-4266",
       "GO": "32",
       "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 Neo RGB Series 32 Go (2x 16 Go) DDR5 6000 MHz CL30",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 Neo RGB Series 32 Go (2x 16 Go) DDR5 6000 MHz CL30.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 Neo RGB 32 Go (2x 16 Go) 6000 MHz CL30",
     "price": 320,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-6000",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL40 - Noir",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL40 - Noir.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) 5200 MHz CL40 - Noir",
     "price": 250,
     "rating": 4,
     "brand": "G.Skill",
     "DDR": "DDR5-5200",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL28 - Noir",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL28 - Noir.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) 5600 MHz CL28 - Noir",
     "price": 270,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-5600",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL36 - Argent - F5-5600J3636C16GX2-TZ5RS",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL36 - Argent - F5-5600J3636C16GX2-TZ5RS.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) 5600 MHz CL36 - Argent - F5-5600J3636C16GX2-TZ5RS",
     "price": 260,
     "rating": 4,
     "brand": "G.Skill",
     "DDR": "DDR5-5600",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL32 - Blanc",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL32 - Blanc.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) 6000 MHz CL32 - Blanc",
     "price": 310,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-6000",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 6400 MHz CL32 - Noir",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) DDR5 6400 MHz CL32 - Noir.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 RGB 32 Go (2 x 16 Go) 6400 MHz CL32 - Noir",
     "price": 330,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-6400",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) DDR5 6400 MHz CL30 - Argent",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) DDR5 6400 MHz CL30 - Argent.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) 6400 MHz CL30 - Argent",
     "price": 350,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-6400",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) DDR5 7200 MHz CL34 - Or",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) DDR5 7200 MHz CL34 - Or.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) 7200 MHz CL34 - Or",
     "price": 400,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-7200",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) DDR5 7600 MHz CL36 - Argent",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) DDR5 7600 MHz CL36 - Argent.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 Royal 32 Go (2 x 16 Go) 7600 MHz CL36 - Argent",
     "price": 420,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-7600",
     "GO": "32",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 Royal 64 Go (2 x 32 Go) DDR5 6400 MHz CL32 - Argent",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 Royal 64 Go (2 x 32 Go) DDR5 6400 MHz CL32 - Argent.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 Royal 64 Go (2 x 32 Go) 6400 MHz CL32 - Argent",
     "price": 600,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-6400",
     "GO": "64",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 Royal 96 Go (2 x 48 Go) DDR5 6400 MHz CL32 - Argent",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 Royal 96 Go (2 x 48 Go) DDR5 6400 MHz CL32 - Argent.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 Royal 96 Go (2 x 48 Go) 6400 MHz CL32 - Argent",
     "price": 900,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-6400",
     "GO": "96",
     "availability": "green"
 },
 {
     "name": "G.Skill G.Skill Trident Z5 Royal Neo 32 Go (2 x 16 Go) DDR5 6400 MHz CL30 - Argent",
     "image": "/Website Beta/IMAGES/images composants/Mémoire vive/G.Skill/G.Skill Trident Z5 Royal Neo 32 Go (2 x 16 Go) DDR5 6400 MHz CL30 - Argent.jpg",
     "description": "Kit de mémoire DDR5 G.Skill Trident Z5 Royal Neo 32 Go (2 x 16 Go) 6400 MHz CL30 - Argent",
     "price": 360,
     "rating": 5,
     "brand": "G.Skill",
     "DDR": "DDR5-6400",
     "GO": "32",
     "availability": "green"
 },
     {
 "name": "Kingston Kingston FURY Beast 128 Go (4 x 32 Go) DDR4 3200 MHz CL16",
 "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 128 Go (4 x 32 Go) DDR4 3200 MHz CL16.jpg",
 "description": "Kit de mémoire DDR4 Kingston FURY Beast 128 Go (4 x 32 Go) 3200 MHz CL16",
 "price": 450,
 "rating": 5,
 "brand": "Kingston",
 "DDR": "DDR4-3200",
 "GO": "128",
 "availability": "green"
     },
     {
 "name": "Kingston Kingston FURY Beast 16 Go (2 x 8 Go) DDR4 3200 MHz CL16",
 "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 16 Go (2 x 8 Go) DDR4 3200 MHz CL16.jpg",
 "description": "Kit de mémoire DDR4 Kingston FURY Beast 16 Go (2 x 8 Go) 3200 MHz CL16",
 "price": 80,
 "rating": 4,
 "brand": "Kingston",
 "DDR": "DDR4-3200",
 "GO": "16",
 "availability": "green"
     },
     {
 "name": "Kingston Kingston FURY Beast 16 Go (2 x 8 Go) DDR4 3600 MHz CL17",
 "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 16 Go (2 x 8 Go) DDR4 3600 MHz CL17.jpg",
 "description": "Kit de mémoire DDR4 Kingston FURY Beast 16 Go (2 x 8 Go) 3600 MHz CL17",
 "price": 90,
 "rating": 4,
 "brand": "Kingston",
 "DDR": "DDR4-3600",
 "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 16 Go (2 x 8 Go) DDR5 5200 MHz CL36",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 16 Go (2 x 8 Go) DDR5 5200 MHz CL36.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 16 Go (2 x 8 Go) 5200 MHz CL36",
         "price": 120,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5200",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 16 Go (2 x 8 Go) DDR5 5600 MHz CL36",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 16 Go (2 x 8 Go) DDR5 5600 MHz CL36.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 16 Go (2 x 8 Go) 5600 MHz CL36",
         "price": 130,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5600",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 16 Go (2 x 8 Go) DDR5 6000 MHz CL30",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 16 Go (2 x 8 Go) DDR5 6000 MHz CL30.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 16 Go (2 x 8 Go) 6000 MHz CL30",
         "price": 140,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR4 3200 MHz CL16",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR4 3200 MHz CL16.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast 32 Go (2 x 16 Go) 3200 MHz CL16",
         "price": 150,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR4 3600 MHz CL18",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR4 3600 MHz CL18 -.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast 32 Go (2 x 16 Go) 3600 MHz CL18",
         "price": 160,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3600",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 5200 MHz CL40",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 5200 MHz CL40.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 32 Go (2 x 16 Go) 5200 MHz CL40",
         "price": 170,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 5600 MHz CL36",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 5600 MHz CL36.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 32 Go (2 x 16 Go) 5600 MHz CL36",
         "price": 180,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5600",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 5600 MHz CL40",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 5600 MHz CL40.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 32 Go (2 x 16 Go) 5600 MHz CL40",
         "price": 175,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5600",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6000 MHz CL30 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6000 MHz CL30 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc",
         "price": 200,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6000 MHz CL30",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6000 MHz CL30.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 32 Go (2 x 16 Go) 6000 MHz CL30",
         "price": 200,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6000 MHz CL36",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6000 MHz CL36.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 32 Go (2 x 16 Go) 6000 MHz CL36",
         "price": 190,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6800 MHz CL34 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (2 x 16 Go) DDR5 6800 MHz CL34 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 32 Go (2 x 16 Go) 6800 MHz CL34 - Blanc",
         "price": 250,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6800",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (4 x 8 Go) DDR4 3200 MHz CL16",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (4 x 8 Go) DDR4 3200 MHz CL16.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast 32 Go (4 x 8 Go) 3200 MHz CL16",
         "price": 160,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 32 Go (4 x 8 Go) DDR4 3600 MHz CL17",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 32 Go (4 x 8 Go) DDR4 3600 MHz CL17.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast 32 Go (4 x 8 Go) 3600 MHz CL17",
         "price": 170,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3600",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 64 Go (2 x 32 Go) DDR4 3200 MHz CL16",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 64 Go (2 x 32 Go) DDR4 3200 MHz CL16.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast 64 Go (2 x 32 Go) 3200 MHz CL16",
         "price": 300,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "64",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 64 Go (2 x 32 Go) DDR5 5600 MHz CL36",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 64 Go (2 x 32 Go) DDR5 5600 MHz CL36.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 64 Go (2 x 32 Go) 5600 MHz CL36",
         "price": 350,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-5600",
         "GO": "64",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast 64 Go (2 x 32 Go) DDR5 6000 MHz CL30",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast 64 Go (2 x 32 Go) DDR5 6000 MHz CL30.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast 64 Go (2 x 32 Go) 6000 MHz CL30",
         "price": 400,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "64",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR4 3200 MHz CL16 (KF432C16BB2AK216)",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR4 3200 MHz CL16 (KF432C16BB2AK216).jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast RGB 16 Go (2 x 8 Go) 3200 MHz CL16",
         "price": 90,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 5200 MHz CL36",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 5200 MHz CL36.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 16 Go (2 x 8 Go) 5200 MHz CL36",
         "price": 130,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5200",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 5200 MHz CL40",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 5200 MHz CL40.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 16 Go (2 x 8 Go) 5200 MHz CL40",
         "price": 125,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5200",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 5600 MHz CL40",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 5600 MHz CL40.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 16 Go (2 x 8 Go) 5600 MHz CL40",
         "price": 135,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5600",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 6000 MHz CL30",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 16 Go (2 x 8 Go) DDR5 6000 MHz CL30.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 16 Go (2 x 8 Go) 6000 MHz CL30",
         "price": 150,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR4 3200 MHz CL16 (KF432C16BB2AK232)",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR4 3200 MHz CL16 (KF432C16BB2AK232).jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 3200 MHz CL16",
         "price": 160,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR4 3200 MHz CL16",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR4 3200 MHz CL16.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 3200 MHz CL16",
         "price": 160,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR4 3600 MHz CL18",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR4 3600 MHz CL18.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 3600 MHz CL18",
         "price": 170,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3600",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL36 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL36 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 5200 MHz CL36 - Blanc",
         "price": 180,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL40",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 5200 MHz CL40.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 5200 MHz CL40",
         "price": 175,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL36",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 5600 MHz CL36.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 5600 MHz CL36",
         "price": 190,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR5-5600",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL30 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL30 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 6000 MHz CL30 - Blanc",
         "price": 210,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL30",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6000 MHz CL30.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 6000 MHz CL30",
         "price": 210,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6400 MHz CL32 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6400 MHz CL32 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 6400 MHz CL32 - Blanc",
         "price": 230,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6400",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6800 MHz CL34 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6800 MHz CL34 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 6800 MHz CL34 - Blanc",
         "price": 250,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6800",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6800 MHz CL34",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (2 x 16 Go) DDR5 6800 MHz CL34.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 32 Go (2 x 16 Go) 6800 MHz CL34",
         "price": 250,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6800",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 32 Go (4 x 8 Go) DDR4 3200 MHz CL16 (KF432C16BB2AK432)",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 32 Go (4 x 8 Go) DDR4 3200 MHz CL16 (KF432C16BB2AK432).jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast RGB 32 Go (4 x 8 Go) 3200 MHz CL16",
         "price": 170,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 5200 MHz CL40",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 5200 MHz CL40.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 64 Go (2 x 32 Go) 5200 MHz CL40",
         "price": 350,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-5200",
         "GO": "64",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 5600 MHz CL40",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 5600 MHz CL40.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 64 Go (2 x 32 Go) 5600 MHz CL40",
         "price": 360,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-5600",
         "GO": "64",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 6000 MHz CL30",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 6000 MHz CL30.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 64 Go (2 x 32 Go) 6000 MHz CL30",
         "price": 400,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "64",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 6000 MHz CL36 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast RGB 64 Go (2 x 32 Go) DDR5 6000 MHz CL36 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Beast RGB 64 Go (2 x 32 Go) 6000 MHz CL36 - Blanc",
         "price": 390,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6000",
         "GO": "64",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Beast White RGB SE 16 Go (2 x 8 Go) DDR4 3200 MHz CL16",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Beast White RGB SE 16 Go (2 x 8 Go) DDR4 3200 MHz CL16.jpg",
         "description": "Kit de mémoire DDR4 Kingston FURY Beast White RGB SE 16 Go (2 x 8 Go) 3200 MHz CL16",
         "price": 95,
         "rating": 4,
         "brand": "Kingston",
         "DDR": "DDR4-3200",
         "GO": "16",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Renegade RGB 32 Go (2 x 16 Go) DDR5 6400 MHz CL32",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Renegade RGB 32 Go (2 x 16 Go) DDR5 6400 MHz CL32.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Renegade RGB 32 Go (2 x 16 Go) 6400 MHz CL32",
         "price": 300,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6400",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Renegade RGB 32 Go (2 x 16 Go) DDR5 7200 MHz CL38 - Blanc",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Renegade RGB 32 Go (2 x 16 Go) DDR5 7200 MHz CL38 - Blanc.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Renegade RGB 32 Go (2 x 16 Go) 7200 MHz CL38 - Blanc",
         "price": 350,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-7200",
         "GO": "32",
         "availability": "green"
     },
     {
         "name": "Kingston Kingston FURY Renegade Silver 32 Go (2 x 16 Go) DDR5 6400 MHz CL32",
         "image": "/Website Beta/IMAGES/images composants/Mémoire vive/Kingston/Kingston FURY Renegade Silver 32 Go (2 x 16 Go) DDR5 6400 MHz CL32.jpg",
         "description": "Kit de mémoire DDR5 Kingston FURY Renegade Silver 32 Go (2 x 16 Go) 6400 MHz CL32",
         "price": 300,
         "rating": 5,
         "brand": "Kingston",
         "DDR": "DDR5-6400",
         "GO": "32",
         "availability": "green"
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
        const matchesDDR = !DDRFilter.value || product.DDR === DDRFilter.value;
        const matchesGO = !GOFilter.value || product.GO === GOFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesDDR && matchesGO && matchesSearch;
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
        productImage.src = "G:/Website Beta/IMAGES/Image complémentaires/Interdiction.jpg";
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
     <td class="p-3 product-name">
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

[brandFilter, DDRFilter, GOFilter, searchBar].forEach(filter => {
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