function remplirPositions() {
  const positions = athletesDuSport()
    .map(positionAthlete)
    .filter((position, index, tableau) => tableau.indexOf(position) === index)
    .sort();

  positionSelect.innerHTML = `<option value="">Toutes les positions</option>`;

  positions.forEach((position) => {
    const option = document.createElement("option");
    option.value = position;
    option.textContent = position;
    positionSelect.appendChild(option);
  });
}

function afficherAthletes() {
  filtresActuels = {
    texte: searchInput.value.toLowerCase(),
    position: positionSelect.value
  };

  const texte = filtresActuels.texte || "";
  const position = filtresActuels.position || "";

  const resultat = athletesDuSport().filter((athlete) => {
    const nom = nomAthlete(athlete).toLowerCase();
    const poste = positionAthlete(athlete);
    return nom.includes(texte) && (position === "" || poste === position);
  });

  athleteList.innerHTML = resultat.map(carteAthlete).join("");
}

function carteAthlete(athlete: Athlete) {
  const stats = Object.keys(athlete.stats)
    .slice(0, 4)
    .map((cle) => `<p>${libelle(cle)} : <strong>${athlete.stats[cle]}</strong></p>`)
    .join("");

  return `
    <article class="card">
      <h3>${nomAthlete(athlete)}</h3>
      <p class="muted">${positionAthlete(athlete)} - ${athlete.nationality}</p>
      <p>${nomEquipe(athlete.team_id)}</p>
      ${stats}
    </article>
  `;
}
