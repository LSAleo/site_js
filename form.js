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

/**************************** NOM ET PRENOM ****************************/

// Fonction pour vérifier si une chaîne contient uniquement des lettres
function estUniquementLettres(chaine) {
    return /^[a-zA-Z]+$/.test(chaine);
}

// Fonction de gestionnaire d'événement pour la validation du nom
nomInput.addEventListener('blur', function () {
    var nomInput = this.value;
    var nomError = document.getElementById('nom-error');

    if (!estUniquementLettres(nomInput)) {
        nomError.style.display = 'block';
    } else {
        nomError.style.display = 'none';
    }
});

// Fonction de gestionnaire d'événement pour la validation du prénom
document.getElementById('prenom').addEventListener('blur', function () {
    var prenomInput = this.value;
    var prenomError = document.getElementById('prenom-error');

    if (!estUniquementLettres(prenomInput)) {
        prenomError.style.display = 'block';
    } else {
        prenomError.style.display = 'none';
    }
});

/**************************** MAIL, MDP ET CONFIRMATION MDP ****************************/

// Fonction pour vérifier si une adresse email est valide
function estValideEmail(email) {
    // Utilisez une expression régulière pour la validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour vérifier si un mot de passe répond aux critères requis
function estValideMotDePasse(motDePasse) {
    // Utilisez des expressions régulières pour vérifier les critères
    const majusculeRegex = /[A-Z]/;
    const minusculeRegex = /[a-z]/;
    const chiffreRegex = /[0-9]/;
    const caractereSpecialRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/;
    const longueurMinimale = 8;

    return (
        majusculeRegex.test(motDePasse) &&
        minusculeRegex.test(motDePasse) &&
        chiffreRegex.test(motDePasse) &&
        caractereSpecialRegex.test(motDePasse) &&
        motDePasse.length >= longueurMinimale
    );
}

// Fonction de gestionnaire d'événement pour la validation de l'email
emailInput.addEventListener('blur', function () {
    var emailInput = this.value;
    var emailError = document.getElementById('email-error');

    if (!estValideEmail(emailInput)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

// Fonction de gestionnaire d'événement pour la validation du mot de passe
passwordInput.addEventListener('blur', function () {
    var passwordInput = this.value;
    var passwordError = document.getElementById('password-error');

    if (!estValideMotDePasse(passwordInput)) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

// Fonction de gestionnaire d'événement pour la validation de la confirmation du mot de passe
confirmPasswordInput.addEventListener('blur', function () {
    var confirmPasswordInput = this.value;
    var passwordInput = document.getElementById('password').value;
    var confirmPasswordError = document.getElementById('confirm-password-error');

    if (confirmPasswordInput !== passwordInput) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
});

/**************************** DATE DE NAISSANCE ****************************/

// Fonction pour vérifier si le jour est un chiffre de 1 à 31
function estJourValide(jour) {
    const jourInt = parseInt(jour, 10);
    return !isNaN(jourInt) && jourInt >= 1 && jourInt <= 31;
}

// Fonction pour vérifier si le mois est valide
function estMoisValide(mois) {
    // Tableau des mois valides
    const moisValides = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
        'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    return moisValides.includes(mois);
}

// Fonction pour vérifier si l'année est un nombre de 4 caractères
function estAnneeValide(annee) {
    return /^\d{4}$/.test(annee);
}

// Remplir la liste déroulante des mois
const moisDropdown = document.getElementById('mois');
const moisValides = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
    'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

moisValides.forEach(function (mois) {
    const option = document.createElement('option');
    option.value = mois;
    option.textContent = mois;
    moisDropdown.appendChild(option);
});

// Fonction de gestionnaire d'événement pour la validation de la date de naissance
document.getElementById('jour').addEventListener('blur', function () {
    var jourInput = this.value;
    var dateError = document.getElementById('date-error');

    if (!estJourValide(jourInput)) {
        dateError.style.display = 'block';
    } else {
        dateError.style.display = 'none';
    }
});

document.getElementById('mois').addEventListener('blur', function () {
    var moisInput = this.value;
    var dateError = document.getElementById('date-error');

    if (!estMoisValide(moisInput)) {
        dateError.style.display = 'block';
    } else {
        dateError.style.display = 'none';
    }
});

document.getElementById('annee').addEventListener('blur', function () {
    var anneeInput = this.value;
    var dateError = document.getElementById('date-error');

    if (!estAnneeValide(anneeInput)) {
        dateError.style.display = 'block';
    } else {
        dateError.style.display = 'none';
    }
});







/*
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
    }else{

    }

    // Vérification du mois (utilisez votre tableau de moisOptions)
    const moisOptions = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const moisSelect = document.getElementById("mois");
for (let i = 0; i < moisOptions.length; i++) {
    const option = document.createElement("option");
    option.value = moisOptions[i];
    option.textContent = moisOptions[i];
    moisSelect.appendChild(option);
}

// Remplissage des options pour le champ de jour (de 1 à 31)
const jourSelect = document.getElementById("jour");
for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    jourSelect.appendChild(option);
}

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
    const isDateValid = validateDate();
    // Ajoutez ici la logique de validation pour chaque champ du formulaire.
    // Appliquez les classes CSS appropriées et affichez les messages d'erreur si nécessaire.

    // Exemple pour afficher la checkbox verte :
    if (isDateValid &&  autres champs valides) {
        validCheckbox.checked = true;
    }
});*/