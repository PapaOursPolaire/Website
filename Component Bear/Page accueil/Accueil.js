// Début Playlist

document.addEventListener("DOMContentLoaded", () => {
  let currentAudio = null;
  let currentLoader = null;

  document.querySelectorAll(".loader").forEach(loader => {
      loader.addEventListener("click", function () {
          const audioSrc = this.getAttribute("data-src");

          if (currentAudio) {
              currentAudio.pause();
              currentAudio.currentTime = 0;
          }

          if (currentLoader) {
              currentLoader.querySelector(".loading")?.remove();
              const playButton = document.createElement("div");
              playButton.classList.add("play");
              currentLoader.appendChild(playButton);
          }

          currentAudio = new Audio(audioSrc);
          currentAudio.play();

          const playButton = this.querySelector(".play");
          if (playButton) playButton.remove();

          const loadingDiv = document.createElement("div");
          loadingDiv.classList.add("loading");

          for (let i = 0; i < 4; i++) {
              const loadBar = document.createElement("div");
              loadBar.classList.add("load");
              loadingDiv.appendChild(loadBar);
          }

          this.appendChild(loadingDiv);
          currentLoader = this;

          currentAudio.onended = () => {
              if (currentLoader) {
                  currentLoader.querySelector(".loading")?.remove();
                  const playButton = document.createElement("div");
                  playButton.classList.add("play");
                  currentLoader.appendChild(playButton);
              }
          };
      });
  });

  const toggleButton = document.querySelector(".toggle-button");
  const mainContainer = document.querySelector(".main");

  toggleButton.addEventListener("click", () => {
      mainContainer.classList.toggle("active");
  });
});

// Fin Playlist

// Fonction pour ajouter un PC vedette au panier
function addFeaturedPCToCart(pcName, pcImage, pcPrice, pcComponents) {
  const featuredPC = {
      name: pcName,
      image: pcImage,
      price: pcPrice,
      components: pcComponents,
      quantity: 1 // Par défaut, la quantité est de 1
  };

  // Récupérer les configurations existantes dans le localStorage
  let configurations = JSON.parse(localStorage.getItem("featuredPCs")) || [];

  // Ajouter le nouveau PC vedette à la liste
  configurations.push(featuredPC);

  // Enregistrer la mise à jour dans le localStorage
  localStorage.setItem("featuredPCs", JSON.stringify(configurations));

  // Mettre à jour l'affichage du panier
  displayConfigurations();
}

