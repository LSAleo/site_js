document.addEventListener("DOMContentLoaded", function() {
    const filterSelect = document.getElementById("filter");
    const cards = document.querySelectorAll(".card");

    filterSelect.addEventListener("change", function() {
        const selectedCategories = filterSelect.value.split(' ');

        cards.forEach(card => {
            const categories = card.classList;
            if (selectedCategories.includes("tous") || selectedCategories.some(category => categories.contains(category))) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/***************************************  DEBUT COOKIES *****************************************/

document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookiePopup");
    const acceptButton = document.getElementById("acceptButton");

    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookie_rgpd");

    // If not, display the popup
    if (!hasAcceptedCookies) {
        cookiePopup.style.display = "block";
    }

    // Event listener for the accept button
    acceptButton.addEventListener("click", function () {
        // Set a cookie in the user's browser
        localStorage.setItem("cookie_rgpd", "true");

        // Hide the popup
        cookiePopup.style.display = "none";
    });
});

/***************************************  FIN COOKIES *****************************************/