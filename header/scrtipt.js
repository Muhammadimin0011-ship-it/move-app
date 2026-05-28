document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".search_buttons .search");
  const closeButton = document.querySelector(".search_buttons .close");
  const searchBar = document.querySelector(".search_bar");

  if (searchButton && closeButton && searchBar) {
    searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      searchBar.classList.add("show");
      searchButton.classList.add("hide");
      closeButton.classList.remove("hide");
      const searchInput = document.querySelector("#search_v4");
      if (searchInput) searchInput.focus();
    });

    closeButton.addEventListener("click", (e) => {
      e.preventDefault();
      searchBar.classList.remove("show");
      closeButton.classList.add("hide");
      searchButton.classList.remove("hide");
    });
  }

  const searchForm = document.querySelector("#search_form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = document.querySelector("#search_v4").value;
      if (query.trim()) {
        alert(`Поиск: ${query}`);
      }
    });
  }

  const menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!link.parentElement.classList.contains("menu-item")) return;
      e.preventDefault();
      alert(`Переход: ${link.innerText}`);
    });
  });

  const loginBtn = document.querySelector(".primary li:nth-child(3) a");
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Форма входа (демо)");
    });
  }

  const signupBtn = document.querySelector(".primary li:nth-child(4) a");
  if (signupBtn) {
    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Регистрация нового аккаунта (демо)");
    });
  }

  const plusBtn = document.querySelector(".new_icon");
  if (plusBtn) {
    plusBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Добавить новый фильм или сериал");
    });
  }
});
