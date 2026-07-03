const api = "https://keligmartin.github.io/api/";

async function recupererJson<T>(fichier: string): Promise<T[]> {
  const reponse = await fetch(api + fichier);

  if (!reponse.ok) {
    throw new Error("Erreur avec " + fichier);
  }

  return reponse.json();
}

async function chargerDonnees() {
  const resultats = await Promise.all([
    recupererJson<Sport>("sports.json"),
    recupererJson<Athlete>("athletes.json"),
    recupererJson<Rencontre>("rencontres.json"),
    recupererJson<Team>("equipes.json")
  ]);

  sports = resultats[0];
  athletes = resultats[1];
  rencontres = resultats[2];
  teams = resultats[3];
}
