let id = window.location.href.slice(window.location.href.indexOf("=") + 1);
const MEDIAL_LINK = "https://media.themoviedb.org/t/p/w200";
const MEDIAL_BG = "https://media.themoviedb.org/t/p/w500";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4",
  },
};

async function getInfoDetailScreen(params) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options,
  )
    .then((res) => res.json())
    .then((res) => res);
}

(async function () {
  let result = document.getElementById("result");
  let info = await getInfoDetailScreen();
  console.log(info);

  result.innerHTML = `
<div class="movieDetail">

<img class="movieBg" src="${MEDIAL_BG + info["backdrop_path"]}" alt="">

<div class="overlay">

<div class="poster">
<img src="${MEDIAL_LINK + info["poster_path"]}" alt="">
</div>

<div class="movieInfo">

<h1>${info["title"]}</h1>

<p class="tagline">${info["tagline"]}</p>

<p class="desc">
${info["overview"]}
</p>

<div class="infoRow">

<div class="infoBox">
<h3>Release</h3>
<p>${info["release_date"]}</p>
</div>

<div class="infoBox">
<h3>Rating</h3>
<p>${info["vote_average"]}</p>
</div>

<div class="infoBox">
<h3>Runtime</h3>
<p>${info["runtime"]} min</p>
</div>

<div class="infoBox">
<h3>Status</h3>
<p>${info["status"]}</p>
</div>

</div>

<div class="genres">
${info.genres.map((item) => `<span>${item.name}</span>`).join("")}
</div>

</div>

</div>

</div>
`;
})();
