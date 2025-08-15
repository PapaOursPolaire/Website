const tableBody = document.querySelector("tbody");
const headers = document.querySelectorAll("thead th");
const brandFilter = document.querySelector("#brandFilter");
const diskFilter = document.querySelector("#diskFilter");
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
                "name": "Seagate BarraCuda 4 To (ST4000DM004)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 4 To (ST4000DM004).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 2 ans",
                "price": 109,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "4000",
                "availability": "green"
            },
            {
                "name": "WD_Black 3.5 pouces Gaming Hard Drive 6",
                "image": "/Website Beta/IMAGES/images composants/HDD/WD-Black/WD_Black 3.5 Gaming Hard Drive 6 To SATA 6Gbs.jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                "price": 299,
                "rating": 5,
                "brand": "WDB",
                "disk": "3",
                "GO": "6000",
                "availability": "red"
            },
            {
                "name": "Seagate BarraCuda 1 To (ST1000DM014)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 1 To (ST1000DM014).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 64 Mo - Garantie 2 ans",
                "price": 45,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "1000",
                "availability": "green"
            },
            {
                "name": "Seagate BarraCuda 1 To (ST1000LM048)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 1 To (ST1000LM048).jpg",
                "description": "Disque dur interne 2.5\" SATA 6Gb/s 5400 RPM 128 Mo - Garantie 2 ans",
                "price": 49,
                "rating": 4,
                "brand": "ST",
                "disk": "2",
                "GO": "1000",
                "availability": "green"
            },
            {
                "name": "Seagate BarraCuda 2 To (ST2000DM008)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 2 To (ST2000DM008).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 2 ans",
                "price": 69,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "2000",
                "availability": "green"
            },
            {
                "name": "Seagate BarraCuda 2 To (ST2000LM015)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 2 To (ST2000LM015).jpg",
                "description": "Disque dur interne 2.5\" SATA 6Gb/s 5400 RPM 128 Mo - Garantie 2 ans",
                "price": 79,
                "rating": 4,
                "brand": "ST",
                "disk": "2",
                "GO": "2000",
                "availability": "green"
            },
            {
                "name": "Seagate BarraCuda 3 To (ST3000DM007)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 3 To (ST3000DM007).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 2 ans",
                "price": 89,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "3000",
                "availability": "green"
            },
            {
                "name": "Seagate BarraCuda 4 To (ST4000DM004)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 4 To (ST4000DM004).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 2 ans",
                "price": 109,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "4000",
                "availability": "green"
            },
            {
                "name": "Seagate BarraCuda 6 To (ST6000DM003)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 6 To (ST6000DM003).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 2 ans",
                "price": 159,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "6000",
                "availability": "green"
            },
            {
                "name": "Seagate BarraCuda 8 To (ST8000DM004)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate BarraCuda 8 To (ST8000DM004).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 2 ans",
                "price": 199,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "8000",
                "availability": "green"
            },
            {
                "name": "Seagate Exos 7E10 3.5 HDD 8 To (ST8000NM018B)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate Exos 7E10 3.5 HDD 8 To (ST8000NM018B).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 299,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "8000",
                "availability": "green"
            },
            {
                "name": "Seagate Exos X18 12 To (ST12000NM000J)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate Exos X18 12 To (ST12000NM000J).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 399,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "12000",
                "availability": "green"
            },
            {
                "name": "Seagate Exos X20 HDD 20 To (ST20000NM007DN)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate Exos X20 HDD 20 To (ST20000NM007DN).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 599,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "20000",
                "availability": "green"
            },
            {
                "name": "Seagate Firecuda 8 To",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate Firecuda 8 To.jpg",
                "description": "Disque dur hybride interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 249,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "8000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 1 To (ST1000VN008)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 1 To (ST1000VN008).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5900 RPM 64 Mo - Garantie 3 ans",
                "price": 59,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "1000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 10 To (ST10000VN000)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 10 To (ST10000VN000).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                "price": 349,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "10000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 12 To (ST12000VN0008)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 12 To (ST12000VN0008).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                "price": 449,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "12000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 2 To (ST2000VN003)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 2 To (ST2000VN003).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5900 RPM 64 Mo - Garantie 3 ans",
                "price": 89,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "2000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 3 To (ST3000VN006)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 3 To (ST3000VN006).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5900 RPM 64 Mo - Garantie 3 ans",
                "price": 109,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "3000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 4 To (ST4000VN006)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 4 To (ST4000VN006).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5900 RPM 64 Mo - Garantie 3 ans",
                "price": 129,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "4000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 6 To (ST6000VN006)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 6 To (ST6000VN006).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                "price": 199,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "6000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 8 To (ST8000VN002)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 8 To (ST8000VN002).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                "price": 249,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "8000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf 8 To (ST8000VN004)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf 8 To (ST8000VN004).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                "price": 259,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "8000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 10 To (ST10000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 10 To (ST10000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 379,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "10000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 12 To (ST12000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 12 To (ST12000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 459,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "12000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 16 To (ST16000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 16 To (ST16000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 599,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "16000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 18 To (ST18000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 18 To (ST18000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 699,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "18000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 2 To (ST2000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 2 To (ST2000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 99,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "2000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 20 To (ST20000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 20 To (ST20000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 799,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "20000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 22 To (ST22000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 22 To (ST22000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 899,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "22000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 24 To (ST24000NT002)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 24 To (ST24000NT002.jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 999,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "24000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 4 To (ST4000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 4 To (ST4000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 149,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "4000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 6 To (ST6000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 6 To (ST6000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 229,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "6000",
                "availability": "green"
            },
            {
                "name": "Seagate IronWolf Pro 8 To (ST8000NT001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate IronWolf Pro 8 To (ST8000NT001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 299,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "8000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk 2 To",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk 2 To.jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5900 RPM 64 Mo - Garantie 3 ans",
                "price": 79,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "2000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk 3 To (ST3000VX015)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk 3 To (ST3000VX015).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 5900 RPM 64 Mo - Garantie 3 ans",
                "price": 99,
                "rating": 4,
                "brand": "ST",
                "disk": "3",
                "GO": "3000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk 6 To (ST6000VX009)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk 6 To (ST6000VX009).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                "price": 199,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "6000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk AI 10 To (ST10000VE001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk AI 10 To (ST10000VE001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 349,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "10000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk AI 12 To (ST12000VE001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk AI 12 To (ST12000VE001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 449,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "12000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk AI 20 To (ST20000VE002)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk AI 20 To (ST20000VE002).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 699,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "20000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk AI 24 To (ST24000VE002)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk AI 24 To (ST24000VE002).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 799,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "24000",
                "availability": "green"
            },
            {
                "name": "Seagate SkyHawk AI 8 To (ST8000VE001)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Seagate/Seagate SkyHawk AI 8 To (ST8000VE001).jpg",
                "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                "price": 299,
                "rating": 5,
                "brand": "ST",
                "disk": "3",
                "GO": "8000",
                "availability": "green"
            },
            {
                "name": "Toshiba L200 1 To (bulk)",
                "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba L200 1 To (bulk).jpg",
                "description": "Disque dur interne 2.5\" SATA 6Gb/s 5400 RPM 128 Mo - Garantie 2 ans",
                "price": 49,
                "rating": 4,
                "brand": "Toshiba",
                "disk": "2",
                "GO": "1000",
                "availability": "green"
            },
     {
         "name": "Toshiba L200 2 To (bulk)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba L200 2 To (bulk).jpg",
         "description": "Disque dur interne 2.5\" SATA 6Gb/s 5400 RPM 128 Mo - Garantie 2 ans",
         "price": 69,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "2",
         "GO": "2000",
         "availability": "green"
     },
     {
         "name": "Toshiba N300 12 To",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba N300 12 To.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
         "price": 399,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "12000",
         "availability": "green"
     },
     {
         "name": "Toshiba N300 14 To",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba N300 14 To.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
         "price": 499,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "14000",
         "availability": "green"
     },
     {
         "name": "Toshiba N300 16 To (HDWG51GUZSVA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba N300 16 To (HDWG51GUZSVA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
         "price": 599,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "16000",
         "availability": "green"
     },
     {
         "name": "Toshiba N300 16 To",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba N300 16 To.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
         "price": 599,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "16000",
         "availability": "green"
     },
     {
         "name": "Toshiba N300 20 To (HDWG62AUZSVA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba N300 20 To (HDWG62AUZSVA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
         "price": 799,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "20000",
         "availability": "green"
     },
     {
         "name": "Toshiba P300 4 To (Bulk)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba P300 4 To (Bulk).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 2 ans",
         "price": 109,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "4000",
         "availability": "green"
     },
     {
         "name": "Toshiba S300 1 To HDWV110UZSVA",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba S300 1 To HDWV110UZSVA.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 2 ans",
         "price": 59,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "1000",
         "availability": "green"
     },
     {
         "name": "Toshiba S300 2 To HDWT720UZSVA",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba S300 2 To HDWT720UZSVA.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 2 ans",
         "price": 89,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "2000",
         "availability": "green"
     },
     {
         "name": "Toshiba S300 4 To HDWT840UZSVA",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba S300 4 To HDWT840UZSVA.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 2 ans",
         "price": 129,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "4000",
         "availability": "green"
     },
     {
         "name": "Toshiba S300 6 To HDWT860UZSVA",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba S300 6 To HDWT860UZSVA.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 2 ans",
         "price": 179,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "6000",
         "availability": "green"
     },
     {
         "name": "Toshiba X300 10 To (HDWR71AUZSVA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba X300 10 To (HDWR71AUZSVA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
         "price": 349,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "10000",
         "availability": "green"
     },
     {
         "name": "Toshiba X300 4 To (HDWR440UZSVA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba X300 4 To (HDWR440UZSVA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 3 ans",
         "price": 129,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "4000",
         "availability": "green"
     },
     {
         "name": "Toshiba X300 4 To (HDWR740EZSTA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba X300 4 To (HDWR740EZSTA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 3 ans",
         "price": 129,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "4000",
         "availability": "green"
     },
     {
         "name": "Toshiba X300 4 To (HDWR740UZSVA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba X300 4 To (HDWR740UZSVA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 3 ans",
         "price": 129,
         "rating": 4,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "4000",
         "availability": "green"
     },
     {
         "name": "Toshiba X300 6 To (HDWR760EZSTA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba X300 6 To (HDWR760EZSTA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 3 ans",
         "price": 199,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "6000",
         "availability": "green"
     },
     {
         "name": "Toshiba X300 8 To (HDWR480UZSVA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba X300 8 To (HDWR480UZSVA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 3 ans",
         "price": 249,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "8000",
         "availability": "green"
     },
     {
         "name": "Toshiba X300 8 To (HDWR780UZSVA)",
         "image": "/Website Beta/IMAGES/images composants/HDD/Toshiba/Toshiba X300 8 To (HDWR780UZSVA).jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 3 ans",
         "price": 249,
         "rating": 5,
         "brand": "Toshiba",
         "disk": "3",
         "GO": "8000",
         "availability": "green"
     },
     {
         "name": "WD_Black 3.5 Gaming Hard Drive 10 To SATA 6Gbs",
         "image": "/Website Beta/IMAGES/images composants/HDD/WD-Black/WD_Black 3.5 Gaming Hard Drive 10 To SATA 6Gbs.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
         "price": 399,
         "rating": 5,
         "brand": "WDB",
         "disk": "3",
         "GO": "10000",
         "availability": "green"
     },
     {
         "name": "WD_Black 3.5 Gaming Hard Drive 2 To SATA 6Gbs",
         "image": "/Website Beta/IMAGES/images composants/HDD/WD-Black/WD_Black 3.5 Gaming Hard Drive 2 To SATA 6Gbs.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 64 Mo - Garantie 5 ans",
         "price": 99,
         "rating": 4,
         "brand": "WDB",
         "disk": "3",
         "GO": "2000",
         "availability": "green"
     },
     {
         "name": "WD_Black 3.5 Gaming Hard Drive 6 To SATA 6Gbs",
         "image": "/Website Beta/IMAGES/images composants/HDD/WD-Black/WD_Black 3.5 Gaming Hard Drive 6 To SATA 6Gbs.jpg",
         "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
         "price": 299,
         "rating": 5,
         "brand": "WDB",
         "disk": "3",
         "GO": "6000",
         "availability": "green"
     },
     {
         "name": "WD_Black Mobile 1 To",
         "image": "/Website Beta/IMAGES/images composants/HDD/WD-Black/WD_Black Mobile 1 To.jpg",
         "description": "Disque dur externe 2.5\" USB 3.0 5400 RPM - Garantie 3 ans",
         "price": 69,
         "rating": 4,
         "brand": "WDB",
         "disk": "2",
         "GO": "1000",
         "availability": "green"
     },
             {
                 "name": "Western Digital Ultrastar DC HA210 1 To (1W10001)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HA210 1 To (1W10001).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 89,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "1000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HA210 2 To (1W10002)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HA210 2 To (1W10002).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 129,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "2000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC310 4 To (0B35950)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC310 4 To (0B35950).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC310 4 To (0B36040)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC310 4 To (0B36040).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC310 4 To (0B36048)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC310 4 To (0B36048).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC310 6 To (0B36039)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC310 6 To (0B36039).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 299,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "6000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC310 6 To (0B36047)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC310 6 To (0B36047).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 299,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "6000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC320 8 To (0B36400)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC320 8 To (0B36400).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 399,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "8000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC320 8 To (0B36404)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC320 8 To (0B36404).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 399,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "8000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC330 10 To (0B42266)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC330 10 To (0B42266).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 499,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "10000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC520 12 To (0F30146)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC520 12 To (0F30146).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 599,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "12000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC550 16 To (0F38462)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC550 16 To (0F38462).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 799,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "16000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC550 18 To (0F38353)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC550 18 To (0F38353).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 899,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "18000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC550 18 To (0F38459)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC550 18 To (0F38459).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 899,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "18000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital Ultrastar DC HC570 22 To (0F48155)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital Ultrastar DC HC570 22 To (0F48155).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 1099,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "22000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Blue 2 To SATA 6Gbs 64 Mo",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Blue 2 To SATA 6Gbs 64 Mo.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 64 Mo - Garantie 2 ans",
                 "price": 79,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "2000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Blue 2 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Blue 2 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 64 Mo - Garantie 2 ans",
                 "price": 79,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "2000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Blue 4 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Blue 4 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 64 Mo - Garantie 2 ans",
                 "price": 109,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Blue 6 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Blue 6 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 64 Mo - Garantie 2 ans",
                 "price": 159,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "6000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Blue Desktop 1 To SATA 6Gbs 64 Mo",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Blue Desktop 1 To SATA 6Gbs 64 Mo.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 64 Mo - Garantie 2 ans",
                 "price": 49,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "1000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Blue Mobile 1 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Blue Mobile 1 To.jpg",
                 "description": "Disque dur externe 2.5\" USB 3.0 5400 RPM - Garantie 2 ans",
                 "price": 59,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "2",
                 "GO": "1000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Blue Mobile 2 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Blue Mobile 2 To.jpg",
                 "description": "Disque dur externe 2.5\" USB 3.0 5400 RPM - Garantie 2 ans",
                 "price": 89,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "2",
                 "GO": "2000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 10 To (WD102KRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 10 To (WD102KRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 399,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "10000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 12 To (WD121KRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 12 To (WD121KRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 499,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "12000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 16 To (WD161KRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 16 To (WD161KRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 699,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "16000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 18 To (WD181KRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 18 To (WD181KRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 799,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "18000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 20 To (WD202KRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 20 To (WD202KRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 999,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "20000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 22 To (WD221KRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 22 To (WD221KRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 1099,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "22000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 24 To (WD241KRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 24 To (WD241KRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 1199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "24000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 4 To (WD4004FRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 4 To (WD4004FRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 6 To (WD6003FRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 6 To (WD6003FRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 299,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "6000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Gold 8 To (WD8005FRYZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Gold 8 To (WD8005FRYZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 399,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "8000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Purple 1 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Purple 1 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 64 Mo - Garantie 3 ans",
                 "price": 59,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "1000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Purple 2 To (WD23PURZ)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Purple 2 To (WD23PURZ).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 64 Mo - Garantie 3 ans",
                 "price": 89,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "2000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Purple 4 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Purple 4 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 64 Mo - Garantie 3 ans",
                 "price": 129,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Purple Pro 10 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Purple Pro 10 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 349,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "10000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Purple Pro 12 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Purple Pro 12 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 449,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "12000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Purple Pro 18 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Purple Pro 18 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 699,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "18000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Plus 10 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Plus 10 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                 "price": 349,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "10000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Plus 12 To SATA 6Gbs",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Plus 12 To SATA 6Gbs.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 3 ans",
                 "price": 449,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "12000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Plus 2 To SATA",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Plus 2 To SATA.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 64 Mo - Garantie 3 ans",
                 "price": 89,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "2000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Plus 4 To 256 Mo",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Plus 4 To 256 Mo.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 3 ans",
                 "price": 129,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Plus 6 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Plus 6 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 3 ans",
                 "price": 199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "6000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Plus 8 To SATA 6Gbs Cache 256 Mo",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Plus 8 To SATA 6Gbs Cache 256 Mo.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 5400 RPM 256 Mo - Garantie 3 ans",
                 "price": 249,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "8000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 10 To SATA 6Gbs (WD103KFBX)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 10 To SATA 6Gbs (WD103KFBX).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 399,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "10000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 10 To SATA 6Gbs",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 10 To SATA 6Gbs.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 399,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "10000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 12 To SATA 6Gbs",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 12 To SATA 6Gbs.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 499,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "12000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 14 To SATA 6Gbs",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 14 To SATA 6Gbs.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 599,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "14000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 16 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 16 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 699,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "16000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 18 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 18 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 799,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "18000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 2 To SATA 6Gbs",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 2 To SATA 6Gbs.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 129,
                 "rating": 4,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "2000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 4 To SATA 6Gbs",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 4 To SATA 6Gbs.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 4 To",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 4 To.jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 128 Mo - Garantie 5 ans",
                 "price": 199,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "4000",
                 "availability": "green"
             },
             {
                 "name": "Western Digital WD Red Pro 8 To SATA 6Gbs (WD8005FFBX)",
                 "image": "/Website Beta/IMAGES/images composants/HDD/Western Digital/Western Digital WD Red Pro 8 To SATA 6Gbs (WD8005FFBX).jpg",
                 "description": "Disque dur interne 3.5\" SATA 6Gb/s 7200 RPM 256 Mo - Garantie 5 ans",
                 "price": 299,
                 "rating": 5,
                 "brand": "Western Digital",
                 "disk": "3",
                 "GO": "8000",
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
        const matchesDisk = !diskFilter.value || product.disk === diskFilter.value;
        const matchesGO = !GOFilter.value || product.GO === GOFilter.value;
        const matchesSearch = !searchBar.value || product.name.toLowerCase().includes(searchBar.value.toLowerCase());
        return matchesBrand && matchesDisk && matchesGO && matchesSearch;
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

[brandFilter, diskFilter, GOFilter, searchBar].forEach(filter => {
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
      
        localStorage.setItem("selectedHDD", JSON.stringify(selectedProducts));

        window.location.href = "/Website Beta/Page principale/Configurateur PC.html";
    } else {
        alert("Veuillez sélectionner un disque dur HDD avant de valider.");
    }
});