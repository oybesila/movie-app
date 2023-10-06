const elMovie = document.querySelector("#movies");
const ellnput = document.querySelector("#input");
const elButton = document.querySelector("#button");
const elLoading = document.querySelector("#loading");

const showLoading = () => {
  elLoading.style.display = "block";
};

const hiddenLoading = () => {
  elLoading.style.display = "none";
};

let apiKey = "e4312694";

function fetchMovies(searchQuery) {
  elMovie.innerHTML = "";
  const apiUrl = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;
  showLoading();

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      hiddenLoading();

      if (data.Search) {
        const movie = data.Search;
        movie.forEach((value) => {
          const card = document.createElement("div");
          elMovie.classList.add("card_wrapper");
          const image = document.createElement("img");
          const title = document.createElement("h1");
          const subTitle = document.createElement("p");

          image.scr = value.Poster;
          title.innerHTML = value.Title;
          subTitle.innerHTML = value.Year;
          image.src = value.Poster;
          card.append(image); 
          card.append(title);
          card.append(subTitle);
          elMovie.append(card);

          
          elMovie.append(card);
        });
      }
    });
}
// fetchMovies();

elButton.addEventListener("click", () => {
  let value = ellnput.value.trim();

  if (value !== "") {
    fetchMovies(value);
  }
});

ellnput,
  addEventListener("keydown", (event) => {        
    if (event.key === "Enter") {
      let value = ellnput.value.trim();
      if (value !== "") {
        fetchMovies(value);
      }
    }
  });

  function showFilm() {
    const film = " ";
    fetchMovies(film);
  }

  // function showFilm() {
  //   const film = "harry";
  //   fetchMovies(film);
  // }


showFilm();
