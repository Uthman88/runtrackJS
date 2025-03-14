const button = document.getElementById('montrerbutton');
const texte = document.getElementById('texte');

button.addEventListener("click", function() {
    const isHidden = texte.style.display === "none"; 
    texte.style.display = isHidden ? "block" : "none";
    button.textContent = isHidden ? "Cacher la citation" : "Afficher la citation";
});
