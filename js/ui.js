const sportNav = document.querySelector("#sportNav");
const message = document.querySelector("#message");
const pageTitle = document.querySelector("#pageTitle");
const pageSubtitle = document.querySelector("#pageSubtitle");
const home = document.querySelector("#home");
const sportPage = document.querySelector("#sportPage");
const statsTab = document.querySelector("#statsTab");
const historyTab = document.querySelector("#historyTab");
const athletesTab = document.querySelector("#athletesTab");
const searchInput = document.querySelector("#searchInput");
const positionSelect = document.querySelector("#positionSelect");
const athleteList = document.querySelector("#athleteList");
const compareA = document.querySelector("#compareA");
const compareB = document.querySelector("#compareB");
const compareResult = document.querySelector("#compareResult");
const homeButton = document.querySelector("#homeButton");

function afficherErreur(texte) {
  message.innerHTML = `<div class="error">${texte}</div>`;
}

function cacherErreur() {
  message.innerHTML = "";
}

function afficherOnglet() {
  document.querySelectorAll(".tab").forEach((bouton) => {
    const tab = bouton.dataset.tab;
    bouton.classList.toggle("active", tab === ongletActuel);
  });

  statsTab.classList.toggle("hidden", ongletActuel !== "stats");
  historyTab.classList.toggle("hidden", ongletActuel !== "history");
  athletesTab.classList.toggle("hidden", ongletActuel !== "athletes");
}
