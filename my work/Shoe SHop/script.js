document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".animated-text");
    text.classList.add("typing-animation");
  });
  const button = document.querySelector(".expand-button");

  button.addEventListener("click", function () {
    window.scroll({
      top: 905,
      left: 10,
      behavior: "smooth",
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const itemCards = document.querySelectorAll(".item-card");
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      itemCards.forEach(function (card) {
        const itemName = card.querySelector(".item-name").innerText.toLowerCase();
        const itemCategory = card.querySelector(".item-category").innerText.toLowerCase();
  
        if (itemName.includes(searchTerm) || itemCategory.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  