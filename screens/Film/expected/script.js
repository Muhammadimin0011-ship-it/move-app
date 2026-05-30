const MEDIAL_LINK = "https://image.tmdb.org/t/p/w300";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY4OGE5NGEyNGNkNjIxNTAzN2M0Y2NlNDgyNTI4MSIsIm5iZiI6MTc3OTQ0OTI3MC4xODUsInN1YiI6IjZhMTAzZGI2YWE2MDU3ODA0MzU2MzljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._41LqI31b0nnQb7CPkRMlZyBGshwThWXi3zhVIas5bU"
    }
};










async function getInfo() {
    try {

        const sortBy =
            document.getElementById("sort-by-select")?.value ||
            "popularity.desc";

        const language =
            document.getElementById("lang-select")?.value || "";

        const score =
            document.getElementById("user-score-slider")?.value || 0;

        const votes =
            document.getElementById("user-votes-slider")?.value || 0;

        const dateFrom =
            document.getElementById("date-from")?.value || "";

        const dateTo =
            document.getElementById("date-to")?.value || "";

        const genres = [
            ...document.querySelectorAll(".genre-tag.active")
        ].map(item => item.dataset.id);

        let url =
            `https://api.themoviedb.org/3/discover/movie?` +
            `include_adult=false` +
            `&include_video=false` +
            `&language=en-US` +
            `&page=1` +
            `&sort_by=${sortBy}` +
            `&vote_average.gte=${score}` +
            `&vote_count.gte=${votes}`;

        if (genres.length) {
            url += `&with_genres=${genres.join(",")}`;
        }

        if (language) {
            url += `&with_original_language=${language}`;
        }

        if (dateFrom) {
            url += `&primary_release_date.gte=${dateFrom}`;
        }

        if (dateTo) {
            url += `&primary_release_date.lte=${dateTo}`;
        }

        const res = await fetch(url, options);

        const data = await res.json();

        return data;

    } catch (error) {

        console.log(error);

    }
}








document.querySelectorAll(".genre-tag").forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});









const scoreSlider =
    document.getElementById("user-score-slider");

const scoreText =
    document.getElementById("user-score-val");

scoreSlider?.addEventListener("input", () => {

    scoreText.textContent =
        scoreSlider.value;

});

const votesSlider =
    document.getElementById("user-votes-slider");

const votesText =
    document.getElementById("user-votes-val");

votesSlider?.addEventListener("input", () => {

    votesText.textContent =
        votesSlider.value;

});











document
    .getElementById("search-submit-btn")
    .addEventListener("click", loadMovies);











async function loadMovies() {

    const resultMovies =
        document.getElementById("Results");

    resultMovies.innerHTML = "";

    const data = await getInfo();

    const movies = data.results;

    movies.forEach(item => {

        resultMovies.innerHTML += `

        <div
            onclick="setId(${item.id})"
            class="movilCart"
        >

            <img
                src="${MEDIAL_LINK + item.poster_path}"
                alt="${item.original_title}"
            >

            <h1>${item.original_title}</h1>

            <p>${item.release_date}</p>

        </div>

        `;

    });

}




loadMovies();




console.log(document.getElementById("search-submit-btn"));
console.log(document.getElementById("Results"));
console.log(document.getElementById("sort-by-select"));