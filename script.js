const API_KEY = "2c688a94a24cd6215037c4cce4825281"
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`


async function getMovies() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const data = await res.json();

    console.log(data);
    
}

getMovies()
