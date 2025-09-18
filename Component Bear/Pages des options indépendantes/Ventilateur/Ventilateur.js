const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const ConnecteursFilter = document.querySelector("#ConnecteursFilter");
const MMFilter = document.querySelector("#MMFilter");
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
        name: "Antec Fusion 120 ARGB Noir",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Antec/Antec Fusion 120 ARGB Noir.jpg",
        description: "Ventilateur de boîtier Antec Fusion 120 ARGB Noir, 120 mm, PWM, RGB, 1500 RPM, 56.5 CFM, 28.6 dBA",
        price: 19.99,
        rating: 4,
        brand: "Antec",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Antec P12R ARGB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Antec/Antec P12R ARGB.jpg",
        description: "Ventilateur de boîtier Antec P12R ARGB, 120 mm, PWM, RGB, 1500 RPM, 56.5 CFM, 28.6 dBA",
        price: 24.99,
        rating: 5,
        brand: "Antec",
        Connecteurs: ["4 Pins Femelle", "LED RGB"],
        MM: "120",
        availability: "green",
    },
    {
        name: "Arctic BioniX P120 A-RGB Bundle",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic BioniX P120 A-RGB Bundle.jpg",
        description: "Ventilateur de boîtier Arctic BioniX P120 A-RGB Bundle, 120 mm, PWM, RGB, 2000 RPM, 67.6 CFM, 31.5 dBA",
        price: 34.99,
        rating: 4,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "orange",
    },
    {
        name: "Arctic P12 PWM PST A-RGB 0dB (blanc) Pack de 3",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic P12 PWM PST A-RGB 0dB (blanc) Pack de 3.jpg",
        description: "Pack de 3 ventilateurs de boîtier Arctic P12 PWM PST A-RGB 0dB, 120 mm, PWM, RGB, 1800 RPM, 56.3 CFM, 22.5 dBA",
        price: 49.99,
        rating: 5,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Arctic P12 PWM PST A-RGB 0dB (blanc)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic P12 PWM PST A-RGB 0dB (blanc).jpg",
        description: "Ventilateur de boîtier Arctic P12 PWM PST A-RGB 0dB, 120 mm, PWM, RGB, 1800 RPM, 56.3 CFM, 22.5 dBA",
        price: 19.99,
        rating: 4,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Arctic P12 PWM PST A-RGB 0dB Pack de 3",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic P12 PWM PST A-RGB 0dB Pack de 3.jpg",
        description: "Pack de 3 ventilateurs de boîtier Arctic P12 PWM PST A-RGB 0dB, 120 mm, PWM, RGB, 1800 RPM, 56.3 CFM, 22.5 dBA",
        price: 49.99,
        rating: 5,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Arctic P12 PWM PST A-RGB 0dB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic P12 PWM PST A-RGB 0dB.jpg",
        description: "Ventilateur de boîtier Arctic P12 PWM PST A-RGB 0dB, 120 mm, PWM, RGB, 1800 RPM, 56.3 CFM, 22.5 dBA",
        price: 19.99,
        rating: 4,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Arctic P12 Silent Noir",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic P12 Silent Noir.jpg",
        description: "Ventilateur de boîtier Arctic P12 Silent Noir, 120 mm, PWM, 1500 RPM, 56.3 CFM, 22.5 dBA",
        price: 9.99,
        rating: 4,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Arctic P14 PWM PST A-RGB 0dB Pack de 3",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic P14 PWM PST A-RGB 0dB Pack de 3.jpg",
        description: "Pack de 3 ventilateurs de boîtier Arctic P14 PWM PST A-RGB 0dB, 140 mm, PWM, RGB, 1700 RPM, 74 CFM, 22.5 dBA",
        price: 59.99,
        rating: 5,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Arctic P14 PWM PST A-RGB 0dB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Arctic/Arctic P14 PWM PST A-RGB 0dB.jpg",
        description: "Ventilateur de boîtier Arctic P14 PWM PST A-RGB 0dB, 140 mm, PWM, RGB, 1700 RPM, 74 CFM, 22.5 dBA",
        price: 24.99,
        rating: 4,
        brand: "Arctic",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings 120 mm PWM ARGB Triple Pack (blanc)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings 120 mm PWM ARGB Triple Pack (blanc).jpg",
        description: "Pack de 3 ventilateurs de boîtier be quiet! Light Wings 120 mm PWM ARGB, 120 mm, PWM, RGB, 2500 RPM, 53.5 CFM, 28.1 dBA",
        price: 89.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings 120 mm PWM ARGB Triple Pack",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings 120 mm PWM ARGB Triple Pack.jpg",
        description: "Pack de 3 ventilateurs de boîtier be quiet! Light Wings 120 mm PWM ARGB, 120 mm, PWM, RGB, 2500 RPM, 53.5 CFM, 28.1 dBA",
        price: 89.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings 120 mm PWM High Speed ARGB Triple Pack",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings 120 mm PWM High Speed ARGB Triple Pack.jpg",
        description: "Pack de 3 ventilateurs de boîtier be quiet! Light Wings 120 mm PWM High Speed ARGB, 120 mm, PWM, RGB, 2500 RPM, 53.5 CFM, 28.1 dBA",
        price: 99.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings 140 mm PWM ARGB Triple Pack",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings 140 mm PWM ARGB Triple Pack.jpg",
        description: "Pack de 3 ventilateurs de boîtier be quiet! Light Wings 140 mm PWM ARGB, 140 mm, PWM, RGB, 1600 RPM, 71.3 CFM, 28.1 dBA",
        price: 109.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings 140 mm PWM High Speed ARGB Triple Pack (blanc)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings 140 mm PWM High Speed ARGB Triple Pack (blanc).jpg",
        description: "Pack de 3 ventilateurs de boîtier be quiet! Light Wings 140 mm PWM High Speed ARGB, 140 mm, PWM, RGB, 1600 RPM, 71.3 CFM, 28.1 dBA",
        price: 119.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings 140 mm PWM High Speed ARGB Triple Pack",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings 140 mm PWM High Speed ARGB Triple Pack.jpg",
        description: "Pack de 3 ventilateurs de boîtier be quiet! Light Wings 140 mm PWM High Speed ARGB, 140 mm, PWM, RGB, 1600 RPM, 71.3 CFM, 28.1 dBA",
        price: 119.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings LX 120 mm PWM High Speed",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings LX 120 mm PWM High Speed.jpg",
        description: "Ventilateur de boîtier be quiet! Light Wings LX 120 mm PWM High Speed, 120 mm, PWM, 2500 RPM, 53.5 CFM, 28.1 dBA",
        price: 29.99,
        rating: 4,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings LX 120 mm PWM",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings LX 120 mm PWM.jpg",
        description: "Ventilateur de boîtier be quiet! Light Wings LX 120 mm PWM, 120 mm, PWM, 2500 RPM, 53.5 CFM, 28.1 dBA",
        price: 29.99,
        rating: 4,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings LX 140 mm PWM High Speed",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings LX 140 mm PWM High Speed.jpg",
        description: "Ventilateur de boîtier be quiet! Light Wings LX 140 mm PWM High Speed, 140 mm, PWM, 1600 RPM, 71.3 CFM, 28.1 dBA",
        price: 34.99,
        rating: 4,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "be quiet! Light Wings LX 140 mm PWM",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Light Wings LX 140 mm PWM.jpg",
        description: "Ventilateur de boîtier be quiet! Light Wings LX 140 mm PWM, 140 mm, PWM, 1600 RPM, 71.3 CFM, 28.1 dBA",
        price: 34.99,
        rating: 4,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "be quiet! Silent Wings 4 120mm PWM - Blanc",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Silent Wings 4 120mm PWM - Blanc.jpg",
        description: "Ventilateur de boîtier be quiet! Silent Wings 4 120mm PWM, 120 mm, PWM, 2400 RPM, 50.5 CFM, 19.8 dBA",
        price: 29.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Silent Wings 4 120mm PWM",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Silent Wings 4 120mm PWM.jpg",
        description: "Ventilateur de boîtier be quiet! Silent Wings 4 120mm PWM, 120 mm, PWM, 2400 RPM, 50.5 CFM, 19.8 dBA",
        price: 29.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Silent Wings 4 140mm",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Silent Wings 4 140mm.jpg",
        description: "Ventilateur de boîtier be quiet! Silent Wings 4 140mm, 140 mm, PWM, 1600 RPM, 77.6 CFM, 19.8 dBA",
        price: 34.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "be quiet! Silent Wings Pro 4 120 mm PWM",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Silent Wings Pro 4 120 mm PWM.jpg",
        description: "Ventilateur de boîtier be quiet! Silent Wings Pro 4 120 mm PWM, 120 mm, PWM, 3000 RPM, 76.1 CFM, 28.1 dBA",
        price: 39.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "be quiet! Silent Wings Pro 4 140 mm PWM - Blanc",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/be quiet !/be quiet! Silent Wings Pro 4 140 mm PWM - Blanc.jpg",
        description: "Ventilateur de boîtier be quiet! Silent Wings Pro 4 140 mm PWM, 140 mm, PWM, 2200 RPM, 102.1 CFM, 28.1 dBA",
        price: 44.99,
        rating: 5,
        brand: "be quiet!",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Cooler Master MasterFan MF120 Halo 2",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master MasterFan MF120 Halo 2.jpg",
        description: "Ventilateur de boîtier Cooler Master MasterFan MF120 Halo 2, 120 mm, PWM, RGB, 2000 RPM, 62 CFM, 30 dBA",
        price: 29.99,
        rating: 4,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Cooler Master MasterFan MF120M Prismatic ARGB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master MasterFan MF120M Prismatic ARGB.jpg",
        description: "Ventilateur de boîtier Cooler Master MasterFan MF120M Prismatic ARGB, 120 mm, PWM, RGB, 2000 RPM, 62 CFM, 30 dBA",
        price: 34.99,
        rating: 4,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Cooler Master MasterFan MF140 Halo 2 White Edition",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master MasterFan MF140 Halo 2 White Edition.jpg",
        description: "Ventilateur de boîtier Cooler Master MasterFan MF140 Halo 2 White Edition, 140 mm, PWM, RGB, 1500 RPM, 82 CFM, 30 dBA",
        price: 39.99,
        rating: 4,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Cooler Master MasterFan MF140 Halo 2",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master MasterFan MF140 Halo 2.jpg",
        description: "Ventilateur de boîtier Cooler Master MasterFan MF140 Halo 2, 140 mm, PWM, RGB, 1500 RPM, 82 CFM, 30 dBA",
        price: 39.99,
        rating: 4,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Cooler Master MasterFan SF120M ARGB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master MasterFan SF120M ARGB.jpg",
        description: "Ventilateur de boîtier Cooler Master MasterFan SF120M ARGB, 120 mm, PWM, RGB, 2000 RPM, 62 CFM, 30 dBA",
        price: 29.99,
        rating: 4,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Cooler Master Mobius 120P ARGB White Edition",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master Mobius 120P ARGB White Edition.jpg",
        description: "Ventilateur de boîtier Cooler Master Mobius 120P ARGB White Edition, 120 mm, PWM, RGB, 2500 RPM, 82.1 CFM, 32 dBA",
        price: 49.99,
        rating: 5,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Cooler Master Mobius 120P ARGB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master Mobius 120P ARGB.jpg",
        description: "Ventilateur de boîtier Cooler Master Mobius 120P ARGB, 120 mm, PWM, RGB, 2500 RPM, 82.1 CFM, 32 dBA",
        price: 49.99,
        rating: 5,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Cooler Master Mobius 140P ARGB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master Mobius 140P ARGB.jpg",
        description: "Ventilateur de boîtier Cooler Master Mobius 140P ARGB, 140 mm, PWM, RGB, 2000 RPM, 107 CFM, 32 dBA",
        price: 59.99,
        rating: 5,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Cooler Master SickeFlow 120 ARGB",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Cooler Master/Cooler Master SickeFlow 120 ARGB.jpg",
        description: "Ventilateur de boîtier Cooler Master SickeFlow 120 ARGB, 120 mm, PWM, RGB, 2000 RPM, 62 CFM, 30 dBA",
        price: 29.99,
        rating: 4,
        brand: "Cooler Master",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Lian Li Uni Fan SL-Infinity 140 (blanc)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Lian Li/Lian Li Uni Fan SL-Infinity 140 (blanc).jpg",
        description: "Ventilateur de boîtier Lian Li Uni Fan SL-Infinity 140, 140 mm, PWM, RGB, 1900 RPM, 82.1 CFM, 29.2 dBA",
        price: 89.99,
        rating: 5,
        brand: "Lian Li",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Lian Li Uni Fan SL-Infinity 140 (noir)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Lian Li/Lian Li Uni Fan SL-Infinity 140 (noir).jpg",
        description: "Ventilateur de boîtier Lian Li Uni Fan SL-Infinity 140, 140 mm, PWM, RGB, 1900 RPM, 82.1 CFM, 29.2 dBA",
        price: 89.99,
        rating: 5,
        brand: "Lian Li",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Lian Li Uni Fan SL-Infinity Reverse Blade 140 (blanc)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Lian Li/Lian Li Uni Fan SL-Infinity Reverse Blade 140 (blanc).jpg",
        description: "Ventilateur de boîtier Lian Li Uni Fan SL-Infinity Reverse Blade 140, 140 mm, PWM, RGB, 1900 RPM, 82.1 CFM, 29.2 dBA",
        price: 99.99,
        rating: 5,
        brand: "Lian Li",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Lian Li Uni Fan SL-Infinity Reverse Blade 140 (noir)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Lian Li/Lian Li Uni Fan SL-Infinity Reverse Blade 140 (noir).jpg",
        description: "Ventilateur de boîtier Lian Li Uni Fan SL-Infinity Reverse Blade 140, 140 mm, PWM, RGB, 1900 RPM, 82.1 CFM, 29.2 dBA",
        price: 99.99,
        rating: 5,
        brand: "Lian Li",
        Connecteurs: "4 Pins Femelle",
        MM: "140",
        availability: "green",
    },
    {
        name: "Phanteks M25-120 D-RGB Blanc",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Phanteks/Phanteks M25-120 D-RGB Blanc.jpg",
        description: "Ventilateur de boîtier Phanteks M25-120 D-RGB Blanc, 120 mm, PWM, RGB, 2000 RPM, 58.1 CFM, 28 dBA",
        price: 24.99,
        rating: 4,
        brand: "Phanteks",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Phanteks M25-120 D-RGB Noir",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Phanteks/Phanteks M25-120 D-RGB Noir.jpg",
        description: "Ventilateur de boîtier Phanteks M25-120 D-RGB Noir, 120 mm, PWM, RGB, 2000 RPM, 58.1 CFM, 28 dBA",
        price: 24.99,
        rating: 4,
        brand: "Phanteks",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Thermalright TL-C12C-S - Noir (Par 3)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Thermalright/Thermalright TL-C12C-S - Noir (Par 3).jpg",
        description: "Pack de 3 ventilateurs de boîtier Thermalright TL-C12C-S, 120 mm, PWM, 1500 RPM, 66.17 CFM, 25.6 dBA",
        price: 29.99,
        rating: 4,
        brand: "Thermalright",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
        availability: "green",
    },
    {
        name: "Thermalright TL-C12CW-S - Blanc (Par 3)",
        image: "/Website Beta/IMAGES/images options/Ventilateur de boîtier/Thermalright/Thermalright TL-C12CW-S - Blanc (Par 3).jpg",
        description: "Pack de 3 ventilateurs de boîtier Thermalright TL-C12CW-S, 120 mm, PWM, 1500 RPM, 66.17 CFM, 25.6 dBA",
        price: 29.99,
        rating: 4,
        brand: "Thermalright",
        Connecteurs: "4 Pins Femelle",
        MM: "120",
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
        const matchesConnecteurs = !ConnecteursFilter.value || product.Connecteurs === ConnecteursFilter.value;
        const matchesMM = !MMFilter.value || product.MM === MMFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesConnecteurs && matchesMM && matchesSearch;
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

[brandFilter, ConnecteursFilter, MMFilter, searchBar].forEach(filter => {
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
        alert("Veuillez sélectionner au moins un refroidissement avant de valider.");
    }
  });






