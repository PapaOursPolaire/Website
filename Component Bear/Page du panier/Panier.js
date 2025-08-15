function displayCart() {
    displayIndividualComponents(); 
    displayCustomConfigurations(); 
    displayFeaturedPCs(); 
    updateTotal(); 
}

function displayIndividualComponents() {
    const componentsContainer = document.getElementById("composants-panier");
    if (!componentsContainer) {
        console.error("Le conteneur 'composants-panier' n'a pas été trouvé.");
        return;
    }

    const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    componentsContainer.innerHTML = "";

    if (selectedProducts.length === 0) {
        componentsContainer.innerHTML = "<p>Aucun composant individuel sélectionné.</p>";
        return;
    }

    selectedProducts.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.className = "produit-panier";

        const imageHTML = product.image 
            ? `<img src="${product.image}" alt="${product.name}" width="60px" height="60px" style="border-radius: 10px;">` 
            : "";

        const price = parseFloat(product.price.replace("€", "").trim());
        const quantity = product.quantity || 1;
        const subTotal = (price * quantity).toFixed(2);

        productElement.innerHTML = `
            ${imageHTML}
            <div class="nom-produit">${product.name}</div>
            <div class="prix-produit">${product.price}</div>
            <div class="quantite">
                <button class="decrease-quantity" onclick="decreaseQuantity(${index})">-</button>
                <span class="quantity">${quantity}</span>
                <button class="increase-quantity" onclick="increaseQuantity(${index})">+</button>
            </div>
            <div class="sous-total">${subTotal} €</div>
            <button class="supprimer-produit" onclick="removeIndividualComponent(${index})">Supprimer</button>
        `;

        componentsContainer.appendChild(productElement);
    });
}

function displayCustomConfigurations() {
    const configurationsContainer = document.getElementById("configurations-panier");
    if (!configurationsContainer) {
        console.error("Le conteneur 'configurations-panier' n'a pas été trouvé.");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    configurationsContainer.innerHTML = ""; 

    if (cart.length === 0) {
        configurationsContainer.innerHTML = "<p></p>";
        return;
    }

    cart.forEach((config, index) => {
        const configElement = document.createElement("div");
        configElement.className = "configuration-panier";

        const defaultImage = "/Website Beta/IMAGES/Image complémentaires/Affiche Mes configs.png";
        const imageHTML = `
            <div class="configuration-image">
                <img src="${defaultImage}" alt="Configuration personnalisée">
            </div>
        `;

        const componentsHTML = Object.entries(config.products)
            .filter(([category, products]) => products.length > 0)
            .map(([category, products]) => `
                <div class="configuration-components">
                    ${products.map(product => `
                        <div class="component">${product.name} - ${product.price}</div>
                    `).join("")}
                </div>
            `).join("");

        const totalPrice = calculateConfigurationTotal(config.products);

        configElement.innerHTML = `
            ${imageHTML}
            <div class="configuration-details">
                <div class="configuration-name">${config.name}</div>
                <div class="configuration-price">${totalPrice.toFixed(2)} €</div>
                ${componentsHTML}
            </div>
            <div class="configuration-actions">
                <div class="quantite">
                    <button class="decrease-quantity" onclick="decreaseGlobalQuantity(this.parentElement.parentElement.parentElement, ${index})">-</button>
                    <span class="quantity">1</span>
                    <button class="increase-quantity" onclick="increaseGlobalQuantity(this.parentElement.parentElement.parentElement, ${index})">+</button>
                </div>
                <button class="supprimer-produit" onclick="removeConfiguration(${index})">Supprimer</button>
            </div>
        `;

        configurationsContainer.appendChild(configElement);
    });
}

function displayFeaturedPCs() {
    const featuredPCsContainer = document.getElementById("configurations-panier");
    if (!featuredPCsContainer) {
        console.error("Le conteneur 'configurations-panier' n'a pas été trouvé.");
        return;
    }

    const featuredPCs = JSON.parse(localStorage.getItem("featuredPCs")) || [];
    if (featuredPCs.length === 0) {
        return;
    }

    featuredPCs.forEach((pc, index) => {
        const pcElement = document.createElement("div");
        pcElement.className = "preconfig-panier";

        const imageHTML = pc.image
            ? `<div class="preconfig-image">
                 <img src="${pc.image}" alt="${pc.name}">
               </div>`
            : "";

        const componentsHTML = pc.components
            .map((component) => `<div class="component">${component}</div>`)
            .join("");

        pcElement.innerHTML = `
            ${imageHTML}
            <div class="preconfig-details">
                <div class="preconfig-name">${pc.name}</div>
                <div class="preconfig-price">${pc.price}</div>
                <div class="preconfig-components">
                    ${componentsHTML}
                </div>
            </div>
            <div class="preconfig-actions">
                <div class="quantite">
                    <button class="decrease-quantity" onclick="decreaseFeaturedPCQuantity(${index})">-</button>
                    <span class="quantity">${pc.quantity}</span>
                    <button class="increase-quantity" onclick="increaseFeaturedPCQuantity(${index})">+</button>
                </div>
                <button class="supprimer-produit" onclick="removeFeaturedPC(${index})">Supprimer</button>
            </div>
        `;

        featuredPCsContainer.appendChild(pcElement);
    });
}

function calculateConfigurationTotal(selectedProducts) {
    let total = 0;
    for (const category in selectedProducts) {
        selectedProducts[category].forEach(product => {
            const price = parseFloat(product.price.replace("€", "").trim());
            total += price;
        });
    }
    return total;
}

function increaseQuantity(index) {
    const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    if (selectedProducts[index]) {
        selectedProducts[index].quantity = (selectedProducts[index].quantity || 1) + 1;
        localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
        displayCart(); 
    }
}

function decreaseQuantity(index) {
    const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    if (selectedProducts[index] && selectedProducts[index].quantity > 1) {
        selectedProducts[index].quantity -= 1;
        localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
        displayCart(); 
    }
}

function removeIndividualComponent(index) {
    const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    selectedProducts.splice(index, 1); 
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
    displayCart(); 
}

function increaseGlobalQuantity(configurationElement, index) {
    const quantityDisplay = configurationElement.querySelector(".quantity");
    let quantity = parseInt(quantityDisplay.textContent, 10);
    quantity += 1;
    quantityDisplay.textContent = quantity;
    updateTotal(); 
}

function decreaseGlobalQuantity(configurationElement, index) {
    const quantityDisplay = configurationElement.querySelector(".quantity");
    let quantity = parseInt(quantityDisplay.textContent, 10);
    if (quantity > 1) {
        quantity -= 1;
        quantityDisplay.textContent = quantity;
        updateTotal(); 
    }
}

function removeConfiguration(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); 
}

function increaseFeaturedPCQuantity(index) {
    const featuredPCs = JSON.parse(localStorage.getItem("featuredPCs")) || [];
    if (featuredPCs[index]) {
        featuredPCs[index].quantity = (featuredPCs[index].quantity || 1) + 1;
        localStorage.setItem("featuredPCs", JSON.stringify(featuredPCs));
        displayCart(); 
    }
}

function decreaseFeaturedPCQuantity(index) {
    const featuredPCs = JSON.parse(localStorage.getItem("featuredPCs")) || [];
    if (featuredPCs[index] && featuredPCs[index].quantity > 1) {
        featuredPCs[index].quantity -= 1;
        localStorage.setItem("featuredPCs", JSON.stringify(featuredPCs));
        displayCart(); 
    }
}

function removeFeaturedPC(index) {
    const featuredPCs = JSON.parse(localStorage.getItem("featuredPCs")) || [];
    featuredPCs.splice(index, 1); 
    localStorage.setItem("featuredPCs", JSON.stringify(featuredPCs));
    displayCart(); 
}

function updateTotal() {
    const totalPanierElement = document.getElementById("total-panier");
    const totalFinalElement = document.getElementById("total-final");

    if (!totalPanierElement || !totalFinalElement) {
        console.error("Les éléments 'total-panier' ou 'total-final' n'ont pas été trouvés.");
        return;
    }

    let total = 0;

    const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    selectedProducts.forEach(product => {
        const price = parseFloat(product.price.replace("€", "").trim());
        const quantity = product.quantity || 1;
        total += price * quantity;
    });

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((config, index) => {
        const configTotal = calculateConfigurationTotal(config.products);
        const quantity = parseInt(document.querySelectorAll(".configuration-panier .quantity")[index]?.textContent || 1, 10);
        total += configTotal * quantity;
    });

    const featuredPCs = JSON.parse(localStorage.getItem("featuredPCs")) || [];
    featuredPCs.forEach(pc => {
        const price = parseFloat(pc.price.replace("€", "").trim());
        const quantity = pc.quantity || 1;
        total += price * quantity;
    });

    totalPanierElement.textContent = `${total.toFixed(2)} €`;
    totalFinalElement.textContent = `${total.toFixed(2)} €`;
}

function applyPromoCode() {
    const promoCode = document.getElementById("promo-code").value;
    const totalElement = document.getElementById("total-final");

    if (!totalElement) {
        console.error("L'élément 'total-final' n'a pas été trouvé.");
        return;
    }

    let total = parseFloat(totalElement.textContent.replace("€", "").trim());

    if (promoCode === "PROMO10") {
        const reduction = total * 0.1; 
        total -= reduction;
        totalElement.textContent = `${total.toFixed(2)} €`;
        alert("Code promotionnel appliqué : 10% de réduction !");
    } else if (promoCode === "OURS") {
        const reduction = total * 0.25; 
        total -= reduction;
        totalElement.textContent = `${total.toFixed(2)} €`;
        alert("Code promotionnel appliqué : 25% de réduction !");
    } else {
        alert("Code promotionnel invalide.");
    }
}

document.getElementById("apply-promo")?.addEventListener("click", applyPromoCode);

window.onload = displayCart;