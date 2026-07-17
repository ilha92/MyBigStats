function remplirComparateur() {
  const options = athletesDuSport()
    .map((athlete: PetitAthlete) => {
      return `<option value="${athlete.id}">${athlete.first_name} ${athlete.last_name}</option>`;
    })
    .join("");

  compareA.innerHTML = options;
  compareB.innerHTML = options;

  if (compareB.options.length > 1) {
    compareB.selectedIndex = 1;
  }
}

function afficherComparaison() {
  const athleteA = athletes.find(
    (athlete) => athlete.id === Number(compareA.value),
  );
  const athleteB = athletes.find(
    (athlete) => athlete.id === Number(compareB.value),
  );

  if (!athleteA || !athleteB) {
    compareResult.innerHTML = "";
    return;
  }

  if (athleteA.sport_id !== athleteB.sport_id) {
    afficherErreur("Les deux athlètes doivent être dans le même sport.");
    return;
  }

  // Sinon renvoie la comparaison
  cacherErreur();

  const getStats = Object.keys(athleteA.stats)
    .filter((cle) => athleteB.stats[cle] !== undefined)
    .slice(0, 5);

  compareResult.innerHTML = `
    <div class="card">
      <h3>${nomAthlete(athleteA)} vs ${nomAthlete(athleteB)}</h3>
      <table class="compare-table">
        <thead>
          <tr>
            <th>Statistique</th>
            <th>${nomAthlete(athleteA)}</th>
            <th>${nomAthlete(athleteB)}</th>
          </tr>
        </thead>
        <tbody>
          ${getStats.map((cle) => ligneTableau(cle, athleteA.stats[cle], athleteB.stats[cle])).join("")}
        </tbody>
      </table>

      <button id="chartButton" type="button">Afficher le camembert</button>

      <div id="chartBox" class="chart hidden">
        ${camembert(athleteA, athleteB, getStats)}
      </div>
    </div>
  `;

  const bouton = document.querySelector("#chartButton") as HTMLButtonElement;
  bouton.addEventListener("click", afficherOuCacherCamembert);
}

function ligneTableau(cle: string, valeurA: number, valeurB: number) {
  return `
    <tr>
      <td>${libelle(cle)}</td>
      <td>${valeurA}</td>
      <td>${valeurB}</td>
    </tr>
  `;
}

function camembert(athleteA: Athlete, athleteB: Athlete, getStats: string[]) {
  const totalA = totalStats(athleteA, getStats);
  const totalB = totalStats(athleteB, getStats);
  const total = totalA + totalB;
  const pourcentageA = total === 0 ? 50 : Math.round((totalA / total) * 100);
  const pourcentageB = 100 - pourcentageA;

  return `
    <h4>Camembert sur les stats du tableau</h4>
    <div class="pie-box">
      <div class="pie" style="background: conic-gradient(#16a34a 0 ${pourcentageA}%, #2563eb ${pourcentageA}% 100%)"></div>
      <div class="legend">
        <p><span class="green"></span>${nomAthlete(athleteA)} : ${pourcentageA}%</p>
        <p><span class="blue"></span>${nomAthlete(athleteB)} : ${pourcentageB}%</p>
      </div>
    </div>
  `;
}

function totalStats(athlete: Athlete, getStats: string[]) {
  return getStats.reduce((total, cle) => total + Number(athlete.stats[cle]), 0);
}

function afficherOuCacherCamembert() {
  const graphique = document.querySelector("#chartBox") as HTMLElement;
  const bouton = document.querySelector("#chartButton") as HTMLButtonElement;
  graphique.classList.toggle("hidden");

  if (graphique.classList.contains("hidden")) {
    bouton.textContent = "Afficher le camembert";
  } else {
    bouton.textContent = "Cacher le camembert";
  }
}
