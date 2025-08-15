const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const ATXFilter = document.querySelector("#ATXFilter");
const COLORFilter = document.querySelector("#COLORFilter");
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
   "name": "Aerocool APNX C1 Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/APNX C1 Blanc.jpg",
   "description": "Boîtier moyen tour avec fenêtre latérale en verre trempé, design moderne et flux d'air optimisé. Idéal pour les configurations gaming.",
   "price": 59.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Aerocool Atomic Lite V2",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Atomic Lite V2.jpg",
   "description": "Boîtier mini tour compact avec façade en mesh pour une ventilation optimale, rétroéclairage RGB et fenêtre latérale en verre trempé.",
   "price": 39.95,
   "rating": 3,
   "brand": "AC",
   "ATX": "Micro",
   "COLOR": "Noir",
   "availability": "red"
 },
 {
   "name": "Aerocool Bolt Mini Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Bolt Mini Noir.jpg",
   "description": "Boîtier compact et élégant, idéal pour les configurations Mini-ITX. Design sobre avec fenêtre latérale en acrylique.",
   "price": 49.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "Mini",
   "COLOR": "Noir",
   "availability": "black"
 },
 {
   "name": "Aerocool CS-107-A-BK-V2",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/CS-107-A-BK-V2.jpg",
   "description": "Boîtier mini tour avec façade mesh, panneau latéral en acrylique et 3 ventilateurs ARGB inclus pour un refroidissement efficace.",
   "price": 39.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "Micro",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Aerocool CS-109-S Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/CS-109-S Noir.jpg",
   "description": "Boîtier mini tour avec façade mesh, panneau latéral en acier et un ventilateur inclus. Design simple et fonctionnel.",
   "price": 34.95,
   "rating": 3,
   "brand": "AC",
   "ATX": "Micro",
   "COLOR": "Noir",
   "availability": "red"
 },
 {
   "name": "Aerocool Cylon Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Cylon Blanc.jpg",
   "description": "Boîtier ATX avec design futuriste, rétroéclairage RGB dynamique et panneau latéral en verre trempé. Idéal pour les setups gaming.",
   "price": 44.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "red"
 },
 {
   "name": "Aerocool Cylon Mini Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Cylon Mini Blanc.jpg",
   "description": "Version compacte du Cylon, idéal pour les configurations Micro-ATX. Rétroéclairage RGB et panneau latéral en verre trempé.",
   "price": 49.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "Micro",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Aerocool Cylon Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Cylon Noir.jpg",
   "description": "Boîtier ATX avec design futuriste, rétroéclairage RGB dynamique et panneau latéral en verre trempé. Parfait pour les gamers.",
   "price": 44.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Aerocool Cylon Pro Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Cylon Pro Blanc.jpg",
   "description": "Version améliorée du Cylon avec un meilleur refroidissement et un design RGB amélioré. Panneau latéral en verre trempé.",
   "price": 59.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Aerocool Cylon mini Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Cylon mini Noir.jpg",
   "description": "Version compacte du Cylon, idéal pour les configurations Micro-ATX. Rétroéclairage RGB et panneau latéral en verre trempé.",
   "price": 49.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "Micro",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Aerocool D301A V1 Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/D301A V1 Blanc.jpg",
   "description": "Boîtier ATX avec design épuré, panneau latéral en verre trempé et support pour plusieurs ventilateurs. Idéal pour les setups modernes.",
   "price": 54.95,
   "rating": 3,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Aerocool D301A V1 Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/D301A V1 Noir.jpg",
   "description": "Boîtier ATX avec design épuré, panneau latéral en verre trempé et support pour plusieurs ventilateurs. Idéal pour les setups modernes.",
   "price": 54.95,
   "rating": 3,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Aerocool D302A V1 Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/D302A V1 Blanc.jpg",
   "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et support pour plusieurs ventilateurs ARGB. Parfait pour les gamers.",
   "price": 59.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Aerocool D302A V1 Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/D302A V1 Noir.jpg",
   "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et support pour plusieurs ventilateurs ARGB. Parfait pour les gamers.",
   "price": 59.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Aerocool Designer V1",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Designer V1.jpg",
   "description": "Boîtier ATX avec design unique, panneau latéral en verre trempé et support pour plusieurs ventilateurs ARGB. Idéal pour les setups créatifs.",
   "price": 69.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Aerocool Dryft Mini V2",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Dryft Mini V2.jpg",
   "description": "Boîtier compact avec design moderne, idéal pour les configurations Mini-ITX. Équipé d'une fenêtre latérale en verre trempé.",
   "price": 49.95,
   "rating": 3,
   "brand": "AC",
   "ATX": "Mini",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Aerocool Dryft V2",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Aerocool/Dryft V2.jpg",
   "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et support pour plusieurs ventilateurs ARGB. Parfait pour les gamers.",
   "price": 59.95,
   "rating": 4,
   "brand": "AC",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   name: "ASUS TUF Gaming GT502 Blanc",
   image: "/Website Beta/IMAGES/images composants/Boîtier/ASUS/ASUS TUF Gaming GT502 Blanc.jpg",
   description: "Boîtier",
   price: 150,
   rating: 3,
   brand: "ASUS",
   ATX: "ATX",
   COLOR: "Noir",
   availability: "red",
 },
 {
  name: "Antec AX20",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/AX20.jpg",
  description: "Boîtier PC Antec AX20, format ATX, design sobre et fonctionnel",
  price: 59,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec AX61 ELITE",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/AX61 ELITE.jpg",
  description: "Boîtier PC Antec AX61 ELITE, format ATX, optimisé pour le refroidissement",
  price: 89,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "orange",
},
{
  name: "Antec C3 ARGB Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C3 ARGB Blanc.jpg",
  description: "Boîtier PC Antec C3 ARGB Blanc, format ATX, éclairage ARGB personnalisable",
  price: 79,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "green",
},
{
  name: "Antec C3 ARGB Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C3 ARGB Noir.jpg",
  description: "Boîtier PC Antec C3 ARGB Noir, format ATX, design moderne avec éclairage ARGB",
  price: 79,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "red",
},
{
  name: "Antec C5 ARGB Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C5 ARGB Blanc.jpg",
  description: "Boîtier PC Antec C5 ARGB Blanc, format ATX, refroidissement efficace",
  price: 99,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "blue",
},
{
  name: "Antec C5 ARGB Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C5 ARGB Noir.jpg",
  description: "Boîtier PC Antec C5 ARGB Noir, format ATX, design épuré et fonctionnel",
  price: 99,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec C7 ARGB Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C7 ARGB Blanc.jpg",
  description: "Boîtier PC Antec C7 ARGB Blanc, format ATX, éclairage ARGB dynamique",
  price: 109,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "orange",
},
{
  name: "Antec C7 ARGB Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C7 ARGB Noir.jpg",
  description: "Boîtier PC Antec C7 ARGB Noir, format ATX, design moderne et performant",
  price: 109,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec C8 ARGB Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C8 ARGB Blanc.jpg",
  description: "Boîtier PC Antec C8 ARGB Blanc, format ATX, refroidissement optimisé",
  price: 119,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "green",
},
{
  name: "Antec C8 ARGB Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C8 ARGB Noir.jpg",
  description: "Boîtier PC Antec C8 ARGB Noir, format ATX, design élégant et fonctionnel",
  price: 119,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "red",
},
{
  name: "Antec C8 Aluminium Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C8 Aluminium Blanc.jpg",
  description: "Boîtier PC Antec C8 Aluminium Blanc, format ATX, matériaux haut de gamme",
  price: 129,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "blue",
},
{
  name: "Antec C8 Bois",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C8 Bois.jpg",
  description: "Boîtier PC Antec C8 Bois, format ATX, design unique en bois",
  price: 139,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec C8 Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/C8 Noir.jpg",
  description: "Boîtier PC Antec C8 Noir, format ATX, design sobre et performant",
  price: 129,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "orange",
},
{
  name: "Antec CX800 ARGB Bois",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/CX800 ARGB Bois.jpg",
  description: "Boîtier PC Antec CX800 ARGB Bois, format ATX, design bois et éclairage ARGB",
  price: 149,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec DF700 FLUX Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/DF700 FLUX Noir.jpg",
  description: "Boîtier PC Antec DF700 FLUX Noir, format ATX, refroidissement FLUX innovant",
  price: 99,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec DF800 FLUX Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/DF800 FLUX Noir.jpg",
  description: "Boîtier PC Antec DF800 FLUX Noir, format ATX, design agressif et performant",
  price: 109,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "red",
},
{
  name: "Antec FLUX Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/FLUX Blanc.jpg",
  description: "Boîtier PC Antec FLUX Blanc, format ATX, design épuré et fonctionnel",
  price: 89,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "green",
},
{
  name: "Antec FLUX Noir",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/FLUX Noir.jpg",
  description: "Boîtier PC Antec FLUX Noir, format ATX, refroidissement efficace",
  price: 89,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "orange",
},
{
  name: "Antec NX416L",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/NX416L.jpg",
  description: "Boîtier PC Antec NX416L, format ATX, design compact et fonctionnel",
  price: 49,
  rating: 3,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec NX500M ARGB",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/NX500M ARGB.jpg",
  description: "Boîtier PC Antec NX500M ARGB, format ATX, éclairage ARGB personnalisable",
  price: 69,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec P10C",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/P10C.jpg",
  description: "Boîtier PC Antec P10C, format ATX, design silencieux et performant",
  price: 99,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec P20C Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/P20C Blanc.jpg",
  description: "Boîtier PC Antec P20C Blanc, format ATX, design moderne et fonctionnel",
  price: 109,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "blue",
},
{
  name: "Antec P20CE",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/P20CE.jpg",
  description: "Boîtier PC Antec P20CE, format ATX, design épuré et performant",
  price: 119,
  rating: 4,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec Performance 1 FT ARGB",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/Performance 1 FT ARGB.jpg",
  description: "Boîtier PC Antec Performance 1 FT ARGB, format ATX, éclairage ARGB dynamique",
  price: 199,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec Performance 1 FT Blanc",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/Performance 1 FT Blanc.jpg",
  description: "Boîtier PC Antec Performance 1 FT Blanc, format ATX, design élégant et performant",
  price: 199,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Blanc",
  availability: "orange",
},
{
  name: "Antec Performance 1 FT",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/Performance 1 FT.jpg",
  description: "Boîtier PC Antec Performance 1 FT, format ATX, design sobre et fonctionnel",
  price: 189,
  rating: 5,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec VSK-3000B",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/VSK-3000B.jpg",
  description: "Boîtier PC Antec VSK-3000B, format ATX, design compact et économique",
  price: 39,
  rating: 3,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec VSK-4000B",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/VSK-4000B.jpg",
  description: "Boîtier PC Antec VSK-4000B, format ATX, design simple et fonctionnel",
  price: 49,
  rating: 3,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
{
  name: "Antec VSK2000-U3",
  image: "/Website Beta/IMAGES/images composants/Boîtier/Antec/VSK2000-U3.jpg",
  description: "Boîtier PC Antec VSK2000-U3, format ATX, design compact et économique",
  price: 35,
  rating: 3,
  brand: "Antec",
  ATX: "ATX",
  COLOR: "Noir",
  availability: "green",
},
   {
 "name": "be quiet ! Dark Base Pro 901 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Dark Base Pro 901 Noir.jpg",
 "description": "Boîtier haut de gamme modulaire avec insonorisation avancée, support pour configurations E-ATX et refroidissement liquide. Design épuré et fonctionnel.",
 "price": 269.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "E-ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 500 FX Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 500 FX Noir.jpg",
 "description": "Boîtier ATX avec design moderne, éclairage ARGB intégré et excellente gestion des câbles. Idéal pour les setups gaming.",
 "price": 109.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 500 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 500 Noir.jpg",
 "description": "Boîtier ATX silencieux avec design sobre et gestion thermique optimisée. Parfait pour les configurations discrètes.",
 "price": 79.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 500DX Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 500DX Blanc.jpg",
 "description": "Boîtier ATX avec design épuré, panneau latéral en verre trempé et éclairage ARGB. Excellente circulation d'air.",
 "price": 99.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 500DX Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 500DX Noir.jpg",
 "description": "Boîtier ATX avec design épuré, panneau latéral en verre trempé et éclairage ARGB. Excellente circulation d'air.",
 "price": 99.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 501 Airflow Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 501 Airflow Blanc.jpg",
 "description": "Boîtier ATX avec façade mesh pour une ventilation optimale, design sobre et panneau latéral en verre trempé.",
 "price": 89.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 501 Airflow Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 501 Airflow Noir.jpg",
 "description": "Boîtier ATX avec façade mesh pour une ventilation optimale, design sobre et panneau latéral en verre trempé.",
 "price": 89.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 501 Airflow Window Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 501 Airflow Window Blanc.jpg",
 "description": "Boîtier ATX avec panneau latéral en verre trempé, façade mesh et excellente gestion thermique. Idéal pour les setups gaming.",
 "price": 94.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 501 Airflow Window Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 501 Airflow Window Noir.jpg",
 "description": "Boîtier ATX avec panneau latéral en verre trempé, façade mesh et excellente gestion thermique. Idéal pour les setups gaming.",
 "price": 94.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 501",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 501.jpg",
 "description": "Boîtier ATX silencieux avec design sobre et gestion thermique optimisée. Parfait pour les configurations discrètes.",
 "price": 79.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 600 Noir Argent",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 600 Noir Argent.jpg",
 "description": "Boîtier ATX avec design sobre et finition argentée, insonorisation avancée et excellente gestion des câbles.",
 "price": 109.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 600 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 600 Noir.jpg",
 "description": "Boîtier ATX silencieux avec design sobre et gestion thermique optimisée. Parfait pour les configurations discrètes.",
 "price": 99.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 600 Window Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 600 Window Noir.jpg",
 "description": "Boîtier ATX avec panneau latéral en verre trempé, insonorisation avancée et excellente gestion thermique.",
 "price": 109.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Pure Base 600 Window Orange",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Pure Base 600 Window Orange.jpg",
 "description": "Boîtier ATX avec panneau latéral en verre trempé et finition orange, insonorisation avancée et excellente gestion thermique.",
 "price": 109.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Shadow Base 800 DX Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Shadow Base 800 DX Blanc.jpg",
 "description": "Boîtier haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 179.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "be quiet ! Shadow Base 800 DX Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Shadow Base 800 DX Noir.jpg",
 "description": "Boîtier haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 179.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Shadow Base 800 FX Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Shadow Base 800 FX Blanc.jpg",
 "description": "Boîtier haut de gamme avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 199.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "be quiet ! Shadow Base 800 FX Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Shadow Base 800 FX Noir.jpg",
 "description": "Boîtier haut de gamme avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 199.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Shadow Base 800",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Shadow Base 800.jpg",
 "description": "Boîtier haut de gamme avec design sobre, insonorisation avancée et excellente gestion thermique.",
 "price": 169.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Silent Base 601 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Silent Base 601 Noir.jpg",
 "description": "Boîtier ATX silencieux avec design sobre, insonorisation avancée et excellente gestion thermique.",
 "price": 149.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Silent Base 601 Window Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Silent Base 601 Window Noir.jpg",
 "description": "Boîtier ATX silencieux avec panneau latéral en verre trempé, insonorisation avancée et excellente gestion thermique.",
 "price": 159.95,
 "rating": 4,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Silent Base 802 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Silent Base 802 Blanc.jpg",
 "description": "Boîtier haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 179.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "be quiet ! Silent Base 802 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Silent Base 802 Noir.jpg",
 "description": "Boîtier haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 179.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "be quiet ! Silent Base 802 Window Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Silent Base 802 Window Blanc.jpg",
 "description": "Boîtier haut de gamme avec panneau latéral en verre trempé, insonorisation avancée et excellente gestion thermique.",
 "price": 189.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "be quiet ! Silent Base 802 Window Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/be quiet !/Silent Base 802 Window Noir.jpg",
 "description": "Boîtier haut de gamme avec panneau latéral en verre trempé, insonorisation avancée et excellente gestion thermique.",
 "price": 189.95,
 "rating": 5,
 "brand": "be quiet !",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
 {
 "name": "Cooler Master CMP510",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/CMP510.jpg",
 "description": "Boîtier ATX compact avec design sobre et gestion thermique optimisée. Idéal pour les configurations discrètes.",
 "price": 59.95,
 "rating": 3,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master CMP520",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/CMP520.jpg",
 "description": "Boîtier ATX avec design moderne et excellente gestion des câbles. Parfait pour les setups gaming.",
 "price": 69.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master Elite 300",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/Elite 300.jpg",
 "description": "Boîtier ATX compact avec design sobre et gestion thermique optimisée. Idéal pour les configurations discrètes.",
 "price": 39.95,
 "rating": 3,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master HAF 700 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/HAF 700 Blanc.jpg",
 "description": "Boîtier haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 249.95,
 "rating": 5,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master HAF 700 EVO Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/HAF 700 EVO Blanc.jpg",
 "description": "Boîtier haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 269.95,
 "rating": 5,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master HAF 700",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/HAF 700.jpg",
 "description": "Boîtier haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 249.95,
 "rating": 5,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master HAF500 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/HAF500 Blanc.jpg",
 "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 99.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master HAF500 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/HAF500 Noir.jpg",
 "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 99.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master Master Elite 500 ODD Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/Master Elite 500 ODD Noir.jpg",
 "description": "Boîtier ATX avec design sobre et gestion thermique optimisée. Idéal pour les configurations discrètes.",
 "price": 49.95,
 "rating": 3,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox 600 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox 600 Blanc.jpg",
 "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 89.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox 600 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox 600 Noir.jpg",
 "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 89.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox MB320LL ARGB Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox MB320LL ARGB Noir.jpg",
 "description": "Boîtier ATX avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 79.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox MB520 Mesh ARGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox MB520 Mesh ARGB Blanc.jpg",
 "description": "Boîtier ATX avec façade mesh pour une ventilation optimale, éclairage ARGB intégré et panneau latéral en verre trempé.",
 "price": 99.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox MB520 Mesh Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox MB520 Mesh Noir.jpg",
 "description": "Boîtier ATX avec façade mesh pour une ventilation optimale, éclairage ARGB intégré et panneau latéral en verre trempé.",
 "price": 99.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox MB520 TG ARGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox MB520 TG ARGB Blanc.jpg",
 "description": "Boîtier ATX avec panneau latéral en verre trempé, éclairage ARGB intégré et excellente gestion thermique.",
 "price": 109.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox MB540 ARGB",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox MB540 ARGB.jpg",
 "description": "Boîtier ATX avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 119.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox MB600L V2 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox MB600L V2 Noir.jpg",
 "description": "Boîtier ATX avec design sobre, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 79.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox NR200P MAX Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox NR200P MAX Noir.jpg",
 "description": "Boîtier compact avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 149.95,
 "rating": 5,
 "brand": "Cooler Master",
 "ATX": "Mini",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox Q300L",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox Q300L.jpg",
 "description": "Boîtier compact avec design sobre et gestion thermique optimisée. Idéal pour les configurations discrètes.",
 "price": 49.95,
 "rating": 3,
 "brand": "Cooler Master",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox Q500L",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox Q500L.jpg",
 "description": "Boîtier ATX avec design sobre et gestion thermique optimisée. Idéal pour les configurations discrètes.",
 "price": 59.95,
 "rating": 3,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox TD300 Mesh Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox TD300 Mesh Noir.jpg",
 "description": "Boîtier ATX avec façade mesh pour une ventilation optimale, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 89.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox TD500 Mesh V2 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox TD500 Mesh V2 Blanc.jpg",
 "description": "Boîtier ATX avec façade mesh pour une ventilation optimale, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 109.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master MasterBox TD500 Mesh V2 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/MasterBox TD500 Mesh V2 Noir.jpg",
 "description": "Boîtier ATX avec façade mesh pour une ventilation optimale, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 109.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master N200 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/N200 Noir.jpg",
 "description": "Boîtier compact avec design sobre et gestion thermique optimisée. Idéal pour les configurations discrètes.",
 "price": 49.95,
 "rating": 3,
 "brand": "Cooler Master",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master QUBE 500 Flatpack Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/QUBE 500 Flatpack Blanc.jpg",
 "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 99.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Cooler Master QUBE 500 Flatpack Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/QUBE 500 Flatpack Noir.jpg",
 "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
 "price": 99.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master Silencio S400",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/Silencio S400.jpg",
 "description": "Boîtier compact avec insonorisation avancée, design sobre et excellente gestion thermique.",
 "price": 79.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master Silencio S600",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/Silencio S600.jpg",
 "description": "Boîtier ATX avec insonorisation avancée, design sobre et excellente gestion thermique.",
 "price": 99.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Cooler Master masterBox MB520 TG ARGB",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Cooler Master/masterBox MB520 TG ARGB.jpg",
 "description": "Boîtier ATX avec panneau latéral en verre trempé, éclairage ARGB intégré et excellente gestion thermique.",
 "price": 109.95,
 "rating": 4,
 "brand": "Cooler Master",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
   "name": "Corsair 2000D AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/2000D AIRFLOW Noir.jpg",
   "description": "Boîtier compact avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les configurations Mini-ITX.",
   "price": 99.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "Mini",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 2000D RGB AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/2000D RGB AIRFLOW Blanc.jpg",
   "description": "Boîtier compact avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les configurations Mini-ITX.",
   "price": 119.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "Mini",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 2000D RGB AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/2000D RGB AIRFLOW Noir.jpg",
   "description": "Boîtier compact avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les configurations Mini-ITX.",
   "price": 119.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "Mini",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 2500D AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/2500D AIRFLOW Blanc.jpg",
   "description": "Boîtier compact avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les configurations Mini-ITX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "Mini",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 2500D AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/2500D AIRFLOW Noir.jpg",
   "description": "Boîtier compact avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les configurations Mini-ITX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "Mini",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 2500X Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/2500X Blanc.jpg",
   "description": "Boîtier compact avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 129.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "Mini",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 2500X Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/2500X Noir.jpg",
   "description": "Boîtier compact avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 129.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "Mini",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 3000D AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3000D AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 89.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 3000D AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3000D AIRFLOW Noir.jpg",
   "description": "Boîtier ATX avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 89.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 3000D RGB AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3000D RGB AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 109.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 3000D RGB AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3000D RGB AIRFLOW Noir.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 109.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 3500X ARGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3500X ARGB Blanc.jpg",
   "description": "Boîtier ATX avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 139.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 3500X ARGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3500X ARGB Noir.jpg",
   "description": "Boîtier ATX avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 139.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 3500X Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3500X Blanc.jpg",
   "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 129.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 3500X Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/3500X Noir.jpg",
   "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 129.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 4000D AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/4000D AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 99.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 4000D AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/4000D AIRFLOW Noir.jpg",
   "description": "Boîtier ATX avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 99.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 4000D RGB AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/4000D RGB AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 119.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 4000D RGB AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/4000D RGB AIRFLOW Noir.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 119.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 4000X RGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/4000X RGB Blanc.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 129.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 4000X RGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/4000X RGB Noir.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 129.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 5000D AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000D AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 169.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 5000D AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000D AIRFLOW Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 169.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 5000D Core AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000D Core AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 179.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 5000D Core AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000D Core AIRFLOW Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 179.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 5000D RGB AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000D RGB AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 199.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 5000D RGB AIRFLOW Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000D RGB AIRFLOW Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 199.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 5000T RGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000T RGB Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 299.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 5000X RGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000X RGB Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 219.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 5000X RGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/5000X RGB Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 219.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 6500D AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/6500D AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 249.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 6500X Blanc Aluminium",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/6500X Blanc Aluminium.jpg",
   "description": "Boîtier ATX haut de gamme avec finition aluminium, design moderne et excellente gestion thermique.",
   "price": 299.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 6500X Blanc Bambou",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/6500X Blanc Bambou.jpg",
   "description": "Boîtier ATX haut de gamme avec finition bambou, design moderne et excellente gestion thermique.",
   "price": 299.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 6500X Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/6500X Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 279.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 6500X Noir Noyer",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/6500X Noir Noyer.jpg",
   "description": "Boîtier ATX haut de gamme avec finition noyer, design moderne et excellente gestion thermique.",
   "price": 299.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 6500X Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/6500X Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 279.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair 7000D AIRFLOW Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/7000D AIRFLOW Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec design moderne, excellente ventilation et gestion des câbles. Idéal pour les setups gaming.",
   "price": 299.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 7000X RGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/7000X RGB Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 349.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair 7000X RGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/7000X RGB Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 349.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair LINK 2500X RGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/LINK 2500X RGB Blanc.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 199.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair LINK 2500X RGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/LINK 2500X RGB Noir.jpg",
   "description": "Boîtier ATX avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 199.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair LINK 3500X ARGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/LINK 3500X ARGB Blanc.jpg",
   "description": "Boîtier ATX avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 229.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair LINK 3500X ARGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/LINK 3500X ARGB Noir.jpg",
   "description": "Boîtier ATX avec éclairage ARGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 229.95,
   "rating": 4,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Corsair LINK 6500X RGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/LINK 6500X RGB Blanc.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 299.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Corsair LINK 6500X RGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Corsair/LINK 6500X RGB Noir.jpg",
   "description": "Boîtier ATX haut de gamme avec éclairage RGB intégré, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 299.95,
   "rating": 5,
   "brand": "Corsair",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "DeepCool CH560 DIGITAL Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/DeepCool/CH560 DIGITAL Blanc.jpg",
   "description": "Boîtier ATX avec écran LCD intégré, design moderne et excellente gestion thermique.",
   "price": 149.95,
   "rating": 4,
   "brand": "DeepCool",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "black"
 },
 {
   "name": "DeepCool CH780 Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/DeepCool/CH780 Blanc.jpg",
   "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 180,
   "rating": 4,
   "brand": "DeepCool",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "DeepCool Morpheus Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/DeepCool/Morpheus Blanc.jpg",
   "description": "Boîtier ATX avec design moderne, panneau latéral en verre trempé et excellente gestion thermique.",
   "price": 199.95,
   "rating": 4,
   "brand": "DeepCool",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "black"
 },
   {
 "name": "Lian Li 011 AIR Mini Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 AIR Mini Blanc.jpg",
 "description": "Boîtier PC Lian Li O11 Air Mini Blanc, format Mini Tower, design épuré avec une excellente circulation d'air, compatible avec les cartes mères Micro-ATX et Mini-ITX.",
 "price": 119.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "Micro",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 Air Mini Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 Air Mini Noir.jpg",
 "description": "Boîtier PC Lian Li O11 Air Mini Noir, format Mini Tower, design moderne avec une excellente gestion des câbles et une bonne ventilation, compatible Micro-ATX et Mini-ITX.",
 "price": 119.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 DYNAMIC EVO Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 DYNAMIC EVO Blanc.jpg",
 "description": "Boîtier PC Lian Li O11 Dynamic EVO Blanc, format Mid Tower, design modulable avec une excellente visibilité et une gestion thermique optimale, compatible ATX.",
 "price": 179.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 DYNAMIC EVO XL Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 DYNAMIC EVO XL Blanc.jpg",
 "description": "Boîtier PC Lian Li O11 Dynamic EVO XL Blanc, format Full Tower, design spacieux avec une excellente gestion des câbles et une compatibilité E-ATX.",
 "price": 229.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "E-ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 DYNAMIC EVO XL Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 DYNAMIC EVO XL Noir.jpg",
 "description": "Boîtier PC Lian Li O11 Dynamic EVO XL Noir, format Full Tower, design élégant avec une excellente gestion thermique et une compatibilité E-ATX.",
 "price": 229.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "E-ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 DYNAMIC Mini Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 DYNAMIC Mini Blanc.jpg",
 "description": "Boîtier PC Lian Li O11 Dynamic Mini Blanc, format Mini Tower, design compact avec une excellente visibilité et une gestion thermique optimale, compatible Micro-ATX.",
 "price": 129.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "Micro",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 DYNAMIC Mini Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 DYNAMIC Mini Noir.jpg",
 "description": "Boîtier PC Lian Li O11 Dynamic Mini Noir, format Mini Tower, design compact avec une excellente gestion des câbles et une compatibilité Micro-ATX.",
 "price": 129.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 Dynamic EVO Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 Dynamic EVO Noir.jpg",
 "description": "Boîtier PC Lian Li O11 Dynamic EVO Noir, format Mid Tower, design modulable avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 179.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 Vision Compact Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 Vision Compact Blanc.jpg",
 "description": "Boîtier PC Lian Li O11 Vision Compact Blanc, format Mid Tower, design élégant avec une excellente visibilité et une gestion thermique optimale, compatible ATX.",
 "price": 149.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li 011 Vision Compact Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011 Vision Compact Noir.jpg",
 "description": "Boîtier PC Lian Li O11 Vision Compact Noir, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
 "price": 149.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li 011D EVO RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011D EVO RGB Blanc.jpg",
 "description": "Boîtier PC Lian Li O11D EVO RGB Blanc, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 199.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li 011D EVO RGB LAMBORGHINI COLLECTOR",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011D EVO RGB LAMBORGHINI COLLECTOR.jpg",
 "description": "Boîtier PC Lian Li O11D EVO RGB Lamborghini Collector, édition limitée, design inspiré de Lamborghini avec éclairage RGB, compatible ATX.",
 "price": 499.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "blue"
   },
   {
 "name": "Lian Li 011D EVO RGB Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/011D EVO RGB Noir.jpg",
 "description": "Boîtier PC Lian Li O11D EVO RGB Noir, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 199.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li A3-mATX Blanc Bois",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/A3-mATX Blanc Bois.jpg",
 "description": "Boîtier PC Lian Li A3-mATX Blanc Bois, format Mini Tower, design unique avec finition bois et une excellente gestion thermique, compatible Micro-ATX.",
 "price": 149.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "Micro",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li A3-mATX Noir Bois",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/A3-mATX Noir Bois.jpg",
 "description": "Boîtier PC Lian Li A3-mATX Noir Bois, format Mini Tower, design élégant avec finition bois et une excellente gestion des câbles, compatible Micro-ATX.",
 "price": 149.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 205 MESH C Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 205 MESH C Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 205 MESH C Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 89.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 205 MESH C Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 205 MESH C Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 205 MESH C Noir, format Mid Tower, design épuré avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 89.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 206 RW Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 206 RW Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 206 RW Blanc, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 206 RX Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 206 RX Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 206 RX Noir, format Mid Tower, design élégant avec une excellente ventilation et une compatibilité ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 207 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 207 Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 207 Blanc, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 109.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 207 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 207 Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 207 Noir, format Mid Tower, design épuré avec une excellente gestion des câbles et une compatibilité ATX.",
 "price": 109.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 215 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 215 Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 215 Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 89.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 215 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 215 Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 215 Noir, format Mid Tower, design élégant avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 89.95,
 "rating": 4,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 216 RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 216 RGB Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 216 RGB Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 119.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL 216 RGB Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL 216 RGB Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL 216 RGB Noir, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 119.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL II MESH C PERFORMANCE Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL II MESH C PERFORMANCE Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL II MESH C PERFORMANCE Noir, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 109.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL II MESH C RGB Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL II MESH C RGB Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL II MESH C RGB Noir, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 119.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL II MESH RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL II MESH RGB Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL II MESH RGB Blanc, format Mid Tower, design élégant avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 119.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL III Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL III Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL III Blanc, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 129.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL III Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL III Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL III Noir, format Mid Tower, design épuré avec une excellente gestion des câbles et une compatibilité ATX.",
 "price": 129.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL III RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL III RGB Blanc.jpg",
 "description": "Boîtier PC Lian Li LANCOOL III RGB Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 139.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
   },
   {
 "name": "Lian Li LANCOOL III RGB Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Lian Li/LANCOOL III RGB Noir.jpg",
 "description": "Boîtier PC Lian Li LANCOOL III RGB Noir, format Mid Tower, design élégant avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 139.95,
 "rating": 5,
 "brand": "Lian Li",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
   },
 {
 "name": "MSI MAG FORGE 100R",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE 100R.jpg",
 "description": "Boîtier PC MSI MAG FORGE 100R, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 69.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG FORGE 110R",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE 110R.jpg",
 "description": "Boîtier PC MSI MAG FORGE 110R, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 79.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG FORGE 112R",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE 112R.jpg",
 "description": "Boîtier PC MSI MAG FORGE 112R, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
 "price": 89.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG FORGE 120A AIRFLOW",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE 120A AIRFLOW.jpg",
 "description": "Boîtier PC MSI MAG FORGE 120A AIRFLOW, format Mid Tower, design optimisé pour une excellente circulation d'air et une compatibilité ATX.",
 "price": 74.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG FORGE 320R AIRFLOW Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE 320R AIRFLOW Blanc.jpg",
 "description": "Boîtier PC MSI MAG FORGE 320R AIRFLOW Blanc, format Mid Tower, design élégant avec une excellente ventilation et une compatibilité ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "MSI MAG FORGE 320R AIRFLOW",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE 320R AIRFLOW.jpg",
 "description": "Boîtier PC MSI MAG FORGE 320R AIRFLOW, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG FORGE M100R Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE M100R Blanc.jpg",
 "description": "Boîtier PC MSI MAG FORGE M100R Blanc, format Mini Tower, design compact avec une excellente gestion des câbles et une compatibilité Micro-ATX.",
 "price": 69.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "Micro",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "MSI MAG FORGE M100R Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG FORGE M100R Noir.jpg",
 "description": "Boîtier PC MSI MAG FORGE M100R Noir, format Mini Tower, design moderne avec une excellente ventilation et une compatibilité Micro-ATX.",
 "price": 69.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG GUNGNIR 300R AIRFLOW Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG GUNGNIR 300R AIRFLOW Blanc.jpg",
 "description": "Boîtier PC MSI MAG GUNGNIR 300R AIRFLOW Blanc, format Mid Tower, design élégant avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 129.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "MSI MAG PANO 100R PZ Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG PANO 100R PZ Blanc.jpg",
 "description": "Boîtier PC MSI MAG PANO 100R PZ Blanc, format Mid Tower, design panoramique avec une excellente visibilité et une compatibilité ATX.",
 "price": 109.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "MSI MAG PANO 100R PZ Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG PANO 100R PZ Noir.jpg",
 "description": "Boîtier PC MSI MAG PANO 100R PZ Noir, format Mid Tower, design panoramique avec une excellente gestion des câbles et une compatibilité ATX.",
 "price": 109.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG PANO M100R PZ Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG PANO M100R PZ Blanc.jpg",
 "description": "Boîtier PC MSI MAG PANO M100R PZ Blanc, format Mini Tower, design panoramique avec une excellente ventilation et une compatibilité Micro-ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "Micro",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "MSI MAG PANO M100R PZ Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG PANO M100R PZ Noir.jpg",
 "description": "Boîtier PC MSI MAG PANO M100R PZ Noir, format Mini Tower, design panoramique avec une excellente gestion thermique et une compatibilité Micro-ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "Micro",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG VAMPIRIC 100R",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG VAMPIRIC 100R.jpg",
 "description": "Boîtier PC MSI MAG VAMPIRIC 100R, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
 "price": 89.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MAG VAMPIRIC 300R Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MAG VAMPIRIC 300R Noir.jpg",
 "description": "Boîtier PC MSI MAG VAMPIRIC 300R Noir, format Mid Tower, design élégant avec une excellente ventilation et une compatibilité ATX.",
 "price": 129.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MPG GUNGNIR 110R Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG GUNGNIR 110R Blanc.jpg",
 "description": "Boîtier PC MSI MPG GUNGNIR 110R Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 139.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "MSI MPG GUNGNIR 110R Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG GUNGNIR 110R Noir.jpg",
 "description": "Boîtier PC MSI MPG GUNGNIR 110R Noir, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion des câbles, compatible ATX.",
 "price": 139.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MPG GUNGNIR 111R",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG GUNGNIR 111R.jpg",
 "description": "Boîtier PC MSI MPG GUNGNIR 111R, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 149.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MPG GUNGNIR 300P AIRFLOW Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG GUNGNIR 300P AIRFLOW Noir.jpg",
 "description": "Boîtier PC MSI MPG GUNGNIR 300P AIRFLOW Noir, format Mid Tower, design élégant avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 159.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MPG GUNGNIR 300R AIRFLOW Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG GUNGNIR 300R AIRFLOW Noir.jpg",
 "description": "Boîtier PC MSI MPG GUNGNIR 300R AIRFLOW Noir, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 149.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MPG VELOX 100PAIRFLOW",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG VELOX 100PAIRFLOW.jpg",
 "description": "Boîtier PC MSI MPG VELOX 100PAIRFLOW, format Mid Tower, design optimisé pour une excellente circulation d'air et une compatibilité ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MPG VELOX 100R Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG VELOX 100R Blanc.jpg",
 "description": "Boîtier PC MSI MPG VELOX 100R Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 109.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "MSI MPG VELOX 100R",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MPG VELOX 100R.jpg",
 "description": "Boîtier PC MSI MPG VELOX 100R, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion des câbles, compatible ATX.",
 "price": 109.95,
 "rating": 4,
 "brand": "MSI",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "MSI MEG PROSPECT 700R",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/MSI/MSI MEG PROSPECT 700R.jpg",
 "description": "Boîtier PC MSI MEG PROSPECT 700R, format Full Tower, design haut de gamme avec une excellente gestion thermique et une compatibilité E-ATX.",
 "price": 299.95,
 "rating": 5,
 "brand": "MSI",
 "ATX": "E-ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "NZXT H5 FLOW RGB 2024 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H5 FLOW RGB 2024 Blanc.jpg",
 "description": "Boîtier PC NZXT H5 FLOW RGB 2024 Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 109.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H5 FLOW RGB 2024 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H5 FLOW RGB 2024 Noir.jpg",
 "description": "Boîtier PC NZXT H5 FLOW RGB 2024 Noir, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 109.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "NZXT H6 FLOW Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H6 FLOW Blanc.jpg",
 "description": "Boîtier PC NZXT H6 FLOW Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 129.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H6 FLOW Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H6 FLOW Noir.jpg",
 "description": "Boîtier PC NZXT H6 FLOW Noir, format Mid Tower, design élégant avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 129.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "NZXT H6 FLOW RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H6 FLOW RGB Blanc.jpg",
 "description": "Boîtier PC NZXT H6 FLOW RGB Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 139.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H6 FLOW RGB Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H6 FLOW RGB Noir.jpg",
 "description": "Boîtier PC NZXT H6 FLOW RGB Noir, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 139.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "NZXT H7 ELITE RGB 2024 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H7 ELITE RGB 2024 Blanc.jpg",
 "description": "Boîtier PC NZXT H7 ELITE RGB 2024 Blanc, format Mid Tower, design haut de gamme avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 179.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H7 ELITE RGB 2024 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H7 ELITE RGB 2024 Noir.jpg",
 "description": "Boîtier PC NZXT H7 ELITE RGB 2024 Noir, format Mid Tower, design élégant avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 179.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "NZXT H7 ELITE RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H7 ELITE RGB Blanc.jpg",
 "description": "Boîtier PC NZXT H7 ELITE RGB Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 169.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H7 FLOW RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H7 FLOW RGB Blanc.jpg",
 "description": "Boîtier PC NZXT H7 FLOW RGB Blanc, format Mid Tower, design élégant avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 159.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H9 ELITE Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H9 ELITE Blanc.jpg",
 "description": "Boîtier PC NZXT H9 ELITE Blanc, format Mid Tower, design haut de gamme avec une excellente visibilité et une compatibilité ATX.",
 "price": 199.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H9 ELITE Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H9 ELITE Noir.jpg",
 "description": "Boîtier PC NZXT H9 ELITE Noir, format Mid Tower, design élégant avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 199.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "NZXT H9 FLOW Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H9 FLOW Blanc.jpg",
 "description": "Boîtier PC NZXT H9 FLOW Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 189.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "NZXT H9 FLOW Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/NZXT/H9 FLOW Noir.jpg",
 "description": "Boîtier PC NZXT H9 FLOW Noir, format Mid Tower, design épuré avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 189.95,
 "rating": 5,
 "brand": "NZXT",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Phanteks ECLIPSE G360A Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/ECLIPSE G360A Blanc.jpg",
 "description": "Boîtier PC Phanteks ECLIPSE G360A Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
 "price": 99.95,
 "rating": 4,
 "brand": "Phanteks",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Phanteks ECLIPSE P400A RGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/ECLIPSE P400A RGB Blanc.jpg",
 "description": "Boîtier PC Phanteks ECLIPSE P400A RGB Blanc, format Mid Tower, design élégant avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
 "price": 109.95,
 "rating": 4,
 "brand": "Phanteks",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Phanteks Eclipse G500A DRGB Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/Eclipse G500A DRGB Blanc.jpg",
 "description": "Boîtier PC Phanteks Eclipse G500A DRGB Blanc, format Mid Tower, design haut de gamme avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
 "price": 149.95,
 "rating": 5,
 "brand": "Phanteks",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Phanteks NV5 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/NV5 Blanc.jpg",
 "description": "Boîtier PC Phanteks NV5 Blanc, format Mid Tower, design panoramique avec une excellente visibilité et une compatibilité ATX.",
 "price": 129.95,
 "rating": 4,
 "brand": "Phanteks",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Phanteks NV5 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/NV5 Noir.jpg",
 "description": "Boîtier PC Phanteks NV5 Noir, format Mid Tower, design panoramique avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 129.95,
 "rating": 4,
 "brand": "Phanteks",
 "ATX": "ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
 {
 "name": "Phanteks NV7 Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/NV7 Blanc.jpg",
 "description": "Boîtier PC Phanteks NV7 Blanc, format Full Tower, design haut de gamme avec une excellente gestion des câbles et une compatibilité E-ATX.",
 "price": 199.95,
 "rating": 5,
 "brand": "Phanteks",
 "ATX": "E-ATX",
 "COLOR": "Blanc",
 "availability": "green"
 },
 {
 "name": "Phanteks NV7 Noir",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/NV7 Noir.jpg",
 "description": "Boîtier PC Phanteks NV7 Noir, format Full Tower, design élégant avec une excellente ventilation et une compatibilité E-ATX.",
 "price": 199.95,
 "rating": 5,
 "brand": "Phanteks",
 "ATX": "E-ATX",
 "COLOR": "Noir",
 "availability": "green"
 },
    {
 "name": "Phanteks XT PRO ULTRA Blanc",
 "image": "/Website Beta/IMAGES/images composants/Boîtier/Phanteks/XT PRO ULTRA Blanc.jpg",
 "description": "Boîtier PC Phanteks XT PRO ULTRA Blanc, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
 "price": 119.95,
 "rating": 4,
 "brand": "Phanteks",
 "ATX": "ATX",
 "COLOR": "Blanc",
 "availability": "green"
    },
 {
   "name": "Xigmatek AQUA ULTRA AIR ARTIC",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUA ULTRA AIR ARTIC.jpg",
   "description": "Boîtier PC Xigmatek AQUA ULTRA AIR ARTIC, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek AQUA ULTRA AIR",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUA ULTRA AIR.jpg",
   "description": "Boîtier PC Xigmatek AQUA ULTRA AIR, format Mid Tower, design épuré avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 79.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek AQUA ULTRA",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUA ULTRA.jpg",
   "description": "Boîtier PC Xigmatek AQUA ULTRA, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 99.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek AQUA V AIR Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUA V AIR Noir.jpg",
   "description": "Boîtier PC Xigmatek AQUA V AIR Noir, format Mid Tower, design optimisé pour une excellente circulation d'air et une compatibilité ATX.",
   "price": 69.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek AQUA V Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUA V Blanc.jpg",
   "description": "Boîtier PC Xigmatek AQUA V Blanc, format Mid Tower, design élégant avec une excellente ventilation et une compatibilité ATX.",
   "price": 74.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek AQUA V Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUA V Noir.jpg",
   "description": "Boîtier PC Xigmatek AQUA V Noir, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 74.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek AQUARIUS PLUS ARGB Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUARIUS PLUS ARGB Blanc.jpg",
   "description": "Boîtier PC Xigmatek AQUARIUS PLUS ARGB Blanc, format Mid Tower, design moderne avec éclairage RGB intégré et une excellente ventilation, compatible ATX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek AQUARIUS PLUS ARGB Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/AQUARIUS PLUS ARGB Noir.jpg",
   "description": "Boîtier PC Xigmatek AQUARIUS PLUS ARGB Noir, format Mid Tower, design épuré avec éclairage RGB intégré et une excellente gestion thermique, compatible ATX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek Alphard M Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Alphard M Blanc.jpg",
   "description": "Boîtier PC Xigmatek Alphard M Blanc, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek Alphard M Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Alphard M Noir.jpg",
   "description": "Boîtier PC Xigmatek Alphard M Noir, format Mid Tower, design épuré avec une excellente ventilation et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek Alphard Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Alphard Noir.jpg",
   "description": "Boîtier PC Xigmatek Alphard Noir, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 99.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek Anubis Pro 4FX Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Anubis Pro 4FX Noir.jpg",
   "description": "Boîtier PC Xigmatek Anubis Pro 4FX Noir, format Mid Tower, design élégant avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 79.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek CUBI II Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/CUBI II Blanc.jpg",
   "description": "Boîtier PC Xigmatek CUBI II Blanc, format Mini Tower, design compact avec une excellente ventilation et une compatibilité Micro-ATX.",
   "price": 59.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "Micro",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek CUBI II Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/CUBI II Noir.jpg",
   "description": "Boîtier PC Xigmatek CUBI II Noir, format Mini Tower, design moderne avec une excellente gestion thermique et une compatibilité Micro-ATX.",
   "price": 59.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "Micro",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek CUBI M Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/CUBI M Blanc.jpg",
   "description": "Boîtier PC Xigmatek CUBI M Blanc, format Mini Tower, design compact avec une excellente gestion des câbles et une compatibilité Micro-ATX.",
   "price": 69.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "Micro",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek CUBI M Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/CUBI M Noir.jpg",
   "description": "Boîtier PC Xigmatek CUBI M Noir, format Mini Tower, design moderne avec une excellente ventilation et une compatibilité Micro-ATX.",
   "price": 69.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "Micro",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek DUKE Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/DUKE Noir.jpg",
   "description": "Boîtier PC Xigmatek DUKE Noir, format Mid Tower, design élégant avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek ENDORPHIN AIR V2 Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/ENDORPHIN AIR V2 Blanc.jpg",
   "description": "Boîtier PC Xigmatek ENDORPHIN AIR V2 Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
   "price": 99.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek ENDORPHIN AIR V2 Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/ENDORPHIN AIR V2 Noir.jpg",
   "description": "Boîtier PC Xigmatek ENDORPHIN AIR V2 Noir, format Mid Tower, design épuré avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 99.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek ENDORPHIN ULTRA Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/ENDORPHIN ULTRA Blanc.jpg",
   "description": "Boîtier PC Xigmatek ENDORPHIN ULTRA Blanc, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek ENDORPHIN ULTRA Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/ENDORPHIN ULTRA Noir.jpg",
   "description": "Boîtier PC Xigmatek ENDORPHIN ULTRA Noir, format Mid Tower, design élégant avec une excellente ventilation et une compatibilité ATX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek ENDORPHIN WD Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/ENDORPHIN WD Blanc.jpg",
   "description": "Boîtier PC Xigmatek ENDORPHIN WD Blanc, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 119.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek ENDORPHIN WD Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/ENDORPHIN WD Noir.jpg",
   "description": "Boîtier PC Xigmatek ENDORPHIN WD Noir, format Mid Tower, design épuré avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 119.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek GAMING Y PRO Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/GAMING Y PRO Blanc.jpg",
   "description": "Boîtier PC Xigmatek GAMING Y PRO Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek GAMING Y PRO Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/GAMING Y PRO Noir.jpg",
   "description": "Boîtier PC Xigmatek GAMING Y PRO Noir, format Mid Tower, design épuré avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek Gaming X",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Gaming X.jpg",
   "description": "Boîtier PC Xigmatek Gaming X, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 79.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek Gaming Z Pro",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Gaming Z Pro.jpg",
   "description": "Boîtier PC Xigmatek Gaming Z Pro, format Mid Tower, design élégant avec une excellente ventilation et une compatibilité ATX.",
   "price": 99.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek Hero II Air 3F",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Hero II Air 3F.jpg",
   "description": "Boîtier PC Xigmatek Hero II Air 3F, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek META Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/META Blanc.jpg",
   "description": "Boîtier PC Xigmatek META Blanc, format Mid Tower, design moderne avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek META Noir",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/META Noir.jpg",
   "description": "Boîtier PC Xigmatek META Noir, format Mid Tower, design épuré avec une excellente ventilation et une compatibilité ATX.",
   "price": 109.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek NYX AIR II",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/NYX AIR II.jpg",
   "description": "Boîtier PC Xigmatek NYX AIR II, format Mid Tower, design moderne avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 89.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek NYX II",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/NYX II.jpg",
   "description": "Boîtier PC Xigmatek NYX II, format Mid Tower, design élégant avec une excellente gestion des câbles et une compatibilité ATX.",
   "price": 99.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
 },
 {
   "name": "Xigmatek Oreo Blanc",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/Oreo Blanc.jpg",
   "description": "Boîtier PC Xigmatek Oreo Blanc, format Mid Tower, design moderne avec une excellente ventilation et une compatibilité ATX.",
   "price": 119.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Blanc",
   "availability": "green"
 },
 {
   "name": "Xigmatek VISION",
   "image": "/Website Beta/IMAGES/images composants/Boîtier/Xigmatek/VISION.jpg",
   "description": "Boîtier PC Xigmatek VISION, format Mid Tower, design élégant avec une excellente gestion thermique et une compatibilité ATX.",
   "price": 129.95,
   "rating": 4,
   "brand": "Xigmatek",
   "ATX": "ATX",
   "COLOR": "Noir",
   "availability": "green"
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
   const matchesATX = !ATXFilter.value || product.ATX === ATXFilter.value;
   const matchesCOLOR = !COLORFilter.value || product.COLOR === COLORFilter.value;
   const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
   return matchesBrand && matchesATX && matchesCOLOR && matchesSearch;
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

[brandFilter, ATXFilter, COLORFilter, searchBar].forEach(filter => {
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
