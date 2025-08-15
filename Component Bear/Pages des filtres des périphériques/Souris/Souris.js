const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const SFFilter = document.querySelector("#SFFilter");
const TDSFilter = document.querySelector("#TDSFilter");
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
            name: "ASUS ROG Chakram X Origin",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Chakram X Origin.jpg",
            description: "Souris gaming sans fil avec joystick intégré, capteur optique 36 000 DPI, et rétroéclairage RGB personnalisable.",
            price: 199,
            rating: 4,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Gladius II Core",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Gladius II Core.jpg",
            description: "Souris gaming filaire avec capteur optique 6200 DPI, design ergonomique et switches amovibles.",
            price: 49,
            rating: 4,
            brand: "ASUS",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Gladius III Wireless AimPoint (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Gladius III Wireless AimPoint (Blanc).jpg",
            description: "Souris gaming sans fil avec capteur AimPoint 36 000 DPI, design blanc et rétroéclairage RGB.",
            price: 149,
            rating: 5,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Gladius III",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Gladius III.jpg",
            description: "Souris gaming filaire avec capteur optique 19 000 DPI, switches amovibles et design ergonomique.",
            price: 89,
            rating: 4,
            brand: "ASUS",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Harpe Ace Mini Blanc",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Harpe Ace Mini Blanc.jpg",
            description: "Souris gaming sans fil compacte avec capteur 36 000 DPI, design blanc et rétroéclairage RGB.",
            price: 159,
            rating: 5,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Harpe Ace Mini Noir",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Harpe Ace Mini Noir.jpg",
            description: "Souris gaming sans fil compacte avec capteur 36 000 DPI, design noir et rétroéclairage RGB.",
            price: 159,
            rating: 5,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Keris II Wireless Ace (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Keris II Wireless Ace (Noir).jpg",
            description: "Souris gaming sans fil légère avec capteur 26 000 DPI, design ergonomique et switches amovibles.",
            price: 129,
            rating: 4,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Keris Wireless AimPoint (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Keris Wireless AimPoint (Blanc).jpg",
            description: "Souris gaming sans fil avec capteur AimPoint 36 000 DPI, design blanc et rétroéclairage RGB.",
            price: 139,
            rating: 5,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Spatha X",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Spatha X.jpg",
            description: "Souris gaming sans fil avec capteur optique 19 000 DPI, design ergonomique et 12 boutons programmables.",
            price: 249,
            rating: 4,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Strix Impact III (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Strix Impact III (Noir).jpg",
            description: "Souris gaming filaire légère avec capteur optique 12 000 DPI et design ambidextre.",
            price: 39,
            rating: 4,
            brand: "ASUS",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS ROG Strix Impact III Wireless (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS ROG Strix Impact III Wireless (Noir).jpg",
            description: "Souris gaming sans fil légère avec capteur optique 16 000 DPI et design ambidextre.",
            price: 79,
            rating: 4,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS TUF Gaming M3 Gen II",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS TUF Gaming M3 Gen II.jpg",
            description: "Souris gaming filaire robuste avec capteur optique 6200 DPI et design ergonomique.",
            price: 29,
            rating: 4,
            brand: "ASUS",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS TUF Gaming M4 Air",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS TUF Gaming M4 Air.jpg",
            description: "Souris gaming filaire ultra-légère avec capteur optique 16 000 DPI et design ergonomique.",
            price: 49,
            rating: 4,
            brand: "ASUS",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "ASUS TUF Gaming M4 Wireless",
            image: "/Website Beta/IMAGES/images périphériques/Souris/ASUS/ASUS TUF Gaming M4 Wireless.jpg",
            description: "Souris gaming sans fil ultra-légère avec capteur optique 16 000 DPI et design ergonomique.",
            price: 79,
            rating: 4,
            brand: "ASUS",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Dark Core RGB Pro SE",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Dark Core RGB Pro SE.jpg",
            description: "Souris gaming sans fil avec capteur optique 18 000 DPI, rétroéclairage RGB et design ergonomique.",
            price: 99,
            rating: 4,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Dark Core RGB Pro",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Dark Core RGB Pro.jpg",
            description: "Souris gaming sans fil avec capteur optique 18 000 DPI, rétroéclairage RGB et design ergonomique.",
            price: 89,
            rating: 4,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Darkstar Wireless",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Darkstar Wireless.jpg",
            description: "Souris gaming sans fil avec capteur optique 18 000 DPI, rétroéclairage RGB et design ergonomique.",
            price: 129,
            rating: 4,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming Harpoon RGB PRO",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming Harpoon RGB PRO.jpg",
            description: "Souris gaming filaire compacte avec capteur optique 12 400 DPI et rétroéclairage RGB.",
            price: 39,
            rating: 4,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming Harpoon RGB Wireless",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming Harpoon RGB Wireless.jpg",
            description: "Souris gaming sans fil compacte avec capteur optique 10 000 DPI et rétroéclairage RGB.",
            price: 59,
            rating: 4,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M55 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M55 (Noir).jpg",
            description: "Souris gaming filaire ambidextre avec capteur optique 12 400 DPI et design léger.",
            price: 49,
            rating: 4,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M55 Wireless",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M55 Wireless.jpg",
            description: "Souris gaming sans fil ambidextre avec capteur optique 12 400 DPI et design léger.",
            price: 69,
            rating: 4,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M65 RGB Ultra Wireless (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M65 RGB Ultra Wireless (Blanc).jpg",
            description: "Souris gaming sans fil avec capteur optique 26 000 DPI, design blanc et rétroéclairage RGB.",
            price: 129,
            rating: 5,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M65 RGB Ultra Wireless (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M65 RGB Ultra Wireless (Noir).jpg",
            description: "Souris gaming sans fil avec capteur optique 26 000 DPI, design noir et rétroéclairage RGB.",
            price: 129,
            rating: 5,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M65 RGB Ultra",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M65 RGB Ultra.jpg",
            description: "Souris gaming filaire avec capteur optique 26 000 DPI, design ergonomique et rétroéclairage RGB.",
            price: 99,
            rating: 5,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M75 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M75 (Noir).jpg",
            description: "Souris gaming filaire avec capteur optique 18 000 DPI, design ergonomique et rétroéclairage RGB.",
            price: 79,
            rating: 4,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M75 Air Wireless (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M75 Air Wireless (Noir).jpg",
            description: "Souris gaming sans fil ultra-légère avec capteur optique 26 000 DPI et design ergonomique.",
            price: 149,
            rating: 5,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M75 Wireless (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M75 Wireless (Blanc).jpg",
            description: "Souris gaming sans fil avec capteur optique 26 000 DPI, design blanc et rétroéclairage RGB.",
            price: 149,
            rating: 5,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming M75 Wireless (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming M75 Wireless (Noir).jpg",
            description: "Souris gaming sans fil avec capteur optique 26 000 DPI, design noir et rétroéclairage RGB.",
            price: 149,
            rating: 5,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming Nightsword RGB",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming Nightsword RGB.jpg",
            description: "Souris gaming filaire avec capteur optique 18 000 DPI, design ergonomique et rétroéclairage RGB.",
            price: 89,
            rating: 4,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming Scimitar Elite Wireless",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming Scimitar Elite Wireless.jpg",
            description: "Souris gaming sans fil avec capteur optique 18 000 DPI, 12 boutons programmables et rétroéclairage RGB.",
            price: 149,
            rating: 5,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Gaming Scimitar RGB Elite",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Gaming Scimitar RGB Elite.jpg",
            description: "Souris gaming filaire avec capteur optique 18 000 DPI, 12 boutons programmables et rétroéclairage RGB.",
            price: 99,
            rating: 4,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Ironclaw RGB",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Ironclaw RGB.jpg",
            description: "Souris gaming filaire avec capteur optique 18 000 DPI, design ergonomique et rétroéclairage RGB.",
            price: 69,
            rating: 4,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Katar Elite Wireless",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Katar Elite Wireless.jpg",
            description: "Souris gaming sans fil ultra-légère avec capteur optique 18 000 DPI et design ambidextre.",
            price: 79,
            rating: 4,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair Katar Pro XT",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair Katar Pro XT.jpg",
            description: "Souris gaming filaire ultra-légère avec capteur optique 12 400 DPI et design ambidextre.",
            price: 49,
            rating: 4,
            brand: "Corsair",
            SF: "NON",
            TDS: "Optique",
            availability: "green",
        },
        {
            name: "Corsair NIGHTSABRE Wireless RGB",
            image: "/Website Beta/IMAGES/images périphériques/Souris/Corsair/Corsair NIGHTSABRE Wireless RGB.jpg",
            description: "Souris gaming sans fil avec capteur optique 26 000 DPI, design ergonomique et rétroéclairage RGB.",
            price: 149,
            rating: 5,
            brand: "Corsair",
            SF: "OUI",
            TDS: "Optique",
            availability: "green",
        },
            {
                name: "Logitech G G203 LightSync (Blanc)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G203 LightSync (Blanc).jpg",
                description: "Souris gaming filaire avec rétroéclairage RGB personnalisable, capteur optique 8000 DPI et design symétrique.",
                price: 39,
                rating: 4,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G203 LightSync (Bleu)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G203 LightSync (Bleu).jpg",
                description: "Souris gaming filaire avec rétroéclairage RGB personnalisable, capteur optique 8000 DPI et design symétrique.",
                price: 39,
                rating: 4,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G203 LightSync (Lilas)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G203 LightSync (Lilas).jpg",
                description: "Souris gaming filaire avec rétroéclairage RGB personnalisable, capteur optique 8000 DPI et design symétrique.",
                price: 39,
                rating: 4,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G203 LightSync (Noir)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G203 LightSync (Noir).jpg",
                description: "Souris gaming filaire avec rétroéclairage RGB personnalisable, capteur optique 8000 DPI et design symétrique.",
                price: 39,
                rating: 4,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G305 Lightspeed Wireless Gaming Mouse (Blanc)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G305 Lightspeed Wireless Gaming Mouse (Blanc).jpg",
                description: "Souris gaming sans fil légère avec capteur optique 12 000 DPI et autonomie longue durée.",
                price: 59,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G305 Lightspeed Wireless Gaming Mouse (Noir)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G305 Lightspeed Wireless Gaming Mouse (Noir).jpg",
                description: "Souris gaming sans fil légère avec capteur optique 12 000 DPI et autonomie longue durée.",
                price: 59,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G309 Lightspeed Blanc",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G309 Lightspeed Blanc.jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 129,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G309 Lightspeed Noir",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G309 Lightspeed Noir.jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 129,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G402 Hyperion Fury",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G402 Hyperion Fury.jpg",
                description: "Souris gaming filaire avec capteur optique 4000 DPI, design ergonomique et 8 boutons programmables.",
                price: 49,
                rating: 4,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502 Hero (25 600 dpi)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502 Hero (25 600 dpi).jpg",
                description: "Souris gaming filaire avec capteur optique 25 600 DPI, design ergonomique et 11 boutons programmables.",
                price: 79,
                rating: 5,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502 Lightspeed",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502 Lightspeed.jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ergonomique et 11 boutons programmables.",
                price: 149,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502X Blanc",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502X Blanc.jpg",
                description: "Souris gaming filaire avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 99,
                rating: 5,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502X Lightspeed Blanc",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502X Lightspeed Blanc.jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 159,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502X Lightspeed Noir",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502X Lightspeed Noir.jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 159,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502X Noir",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502X Noir.jpg",
                description: "Souris gaming filaire avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 99,
                rating: 5,
                brand: "Logitech G",
                SF: "NON",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502X Plus Blanc",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502X Plus Blanc.jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 179,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G G502X Plus Noir",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G G502X Plus Noir.jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ergonomique et rétroéclairage RGB.",
                price: 179,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G Pro Wireless Gaming Mouse (Noir)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G Pro Wireless Gaming Mouse (Noir).jpg",
                description: "Souris gaming sans fil avec capteur optique 25 600 DPI, design ambidextre et légèreté extrême.",
                price: 149,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G Pro X Superlight 2 Lightspeed (Blanc)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G Pro X Superlight 2 Lightspeed (Blanc).jpg",
                description: "Souris gaming sans fil ultra-légère avec capteur optique 32 000 DPI et design ambidextre.",
                price: 169,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G Pro X Superlight 2 Lightspeed (Noir)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G Pro X Superlight 2 Lightspeed (Noir).jpg",
                description: "Souris gaming sans fil ultra-légère avec capteur optique 32 000 DPI et design ambidextre.",
                price: 169,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G Wireless Gaming Pro X Superlight (Blanc)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G Wireless Gaming Pro X Superlight (Blanc).jpg",
                description: "Souris gaming sans fil ultra-légère avec capteur optique 25 600 DPI et design ambidextre.",
                price: 159,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },
            {
                name: "Logitech G Wireless Gaming Pro X Superlight (Noir)",
                image: "/Website Beta/IMAGES/images périphériques/Souris/Logitech G/Logitech G Wireless Gaming Pro X Superlight (Noir).jpg",
                description: "Souris gaming sans fil ultra-légère avec capteur optique 25 600 DPI et design ambidextre.",
                price: 159,
                rating: 5,
                brand: "Logitech G",
                SF: "OUI",
                TDS: "Optique",
                availability: "green",
            },        
                {
                    name: "MSI Clutch GM41 Lightweight V2",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/MSI/MSI Clutch GM41 Lightweight V2.jpg",
                    description: "Souris gaming filaire légère avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 69,
                    rating: 4,
                    brand: "MSI",
                    SF: "NON",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Basilisk v3 35K",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Basilisk v3 35K.jpg",
                    description: "Souris gaming filaire avec capteur optique 35 000 DPI, 11 boutons programmables et rétroéclairage RGB.",
                    price: 89,
                    rating: 5,
                    brand: "Razer",
                    SF: "NON",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Basilisk v3 Pro (Blanc)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Basilisk v3 Pro (Blanc).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 159,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Basilisk v3 Pro (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Basilisk v3 Pro (Noir).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 159,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Basilisk v3 Pro 35K (Blanc)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Basilisk v3 Pro 35K (Blanc).jpg",
                    description: "Souris gaming sans fil avec capteur optique 35 000 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 169,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Basilisk v3 Pro 35K (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Basilisk v3 Pro 35K (Noir).jpg",
                    description: "Souris gaming sans fil avec capteur optique 35 000 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 169,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Basilisk v3 X HyperSpeed",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Basilisk v3 X HyperSpeed.jpg",
                    description: "Souris gaming sans fil avec capteur optique 16 000 DPI, design ergonomique et autonomie longue durée.",
                    price: 79,
                    rating: 4,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Basilisk v3",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Basilisk v3.jpg",
                    description: "Souris gaming filaire avec capteur optique 26 000 DPI, 11 boutons programmables et rétroéclairage RGB.",
                    price: 99,
                    rating: 5,
                    brand: "Razer",
                    SF: "NON",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Cobra Pro (Blanc)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Cobra Pro (Blanc).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 149,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Cobra Pro (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Cobra Pro (Noir).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 149,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Cobra",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Cobra.jpg",
                    description: "Souris gaming filaire avec capteur optique 8 500 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 49,
                    rating: 4,
                    brand: "Razer",
                    SF: "NON",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer DeathAdder Essential 2021 (Blanc)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer DeathAdder Essential 2021 (Blanc).jpg",
                    description: "Souris gaming filaire avec capteur optique 6 400 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 39,
                    rating: 4,
                    brand: "Razer",
                    SF: "NON",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer DeathAdder Essential 2021 (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer DeathAdder Essential 2021 (Noir).jpg",
                    description: "Souris gaming filaire avec capteur optique 6 400 DPI, design ergonomique et rétroéclairage RGB.",
                    price: 39,
                    rating: 4,
                    brand: "Razer",
                    SF: "NON",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Deathadder v2 X HyperSpeed",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Deathadder v2 X HyperSpeed.jpg",
                    description: "Souris gaming sans fil avec capteur optique 14 000 DPI, design ergonomique et autonomie longue durée.",
                    price: 69,
                    rating: 4,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Deathadder v3 (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Deathadder v3 (Noir).jpg",
                    description: "Souris gaming filaire avec capteur optique 30 000 DPI, design ergonomique et légèreté extrême.",
                    price: 129,
                    rating: 5,
                    brand: "Razer",
                    SF: "NON",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Deathadder v3 HyperSpeed",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Deathadder v3 HyperSpeed.jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et autonomie longue durée.",
                    price: 149,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Deathadder v3 Pro (Blanc)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Deathadder v3 Pro (Blanc).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et légèreté extrême.",
                    price: 159,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Deathadder v3 Pro (Fortnite Edition)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Deathadder v3 Pro (Fortnite Edition).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design Fortnite et légèreté extrême.",
                    price: 169,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Deathadder v3 Pro (Noir) + dongle sans fil Razer HyperPolling",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Deathadder v3 Pro (Noir) + dongle sans fil Razer HyperPolling.jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et dongle HyperPolling inclus.",
                    price: 179,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Deathadder v3 Pro (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Deathadder v3 Pro (Noir).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ergonomique et légèreté extrême.",
                    price: 159,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Fortnite Fan Pack",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Fortnite Fan Pack.jpg",
                    description: "Pack gaming incluant une souris, un clavier et un casque aux couleurs de Fortnite.",
                    price: 199,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Naga v2 HyperSpeed",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Naga v2 HyperSpeed.jpg",
                    description: "Souris gaming sans fil avec capteur optique 20 000 DPI, 19 boutons programmables et autonomie longue durée.",
                    price: 149,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Naga v2 Pro",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Naga v2 Pro.jpg",
                    description: "Souris gaming sans fil avec capteur optique 20 000 DPI, 19 boutons programmables et rétroéclairage RGB.",
                    price: 179,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Pro Click Mini",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Pro Click Mini.jpg",
                    description: "Souris gaming sans fil compacte avec capteur optique 12 000 DPI, design ergonomique et autonomie longue durée.",
                    price: 99,
                    rating: 4,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Viper v2 Pro (Blanc)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Viper v2 Pro (Blanc).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ambidextre et légèreté extrême.",
                    price: 159,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Viper v2 Pro (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Viper v2 Pro (Noir).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ambidextre et légèreté extrême.",
                    price: 159,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Viper v3 HyperSpeed (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Viper v3 HyperSpeed (Noir).jpg",
                    description: "Souris gaming sans fil avec capteur optique 26 000 DPI, design ergonomique et autonomie longue durée.",
                    price: 129,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Viper v3 Pro (Blanc)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Viper v3 Pro (Blanc).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ambidextre et légèreté extrême.",
                    price: 169,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                {
                    name: "Razer Viper v3 Pro (Noir)",
                    image: "/Website Beta/IMAGES/images périphériques/Souris/Razer/Razer Viper v3 Pro (Noir).jpg",
                    description: "Souris gaming sans fil avec capteur optique 30 000 DPI, design ambidextre et légèreté extrême.",
                    price: 169,
                    rating: 5,
                    brand: "Razer",
                    SF: "OUI",
                    TDS: "Optique",
                    availability: "green",
                },
                    {
                        name: "ROCCAT Burst Pro Air Noir",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/ROCCAT/ROCCAT Burst Pro Air Noir.jpg",
                        description: "Souris gaming sans fil légère avec capteur optique 19 000 DPI, design symétrique et rétroéclairage RGB.",
                        price: 89,
                        rating: 4,
                        brand: "ROCCAT",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "ROCCAT Kone Air (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/ROCCAT/ROCCAT Kone Air (Blanc).jpg",
                        description: "Souris gaming sans fil avec capteur optique 18 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 99,
                        rating: 4,
                        brand: "ROCCAT",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "ROCCAT Kone Pro (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/ROCCAT/ROCCAT Kone Pro (Blanc).jpg",
                        description: "Souris gaming filaire avec capteur optique 19 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 79,
                        rating: 4,
                        brand: "ROCCAT",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "ROCCAT Kone XP (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/ROCCAT/ROCCAT Kone XP (Blanc).jpg",
                        description: "Souris gaming filaire avec capteur optique 19 000 DPI, 15 boutons programmables et rétroéclairage RGB.",
                        price: 129,
                        rating: 5,
                        brand: "ROCCAT",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Aerox 3 2022 (Onyx)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Aerox 3 2022 (Onyx).jpg",
                        description: "Souris gaming filaire ultra-légère avec capteur optique 18 000 DPI et design perforé.",
                        price: 79,
                        rating: 4,
                        brand: "SteelSeries",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Aerox 3 2022 (Snow)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Aerox 3 2022 (Snow).jpg",
                        description: "Souris gaming filaire ultra-légère avec capteur optique 18 000 DPI et design blanc perforé.",
                        price: 79,
                        rating: 4,
                        brand: "SteelSeries",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Aerox 3 Wireless 2022 (Onyx)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Aerox 3 Wireless 2022 (Onyx).jpg",
                        description: "Souris gaming sans fil ultra-légère avec capteur optique 18 000 DPI et design perforé.",
                        price: 129,
                        rating: 5,
                        brand: "SteelSeries",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Aerox 3 Wireless 2022 (Snow)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Aerox 3 Wireless 2022 (Snow).jpg",
                        description: "Souris gaming sans fil ultra-légère avec capteur optique 18 000 DPI et design blanc perforé.",
                        price: 129,
                        rating: 5,
                        brand: "SteelSeries",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Aerox 5 Wireless",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Aerox 5 Wireless.jpg",
                        description: "Souris gaming sans fil avec capteur optique 18 000 DPI, 9 boutons programmables et design perforé.",
                        price: 149,
                        rating: 5,
                        brand: "SteelSeries",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Aerox 9 Wireless (World of Warcraft Edition)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Aerox 9 Wireless (World of Warcraft Edition).jpg",
                        description: "Souris gaming sans fil avec capteur optique 18 000 DPI, 12 boutons programmables et design WoW.",
                        price: 179,
                        rating: 5,
                        brand: "SteelSeries",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Arctis World of Warcraft Bundle",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Arctis World of Warcraft Bundle.jpg",
                        description: "Pack gaming incluant une souris, un casque et un tapis de souris aux couleurs de World of Warcraft.",
                        price: 199,
                        rating: 5,
                        brand: "SteelSeries",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Prime (Noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Prime (Noir).jpg",
                        description: "Souris gaming filaire avec capteur optique 18 000 DPI, design ergonomique et switches optiques.",
                        price: 99,
                        rating: 4,
                        brand: "SteelSeries",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Prime Mini Wireless",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Prime Mini Wireless.jpg",
                        description: "Souris gaming sans fil compacte avec capteur optique 18 000 DPI et design ergonomique.",
                        price: 129,
                        rating: 5,
                        brand: "SteelSeries",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Rival 3 (noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Rival 3 (noir).jpg",
                        description: "Souris gaming filaire avec capteur optique 8 500 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 39,
                        rating: 4,
                        brand: "SteelSeries",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Rival 3 Wireless (noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Rival 3 Wireless (noir).jpg",
                        description: "Souris gaming sans fil avec capteur optique 10 000 DPI, design ergonomique et autonomie longue durée.",
                        price: 69,
                        rating: 4,
                        brand: "SteelSeries",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "SteelSeries Rival 5 (noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/SteelSeries/SteelSeries Rival 5 (noir).jpg",
                        description: "Souris gaming filaire avec capteur optique 18 000 DPI, 9 boutons programmables et rétroéclairage RGB.",
                        price: 79,
                        rating: 4,
                        brand: "SteelSeries",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Burst II Air (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Burst II Air (Blanc).jpg",
                        description: "Souris gaming sans fil avec capteur optique 12 000 DPI, design symétrique et rétroéclairage RGB.",
                        price: 89,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Burst II Air (Noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Burst II Air (Noir).jpg",
                        description: "Souris gaming sans fil avec capteur optique 12 000 DPI, design symétrique et rétroéclairage RGB.",
                        price: 89,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Kone II (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Kone II (Blanc).jpg",
                        description: "Souris gaming filaire avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 59,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Kone II (Noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Kone II (Noir).jpg",
                        description: "Souris gaming filaire avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 59,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Kone II Air (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Kone II Air (Blanc).jpg",
                        description: "Souris gaming sans fil avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 99,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Kone II Air (Noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Kone II Air (Noir).jpg",
                        description: "Souris gaming sans fil avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 99,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Kone XP Air (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Kone XP Air (Blanc).jpg",
                        description: "Souris gaming sans fil avec capteur optique 19 000 DPI, 15 boutons programmables et rétroéclairage RGB.",
                        price: 149,
                        rating: 5,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Kone XP Air (Noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Kone XP Air (Noir).jpg",
                        description: "Souris gaming sans fil avec capteur optique 19 000 DPI, 15 boutons programmables et rétroéclairage RGB.",
                        price: 149,
                        rating: 5,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Pure Air (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Pure Air (Blanc).jpg",
                        description: "Souris gaming sans fil avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 89,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Pure Air (Noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Pure Air (Noir).jpg",
                        description: "Souris gaming sans fil avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 89,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "OUI",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Pure Sel (Blanc)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Pure Sel (Blanc).jpg",
                        description: "Souris gaming filaire avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 59,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "NON",
                        TDS: "Optique",
                        availability: "green",
                    },
                    {
                        name: "Turtle Beach Pure Sel (Noir)",
                        image: "/Website Beta/IMAGES/images périphériques/Souris/Turtle Beach/Turtle Beach Pure Sel (Noir).jpg",
                        description: "Souris gaming filaire avec capteur optique 16 000 DPI, design ergonomique et rétroéclairage RGB.",
                        price: 59,
                        rating: 4,
                        brand: "Turtle Beach",
                        SF: "NON",
                        TDS: "Optique",
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
        const matchesTDS = !TDSFilter.value || product.TDS === TDSFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesSF && matchesTDS && matchesSearch;
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

[brandFilter, SFFilter, TDSFilter, searchBar].forEach(filter => {
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
        localStorage.setItem("selectedSouris", JSON.stringify(selectedProducts));
        window.location.href = "/Website Beta/Page principale/Configurateur PC.html";
    } else {
        alert("Veuillez sélectionner une souris avant de valider.");
    }
});
