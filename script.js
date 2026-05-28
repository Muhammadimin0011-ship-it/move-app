// ================= INPUTLAR =================

const input = document.getElementById("search-input");
const button = document.getElementById("search-btn");

// ================= API =================

// TMDB API KEY
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY4OGE5NGEyNGNkNjIxNTAzN2M0Y2NlNDgyNTI4MSIsIm5iZiI6MTc3OTQ0OTI3MC4xODUsInN1YiI6IjZhMTAzZGI2YWE2MDU3ODA0MzU2MzljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._41LqI31b0nnQb7CPkRMlZyBGshwThWXi3zhVIas5bU";

// Kino rasmlari uchun link
const MEDIAL_LINK = "https://image.tmdb.org/t/p/w300";






// ======================================================
// ================= SEARCH MOVIES ======================
// ======================================================

async function getMovies(query) {

    try {

        // SEARCH API
        const url =
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

        // API DAN MALUMOT OLISH
        const res = await fetch(url);

        // JSON FORMATGA O'TKAZISH
        const data = await res.json();

        console.log(data);

        // SEARCH NATIJALARINI CHIQARISH
        showMovies(data.results);

    } catch (error) {

        console.log("Search Error:", error);

    }
}

// ======================================================
// ================= SHOW MOVIES ========================
// ======================================================

function showMovies(movies) {

    // CARDS DIVNI OLISH
    let resultMovies = document.getElementById("cards");

    // ESKI CARDLARNI TOZALASH
    resultMovies.innerHTML = "";

    // AGAR KINO TOPILMASA
    if (movies.length === 0) {

        resultMovies.innerHTML = `
            <h2 style="color:white;">Movies not found</h2>
        `;

        return;
    }

    // HAR BIR KINONI CHIQARISH
    movies.forEach((item) => {

        resultMovies.innerHTML += `

        <div onclick="setId(${item.id})" class="movilCart">

            <img 
                src="${item.poster_path
                ? MEDIAL_LINK + item.poster_path
                : 'https://via.placeholder.com/300x450'}"
                alt="${item.title}"
            >

            <h1>${item.original_title || item.title}</h1>

            <p>${item.release_date || "No date"}</p>

        </div>

        `;
    });
}

// ======================================================
// ================= SEARCH BUTTON ======================
// ======================================================

function searchMovie() {

    // INPUT BO'SH BO'LSA RETURN
    if (input.value.trim() === "") {
        return;
    }

    // SEARCH FUNKSIYASINI ISHLATISH
    getMovies(input.value);
}

// BUTTON BOSILGANDA
button.addEventListener("click", searchMovie);

// ======================================================
// ================= ENTER SEARCH =======================
// ======================================================

input.addEventListener("keydown", function (e) {

    // ENTER BOSILSA SEARCH
    if (e.key === "Enter") {

        searchMovie();

    }
});

// ======================================================
// ================= TRENDING MOVIES ====================
// ======================================================

async function getTrendingMovies() {

    try {

        // TRENDING API
        const res = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );

        // JSON
        const data = await res.json();

        console.log(data);

        // TRENDING CARDLAR
        showMovies(data.results);

    } catch (error) {

        console.log("Trending Error:", error);

    }
}

// ======================================================
// ================= POPULAR MOVIES =====================
// ======================================================

function popularMovies(movies) {

    // POPULAR DIV
    let resultMovies = document.getElementById("popular");

    // TOZALASH
    resultMovies.innerHTML = "";

    // HAR BIR KINONI CHIQARISH
    movies.forEach((item) => {

        resultMovies.innerHTML += `

        <div onclick="setId(${item.id})" class="movilCart">

            <img 
                src="${item.poster_path
                ? MEDIAL_LINK + item.poster_path
                : 'https://via.placeholder.com/300x450'}"
                alt="${item.title}"
            >

            <h1>${item.original_title || item.title}</h1>

            <p>${item.release_date || "No date"}</p>

        </div>

        `;
    });
}

// ======================================================
// ================= GET POPULAR MOVIES =================
// ======================================================

async function getPopularMovies() {

    try {

        // POPULAR API
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        // JSON
        const data = await res.json();

        console.log(data);

        // POPULAR CARDLAR
        popularMovies(data.results);

    } catch (error) {

        console.log("Popular Error:", error);

    }
}

// ======================================================
// ================= DETAIL PAGE ========================
// ======================================================

function setId(id) {

    // DETAIL PAGEGA O'TISH
    window.location.href =
        `screens/movie-detelies/index.html?id=${id}`;
}

// ======================================================
// ================= PAGE LOAD ==========================
// ======================================================

// SAYT OCHILGANDA ISHLAYDI
window.addEventListener("DOMContentLoaded", () => {

    getTrendingMovies();

    getPopularMovies();

});