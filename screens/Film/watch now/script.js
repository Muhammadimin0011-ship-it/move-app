
const MEDIAL_LINK = "https://image.tmdb.org/t/p/w300";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer SENING_TOKENING"
    }
};

// Kino ma'lumotlarini olish
async function getInfo() {

    try {

        const res = await fetch(
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
            options
        );

        const data = await res.json();

        return data;

    } catch (error) {

        console.log("Error:", error);

    }
}

// Kino detail pagega o'tish
function setId(id) {

    window.location.href =
        `../../movie-detelies/index.html?id=${id}`;

}

// Kinolarni chiqarish
(async function () {

    const resultMovies = document.getElementById("Results");

    const data = await getInfo();

    const movies = data.results;

    console.log(movies);

    movies.forEach((item) => {

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

})();

