const input = document.getElementById("search-input")
const buton = document.getElementById("search-btn")
const API_KEY = "2c688a94a24cd6215037c4cce4825281";

async function getMovies(query) {

    const url =
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    const res = await fetch(url);

    const data = await res.json();

    console.log(data.results);

}

function searchMovie() {
    try {
        let res = getMovies(input.value)

    } catch (error) {
        console.log(error);

        alert("xatolik")
    }

}







//const API_KEY = "2c688a94a24cd6215037c4cce4825281"
//const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//
//
//async function getMovies() {
//    const res = await fetch(
//        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//    );
//    const data = await res.json();
//
//    console.log(data);
//
//}
//
//getMovies()
//
//function changeLocationToDetailScren(id) {
//    window.location.href = `/move/${id}`
//}