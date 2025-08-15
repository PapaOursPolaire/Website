const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const chipsetFilter = document.querySelector("#chipsetFilter");
const GDDRFilter = document.querySelector("#GDDRFilter");
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
        "name": "MSI GeForce RTX 4060 Ti GAMING X SLIM 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte graphique/MSI/Nvidia/4060 Ti GAMING X SLIM 16G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4060 Ti GAMING X SLIM 16G - 16 Go GDDR6 - HDMI/Tri DisplayPort - DLSS 3 - PCI Express",
        "price": 589,
        "rating": 5,
        "brand": "MSI",
        "chipset": "rtx-4060",
        "GDDR": "16",
        "availability": "red"
    },
    {
        "name": "Sapphire AMD Radeon RX 7900 XTX Vapor-X 24GB",
        "image": "/Website Beta/IMAGES/images composants/Carte graphique/Sapphire/AMD/PULSE RX 7900 XTX 24GB.jpg",
        "description": "Carte graphique Sapphire AMD Radeon RX 7900 XTX Vapor-X 24GB - 24 Go GDDR6 - Dual HDMI/Dual DisplayPort - PCI Express",
        "price": 1129,
        "rating": 5,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7900-xtx",
        "GDDR": "24",
        "availability": "red"
    },
    {
        "name": "ASRock A750 Challenger SE",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/A750 Challenger SE.jpg",
        "description": "Carte graphique ASRock A750 Challenger SE - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 299,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "arc-a750",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASRock B570 Challenger",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/B570 Challenger.jpg",
        "description": "Carte graphique ASRock B570 Challenger - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 349,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "radeon-rx-7600",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASRock RX 7600 Steel Legend",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/RX 7600 Steel Legend.jpg",
        "description": "Carte graphique ASRock RX 7600 Steel Legend - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 279,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "radeon-rx-7600",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASRock RX 7600 XT Steel Legend",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/RX 7600 XT Steel Legend.jpg",
        "description": "Carte graphique ASRock RX 7600 XT Steel Legend - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 329,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "radeon-rx-7600",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "ASRock RX 7700 XT Challenger",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/RX 7700 XT Challenger.jpg",
        "description": "Carte graphique ASRock RX 7700 XT Challenger - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 449,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "radeon-rx-7700-xt",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "ASRock RX 7800 XT Challenger",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/RX 7800 XT Challenger.jpg",
        "description": "Carte graphique ASRock RX 7800 XT Challenger - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 499,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "radeon-rx-7800-xt",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "ASRock RX 7900 XT Phantom",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/RX 7900 XT Phantom.jpg",
        "description": "Carte graphique ASRock RX 7900 XT Phantom - 20 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 899,
        "rating": 5,
        "brand": "ASRock",
        "chipset": "radeon-rx-7900-xt",
        "GDDR": "20",
        "availability": "green"
    },
    {
        "name": "ASRock RX 7900 XTX Phantom",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/RX 7900 XTX Phantom.jpg",
        "description": "Carte graphique ASRock RX 7900 XTX Phantom - 24 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 1099,
        "rating": 5,
        "brand": "ASRock",
        "chipset": "radeon-rx-7900-xtx",
        "GDDR": "24",
        "availability": "green"
    },
    {
        "name": "ASRock RX 7900 XTX Taichi Blanc",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/AMD/RX 7900 XTX Taichi Blanc.jpg",
        "description": "Carte graphique ASRock RX 7900 XTX Taichi Blanc - 24 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 1199,
        "rating": 5,
        "brand": "ASRock",
        "chipset": "radeon-rx-7900-xtx",
        "GDDR": "24",
        "availability": "green"
    },
    {
        "name": "ASRock A310",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/Intel/A310.jpg",
        "description": "Carte graphique ASRock A310 - 4 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 149,
        "rating": 3,
        "brand": "ASRock",
        "chipset": "arc-a750",
        "GDDR": "4",
        "availability": "green"
    },
    {
        "name": "ASRock A770",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/Intel/A770.jpg",
        "description": "Carte graphique ASRock A770 - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 399,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "arc-a770",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "ASRock B580 Challenger",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/Intel/B580 Challenger.jpg",
        "description": "Carte graphique ASRock B580 Challenger - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 299,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "rtx-3060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASRock B580",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASROCK/Intel/B580.jpg",
        "description": "Carte graphique ASRock B580 - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 279,
        "rating": 4,
        "brand": "ASRock",
        "chipset": "rtx-3060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASUS RX 7600 DUAL",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/AMD/RX 7600 DUAL.jpg",
        "description": "Carte graphique ASUS RX 7600 DUAL - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 279,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "radeon-rx-7600",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASUS RX 7600 XT OC",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/AMD/RX 7600 XT OC.jpg",
        "description": "Carte graphique ASUS RX 7600 XT OC - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 329,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "radeon-rx-7600",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "ASUS RX 7700 XT",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/AMD/RX 7700 XT.jpg",
        "description": "Carte graphique ASUS RX 7700 XT - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 449,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "radeon-rx-7700-xt",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "ASUS RX 7800 XT",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/AMD/RX 7800 XT.jpg",
        "description": "Carte graphique ASUS RX 7800 XT - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 499,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "radeon-rx-7800-xt",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 3050 V2",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 3050 V2.jpg",
        "description": "Carte graphique ASUS RTX 3050 V2 - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 249,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "rtx-3050",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 3050",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 3050.jpg",
        "description": "Carte graphique ASUS RTX 3050 - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 259,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "rtx-3050",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 4060 EVO",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 4060 EVO.jpg",
        "description": "Carte graphique ASUS RTX 4060 EVO - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 299,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 4060 Ti",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 4060 Ti.jpg",
        "description": "Carte graphique ASUS RTX 4060 Ti - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 399,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 4060 WHITE",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 4060 WHITE.jpg",
        "description": "Carte graphique ASUS RTX 4060 WHITE - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 309,
        "rating": 4,
        "brand": "ASUS",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 4070 SUPER 12gB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 4070 SUPER 12gB.jpg",
        "description": "Carte graphique ASUS RTX 4070 SUPER 12gB - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 599,
        "rating": 5,
        "brand": "ASUS",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 4070 SUPER 16gB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 4070 SUPER 16gB.jpg",
        "description": "Carte graphique ASUS RTX 4070 SUPER 16gB - 16 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 699,
        "rating": 5,
        "brand": "ASUS",
        "chipset": "rtx-4070",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "ASUS RTX 4070Ti SUPER OC",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/ASUS/Nvidia/RTX 4070Ti SUPER OC.jpg",
        "description": "Carte graphique ASUS RTX 4070Ti SUPER OC - 16 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 849,
        "rating": 5,
        "brand": "ASUS",
        "chipset": "rtx-4070",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 6400 EAGLE 4G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 6400 EAGLE 4G.jpg",
        "description": "Carte graphique Gigabyte RX 6400 EAGLE 4G - 4 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 149,
        "rating": 3,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-6400",
        "GDDR": "4",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 6400",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 6400.jpg",
        "description": "Carte graphique Gigabyte RX 6400 - 4 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 139,
        "rating": 3,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-6400",
        "GDDR": "4",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 6500 XT",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 6500 XT.jpg",
        "description": "Carte graphique Gigabyte RX 6500 XT - 4 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 169,
        "rating": 3,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-6500-xt",
        "GDDR": "4",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 7600",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 7600.jpg",
        "description": "Carte graphique Gigabyte RX 7600 - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 279,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-7600",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 7600XT 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 7600XT 12G.jpg",
        "description": "Carte graphique Gigabyte RX 7600XT 12G - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 329,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-7600",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 7600XT 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 7600XT 16G.jpg",
        "description": "Carte graphique Gigabyte RX 7600XT 16G - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 379,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-7600",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 7700XT",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 7700XT.jpg",
        "description": "Carte graphique Gigabyte RX 7700XT - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 449,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-7700-xt",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RX 7800 XT",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/AMD/RX 7800 XT.jpg",
        "description": "Carte graphique Gigabyte RX 7800 XT - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 499,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "radeon-rx-7800-xt",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 3060 WINDFORCE OC 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 3060 WINDFORCE OC 12G.jpg",
        "description": "Carte graphique Gigabyte RTX 3060 WINDFORCE OC 12G - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 299,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-3060",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 AERO OC 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 AERO OC 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 AERO OC 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 299,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 EAGLE OC 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 EAGLE OC 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 EAGLE OC 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 289,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 EAGLE OC ICE 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 EAGLE OC ICE 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 EAGLE OC ICE 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 299,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 GAMING OC 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 GAMING OC 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 GAMING OC 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 309,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 TI OC 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 TI OC 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 TI OC 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 399,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 Ti AERO OC 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 Ti AERO OC 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 Ti AERO OC 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 409,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 Ti EAGLE OC 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 Ti EAGLE OC 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 Ti EAGLE OC 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 399,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 Ti WINDFORCE OC 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 Ti WINDFORCE OC 16G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 Ti WINDFORCE OC 16G - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 499,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 Ti WINDFORCE OC 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 Ti WINDFORCE OC 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 Ti WINDFORCE OC 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 399,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4060 WINDFORCE 0C 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4060 WINDFORCE 0C 8G.jpg",
        "description": "Carte graphique Gigabyte RTX 4060 WINDFORCE 0C 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 289,
        "rating": 4,
        "brand": "Gigabyte",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 SUPER EAGLE 0C 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 SUPER EAGLE 0C 12G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 SUPER EAGLE 0C 12G - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 599,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 SUPER EAGLE OC ICE 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 SUPER EAGLE OC ICE 12G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 SUPER EAGLE OC ICE 12G - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 609,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 SUPER GAMING OC 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 SUPER GAMING OC 12G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 SUPER GAMING OC 12G - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 619,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 SUPER WINDFORCE 0C 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 SUPER WINDFORCE 0C 12G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 SUPER WINDFORCE 0C 12G - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 599,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 Ti SUPER EAGLE OC 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 Ti SUPER EAGLE OC 16G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 Ti SUPER EAGLE OC 16G - 16 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 849,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 Ti SUPER EAGLE OC ICE 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 Ti SUPER EAGLE OC ICE 16G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 Ti SUPER EAGLE OC ICE 16G - 16 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 859,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 Ti SUPER GAMING OC 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 Ti SUPER GAMING OC 16G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 Ti SUPER GAMING OC 16G - 16 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 869,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 Ti SUPER WINDFORCE OC 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 Ti SUPER WINDFORCE OC 16G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 Ti SUPER WINDFORCE OC 16G - 16 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 849,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 WINDFORCE 0C 12G V2",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 WINDFORCE 0C 12G V2.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 WINDFORCE 0C 12G V2 - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 599,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 WINDFORCE 0C 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 WINDFORCE 0C 12G.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 WINDFORCE 0C 12G - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 589,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Gigabyte RTX 4070 WINDFORCE 2X OC 12G V2",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/gigabyte/Nvidia/RTX 4070 WINDFORCE 2X OC 12G V2.jpg",
        "description": "Carte graphique Gigabyte RTX 4070 WINDFORCE 2X OC 12G V2 - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 599,
        "rating": 5,
        "brand": "Gigabyte",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "MSI 3050 VENTUS 2X XS 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/3050 VENTUS 2X XS 8G.jpg",
        "description": "Carte graphique MSI GeForce RTX 3050 VENTUS 2X XS 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 249,
        "rating": 4,
        "brand": "MSI",
        "chipset": "rtx-3050",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "MSI 4060 Ti GAMING X 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4060 Ti GAMING X 8G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4060 Ti GAMING X 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 399,
        "rating": 4,
        "brand": "MSI",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "MSI 4060 Ti GAMING X SLIM 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4060 Ti GAMING X SLIM 16G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4060 Ti GAMING X SLIM 16G - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 499,
        "rating": 5,
        "brand": "MSI",
        "chipset": "rtx-4060",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "MSI 4060 Ti VENTUS 2X BLACK 16G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4060 Ti VENTUS 2X BLACK 16G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4060 Ti VENTUS 2X BLACK 16G - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 489,
        "rating": 4,
        "brand": "MSI",
        "chipset": "rtx-4060",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "MSI 4060 Ti VENTUS 2X BLACK 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4060 Ti VENTUS 2X BLACK 8G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4060 Ti VENTUS 2X BLACK 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 389,
        "rating": 4,
        "brand": "MSI",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "MSI 4060 VENTUS 2X BLACK 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4060 VENTUS 2X BLACK 8G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4060 VENTUS 2X BLACK 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 299,
        "rating": 4,
        "brand": "MSI",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "MSI 4060 VENTUS 2X WHITE 8G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4060 VENTUS 2X WHITE 8G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4060 VENTUS 2X WHITE 8G - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 309,
        "rating": 4,
        "brand": "MSI",
        "chipset": "rtx-4060",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "MSI 4070 3X E1 12G",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4070 3X E1 12G.jpg",
        "description": "Carte graphique MSI GeForce RTX 4070 3X E1 12G - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 599,
        "rating": 5,
        "brand": "MSI",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "MSI 4070 SUPER 12G GAMING VENTUS 2X WHITE",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4070 SUPER 12G GAMING VENTUS 2X WHITE.jpg",
        "description": "Carte graphique MSI GeForce RTX 4070 SUPER 12G GAMING VENTUS 2X WHITE - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 619,
        "rating": 5,
        "brand": "MSI",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "MSI 4070 SUPER 12G GAMING X SLIM",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4070 SUPER 12G GAMING X SLIM.jpg",
        "description": "Carte graphique MSI GeForce RTX 4070 SUPER 12G GAMING X SLIM - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 629,
        "rating": 5,
        "brand": "MSI",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "MSI 4070 SUPER 12G VENTUS 2X",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/MSI/Nvidia/4070 SUPER 12G VENTUS 2X.jpg",
        "description": "Carte graphique MSI GeForce RTX 4070 SUPER 12G VENTUS 2X - 12 Go GDDR6X - HDMI/DisplayPort - PCI Express",
        "price": 609,
        "rating": 5,
        "brand": "MSI",
        "chipset": "rtx-4070",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Sapphire NITRO RX 7900 XT VAPOR-X 20GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/NITRO RX 7900 XT VAPOR-X 20GB.jpg",
        "description": "Carte graphique Sapphire NITRO RX 7900 XT VAPOR-X 20GB - 20 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 899,
        "rating": 5,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7900-xt",
        "GDDR": "20",
        "availability": "green"
    },
    {
        "name": "Sapphire PULSE RX 7800 XT 16GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/PULSE RX 7800 XT 16GB.jpg",
        "description": "Carte graphique Sapphire PULSE RX 7800 XT 16GB - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 499,
        "rating": 4,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7800-xt",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Sapphire PULSE RX 7900 XT 20GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/PULSE RX 7900 XT 20GB.jpg",
        "description": "Carte graphique Sapphire PULSE RX 7900 XT 20GB - 20 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 899,
        "rating": 5,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7900-xt",
        "GDDR": "20",
        "availability": "green"
    },
    {
        "name": "Sapphire PULSE RX 7900 XTX 24GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/PULSE RX 7900 XTX 24GB.jpg",
        "description": "Carte graphique Sapphire PULSE RX 7900 XTX 24GB - 24 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 1099,
        "rating": 5,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7900-xtx",
        "GDDR": "24",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7600 8GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7600 8GB.jpg",
        "description": "Carte graphique Sapphire RX 7600 8GB - 8 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 279,
        "rating": 4,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7600",
        "GDDR": "8",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7700 XT 12GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7700 XT 12GB.jpg",
        "description": "Carte graphique Sapphire RX 7700 XT 12GB - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 449,
        "rating": 4,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7700-xt",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7700 XT GAMING OC 12GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7700 XT GAMING OC 12GB.jpg",
        "description": "Carte graphique Sapphire RX 7700 XT GAMING OC 12GB - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 469,
        "rating": 4,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7700-xt",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7700 XT OC 12GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7700 XT OC 12GB.jpg",
        "description": "Carte graphique Sapphire RX 7700 XT OC 12GB - 12 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 459,
        "rating": 4,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7700-xt",
        "GDDR": "12",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7800 XT 16GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7800 XT 16GB.jpg",
        "description": "Carte graphique Sapphire RX 7800 XT 16GB - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 499,
        "rating": 4,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7800-xt",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7800 XT GAMING OC 16GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7800 XT GAMING OC 16GB.jpg",
        "description": "Carte graphique Sapphire RX 7800 XT GAMING OC 16GB - 16 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 519,
        "rating": 4,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7800-xt",
        "GDDR": "16",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7900 XT 20GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7900 XT 20GB.jpg",
        "description": "Carte graphique Sapphire RX 7900 XT 20GB - 20 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 899,
        "rating": 5,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7900-xt",
        "GDDR": "20",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7900 XT VAPOR-X 20GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7900 XT VAPOR-X 20GB.jpg",
        "description": "Carte graphique Sapphire RX 7900 XT VAPOR-X 20GB - 20 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 919,
        "rating": 5,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7900-xt",
        "GDDR": "20",
        "availability": "green"
    },
    {
        "name": "Sapphire RX 7900 XTX 24GB",
        "image": "/Website Beta/IMAGES/images composants/Carte Graphique/Sapphire/AMD/RX 7900 XTX 24GB.jpg",
        "description": "Carte graphique Sapphire RX 7900 XTX 24GB - 24 Go GDDR6 - HDMI/DisplayPort - PCI Express",
        "price": 1099,
        "rating": 5,
        "brand": "Sapphire",
        "chipset": "radeon-rx-7900-xtx",
        "GDDR": "24",
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
        const matchesChipset = !chipsetFilter.value || product.chipset === chipsetFilter.value;
        const matchesGDDR = !GDDRFilter.value || product.GDDR === GDDRFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesChipset && matchesGDDR && matchesSearch;
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

[brandFilter, chipsetFilter, GDDRFilter, searchBar].forEach(filter => {
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
