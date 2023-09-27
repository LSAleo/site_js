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
