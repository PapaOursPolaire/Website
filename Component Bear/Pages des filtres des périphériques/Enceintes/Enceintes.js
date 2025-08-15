const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const TDEFilter = document.querySelector("#TDEFilter");
const IAOFilter = document.querySelector("#IAOFilter");
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
            name: "Advance SoundPhonic 2.0 6W",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Advance/Advance SoundPhonic 2.0 6W.jpg",
            description: "Kit d'enceintes 2.0 - 6W RMS - modulable en une barre de son - rétroéclairage RGB",
            price: 25,
            rating: 4,
            brand: "Advance",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Advance SoundPhonic 2.0 4W",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Advance/Advance SoundPhonic 2.0 4W.jpg",
            description: "Kit d'enceintes 2.0 (4W RMS)",
            price: 20,
            rating: 3,
            brand: "Advance",
            TDE: "2.0",
            IAO: "JMS",
            availability: "red"
        },
        {
            name: "Advance SoundPhonic RGB 11W",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Advance/Advance SoundPhonic RGB 11W.jpg",
            description: "Kit d'enceintes 2.1 - 11W RMS - rétroéclairage RGB - Bluetooth/Jack 3.5 mm",
            price: 35,
            rating: 4,
            brand: "Advance",
            TDE: "2.1",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Advance SoundPhonic RGB 6W",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Advance/Advance SoundPhonic RGB 6W.jpg",
            description: "Barre de son - 6W RMS - rétroéclairage RGB - Bluetooth/Jack 3.5 mm",
            price: 30,
            rating: 3,
            brand: "Advance",
            TDE: "1.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Edifier C2X Optique",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier C2X Optique.jpg",
            description: "Enceintes 2.0 avec connexion optique - 60W RMS",
            price: 120,
            rating: 5,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "ANO",
            availability: "green"
        },
        {
            name: "Edifier M1360 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier M1360 (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB et Jack 3.5mm",
            price: 40,
            rating: 4,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Edifier M1370",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier M1370.jpg",
            description: "Enceintes 2.0 - 30W RMS - Connexion USB et Jack 3.5mm",
            price: 50,
            rating: 4,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Edifier M60 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier M60 (Blanc).jpg",
            description: "Enceintes 2.0 - 40W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 80,
            rating: 5,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Edifier M60 (Bois)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier M60 (Bois).jpg",
            description: "Enceintes 2.0 - 40W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 80,
            rating: 5,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Edifier M60 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier M60 (Noir).jpg",
            description: "Enceintes 2.0 - 40W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 80,
            rating: 5,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Edifier MR3 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier MR3 (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion Jack 3.5mm",
            price: 60,
            rating: 4,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Edifier MR3 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier MR3 (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion Jack 3.5mm",
            price: 60,
            rating: 4,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Edifier MR4 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier MR4 (Blanc).jpg",
            description: "Enceintes 2.0 - 21W RMS - Connexion Jack 3.5mm",
            price: 70,
            rating: 4,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Edifier MR4 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier MR4 (Noir).jpg",
            description: "Enceintes 2.0 - 21W RMS - Connexion Jack 3.5mm",
            price: 70,
            rating: 4,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Edifier R12U Blanc",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier R12U Blanc.jpg",
            description: "Enceintes 2.0 - 14W RMS - Connexion USB",
            price: 30,
            rating: 3,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Edifier R12U Noir",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier R12U Noir.jpg",
            description: "Enceintes 2.0 - 14W RMS - Connexion USB",
            price: 30,
            rating: 3,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Edifier e25 HD Luna Blanc",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier e25 HD Luna Blanc.jpg",
            description: "Enceintes 2.0 - 32W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 100,
            rating: 5,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Edifier e25 HD Luna Noir",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier e25 HD Luna Noir.jpg",
            description: "Enceintes 2.0 - 32W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 100,
            rating: 5,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Edifier e25 HD Luna Rouge",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Edifier/Edifier e25 HD Luna Rouge.jpg",
            description: "Enceintes 2.0 - 32W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 100,
            rating: 5,
            brand: "Edifier",
            TDE: "2.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Hecate G1000 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Hecate/Hecate G1000 (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB et Jack 3.5mm",
            price: 50,
            rating: 4,
            brand: "Hecate",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Hecate G1000 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Hecate/Hecate G1000 (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB et Jack 3.5mm",
            price: 50,
            rating: 4,
            brand: "Hecate",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Hecate G2000 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Hecate/Hecate G2000 (Blanc).jpg",
            description: "Enceintes 2.0 - 30W RMS - Connexion USB et Jack 3.5mm",
            price: 70,
            rating: 4,
            brand: "Hecate",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Hecate G2000 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Hecate/Hecate G2000 (Noir).jpg",
            description: "Enceintes 2.0 - 30W RMS - Connexion USB et Jack 3.5mm",
            price: 70,
            rating: 4,
            brand: "Hecate",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Hecate G5000",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Hecate/Hecate G5000.jpg",
            description: "Enceintes 2.0 - 50W RMS - Connexion USB et Jack 3.5mm",
            price: 100,
            rating: 5,
            brand: "Hecate",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Logitech G560",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech G560.jpg",
            description: "Enceintes 2.1 - 240W RMS - Connexion USB et Bluetooth",
            price: 200,
            rating: 5,
            brand: "Logitech",
            TDE: "2.1",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Logitech Multimedia Speakers System Z533",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Multimedia Speakers System Z533.jpg",
            description: "Enceintes 2.1 - 120W RMS - Connexion Jack 3.5mm et RCA",
            price: 150,
            rating: 4,
            brand: "Logitech",
            TDE: "2.1",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Logitech Multimedia Speakers Z150 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Multimedia Speakers Z150 (Blanc).jpg",
            description: "Enceintes 2.0 - 10W RMS - Connexion Jack 3.5mm",
            price: 25,
            rating: 3,
            brand: "Logitech",
            TDE: "2.0",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Logitech Multimedia Speakers Z150 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Multimedia Speakers Z150 (Noir).jpg",
            description: "Enceintes 2.0 - 10W RMS - Connexion Jack 3.5mm",
            price: 25,
            rating: 3,
            brand: "Logitech",
            TDE: "2.0",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Logitech Multimedia Speakers Z207 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Multimedia Speakers Z207 (Noir).jpg",
            description: "Enceintes 2.0 - 10W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 40,
            rating: 4,
            brand: "Logitech",
            TDE: "2.0",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Logitech Speaker System Z623",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Speaker System Z623.jpg",
            description: "Enceintes 2.1 - 200W RMS - Connexion Jack 3.5mm et RCA",
            price: 180,
            rating: 4,
            brand: "Logitech",
            TDE: "2.1",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Logitech Speaker System Z906",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Speaker System Z906.jpg",
            description: "Enceintes 5.1 - 500W RMS - Connexion Jack 3.5mm et RCA",
            price: 350,
            rating: 5,
            brand: "Logitech",
            TDE: "5.1",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Logitech Z313",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Z313.jpg",
            description: "Enceintes 2.1 - 25W RMS - Connexion Jack 3.5mm",
            price: 50,
            rating: 4,
            brand: "Logitech",
            TDE: "2.1",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Logitech Z407",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Z407.jpg",
            description: "Enceintes 2.1 - 80W RMS - Connexion Bluetooth et Jack 3.5mm",
            price: 120,
            rating: 4,
            brand: "Logitech",
            TDE: "2.1",
            IAO: "B",
            availability: "green"
        },
        {
            name: "Logitech Z625 Powerful THX Sound",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Logitech/Logitech Z625 Powerful THX Sound.jpg",
            description: "Enceintes 2.1 - 400W RMS - Connexion Jack 3.5mm et RCA",
            price: 250,
            rating: 5,
            brand: "Logitech",
            TDE: "2.1",
            IAO: "JMS",
            availability: "green"
        },
        {
            name: "Mars Gaming MS-H21 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MS-H21 (Blanc).jpg",
            description: "Enceintes 2.0 - 10W RMS - Connexion USB",
            price: 20,
            rating: 3,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MS-H21 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MS-H21 (Noir).jpg",
            description: "Enceintes 2.0 - 10W RMS - Connexion USB",
            price: 20,
            rating: 3,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MS7 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MS7 (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 30,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MS7 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MS7 (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 30,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MS72 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MS72 (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 35,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MS72 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MS72 (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 35,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSB-ORB (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSB-ORB (Blanc).jpg",
            description: "Enceintes 2.0 - 15W RMS - Connexion USB",
            price: 25,
            rating: 3,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSB-ORB (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSB-ORB (Noir).jpg",
            description: "Enceintes 2.0 - 15W RMS - Connexion USB",
            price: 25,
            rating: 3,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSB-XT (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSB-XT (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 30,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSB-XT (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSB-XT (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 30,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSBX (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSBX (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 30,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSBX (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSBX (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 30,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSRGB (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSRGB (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 35,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSRGB2 (Blanc)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSRGB2 (Blanc).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 35,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "Mars Gaming MSRGB2 (Noir)",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/Mars Gaming/Mars Gaming MSRGB2 (Noir).jpg",
            description: "Enceintes 2.0 - 20W RMS - Connexion USB",
            price: 35,
            rating: 4,
            brand: "Mars Gaming",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "SteelSeries Arena 3",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/SteelSeries/SteelSeries Arena 3.jpg",
            description: "Enceintes 2.0 - 40W RMS - Connexion USB et Jack 3.5mm",
            price: 100,
            rating: 4,
            brand: "SteelSeries",
            TDE: "2.0",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "SteelSeries Arena 7",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/SteelSeries/SteelSeries Arena 7.jpg",
            description: "Enceintes 2.1 - 120W RMS - Connexion USB et Jack 3.5mm",
            price: 200,
            rating: 5,
            brand: "SteelSeries",
            TDE: "2.1",
            IAO: "USB",
            availability: "green"
        },
        {
            name: "SteelSeries Arena 9",
            image: "/Website Beta/IMAGES/images périphériques/Enceintes/SteelSeries/SteelSeries Arena 9.jpg",
            description: "Enceintes 5.1 - 200W RMS - Connexion USB et Jack 3.5mm",
            price: 300,
            rating: 5,
            brand: "SteelSeries",
            TDE: "5.1",
            IAO: "USB",
            availability: "green"
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
        const matchesTDE = !TDEFilter.value || product.TDE === TDEFilter.value;
        const matchesIAO = !IAOFilter.value || product.IAO === IAOFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesTDE && matchesIAO && matchesSearch;
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

[brandFilter, TDEFilter, IAOFilter, searchBar].forEach(filter => {
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
        localStorage.setItem("selectedEnceintes", JSON.stringify(selectedProducts));
        window.location.href = "/Website Beta/Page principale/Configurateur PC.html";
    } else {
        alert("Veuillez sélectionner des enceintes avant de valider.");
    }
});