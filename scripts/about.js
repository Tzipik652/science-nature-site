document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById("readMoreBtn");
  const extraContent = document.getElementById("extraContent");

  if (readMoreBtn && extraContent) {
    readMoreBtn.addEventListener("click", (e) => {
        readMoreBtn.style.display = "none";
        extraContent.style.display = "block";
        e.stopPropagation();
    });
  }
});
