import { reactive } from 'vue'

export const store = reactive({
  apiUrl:
    "https://api.themoviedb.org/3/search/multi?api_key=b47aa60d77a4dbf3638e882b64e4c97a",
  moviesListData: [],
  queryToSearch: "",
  titleToSearch: "",
  originalTitleToSearch: "",
  originalLenguageToSearch: "",
  voteAverageToSearch: "",
  nameToSearch: "",
  originalNameToSearch: ""

});



