const form = document.getElementById("registration-form");
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const jourInput = document.getElementById("jour");
const moisInput = document.getElementById("mois");
const anneeInput = document.getElementById("annee");
const numeroRueInput = document.getElementById("numero-rue");
const nomRueInput = document.getElementById("nom-rue");
const codePostalInput = document.getElementById("code-postal");
const villeInput = document.getElementById("ville");
const addCourseButton = document.getElementById("add-course");
const coursesContainer = document.getElementById("courses-container");
const validCheckbox = document.getElementById("valid-checkbox");

// Validation de la date de naissance (jour, mois, année)
function validateDate() {
    const jour = parseInt(jourInput.value, 10);
    const mois = moisInput.value;
    const annee = anneeInput.value;

    // Vérification du jour
    if (jour < 1 || jour > 31 || isNaN(jour)) {
        jourInput.classList.add("error");
        document.getElementById("date-error").textContent = "Le jour doit être entre 1 et 31.";
        return false;
    }

    // Vérification du mois (utilisez votre tableau de moisOptions)
    const moisOptions = ["Janvier", "Février", /* ... autres mois ... */];
    if (!moisOptions.includes(mois)) {
        moisInput.classList.add("error");
        document.getElementById("date-error").textContent = "Le mois n'est pas valide.";
        return false;
    }

    // Vérification de l'année
    if (annee.length !== 4 || isNaN(annee)) {
        anneeInput.classList.add("error");
        document.getElementById("date-error").textContent = "L'année doit avoir 4 chiffres.";
        return false;
    }

    // Si tout est valide, retirez les classes d'erreur et effacez le message d'erreur
    jourInput.classList.remove("error");
    moisInput.classList.remove("error");
    anneeInput.classList.remove("error");
    document.getElementById("date-error").textContent = "";
    return true;
}

// Validation du mot de passe
function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Ajoutez ici la logique de validation du mot de passe
    // Assurez-vous que le mot de passe respecte les critères spécifiés et qu'il correspond à la confirmation.
}

// Gestionnaire d'événement pour le bouton "Ajouter une course"
addCourseButton.addEventListener("click", function () {
    // Ajoutez ici la logique pour créer un champ de course dynamique
    // dans le coursesContainer.
});

// Gestionnaire d'événement pour la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêcher la soumission par défaut

    // Ajoutez ici la logique de validation pour chaque champ du formulaire.
    // Appliquez les classes CSS appropriées et affichez les messages d'erreur si nécessaire.

    // Exemple pour afficher la checkbox verte :
    if (validationRéussie) {
        validCheckbox.checked = true;
    }
});