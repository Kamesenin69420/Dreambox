const animeList = [
  { title: "One Piece", episodes: 1000, watched: 150 },
  { title: "Naruto", episodes: 700, watched: 500 }, 
  { title: "Highschool of the dead", episodes: 12, watched: 4 },
];

function displayAnimes() {
  const animeContainer = document.getElementById('anime-list');
  animeList.forEach(anime => {
    const animeDiv = document.createElement('div');
    animeDiv.classList.add('anime-item');
    animeDiv.innerHTML = `
      <h3>${anime.title}</h3>
      <p>Episodes: ${anime.episodes}</p>
      <p>Vu: ${anime.watched}</p>
    `;
    animeContainer.appendChild(animeDiv);
  });
}

displayAnimes();
