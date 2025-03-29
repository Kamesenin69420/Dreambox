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
    image: "https://www.nautiljon.com/images/anime/00/15/jimihen_jimiko_wo_kae_chau_jun_isei_kouyuu_9851.webp"
  },
  {
    title: "Highschool of the Dead",
    episodes: 12,
    watched: 5,
 image: "highschool-of-the-dead-main.jpg"  },
    {
    title: "Isekai Meikyuu de Harem wo",
    episodes: 12,
    watched: 0,
    image: "https://www.nautiljon.com/images/anime/00/30/isekai_meikyuu_de_harem_wo_9903.webp"
  },
    {
    title: "Harem Camp!",
    episodes: 8,
    watched: 0,
    image: "https://www.nautiljon.com/images/anime/00/09/harem_camp_11390.webp"
  },
    {
    title: "Joshi Ochi! : 2-kai kara Onna no Ko ga... Futte kita!?",
    episodes: 9,
    watched: 0,
    image: "https://www.nautiljon.com/images/anime/00/86/joshi_ochi_2-kai_kara_onna_no_ko_ga_futte_kita_y_7968.webp"
  },
    {
    title: "Kagaku na Yatsura",
    episodes: 1,
    watched: 0,
    image: "https://www.nautiljon.com/images/anime/00/42/kagaku_na_yatsura_3824.webp"
  },
    {
    title: "1+2=Paradise",
    episodes: 2,
    watched: 0,
    image: "https://www.nautiljon.com/images/anime/00/82/1_2_paradise_3728.webp"
  },
    {
    title: "Showtime! Uta no Onee-san Datte Shitai",
    episodes: 8,
    watched: 0,
    image: "https://www.nautiljon.com/images/anime/00/91/showtime_uta_no_onee-san_datte_shitai_10619.webp"
  },
    {
    title: "Showtime! Uta no Onee-san Datte Shitai 2",
    episodes: 8,
    watched: 0,
    image: "https://www.nautiljon.com/images/anime/00/28/showtime_uta_no_onee-san_datte_shitai_2_10882.webp"
  }
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
