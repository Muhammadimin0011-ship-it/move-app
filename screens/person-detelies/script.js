let id  = window.location.href.slice(window.location.href.indexOf("=") + 1)
const API_KEY = "2c688a94a24cd6215037c4cce4825281"

async function getPersons(query) {

    try {

        const url =
            `https://api.themoviedb.org/3/search/person?query=${encodeURIComponent(query)}`;

        const res = await fetch(url, options);
        const data = await res.json();

        console.log(data);

        showPersons(data.results);

    } catch (error) {
        console.log("Person Error:", error);
    }
}


async function showPersons() {
    const box = document.getElementById("result")
    box.innerHTML = "";

    if (!persons || persons.length === 0) {
        box.innerHTML = "<h2 style='color:white'>Person not found</h2>";
        return;
    }

    persons.forEach((item) => {

        box.innerHTML += `
            <div class="movilCart">

                <img 
                    src="${item.profile_path
                ? MEDIAL_LINK + item.profile_path
                : "https://via.placeholder.com/300x450"
            }"
                >

                <h1>${item.name}</h1>

                <p>Popularity: ${item.popularity}</p>

            </div>
        `;
    });

}

