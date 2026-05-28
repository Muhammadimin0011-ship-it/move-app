(function () {
  const joinBtn = document.getElementById("joinCommunityBtn");
  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      alert("Переход на страницу регистрации / вступления в сообщество (демо)");
    });
  }

  const copyrightPara = document.querySelector(".footer-copyright p");
  if (copyrightPara) {
    const currentYear = new Date().getFullYear();
    copyrightPara.innerHTML = `© ${currentYear} The Movie Database. Все права защищены.`;
  }

  const allLinks = document.querySelectorAll(".footer-col a");
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Переход: ${link.textContent} (демо-режим)`);
    });
  });
})();
