export interface Movie {
  title: string,
  image: string,
  content?: string,
  id: string
}

const moviesList = [
  {
    "title": "Nie czas umierać",
    "image": "https://fwcdn.pl/fpo/77/78/757778/7966011.6.jpg",
    "content": "Na prośbę swojego starego przyjaciela, Felixa Leitera z CIA, James Bond bierze udział w misji odbicia porwanego naukowca. Trop prowadzi do niebezpiecznego złoczyńcy.",
    "id": "61d6224225c760cccca6e7fc"
  }, {
    "title": "Inception",
    "image": "https://m.media-amazon.com/images/I/7106uLYY2LL._AC_SL1111_.jpg",
    "content": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "id": "61d84e9d58de31247499c96d"
  }, {
    "title": "Arcane",
    "image": "https://fwcdn.pl/fpo/36/28/873628/7983711.3.jpg",
    "content": "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
    "id": "61d855c158de31247499c98d"
  }, {
    "title": "Mad Max: Fury Road",
    "image": "https://fwcdn.pl/fpo/57/47/95747/7683234.3.jpg",
    "content": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    "id": "61d86efb58de31247499cb6c"
  }, {
    "title": "Karol - człowiek, który został papieżem",
    "image": "https://fwcdn.pl/fpo/98/09/149809/7536866.3.jpg",
    "content": "Kiedy wybucha II wojna światowa, Karol Wojtyła jest studentem drugiego roku polonistyki. Po latach decyduje się zostać księdzem, co w konsekwencji wynosi go na Tron Piotrowy.",
    "id": "61d8924c58de31247499cc4b"
  }, {
    "title": "Blade Runner 2049",
    "image": "https://fwcdn.pl/fpo/07/98/630798/7801880.3.jpg",
    "content": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    "id": "61d8c4a32c3ea498e267dcfc"
  }
];

export const getMovies = (id?: string): Movie[] => {
  return typeof id !== "undefined" ? moviesList.filter(movie => movie.id === id) : moviesList;
}
