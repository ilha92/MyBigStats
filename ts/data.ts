let sports: Sport[] = [];
let athletes: Athlete[] = [];
let teams: Team[] = [];
let rencontres: Rencontre[] = [];
let sportActuel = 0;
let ongletActuel = "stats";
let filtresActuels: FiltresActuels = {};

function changerSport(id: number) {
  sportActuel = id;
}

function changerOnglet(onglet: string) {
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

function nomAthlete(athlete: Athlete) {
  const surnom = athlete.nickname ? ` "${athlete.nickname}"` : "";
  return athlete.first_name + surnom + " " + athlete.last_name;
}

function positionAthlete(athlete: Pick<Athlete, "position" | "weight_class">) {
  return athlete.position || athlete.weight_class || "Non précisé";
}

function nomEquipe(id: number | null | undefined) {
  const equipe = teams.find((item) => item.id === id);
  return equipe ? equipe.name : "Individuel";
}

function athleteParId(id?: number) {
  const athlete = athletes.find((item) => item.id === id);
  return athlete ? nomAthlete(athlete) : "Inconnu";
}

function libelle(cle: string) {
  return cle.replaceAll("_", " ");
}
