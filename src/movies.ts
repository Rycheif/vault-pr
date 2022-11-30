export interface Movie {
  title: string,
  image: string,
  content?: string,
  id: string
}

const moviesList = [
  {
    "title": "Raiders of the Lost Ark ",
    "image": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/raiderslostark.linen_480x.progressive.jpg?v=1629841607",
    "content": "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
    "id": "1"
  }, {
    "title": "Jurassic Park",
    "image": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e50345d7cfee907ad63bb835109b37b9_263eaa00-ac40-4a0e-b2d7-86bb4ac69c90_480x.progressive.jpg?v=1573584652",
    "content": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    "id": "2"
  }, {
    "title": "Northman",
    "image": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-northman_asdvqcek_480x.progressive.jpg?v=1644514475",
    "content": "A young Viking prince is on a quest to avenge his father's murder.",
    "id": "3"
  }, {
    "title": "Back to the Future",
    "image": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0b2b67a1de6a06d1ce65e4ccc64047e3_a9f7318e-c5c4-4d2a-aed2-890bbfad883c_480x.progressive.jpg?v=1573590273",
    "content": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    "id": "4"
  }, {
    "title": "Top Gun",
    "image": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/2e9e934dfdb6bad26beb558534adccbd_f4bf254e-743f-414e-a8fa-c6f1592605fc_480x.progressive.jpg?v=1573651266",
    "content": "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
    "id": "5"
  }, {
    "title": "American Psycho",
    "image": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f85ee5ef68c6266f73cf11f6c599cffd_9c1132bb-9c5f-41c8-bd6f-f35db9a6a1a6_480x.progressive.jpg?v=1573653978",
    "content": "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
    "id": "6"
  }
];

export const getMovies = (id?: string): Movie[] => {
  return typeof id !== "undefined" ? moviesList.filter(movie => movie.id === id) : moviesList;
}
