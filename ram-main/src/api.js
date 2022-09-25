import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

export default {
  getCharacters() {
    return axios.get("character");
  },
  getCharactersByPage(page) {
    console.log(`character?page=${page}`)
    return axios.get(`character?page=${page}`);
  },
};
