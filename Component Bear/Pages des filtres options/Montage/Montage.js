const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const MontageFilter = document.querySelector("#MontageFilter");
const BIOSFilter = document.querySelector("#BIOSFilter");
const OSFilter = document.querySelector("#OSFilter");
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
        name: "Montage PREMIUM avec Windows 11 Pro",
        image: "/Website Beta/IMAGES/images options/Options de montage/premium.png",
        description: "Montage PC avec le système d'exploitation Windows 11 Pro , la mise à jour du BIOS / de l'UEFI ainsi que celles des drivers.",
        price: 249.99,
        rating: 5,
        Montage: "Montage11P",
        BIOS: "Premium",
        OS: "Windows11P",
        availability: "green"
    },
    {
        name: "Montage PC avec le Linux de votre choix",
        image: "/Website Beta/IMAGES/images options/Options de montage/linux.jpg",
        description: "Montage PC optimisé pour les développeurs avec Linux.",
        price: 74.99,
        rating: 5,
        Montage: "MontageLinux",
        BIOS: "BIOS",
        OS: "Linux",
        availability: "green"
    },
    {
        name: "Montage PC avec votre license fournie",
        image: "/Website Beta/IMAGES/images options/Options de montage/Montage PC avec votre license.jpg",
        description: "Montage PC personnalisé avec votre propre license.",
        price: 74.99,
        rating: 5,
        Montage: "MontageALA",
        BIOS: "Premium",
        OS: "Sans",
        availability: "green"
    },
    {
        name: "Montage PC complet avec Windows 11 Pro",
        image: "/Website Beta/IMAGES/images options/Options de montage/Montage PC Windows 11.jpg",
        description: "Montage PC professionnel avec Windows 11 Pro.",
        price: 199.99,
        rating: 5,
        Montage: "Montage11P",
        BIOS: "Premium",
        OS: "Windows11P",
        availability: "green"
    },
    {
        name: "Montage PC complet avec Windows 11 Famille",
        image: "/Website Beta/IMAGES/images options/Options de montage/Montage PC Windows 11.jpg",
        description: "Montage PC gamer avec Windows 11 Famille.",
        price: 174.99,
        rating: 5,
        Montage: "Montage11F",
        BIOS: "Premium",
        OS: "Windows11F",
        availability: "green"
    },
    {
        name: "Montage PC sans système d'exploitation",
        image: "/Website Beta/IMAGES/images options/Options de montage/Montage PC sans système Windows.png",
        description: "Montage PC sans système d'exploitation.",
        price: 49.99,
        rating: 5,
        Montage: "Montage",
        BIOS: "NON",
        OS: "Sans",
        availability: "green"
    },
];

let sortOrder = {
    rating: 1,
    price: 1,
    availability: 1
};

function applyFiltersAndSort() {
    let filteredData = productData.filter(product => {
        const matchesMontage = !MontageFilter.value || product.Montage === MontageFilter.value;
        const matchesBIOS = !BIOSFilter.value || product.BIOS === BIOSFilter.value;
        const matchesOS = !OSFilter.value || product.OS === OSFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesMontage && matchesBIOS && matchesOS && matchesSearch;
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

[MontageFilter, BIOSFilter, OSFilter, searchBar].forEach(filter => {
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
        localStorage.setItem("selectedMontage", JSON.stringify(selectedProducts));
        window.location.href = "/Website Beta/Page principale/Configurateur PC.html";
    } else {
        alert("Veuillez sélectionner une option de montage avant de valider.");
    }
});




