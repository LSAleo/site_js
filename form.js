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
const deleteCourseButton = document.getElementById("delete-course");
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
function estConfirmValide(){
    
    if (confirmPasswordInput !== passwordInput) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
}

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


/**************************** ADRESSE ****************************/


// Fonction pour vérifier si une chaîne contient uniquement des chiffres
function estUniquementChiffres(chaine) {
    return /^\d+$/.test(chaine);
}

// Fonction pour vérifier si une chaîne contient uniquement des lettres
function estUniquementLettres(chaine) {
    return /^[A-Za-z\s]+$/.test(chaine);
}

// Fonction pour vérifier si le code postal est composé de 5 chiffres
function estCodePostalValide(codePostal) {
    return /^\d{5}$/.test(codePostal);
}

// Fonction de gestionnaire d'événement pour la validation du numéro de rue
numeroRueInput.addEventListener('blur', function () {
    var numeroRueInput = this.value;
    var numeroRueError = document.getElementById('numero-rue-error');

    if (!estUniquementChiffres(numeroRueInput)) {
        numeroRueError.style.display = 'block';
    } else {
        numeroRueError.style.display = 'none';
    }
});

// Fonction de gestionnaire d'événement pour la validation du nom de rue
document.getElementById('nom-rue').addEventListener('blur', function () {
    var nomRueInput = this.value;
    var nomRueError = document.getElementById('nom-rue-error');

    if (!estUniquementLettres(nomRueInput)) {
        nomRueError.style.display = 'block';
    } else {
        nomRueError.style.display = 'none';
    }
});

// Fonction de gestionnaire d'événement pour la validation du code postal
document.getElementById('code-postal').addEventListener('blur', function () {
    var codePostalInput = this.value;
    var codePostalError = document.getElementById('code-postal-error');

    if (!estCodePostalValide(codePostalInput)) {
        codePostalError.style.display = 'block';
    } else {
        codePostalError.style.display = 'none';
    }
});

// Fonction de gestionnaire d'événement pour la validation de la ville
document.getElementById('ville').addEventListener('blur', function () {
    var villeInput = this.value;
    var villeError = document.getElementById('ville-error');

    if (!estUniquementLettres(villeInput)) {
        villeError.style.display = 'block';
    } else {
        villeError.style.display = 'none';
    }
});

/**************************** COURSE ****************************/

// Fonction pour ajouter un champ d'écriture
function ajouterChampEcriture() {
    const coursesContainer = document.getElementById('courses-container');

    // Créez un nouvel élément input de type texte
    const inputCourse = document.createElement('input');
    inputCourse.type = 'text';
    inputCourse.name = 'course'; // Vous pouvez attribuer un nom approprié ici

    // Ajoutez cet élément au conteneur
    coursesContainer.appendChild(inputCourse);
}

// Fonction pour supprimer le dernier champ d'écriture
function supprimerDernierChampEcriture() {
    const coursesContainer = document.getElementById('courses-container');
    const champsEcriture = coursesContainer.getElementsByTagName('input');

    // Vérifiez s'il y a des champs à supprimer
    if (champsEcriture.length > 0) {
        // Supprimez le dernier champ d'écriture
        coursesContainer.removeChild(champsEcriture[champsEcriture.length - 1]);
    }
}

// Ajoutez un gestionnaire d'événement pour le bouton "Ajouter une course"
document.getElementById('add-course').addEventListener('click', ajouterChampEcriture);

// Ajoutez un gestionnaire d'événement pour le bouton "Supprimer une course"
document.getElementById('delete-course').addEventListener('click', supprimerDernierChampEcriture);

/**************************** CHECKBOX ****************************/


// Fonction pour vérifier si le formulaire est valide
function estFormulaireValide() {
    /**************************** VALIDATION FORMULAIRE ****************************/

document.getElementById("bouton_submit").addEventListener('click', function () {
    const isNomValid = estUniquementLettres();
    const isPrenomValid = estUniquementLettres();
    const isEmailValid = estValideEmail();
    const isPasswordValid = estValideMotDePasse();
    const isConfirmPasswordValid = estConfirmValide();
    const isNumeroRueValid = estUniquementChiffres();
    const isNomRueValid = estUniquementLettres();   
    const isCodePostalValid = estCodePostalValide();
    const isVilleValid = validateVille();
    const isJourValide = estJourValide();
    const isMoisValide = estMoisValide();
    const isAnneeValide = estAnneeValide();
  
    if (
      isNomValid &&
      isPrenomValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isNumeroRueValid &&
      isNomRueValid &&
      isCodePostalValid &&
      isVilleValid &&
      isJourValide &&
      isMoisValide &&
      isAnneeValide
    ) {
      alert('Formulaire valide.');
      document.getElementById("form_valide").style.display = 'block';
    } else {
      alert('Le formulaire contient des erreurs. Veuillez les corriger avant de soumettre.');
      document.getElementById("form_valide").style.display = 'none';
    }
  });

    const messagesErreur = document.getElementsByClassName('error-message');
    for (const messageErreur of messagesErreur) {
        if (messageErreur.style.display === 'block') {
            return false;
        }
    }
    
    return true;
}

// Fonction pour mettre à jour l'affichage de l'indicateur de validation
function mettreAJourIndicateurValidation() {
    const validationIndicator = document.getElementById('form_valide');
    const validCheckbox = document.getElementById('valid-checkbox');
    const validLabel = document.getElementById('valid_label');

    if (estFormulaireValide()) {
        // Affichez l'indicateur de validation
        validationIndicator.style.display = 'block';
    } else {
        // Masquez l'indicateur de validation
        validationIndicator.style.display = 'none';
        validCheckbox.style.display = 'none';
        validLabel.style.display = 'none';
    }
}

// Écoutez les événements de soumission du formulaire et les événements d'entrée utilisateur pour mettre à jour l'indicateur de validation
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', mettreAJourIndicateurValidation);

const formInputs = myForm.querySelectorAll('input');
formInputs.forEach(input => {
    input.addEventListener('input', mettreAJourIndicateurValidation);
});