const input = document.getElementById("search-input");
const button = document.getElementById("search-btn");

const API_KEY = "2c688a94a24cd6215037c4cce4825281";

const MEDIAL_LINK = "https://image.tmdb.org/t/p/w300";

// ================= SEARCH MOVIES =================

async function getMovies(query) {
    try {

        const url =
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

        const res = await fetch(url);

        const data = await res.json();

        console.log(data);

        showMovies(data.results);

    } catch (error) {

        console.log(error);

    }
}

// ================= SHOW MOVIES =================

function showMovies(movies) {

    let resultMovies = document.getElementById("cards");

    resultMovies.innerHTML = "";

    movies.forEach((item) => {

        resultMovies.innerHTML += `

        <div onclick="setId(${item.id})" class="movilCart">

            <img 
            src="${item.poster_path
                ? MEDIAL_LINK + item.poster_path
                : 'https://via.placeholder.com/300x450'}" 
            alt=""
            >

            <h1>${item.original_title || item.title}</h1>

            <p>${item.release_date || "No date"}</p>

        </div>

        `;
    });
}

// ================= SEARCH BUTTON =================

function searchMovie() {

    if (input.value.trim() === "") {
        return;
    }

    getMovies(input.value);
}

button.addEventListener("click", searchMovie);

// ENTER BOSILGANDA SEARCH

input.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        searchMovie();

    }
});

// ================= TRENDING MOVIES =================

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY4OGE5NGEyNGNkNjIxNTAzN2M0Y2NlNDgyNTI4MSIsIm5iZiI6MTc3OTQ0OTI3MC4xODUsInN1YiI6IjZhMTAzZGI2YWE2MDU3ODA0MzU2MzljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._41LqI31b0nnQb7CPkRMlZyBGshwThWXi3zhVIas5bU",
    },
};

async function getInfo() {

    try {

        const res = await fetch(
            "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            options
        );

        const data = await res.json();

        console.log(data);

        showMovies(data.results);

    } catch (error) {

        console.log(error);

    }
}

getInfo();

// ================= DETAIL PAGE =================

function setId(id) {

    window.location.href =
        `screens/movie-detelies/index.html?id=${id}`;
}