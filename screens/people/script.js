const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY4OGE5NGEyNGNkNjIxNTAzN2M0Y2NlNDgyNTI4MSIsIm5iZiI6MTc3OTQ0OTI3MC4xODUsInN1YiI6IjZhMTAzZGI2YWE2MDU3ODA0MzU2MzljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._41LqI31b0nnQb7CPkRMlZyBGshwThWXi3zhVIas5bU"
    }
};

const movieId = 559;

async function getActors() {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            options
        );

        const data = await res.json();

        const actorsContainer = document.getElementById("actors");

        actorsContainer.innerHTML = data.cast
            .slice(0, 8)
            .map(actor => `
    <div class="actor-card">
      <img
        src="${actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : 'https://placehold.co/500x750?text=No+Image'}"
        alt="${actor.name}"
      >
      <h4>${actor.name}</h4>
      <p>${actor.character}</p>
    </div>
  `)
            .join("");

    } catch (error) {
        console.error(error);
    }
}

getActors();