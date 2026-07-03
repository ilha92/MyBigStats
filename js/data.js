let sports = [];
let athletes = [];
let teams = [];
let rencontres = [];
let sportActuel = 0;
let ongletActuel = "stats";
let filtresActuels = {};

function changerSport(id) {
  sportActuel = id;
}

function changerOnglet(onglet) {
  ongletActuel = onglet;
}

function sportSelectionne() {
  return sports.find((sport) => sport.id === sportActuel);
}

function athletesDuSport() {
  return athletes.filter((athlete) => athlete.sport_id === sportActuel);
}

function equipesDuSport() {
  return teams.filter((team) => team.sport_id === sportActuel);
}

function rencontresDuSport() {
  return rencontres.filter((rencontre) => rencontre.sport_id === sportActuel);
}

function nomAthlete(athlete) {
  const surnom = athlete.nickname ? ` "${athlete.nickname}"` : "";
  return athlete.first_name + surnom + " " + athlete.last_name;
}

function positionAthlete(athlete) {
  return athlete.position || athlete.weight_class || "Non précisé";
}

function nomEquipe(id) {
  const equipe = teams.find((item) => item.id === id);
  return equipe ? equipe.name : "Individuel";
}

function athleteParId(id) {
  const athlete = athletes.find((item) => item.id === id);
  return athlete ? nomAthlete(athlete) : "Inconnu";
}

function libelle(cle) {
  return cle.replaceAll("_", " ");
}
