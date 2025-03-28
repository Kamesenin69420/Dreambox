const animeList = [
  { title: "One Piece", episodes: 1000, watched: 150 },
  { title: "Naruto", episodes: 700, watched: 500 }, 
  { title: "Highschool of the Dead",
    episodes: [
      { title: "Episode 1", watched: false },
      { title: "Episode 2", watched: false },
      { title: "Episode 3", watched: false },
      { title: "Episode 4", watched: false },
      { title: "Episode 5", watched: false },
      { title: "Episode 6", watched: false },
      { title: "Episode 7", watched: false },
      { title: "Episode 8", watched: false },
      { title: "Episode 9", watched: false },
      { title: "Episode 10", watched: false },
      { title: "Episode 11", watched: false },
      { title: "Episode 12", watched: false },
    ],
    image: "highschool-of-the-dead.jpg"},
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
