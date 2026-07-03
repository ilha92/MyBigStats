function installerEvenements() {
  document.querySelectorAll(".tab").forEach((bouton) => {
    bouton.addEventListener("click", () => {
      changerOnglet(bouton.dataset.tab || "stats");
      afficherOnglet();
    });
  });

  homeButton.addEventListener("click", afficherAccueil);
  searchInput.addEventListener("input", afficherAthletes);
  positionSelect.addEventListener("change", afficherAthletes);
  compareA.addEventListener("change", afficherComparaison);
  compareB.addEventListener("change", afficherComparaison);
}

async function lancerApplication() {
  try {
    await chargerDonnees();
    afficherNavigation();
    afficherAccueil();
    installerEvenements();
  } catch (erreur) {
    afficherErreur("Erreur API : les données ne sont pas disponibles.");
  }
}

lancerApplication();
