const api = "https://keligmartin.github.io/api/";

async function recupererJson(fichier) {
  const reponse = await fetch(api + fichier);

  if (!reponse.ok) {
    throw new Error("Erreur avec " + fichier);
  }

  return reponse.json();
}

async function chargerDonnees() {
  const resultats = await Promise.all([
    recupererJson("sports.json"),
    recupererJson("athletes.json"),
    recupererJson("rencontres.json"),
    recupererJson("equipes.json")
  ]);

  sports = resultats[0];
  athletes = resultats[1];
  rencontres = resultats[2];
  teams = resultats[3];
}
