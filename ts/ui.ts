const sportNav = document.querySelector("#sportNav") as HTMLElement;
const message = document.querySelector("#message") as HTMLElement;
const pageTitle = document.querySelector("#pageTitle") as HTMLElement;
const pageSubtitle = document.querySelector("#pageSubtitle") as HTMLElement;
const home = document.querySelector("#home") as HTMLElement;
const sportPage = document.querySelector("#sportPage") as HTMLElement;
const statsTab = document.querySelector("#statsTab") as HTMLElement;
const historyTab = document.querySelector("#historyTab") as HTMLElement;
const athletesTab = document.querySelector("#athletesTab") as HTMLElement;
const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
const positionSelect = document.querySelector("#positionSelect") as HTMLSelectElement;
const athleteList = document.querySelector("#athleteList") as HTMLElement;
const compareA = document.querySelector("#compareA") as HTMLSelectElement;
const compareB = document.querySelector("#compareB") as HTMLSelectElement;
const compareResult = document.querySelector("#compareResult") as HTMLElement;
const homeButton = document.querySelector("#homeButton") as HTMLButtonElement;

function afficherErreur(texte: string) {
  message.innerHTML = `<div class="error">${texte}</div>`;
}

function cacherErreur() {
  message.innerHTML = "";
}

function afficherOnglet() {
  document.querySelectorAll(".tab").forEach((bouton) => {
    const tab = (bouton as HTMLButtonElement).dataset.tab;
    bouton.classList.toggle("active", tab === ongletActuel);
  });

  statsTab.classList.toggle("hidden", ongletActuel !== "stats");
  historyTab.classList.toggle("hidden", ongletActuel !== "history");
  athletesTab.classList.toggle("hidden", ongletActuel !== "athletes");
}
