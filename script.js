document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".pair-card");
  cards.forEach(card => {
    card.classList.remove("active"); 
    card.addEventListener("click", function (e) {
      if (e.target.tagName === "SELECT") return;
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const radioInput = card.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.checked = true;
      }
    });
  });
});
