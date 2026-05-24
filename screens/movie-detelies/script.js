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
  let result = document.getElementById("results");
  let info = await getInfoDetailScreen();
  console.log(info);

  result.innerHTML = `

<div class="movieDetail">

    <img 
        class="movieBg" 
        src="${MEDIAL_BG + info.backdrop_path}" 
        alt=""
    >

    <div class="overlay">

        <div class="glass"></div>

        <!-- POSTER -->

        <div class="poster">

            <img 
                src="${MEDIAL_LINK + info.poster_path}" 
                alt=""
            >

        </div>

        <!-- INFO -->

        <div class="movieInfo">

            <div class="topInfo">

                <span class="movieType">
                    ${info.status}
                </span>

                <span class="movieRate">
                    ⭐ ${info.vote_average.toFixed(1)}
                </span>

            </div>

            <h1>
                ${info.title}
            </h1>

            <p class="tagline">
                ${info.tagline || "No tagline"}
            </p>

            <p class="desc">
                ${info.overview}
            </p>

            <!-- INFO BOXES -->

            <div class="infoRow">

                <div class="infoCard">
                    <h3>📅 Release</h3>
                    <p>${info.release_date}</p>
                </div>

                <div class="infoCard">
                    <h3>⏳ Runtime</h3>
                    <p>${info.runtime} min</p>
                </div>

                <div class="infoCard">
                    <h3>🌍 Language</h3>
                    <p>${info.original_language.toUpperCase()}</p>
                </div>

                <div class="infoCard">
                    <h3>🔥 Popularity</h3>
                    <p>${Math.floor(info.popularity)}</p>
                </div>

            </div>

            <!-- GENRES -->

            <div class="genres">

                ${info.genres
      .map(
        (item) =>
          `<span>${item.name}</span>`
      )
      .join("")}

            </div>

            <!-- BUTTONS -->

            <div class="buttons">

                <button class="watchBtn">
                    ▶ Watch Trailer
                </button>

                <button class="saveBtn">
                    + Save
                </button>

            </div>

        </div>

    </div>

</div>

`;;
})();