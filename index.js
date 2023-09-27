document.addEventListener("DOMContentLoaded", function() {
    const filterSelect = document.getElementById("filter");
    const cards = document.querySelectorAll(".card");

    filterSelect.addEventListener("change", function() {
        const selectedCategory = filterSelect.value;

        cards.forEach(card => {
            const categories = card.classList;
            if (selectedCategory === "tous" || categories.contains(selectedCategory)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
