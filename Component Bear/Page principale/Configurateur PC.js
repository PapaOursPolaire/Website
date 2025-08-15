function displaySavedConfigs() {
    const savedConfigsContainer = document.querySelector(".saved-configs .config-container");
    if (!savedConfigsContainer) {
        console.error("Le conteneur 'saved-configs' n'a pas été trouvé dans le DOM.");
        return;
    }

    const savedConfigs = JSON.parse(localStorage.getItem("savedConfigs")) || [];
    savedConfigsContainer.innerHTML = "";

    savedConfigs.forEach((config, index) => {
        const configElement = document.createElement("div");
        configElement.className = "saved-config";

        let totalPrice = 0;
        Object.values(config.products).forEach(products => {
            products.forEach(product => {
                totalPrice += parseFloat(product.price) || 0;
            });
        });

        configElement.innerHTML = `
            <img src="../IMAGES/Image complémentaires/affiche prebuild.webp" alt="Configuration Image" width="100px">
            <p><strong>${config.name}</strong></p>
            <p><strong>Prix total : ${totalPrice.toFixed(2)} €</strong></p>
            <div class="product-list">
                <h4>Produits :</h4>
                <ul>
                    ${Object.values(config.products).map(products => 
                        products.map(product => `<li>${product.name} - ${product.price} €</li>`).join("")
                    ).join("")}
                </ul>
            </div>
            <div class="config-buttons">
                <button class="delete-btn" onclick="deleteSavedConfig(${index})">Supprimer</button>
                <button class="load-btn" onclick="loadSavedConfig(${index})">Charger</button>
                <button class="add-to-cart-btn" onclick="addSavedConfigToCart(${index})">Ajouter au panier</button>
            </div>
        `;
        savedConfigsContainer.appendChild(configElement);
    });
}

function calculateTotalPrice() {
    let totalPrice = 0;
    const categories = [
        "selectedCPU", "selectedRefroidissement", "selectedCarteMere", "selectedRAM", "selectedGPU", 
        "selectedSSD", "selectedHDD", "selectedBoitier", "selectedAlim", "selectedMontage", 
        "selectedOS", "selectedSATA", "selectedVentilateur", "selectedClavier", "selectedSouris", 
        "selectedTapisSouris", "selectedCasqueMicro", "selectedMoniteur", "selectedEnceintes"
    ];

    categories.forEach(category => {
        const selectedItems = JSON.parse(localStorage.getItem(category)) || [];
        selectedItems.forEach(item => {
            totalPrice += parseFloat(item.price) || 0;
        });
    });

    document.getElementById("total-price").textContent = totalPrice.toFixed(2) + " €";
}

function updateSelectedComponents() {
    const categories = [
        { id: "selected-cpu", key: "selectedCPU" },
        { id: "selected-refroidissement", key: "selectedRefroidissement" },
        { id: "selected-motherboard", key: "selectedCarteMere" },
        { id: "selected-ram", key: "selectedRAM" },
        { id: "selected-gpu", key: "selectedGPU" },
        { id: "selected-ssd", key: "selectedSSD" },
        { id: "selected-hdd", key: "selectedHDD" },
        { id: "selected-tower", key: "selectedBoitier" },
        { id: "selected-alims", key: "selectedAlim" },
        { id: "selected-montage", key: "selectedMontage" },
        { id: "selected-OS", key: "selectedOS" },
        { id: "selected-sata", key: "selectedSATA" },
        { id: "selected-Ventilateur", key: "selectedVentilateur" },
        { id: "selected-clavier", key: "selectedClavier" },
        { id: "selected-souris", key: "selectedSouris" },
        { id: "selected-tapis-souris", key: "selectedTapisSouris" },
        { id: "selected-casque-micro", key: "selectedCasqueMicro" },
        { id: "selected-moniteur", key: "selectedMoniteur" },
        { id: "selected-enceintes", key: "selectedEnceintes" }
    ];

    categories.forEach(category => {
        const container = document.querySelector(`.${category.id}`);
        if (container) {
            container.innerHTML = "";

            const selectedItems = JSON.parse(localStorage.getItem(category.key)) || [];
            if (selectedItems.length > 0) {
                selectedItems.forEach(item => {
                    const productElement = document.createElement("div");
                    productElement.className = "dynamic-product";
                    productElement.textContent = `${item.name} - ${item.price}`;
                    container.appendChild(productElement);
                });
            } else {
                container.textContent = `Aucun ${category.key.replace("selected", "").toLowerCase()} sélectionné.`;
            }
        }
    });
}

function addCurrentConfigToCart() {
    const now = new Date();
    const configName = `Configuration ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const selectedProducts = {};
    const categories = [
        "selectedCPU", "selectedRefroidissement", "selectedCarteMere", "selectedRAM", "selectedGPU", 
        "selectedSSD", "selectedHDD", "selectedBoitier", "selectedAlim", "selectedMontage", 
        "selectedOS", "selectedSATA", "selectedVentilateur", "selectedClavier", "selectedSouris", 
        "selectedTapisSouris", "selectedCasqueMicro", "selectedMoniteur", "selectedEnceintes"
    ];

    categories.forEach(category => {
        const selectedItems = JSON.parse(localStorage.getItem(category)) || [];
        if (selectedItems.length > 0) {
            selectedProducts[category] = selectedItems;
        }
    });

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: configName, products: selectedProducts });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`Configuration "${configName}" ajoutée au panier.`);
    displaySavedConfigs();

    window.location.href = "/Website Beta/Page du panier/Panier.html";
}

function addSavedConfigToCart(index) {
    const savedConfigs = JSON.parse(localStorage.getItem("savedConfigs")) || [];
    const config = savedConfigs[index];

    const configName = config.name;
    const configProducts = config.products;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: configName, products: configProducts });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`Configuration "${configName}" ajoutée au panier.`);
    displaySavedConfigs();

    window.location.href = "/Website Beta/Page du panier/Panier.html";
}

function resetConfiguration() {
    const categories = [
        "selectedCPU", "selectedRefroidissement", "selectedCarteMere", "selectedRAM", "selectedGPU", 
        "selectedSSD", "selectedHDD", "selectedBoitier", "selectedAlim", "selectedMontage", 
        "selectedOS", "selectedSATA", "selectedVentilateur", "selectedClavier", "selectedSouris", 
        "selectedTapisSouris", "selectedCasqueMicro", "selectedMoniteur", "selectedEnceintes"
    ];

    categories.forEach(category => {
        localStorage.removeItem(category);
    });

    updateSelectedComponents();
    calculateTotalPrice();
    hidePopup("reset-popup");
}

function deleteConfiguration() {
    const categories = [
        "selectedCPU", "selectedRefroidissement", "selectedCarteMere", "selectedRAM", "selectedGPU", 
        "selectedSSD", "selectedHDD", "selectedBoitier", "selectedAlim", "selectedMontage", 
        "selectedOS", "selectedSATA", "selectedVentilateur", "selectedClavier", "selectedSouris", 
        "selectedTapisSouris", "selectedCasqueMicro", "selectedMoniteur", "selectedEnceintes"
    ];

    categories.forEach(category => {
        localStorage.removeItem(category);
    });

    updateSelectedComponents();
    calculateTotalPrice();
    hidePopup("delete-popup");
}

function saveConfiguration() {
    const configName = document.getElementById("config-name").value;
    if (!configName) {
        alert("Veuillez entrer un nom pour votre configuration.");
        return;
    }

    const selectedProducts = {};
    const categories = [
        "selectedCPU", "selectedRefroidissement", "selectedCarteMere", "selectedRAM", "selectedGPU", 
        "selectedSSD", "selectedHDD", "selectedBoitier", "selectedAlim", "selectedMontage", 
        "selectedOS", "selectedSATA", "selectedVentilateur", "selectedClavier", "selectedSouris", 
        "selectedTapisSouris", "selectedCasqueMicro", "selectedMoniteur", "selectedEnceintes"
    ];

    categories.forEach(category => {
        const selectedItems = JSON.parse(localStorage.getItem(category)) || [];
        if (selectedItems.length > 0) {
            selectedProducts[category] = selectedItems;
        }
    });

    const savedConfigs = JSON.parse(localStorage.getItem("savedConfigs")) || [];
    savedConfigs.push({ name: configName, products: selectedProducts });
    localStorage.setItem("savedConfigs", JSON.stringify(savedConfigs));

    hidePopup("save-popup");
    alert("Configuration sauvegardée avec succès !");
    displaySavedConfigs();
}

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
    }
}

function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
}

function deleteSavedConfig(index) {
    const savedConfigs = JSON.parse(localStorage.getItem("savedConfigs")) || [];
    savedConfigs.splice(index, 1);
    localStorage.setItem("savedConfigs", JSON.stringify(savedConfigs));
    displaySavedConfigs();
}

function loadSavedConfig(index) {
    const savedConfigs = JSON.parse(localStorage.getItem("savedConfigs")) || [];
    const config = savedConfigs[index];

    const categories = [
        "selectedCPU", "selectedRefroidissement", "selectedCarteMere", "selectedRAM", "selectedGPU", 
        "selectedSSD", "selectedHDD", "selectedBoitier", "selectedAlim", "selectedMontage", 
        "selectedOS", "selectedSATA", "selectedVentilateur", "selectedClavier", "selectedSouris", 
        "selectedTapisSouris", "selectedCasqueMicro", "selectedMoniteur", "selectedEnceintes"
    ];

    categories.forEach(category => {
        localStorage.setItem(category, JSON.stringify(config.products[category] || []));
    });

    updateSelectedComponents();
    calculateTotalPrice();
    alert(`Configuration "${config.name}" chargée.`);
}

document.getElementById("new-config").addEventListener("click", () => {
    showPopup("reset-popup");
});

document.getElementById("delete-config").addEventListener("click", () => {
    showPopup("delete-popup");
});

document.getElementById("save-config").addEventListener("click", () => {
    showPopup("save-popup");
});

document.getElementById("confirm-reset").addEventListener("click", resetConfiguration);
document.getElementById("cancel-reset").addEventListener("click", () => hidePopup("reset-popup"));

document.getElementById("confirm-delete").addEventListener("click", deleteConfiguration);
document.getElementById("cancel-delete").addEventListener("click", () => hidePopup("delete-popup"));

document.getElementById("confirm-save").addEventListener("click", saveConfiguration);
document.getElementById("cancel-save").addEventListener("click", () => hidePopup("save-popup"));

document.getElementById("add-to-cart").addEventListener("click", (event) => {
    event.preventDefault(); 
    addCurrentConfigToCart(); 
});

window.onload = () => {
    displaySavedConfigs();
    calculateTotalPrice();
    updateSelectedComponents();
};