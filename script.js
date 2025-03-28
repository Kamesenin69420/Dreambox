const animeList = [
  {
    title: "One Piece",
    episodes: 1000,
    watched: 150,
    image: "one-piece-main.JPG"
  },
  {
    title: "Naruto",
    episodes: 700,
    watched: 500,
    image: "naruto-main.JPG"
  },
  {
    title: "Highschool of the Dead",
    episodes: 12,
    watched: 5,
image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Highschool_of_the_Dead_DVD.jpg"  }
];

function displayAnimes() {
  const animeContainer = document.getElementById('anime-list');
  animeContainer.innerHTML = ""; // On vide avant d'ajouter les animés

  animeList.forEach(anime => {
    const animeDiv = document.createElement('div');
    animeDiv.classList.add('anime-item');
    animeDiv.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}" class="anime-image">
      <h3>${anime.title}</h3>
      <p>Episodes: ${anime.episodes}</p>
      <p>Vu: ${anime.watched}</p>
    `;
    animeContainer.appendChild(animeDiv);
  });
}

displayAnimes();
