function afficherHistorique() {
  const lignes = rencontresDuSport()
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((rencontre) => `<div class="line">${texteRencontre(rencontre)}</div>`)
    .join("");

  historyTab.innerHTML = `<div class="list">${lignes}</div>`;
}

function texteRencontre(rencontre) {
  const sport = sports.find((item) => item.id === rencontre.sport_id);
  const etape = rencontre.stage || rencontre.playoff_round || rencontre.card_position || "Rencontre";
  const titre = rencontre.type === "combat" ? texteCombat(rencontre) : texteMatch(rencontre);

  return `<strong>${rencontre.date}</strong> - ${sport?.name || ""} - ${etape}<br>${titre}<br><span class="muted">${rencontre.venue}</span>`;
}

function texteMatch(rencontre) {
  const domicile = nomEquipe(rencontre.home_team_id);
  const exterieur = nomEquipe(rencontre.away_team_id);
  return `${domicile} ${rencontre.home_score} - ${rencontre.away_score} ${exterieur}`;
}

function texteCombat(rencontre) {
  const combattant1 = athleteParId(rencontre.fighter1_id);
  const combattant2 = athleteParId(rencontre.fighter2_id);
  const gagnant = athleteParId(rencontre.winner_id);
  return `${combattant1} contre ${combattant2} - gagnant : ${gagnant}`;
}
