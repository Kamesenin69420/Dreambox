const animeList = [
  {
    title: "Goblin Slayer",
    episodes: 12,
    watched: 0,
    image: "https://i.imgur.com/cVLnIpN_d.jpeg"
  },
  {
    title: "Cleavage",
    episodes: 2,
    watched: 2,
    image: "https://i.imgur.com/DJJ5UBJ.jpeg"
  },
   {
    title: "Interspecies Reviewer",
    episodes: 12,
    watched: 5,
    image: "https://i.imgur.com/G8H1ahP.jpeg"
  },
  {
    title: "Jimihen!! Jimiko wo Kaechau Jun Isei Kouyuu",
    episodes: 5,
    watched: 0,
    image: "  https://www.nautiljon.com/images/anime/00/15/mini/jimihen_jimiko_wo_kae_chau_jun_isei_kouyuu_9851.webp
"
  },
  {
    title: "Highschool of the Dead",
    episodes: 12,
    watched: 5,
 image: "highschool-of-the-dead-main.jpg"  }
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
