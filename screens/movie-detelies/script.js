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

    <div class="darkOverlay"></div>

    <div class="container">

        <!-- POSTER -->

        <div class="posterBox">

            <img 
                src="${MEDIAL_LINK + info.poster_path}" 
                alt=""
            >

        </div>

        <!-- INFO -->

        <div class="content">

            <h1>
                ${info.title}
                <span>
                    (${info.release_date?.slice(0, 4)})
                </span>
            </h1>

            <div class="movieMeta">

                <span class="age">18</span>

                <p>
                    ${info.release_date}
                </p>

                <span>•</span>

                <p>
                    ${info.genres.map((g) => g.name).join(", ")}
                </p>

                <span>•</span>

                <p>
                    ${Math.floor(info.runtime / 60)}h 
                    ${info.runtime % 60}m
                </p>

            </div>

            <!-- SCORE -->

            <div class="scoreRow">

                <div class="scoreCircle">

                    <svg>
                        <circle cx="35" cy="35" r="30"></circle>

                        <circle 
                            class="progress"
                            cx="35" 
                            cy="35" 
                            r="30"
                            style="
                            stroke-dashoffset:
                            ${188 - (188 * info.vote_average) / 10};
                            "
                        ></circle>
                    </svg>

                    <div class="scoreText">
                        ${Math.floor(info.vote_average * 10)}%
                    </div>

                </div>

                <h3>Рейтинг</h3>

            </div>

            <!-- TAGLINE -->

            <p class="tagline">
                ${info.tagline || "No tagline"}
            </p>

            <!-- OVERVIEW -->

            <h2>Обзор</h2>

            <p class="overview">
                ${info.overview}
            </p>

        </div>

    </div>

</div>

`;
})();