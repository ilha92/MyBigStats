function afficherNavigation() {
  sportNav.innerHTML = "";

  sports.forEach((sport) => {
    const bouton = document.createElement("button");
    bouton.textContent = sport.name;
    bouton.className = "secondary";
    bouton.addEventListener("click", () => afficherSport(sport.id));
    sportNav.appendChild(bouton);
  });
}

function afficherAccueil() {
  cacherErreur();
  changerSport(0);
  pageTitle.textContent = "Accueil";
  pageSubtitle.textContent = "Événements et sports disponibles";
  home.classList.remove("hidden");
  sportPage.classList.add("hidden");

  const cartes = sports.map((sport) => {
    const competition = sport.competition.name || "Compétition";
    const nombreAthletes = athletes.filter((athlete) => athlete.sport_id === sport.id).length;

    return `
      <article class="card">
        <h3>${sport.name}</h3>
        <p class="muted">${competition}</p>
        <p>${nombreAthletes} athlètes</p>
        <button type="button" onclick="afficherSport(${sport.id})">Voir le sport</button>
      </article>
    `;
  }).join("");

  const evenements = rencontres
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6)
    .map((rencontre) => `<div class="line">${texteRencontre(rencontre)}</div>`)
    .join("");

  home.innerHTML = `
    <div class="grid">${cartes}</div>
    <h2>Événements</h2>
    <div class="list">${evenements}</div>
  `;
}

function afficherSport(id) {
  const sport = sports.find((item) => item.id === id);

  if (!sport) {
    afficherErreur("Ce sport n'existe pas.");
    return;
  }

  cacherErreur();
  changerSport(id);
  changerOnglet("stats");

  pageTitle.textContent = sport.name;
  pageSubtitle.textContent = String(sport.competition.name || sport.governing_body);
  home.classList.add("hidden");
  sportPage.classList.remove("hidden");

  afficherOnglet();
  remplirPositions();
  remplirComparateur();
  afficherStats();
  afficherHistorique();
  afficherAthletes();
  afficherComparaison();
}

function afficherStats() {
  const sport = sportSelectionne();

  if (!sport) {
    return;
  }

  const listeAthletes = athletesDuSport();
  const listeEquipes = equipesDuSport();
  const listeRencontres = rencontresDuSport();
  const premiereStat = listeAthletes[0] ? Object.keys(listeAthletes[0].stats)[0] : "";
  const meilleur = premiereStat ? listeAthletes.slice().sort((a, b) => b.stats[premiereStat] - a.stats[premiereStat])[0] : null;

  statsTab.innerHTML = `
    <div class="stats">
      <div class="stat">Athlètes<strong>${listeAthletes.length}</strong></div>
      <div class="stat">Équipes<strong>${listeEquipes.length || "-"}</strong></div>
      <div class="stat">Rencontres<strong>${listeRencontres.length}</strong></div>
      <div class="stat">Durée<strong>${sport.match_duration_minutes} min</strong></div>
    </div>
    <div class="card">
      <h3>Meilleur sur ${libelle(premiereStat)}</h3>
      <p>${meilleur ? nomAthlete(meilleur) + " : " + meilleur.stats[premiereStat] : "Aucune donnée"}</p>
    </div>
  `;
}
