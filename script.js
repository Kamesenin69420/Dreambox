const animeList = [
  {
    title: "Goblin Slayer",
    episodes: 12,
    image: "https://i.imgur.com/cVLnIpN_d.jpeg"
  },
  {
    title: "Cleavage",
    episodes: 2,
    image: "https://i.imgur.com/DJJ5UBJ.jpeg"
  },
  {
    title: "Interspecies Reviewer",
    episodes: 12,
    image: "https://i.imgur.com/G8H1ahP.jpeg"
  },
  {
    title: "Jimihen!! Jimiko wo Kaechau Jun Isei Kouyuu",
    episodes: 5,
    image: "https://www.nautiljon.com/images/anime/00/15/jimihen_jimiko_wo_kae_chau_jun_isei_kouyuu_9851.webp"
  },
  {
    title: "Highschool of the Dead",
    episodes: 12,
    image: "highschool-of-the-dead-main.jpg"  
  },
  {
    title: "Isekai Meikyuu de Harem wo",
    episodes: 12,
    image: "https://www.nautiljon.com/images/anime/00/30/isekai_meikyuu_de_harem_wo_9903.webp"
  },
  {
    title: "Harem Camp!",
    episodes: 8,
    image: "https://www.nautiljon.com/images/anime/00/09/harem_camp_11390.webp"
  },
  {
    title: "Joshi Ochi! : 2-kai kara Onna no Ko ga... Futte kita!?",
    episodes: 9,
    image: "https://www.nautiljon.com/images/anime/00/86/joshi_ochi_2-kai_kara_onna_no_ko_ga_futte_kita_y_7968.webp"
  },
  {
    title: "Kagaku na Yatsura",
    episodes: 1,
    image: "https://www.nautiljon.com/images/manga/00/10/kagaku_na_yatsura_4101.webp"
  },
  {
    title: "1+2=Paradise",
    episodes: 2,
    image: "https://www.nautiljon.com/images/anime/00/82/1_2_paradise_3728.webp"
  },
  {
    title: "Showtime! Uta no Onee-san Datte Shitai",
    episodes: 8,
    image: "https://www.nautiljon.com/images/anime/00/91/showtime_uta_no_onee-san_datte_shitai_10619.webp"
  },
  {
    title: "Showtime! Uta no Onee-san Datte Shitai 2",
    episodes: 8,
    image: "https://www.nautiljon.com/images/anime/00/28/showtime_uta_no_onee-san_datte_shitai_2_10882.webp"
  },
  {
    title: "Yoasobi Gurashi!",
    episodes: 8,
    image: "https://www.nautiljon.com/images/anime/00/59/yoasobi_gurashi_12695.webp"
  },
  {
    title: "Araiya-san! : Ore to Aitsu ga Onnayu de !?",
    episodes: 8,
    image: "https://www.nautiljon.com/images/anime/00/32/araiya-san_ore_to_aitsu_ga_onnayu_de_y_8523.webp"
  }
];
// Fonction pour récupérer le nombre d'épisodes vus depuis le stockage local
function getWatchedCount(animeTitle) {
  return localStorage.getItem(animeTitle) || 0;
}

function displayAnimes() {
  console.log("Affichage des animés...");
  console.log(animeList);

  const animeContainer = document.getElementById('anime-list');
  animeContainer.innerHTML = ""; 

  animeList.forEach(anime => {
    console.log(`Ajout de : ${anime.title}`);

   
    const animeDiv = document.createElement("div");
     animeDiv.classList.add("anime-item");
    
    const animeImage = document.createElement("img");
    animeImage.src = anime.image;
    animeImage.alt = anime.title;
    animeImage.classList.add("anime-image"); // Ajout de la classe ici !


    const animeTitle = document.createElement("h3");
    animeTitle.textContent = anime.title;

    // Quand on clique, on ouvre la page de l'animé
    animeDiv.addEventListener("click", () => {
      window.location.href = `episodes.html?anime=${encodeURIComponent(anime.title)}`;
    });

    // Ajout des éléments au conteneur
    animeDiv.appendChild(animeImage);
    animeDiv.appendChild(animeTitle);
    animeContainer.appendChild(animeDiv);
  });
}

console.log("animeList chargé :", animeList);

function loadEpisodesPage() {
  console.log("loadEpisodesPage() exécutée");
  
  const params = new URLSearchParams(window.location.search);
  const animeTitle = params.get("anime");
  console.log("Titre de l'animé récupéré :", animeTitle);

  if (!animeTitle) return;

  document.getElementById("anime-title").textContent = animeTitle;

  const anime = animeList.find(a => a.title === animeTitle);
  console.log("Animé trouvé :", anime);

  if (anime) {
    document.getElementById("total-episodes").textContent = anime.episodes;
    document.getElementById("watched-count").textContent = getWatchedCount(animeTitle);
  } else {
    console.log("❌ Animé non trouvé !");
  }
}


function increaseWatched() {
  const animeTitle = new URLSearchParams(window.location.search).get("anime");
  console.log("Augmentation du compteur pour : " + animeTitle); // Vérification
  
  let watched = parseInt(getWatchedCount(animeTitle), 10);
  const total = parseInt(document.getElementById("total-episodes").textContent, 10);
  
  if (watched < total) {
    watched++;
    localStorage.setItem(animeTitle, watched);
    document.getElementById("watched-count").textContent = watched;
  }
}

function decreaseWatched() {
  const animeTitle = new URLSearchParams(window.location.search).get("anime");
  console.log("Diminution du compteur pour : " + animeTitle); // Vérification

  let watched = parseInt(getWatchedCount(animeTitle), 10);
  if (watched > 0) {
    watched--;
    localStorage.setItem(animeTitle, watched);
    document.getElementById("watched-count").textContent = watched;
  }
}
displayAnimes();


  

