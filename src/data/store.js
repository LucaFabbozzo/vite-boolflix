import { reactive } from 'vue'

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  tv: [],
  movie: [],
  type: "",
  isLoaded: false,
  apiParams: {
    api_key: "b47aa60d77a4dbf3638e882b64e4c97a",
    query: "",
    language: "it-IT",
    original_title: "",
    vote_average: "",
    original_language: "",
    poster_path: "",
    overview: "",
    noCover: "../assets/img/no-cover.png"
  },
});



