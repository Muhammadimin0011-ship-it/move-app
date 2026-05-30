const MEDIAL_LINK = "https://media.themoviedb.org/t/p/w200";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4",
  },
};

function getInfo(params) {
  try {
    return fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options,
    )
      .then((res) => res.json())
      .then((res) => res);
  } catch (error) {
    alert(error);
  }
}

(async function (params) {
  let resultMovies = document.getElementById("trendingMovies");
  let data = await getInfo();
  let movies = data["results"];
  console.log(movies);
  movies.map((item) => {
    resultMovies.innerHTML += `<div onclick="setId(${item["id"]})"  class='movilCart'><img src="${MEDIAL_LINK + item["poster_path"]}" alt=""> <h6>${item["original_title"]}</h6> <p>${item["release_date"]}</p></div>`;
  });
})();

function setId(id) {
  window.location.href = `/popular/index.html?id=${id}`;
}

document.querySelector('.search-btn').addEventListener('click', function() {
    const from = document.getElementById('dateFrom').value;
    const to = document.getElementById('dateTo').value;
    
    alert(`Qidirilmoqda: ${from} dan ${to} gacha`);
});

// Kalendar belgisiga bosilganda inputga fokus berish
document.querySelectorAll('.calendar-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.target.previousElementSibling.focus();
    });
});
