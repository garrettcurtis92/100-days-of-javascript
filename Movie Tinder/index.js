// Define an array of movies
const movies = [
  {
    title: "Black Panther",
    description:
      "Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
  },
  {
    title: "Captain America the first Avenger",
    description:
      "During World War II, Steve Rogers, a frail man, is transformed into the super-soldier Captain America and must stop the Red Skull (Weaving) from using the Tesseract as an energy source for world domination",
    image:
      "https://media.gettyimages.com/id/458467163/photo/the-first-avenger-movie-poster.jpg?s=612x612&w=gi&k=20&c=Fc9E7HSJmEiviWNqmLsoXGgwOdpN8fv3qZ0fem6__rM=",
  },
  {
    title: "Dr. Strange in the Multiverse of Madness",
    description:
      "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
    image:
      "https://static.wixstatic.com/media/c0ca52_861cbfbd84344362a233f609406354cd~mv2.jpg/v1/fit/w_540%2Ch_675%2Cal_c%2Cq_80,enc_auto/file.jpg",
  },
];

// Define a variable to keep track of the current movie index
let currentMovieIndex = 0;

// Get references to the like and dislike buttons
const btnLike = document.querySelector(".btn-like");
const btnDislike = document.querySelector(".btn-dislike");

// Get references to the card elements
const cardImage = document.querySelector(".card-image img");
const cardTitle = document.querySelector(".card-title");
const cardDescription = document.querySelector(".card-description");

// Define a function to show the current movie
function showCurrentMovie() {
  const currentMovie = movies[currentMovieIndex];
  cardImage.src = currentMovie.image;
  cardTitle.textContent = currentMovie.title;
  cardDescription.textContent = currentMovie.description;
}

// Call the showCurrentMovie function to show the initial movie
showCurrentMovie();

// Add click event listeners to the like and dislike buttons
btnLike.addEventListener("click", function () {
  // Increment the current movie index
  currentMovieIndex++;

  // If the current movie index is greater than or equal to the length of the movies array, reset the index to 0
  if (currentMovieIndex >= movies.length) {
    currentMovieIndex = 0;
  }

  // Show the next movie
  showCurrentMovie();
});

btnDislike.addEventListener("click", function () {
  // Increment the current movie index
  currentMovieIndex++;

  // If the current movie index is greater than or equal to the length of the movies array, reset the index to 0
  if (currentMovieIndex >= movies.length) {
    currentMovieIndex = 0;
  }

  // Show the next movie
  showCurrentMovie();
});
