const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const SFFilter = document.querySelector("#SFFilter");
const TDTFilter = document.querySelector("#TDTFilter");
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
        name: "ASUS ROG Azoth (QWERTY, US)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Azoth (QWERTY, US).jpg",
        description: "Clavier gaming mécanique compact 75% avec switchs personnalisables et écran OLED",
        price: 299,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Azoth Blanc (AZERTY, Français)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Azoth Blanc (AZERTY, Français).jpg",
        description: "Clavier gaming mécanique compact 75% en version blanche, switchs personnalisables",
        price: 299,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Meca",
        availability: "orange",
    },
    {
        name: "ASUS ROG Azoth Extreme (AZERTY, Français)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Azoth Extreme (AZERTY, Français).jpg",
        description: "Clavier gaming haut de gamme avec switchs optiques et design premium",
        price: 349,
        rating: 5,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Opt",
        availability: "blue",
    },
    {
        name: "ASUS ROG Azoth Noir (AZERTY, Français)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Azoth Noir (AZERTY, Français).jpg",
        description: "Clavier gaming mécanique compact 75% en version noire, switchs personnalisables",
        price: 299,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Falchion Ace (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Falchion Ace (Blanc).jpg",
        description: "Clavier gaming compact 65% avec switchs mécaniques et design blanc",
        price: 199,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Falchion Ace (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Falchion Ace (Noir).jpg",
        description: "Clavier gaming compact 65% avec switchs mécaniques et design noir",
        price: 199,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Falchion Ace HFX (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Falchion Ace HFX (Noir).jpg",
        description: "Clavier gaming compact 65% avec switchs optiques et design noir",
        price: 229,
        rating: 5,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Opt",
        availability: "orange",
    },
    {
        name: "ASUS ROG Falchion RX Low Profile (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Falchion RX Low Profile (Blanc).jpg",
        description: "Clavier gaming low-profile avec switchs optiques et design blanc",
        price: 179,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Flare II Animate",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Flare II Animate.jpg",
        description: "Clavier gaming full-size avec écran OLED intégré et switchs mécaniques",
        price: 249,
        rating: 5,
        brand: "ASUS",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Scope II 96 RX Wireless (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Scope II 96 RX Wireless (Blanc).jpg",
        description: "Clavier gaming 96% sans fil avec switchs optiques et design blanc",
        price: 279,
        rating: 5,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Scope II 96 RX Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Scope II 96 RX Wireless (Noir).jpg",
        description: "Clavier gaming 96% sans fil avec switchs optiques et design noir",
        price: 279,
        rating: 5,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Scope II 96 Wireless (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Scope II 96 Wireless (Blanc).jpg",
        description: "Clavier gaming 96% sans fil avec switchs mécaniques et design blanc",
        price: 259,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Scope II 96 Wireless",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Scope II 96 Wireless.jpg",
        description: "Clavier gaming 96% sans fil avec switchs mécaniques et design noir",
        price: 259,
        rating: 4,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Scope II RX",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Scope II RX.jpg",
        description: "Clavier gaming TKL avec switchs optiques et rétroéclairage RGB",
        price: 199,
        rating: 4,
        brand: "ASUS",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Scope II",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Scope II.jpg",
        description: "Clavier gaming TKL avec switchs mécaniques et rétroéclairage RGB",
        price: 179,
        rating: 4,
        brand: "ASUS",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS ROG Strix Scope RX TKL Wireless Deluxe",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS ROG Strix Scope RX TKL Wireless Deluxe.jpg",
        description: "Clavier gaming TKL sans fil avec switchs optiques et design premium",
        price: 299,
        rating: 5,
        brand: "ASUS",
        SF: "OUI",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "ASUS TUF Gaming K1",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS TUF Gaming K1.jpg",
        description: "Clavier gaming résistant avec switchs mécaniques et design robuste",
        price: 99,
        rating: 3,
        brand: "ASUS",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "ASUS TUF Gaming K3 Gen II",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ASUS/ASUS TUF Gaming K3 Gen II.jpg",
        description: "Clavier gaming compact avec switchs mécaniques et rétroéclairage RGB",
        price: 129,
        rating: 4,
        brand: "ASUS",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K55 Core RGB",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K55 Core RGB.jpg",
        description: "Clavier gaming à membrane avec rétroéclairage RGB et touches multimédia",
        price: 59,
        rating: 3,
        brand: "Corsair",
        SF: "NON",
        TDT: "Membrane",
        availability: "green",
    },
    {
        name: "Corsair Gaming K55 RGB PRO",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K55 RGB PRO.jpg",
        description: "Clavier gaming à membrane avec rétroéclairage RGB dynamique et touches programmables",
        price: 69,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Membrane",
        availability: "green",
    },
    {
        name: "Corsair Gaming K65 Mini RGB Blanc (Cherry MX Red)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K65 Mini RGB Blanc (Cherry MX Red).jpg",
        description: "Clavier gaming compact 60% avec switchs Cherry MX Red et design blanc",
        price: 149,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K65 Mini RGB Noir (Cherry MX Red)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K65 Mini RGB Noir (Cherry MX Red).jpg",
        description: "Clavier gaming compact 60% avec switchs Cherry MX Red et design noir",
        price: 149,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K65 Plus Wireless (MLX Fusion)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K65 Plus Wireless (MLX Fusion).jpg",
        description: "Clavier gaming sans fil avec switchs MLX Fusion et design compact",
        price: 199,
        rating: 5,
        brand: "Corsair",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K65 Plus Wireless (MLX Red)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K65 Plus Wireless (MLX Red).jpg",
        description: "Clavier gaming sans fil avec switchs MLX Red et design compact",
        price: 199,
        rating: 5,
        brand: "Corsair",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K65 Pro Mini Noir",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K65 Pro Mini Noir.jpg",
        description: "Clavier gaming compact 60% avec switchs mécaniques et design noir",
        price: 129,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 Core TKL (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 Core TKL (Noir).jpg",
        description: "Clavier gaming TKL avec switchs mécaniques et design noir",
        price: 99,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 Core TKL Wireless (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 Core TKL Wireless (Noir).jpg",
        description: "Clavier gaming TKL sans fil avec switchs mécaniques et design noir",
        price: 149,
        rating: 4,
        brand: "Corsair",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 Core",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 Core.jpg",
        description: "Clavier gaming full-size avec switchs mécaniques et rétroéclairage RGB",
        price: 109,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 Max (Corsair MGX)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 Max (Corsair MGX).jpg",
        description: "Clavier gaming haut de gamme avec switchs MGX et rétroéclairage RGB",
        price: 199,
        rating: 5,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 Pro Mini Wireless RGB Noir (Cherry MX Red)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 Pro Mini Wireless RGB Noir (Cherry MX Red).jpg",
        description: "Clavier gaming compact 60% sans fil avec switchs Cherry MX Red et design noir",
        price: 179,
        rating: 5,
        brand: "Corsair",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 Pro TKL (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 Pro TKL (Noir).jpg",
        description: "Clavier gaming TKL avec switchs mécaniques et design noir",
        price: 149,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 RGB Pro (Cherry MX Red)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 RGB Pro (Cherry MX Red).jpg",
        description: "Clavier gaming full-size avec switchs Cherry MX Red et rétroéclairage RGB",
        price: 159,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair Gaming K70 RGB Pro Noir (OPX)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair Gaming K70 RGB Pro Noir (OPX).jpg",
        description: "Clavier gaming full-size avec switchs OPX et rétroéclairage RGB",
        price: 169,
        rating: 4,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Corsair K100 AIR (Cherry MX Ultra Low Profile)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Corsair/Corsair K100 AIR (Cherry MX Ultra Low Profile).jpg",
        description: "Clavier gaming ultra-fin avec switchs Cherry MX Ultra Low Profile",
        price: 249,
        rating: 5,
        brand: "Corsair",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G213 Prodigy Gaming Keyboard",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G213 Prodigy Gaming Keyboard.jpg",
        description: "Clavier gaming à membrane avec rétroéclairage RGB et touches multimédia",
        price: 59,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Membrane",
        availability: "green",
    },
    {
        name: "Logitech G G413 SE",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G413 SE.jpg",
        description: "Clavier gaming mécanique avec switchs tactiles et design sobre",
        price: 79,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G512 GX Brown (Carbon)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G512 GX Brown (Carbon).jpg",
        description: "Clavier gaming mécanique avec switchs GX Brown et rétroéclairage RGB",
        price: 129,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G513 Carbone (GX Brown Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G513 Carbone (GX Brown Tactile Version).jpg",
        description: "Clavier gaming mécanique avec switchs GX Brown et design carbone",
        price: 149,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G515 TKL Lightspeed Blanc (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G515 TKL Lightspeed Blanc (Tactile Version).jpg",
        description: "Clavier gaming TKL sans fil avec switchs tactiles et design blanc",
        price: 199,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G515 TKL Lightspeed Noir (Linéaire Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G515 TKL Lightspeed Noir (Linéaire Version).jpg",
        description: "Clavier gaming TKL sans fil avec switchs linéaires et design noir",
        price: 199,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G515 TKL Lightspeed Noir (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G515 TKL Lightspeed Noir (Tactile Version).jpg",
        description: "Clavier gaming TKL sans fil avec switchs tactiles et design noir",
        price: 199,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G515 TKL Noir",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G515 TKL Noir.jpg",
        description: "Clavier gaming TKL sans fil avec switchs mécaniques et design noir",
        price: 179,
        rating: 4,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G715 Blanc",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G715 Blanc.jpg",
        description: "Clavier gaming sans fil avec switchs mécaniques et design blanc",
        price: 229,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915 Tenkeyless Lightspeed Carbone (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915 Tenkeyless Lightspeed Carbone (Tactile Version).jpg",
        description: "Clavier gaming TKL sans fil avec switchs tactiles et design carbone",
        price: 249,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915X Lightspeed Blanc (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915X Lightspeed Blanc (Tactile Version).jpg",
        description: "Clavier gaming sans fil avec switchs tactiles et design blanc",
        price: 259,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915X Lightspeed Noir (Clicky Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915X Lightspeed Noir (Clicky Version).jpg",
        description: "Clavier gaming sans fil avec switchs clicky et design noir",
        price: 259,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915X Lightspeed Noir (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915X Lightspeed Noir (Tactile Version).jpg",
        description: "Clavier gaming sans fil avec switchs tactiles et design noir",
        price: 259,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915X Noir (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915X Noir (Tactile Version).jpg",
        description: "Clavier gaming sans fil avec switchs tactiles et design noir",
        price: 249,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915X TKL Lightspeed Blanc (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915X TKL Lightspeed Blanc (Tactile Version).jpg",
        description: "Clavier gaming TKL sans fil avec switchs tactiles et design blanc",
        price: 269,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915X TKL Lightspeed Noir (Linear Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915X TKL Lightspeed Noir (Linear Version).jpg",
        description: "Clavier gaming TKL sans fil avec switchs linéaires et design noir",
        price: 269,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G G915X TKL Lightspeed Noir (Tactile Version)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G G915X TKL Lightspeed Noir (Tactile Version).jpg",
        description: "Clavier gaming TKL sans fil avec switchs tactiles et design noir",
        price: 269,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G Pro X 60 Lightspeed (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G Pro X 60 Lightspeed (Blanc).jpg",
        description: "Clavier gaming compact 60% sans fil avec switchs mécaniques et design blanc",
        price: 199,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G Pro X 60 Lightspeed (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G Pro X 60 Lightspeed (Noir).jpg",
        description: "Clavier gaming compact 60% sans fil avec switchs mécaniques et design noir",
        price: 199,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G Pro X TKL Lightspeed (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G Pro X TKL Lightspeed (Noir).jpg",
        description: "Clavier gaming TKL sans fil avec switchs mécaniques et design noir",
        price: 229,
        rating: 5,
        brand: "Logitech G",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G Pro X TKL Rapid Linear (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G Pro X TKL Rapid Linear (Blanc).jpg",
        description: "Clavier gaming TKL avec switchs linéaires et design blanc",
        price: 179,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G Pro X TKL Rapid Linear (Magenta)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G Pro X TKL Rapid Linear (Magenta).jpg",
        description: "Clavier gaming TKL avec switchs linéaires et design magenta",
        price: 179,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G Pro X TKL Rapid Linear (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G Pro X TKL Rapid Linear (Noir).jpg",
        description: "Clavier gaming TKL avec switchs linéaires et design noir",
        price: 179,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Logitech G Pro",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Logitech G/Logitech G Pro.jpg",
        description: "Clavier gaming mécanique avec switchs personnalisables et design sobre",
        price: 149,
        rating: 4,
        brand: "Logitech G",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Razer BlackWidow V3 Pro (switches Razer Green)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer BlackWidow V3 Pro (switches Razer Green).jpg",
        description: "Clavier gaming sans fil avec switchs Razer Green et rétroéclairage RGB",
        price: 229,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Razer BlackWidow V3 TKL (switches Razer Green)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer BlackWidow V3 TKL (switches Razer Green).jpg",
        description: "Clavier gaming TKL avec switchs Razer Green et rétroéclairage RGB",
        price: 149,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Razer BlackWidow V4 (switches Razer Green)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer BlackWidow V4 (switches Razer Green).jpg",
        description: "Clavier gaming mécanique avec switchs Razer Green et design robuste",
        price: 129,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Razer BlackWidow V4 Pro (switches Razer Yellow)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer BlackWidow V4 Pro (switches Razer Yellow).jpg",
        description: "Clavier gaming haut de gamme avec switchs Razer Yellow et rétroéclairage RGB",
        price: 249,
        rating: 5,
        brand: "Razer",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Razer BlackWidow V4 X (switches Razer Green)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer BlackWidow V4 X (switches Razer Green).jpg",
        description: "Clavier gaming mécanique avec switchs Razer Green et design sobre",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Razer DeathStalker v2 Pro TKL",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer DeathStalker v2 Pro TKL.jpg",
        description: "Clavier gaming TKL sans fil avec switchs optiques et design low-profile",
        price: 199,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer DeathStalker v2 Pro",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer DeathStalker v2 Pro.jpg",
        description: "Clavier gaming sans fil avec switchs optiques et design low-profile",
        price: 229,
        rating: 5,
        brand: "Razer",
        SF: "OUI",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Huntsman v2 (Switchs optiques rouges)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Huntsman v2 (Switchs optiques rouges).jpg",
        description: "Clavier gaming mécanique avec switchs optiques rouges et rétroéclairage RGB",
        price: 179,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Huntsman v2 (Switchs optiques violets)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Huntsman v2 (Switchs optiques violets).jpg",
        description: "Clavier gaming mécanique avec switchs optiques violets et rétroéclairage RGB",
        price: 179,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Huntsman v2 Analog",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Huntsman v2 Analog.jpg",
        description: "Clavier gaming mécanique avec switchs analogiques et rétroéclairage RGB",
        price: 249,
        rating: 5,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Huntsman v2 TKL (Switchs optiques violets)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Huntsman v2 TKL (Switchs optiques violets).jpg",
        description: "Clavier gaming TKL avec switchs optiques violets et rétroéclairage RGB",
        price: 159,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Huntsman v3 Pro Mini",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Huntsman v3 Pro Mini.jpg",
        description: "Clavier gaming compact 60% avec switchs optiques et rétroéclairage RGB",
        price: 199,
        rating: 5,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Huntsman v3 Pro TKL",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Huntsman v3 Pro TKL.jpg",
        description: "Clavier gaming TKL avec switchs optiques et rétroéclairage RGB",
        price: 229,
        rating: 5,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Huntsman v3 Pro",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Huntsman v3 Pro.jpg",
        description: "Clavier gaming mécanique avec switchs optiques et rétroéclairage RGB",
        price: 249,
        rating: 5,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Ornata V3 TKL",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Ornata V3 TKL.jpg",
        description: "Clavier gaming TKL hybride méca-membrane avec rétroéclairage RGB",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "MM",
        availability: "green",
    },
    {
        name: "Razer Ornata V3 X",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Ornata V3 X.jpg",
        description: "Clavier gaming hybride méca-membrane avec rétroéclairage RGB",
        price: 79,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "MM",
        availability: "green",
    },
    {
        name: "Razer Ornata V3",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Ornata V3.jpg",
        description: "Clavier gaming hybride méca-membrane avec rétroéclairage RGB",
        price: 89,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "MM",
        availability: "green",
    },
    {
        name: "Razer Tartarus Pro (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Tartarus Pro (Noir).jpg",
        description: "Clavier gaming à pavé numérique avec switchs optiques et design ergonomique",
        price: 149,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "Razer Tartarus v2",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Razer/Razer Tartarus v2.jpg",
        description: "Clavier gaming à pavé numérique avec switchs méca-membrane et design ergonomique",
        price: 99,
        rating: 4,
        brand: "Razer",
        SF: "NON",
        TDT: "MM",
        availability: "green",
    },
    {
        name: "ROCCAT Vulcan II Max Linéaire Blanc (Switch Titan II Linear Optical Red)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ROCCAT/ROCCAT Vulcan II Max Linéaire Blanc (Switch Titan II Linear Optical Red).jpg",
        description: "Clavier gaming mécanique avec switchs optiques linéaires et design blanc",
        price: 199,
        rating: 5,
        brand: "ROCCAT",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "ROCCAT Vulcan II Max Linéaire Noir (Switch Titan II Linear Optical Red)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ROCCAT/ROCCAT Vulcan II Max Linéaire Noir (Switch Titan II Linear Optical Red).jpg",
        description: "Clavier gaming mécanique avec switchs optiques linéaires et design noir",
        price: 199,
        rating: 5,
        brand: "ROCCAT",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "ROCCAT Vulcan II Max Tactile Noir (Switch Titan II Tactile Optical Brown)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/ROCCAT/ROCCAT Vulcan II Max Tactile Noir (Switch Titan II Tactile Optical Brown).jpg",
        description: "Clavier gaming mécanique avec switchs optiques tactiles et design noir",
        price: 199,
        rating: 5,
        brand: "ROCCAT",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "SteelSeries Apex 3 TKL",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex 3 TKL.jpg",
        description: "Clavier gaming TKL à membrane avec rétroéclairage RGB",
        price: 79,
        rating: 4,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Membrane",
        availability: "green",
    },
    {
        name: "SteelSeries Apex 3",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex 3.jpg",
        description: "Clavier gaming à membrane avec rétroéclairage RGB et design robuste",
        price: 69,
        rating: 4,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Membrane",
        availability: "green",
    },
    {
        name: "SteelSeries Apex 5",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex 5.jpg",
        description: "Clavier gaming hybride méca-membrane avec écran OLED et rétroéclairage RGB",
        price: 129,
        rating: 4,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "MM",
        availability: "green",
    },
    {
        name: "SteelSeries Apex 7 - Switches QX2 Red",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex 7 - Switches QX2 Red.jpg",
        description: "Clavier gaming mécanique avec switchs QX2 Red et rétroéclairage RGB",
        price: 179,
        rating: 5,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "SteelSeries Apex 9 TKL",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex 9 TKL.jpg",
        description: "Clavier gaming TKL mécanique avec switchs optiques et rétroéclairage RGB",
        price: 199,
        rating: 5,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Opt",
        availability: "green",
    },
    {
        name: "SteelSeries Apex Pro Gen 3",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex Pro Gen 3.jpg",
        description: "Clavier gaming mécanique avec switchs ajustables et rétroéclairage RGB",
        price: 249,
        rating: 5,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "SteelSeries Apex Pro Mini Wireless",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex Pro Mini Wireless.jpg",
        description: "Clavier gaming compact 60% sans fil avec switchs ajustables et rétroéclairage RGB",
        price: 229,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "SteelSeries Apex Pro Mini",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex Pro Mini.jpg",
        description: "Clavier gaming compact 60% avec switchs ajustables et rétroéclairage RGB",
        price: 199,
        rating: 5,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "SteelSeries Apex Pro TKL Gen 3",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex Pro TKL Gen 3.jpg",
        description: "Clavier gaming TKL avec switchs ajustables et rétroéclairage RGB",
        price: 229,
        rating: 5,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "SteelSeries Apex Pro TKL Wireless 2023",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex Pro TKL Wireless 2023.jpg",
        description: "Clavier gaming TKL sans fil avec switchs ajustables et rétroéclairage RGB",
        price: 249,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "SteelSeries Apex Pro TKL Wireless Gen 3",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex Pro TKL Wireless Gen 3.jpg",
        description: "Clavier gaming TKL sans fil avec switchs ajustables et rétroéclairage RGB",
        price: 249,
        rating: 5,
        brand: "SteelSeries",
        SF: "OUI",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "SteelSeries Apex Pro",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/SteelSeries/SteelSeries Apex Pro.jpg",
        description: "Clavier gaming mécanique avec switchs ajustables et rétroéclairage RGB",
        price: 199,
        rating: 5,
        brand: "SteelSeries",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Turtle Beach Magma",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Turtle Beach/Turtle Beach Magma.jpg",
        description: "Clavier gaming à membrane avec rétroéclairage RGB et design ergonomique",
        price: 59,
        rating: 4,
        brand: "Turtle Beach",
        SF: "NON",
        TDT: "Membrane",
        availability: "green",
    },
    {
        name: "Turtle Beach Vulcan II Linéaire (Blanc)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Turtle Beach/Turtle Beach Vulcan II Linéaire (Blanc).jpg",
        description: "Clavier gaming mécanique avec switchs linéaires et design blanc",
        price: 149,
        rating: 4,
        brand: "Turtle Beach",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Turtle Beach Vulcan II Linéaire (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Turtle Beach/Turtle Beach Vulcan II Linéaire (Noir).jpg",
        description: "Clavier gaming mécanique avec switchs linéaires et design noir",
        price: 149,
        rating: 4,
        brand: "Turtle Beach",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Turtle Beach Vulcan II Max Linéaire (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Turtle Beach/Turtle Beach Vulcan II Max Linéaire (Noir).jpg",
        description: "Clavier gaming mécanique avec switchs linéaires et design noir",
        price: 199,
        rating: 5,
        brand: "Turtle Beach",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Turtle Beach Vulcan II TKL Pro Linéaire (Noir)",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Turtle Beach/Turtle Beach Vulcan II TKL Pro Linéaire (Noir).jpg",
        description: "Clavier gaming TKL mécanique avec switchs linéaires et design noir",
        price: 179,
        rating: 5,
        brand: "Turtle Beach",
        SF: "NON",
        TDT: "Meca",
        availability: "green",
    },
    {
        name: "Turtle Beach Vulcan TKL",
        image: "/Website Beta/IMAGES/images périphériques/Clavier/Turtle Beach/Turtle Beach Vulcan TKL.jpg",
        description: "Clavier gaming TKL mécanique avec switchs linéaires et design sobre",
        price: 129,
        rating: 4,
        brand: "Turtle Beach",
        SF: "NON",
        TDT: "Meca",
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
        const matchesTDT = !TDTFilter.value || product.TDT === TDTFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesSF && matchesTDT && matchesSearch;
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

[brandFilter, SFFilter, TDTFilter, searchBar].forEach(filter => {
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
    const selectedAlim = [];
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']:checked");

    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr");
        const productName = row.querySelector("td:first-child").textContent.trim();
        const productPrice = row.querySelector(".price").textContent.trim();
        const productImage = productData.find(p => p.name === productName)?.image || "";

        selectedAlim.push({ 
            name: productName, 
            price: productPrice, 
            image: productImage 
        });
    });

    if (selectedAlim.length > 0) {

        let existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];

        existingProducts = existingProducts.concat(selectedAlim);

        localStorage.setItem("selectedProducts", JSON.stringify(existingProducts));

        console.log("Produits ajoutés au panier :", existingProducts);

        window.location.href = "/Website Beta/Page du panier/Panier.html";
    } else {
        alert("Veuillez sélectionner au moins un PRODUIT avant de valider.");
    }
});