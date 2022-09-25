import api from "../../api";
const state = {
  characters: [],
  pages: 0,
  count: 0,
  load: false
};
const getters = {
  getCharacters(state) {
    return state.characters;
  },
  getPages(state) {
    return state.pages;
  },
  getCount(state) {
    return state.count;
  },
  getLoading(state) {
    return state.load;
  }

  // getCharacterByID
  // getFilteredCharacters
};
const mutations = {
  SET_CHARACTERS(state, payload) {
    state.characters = payload;
  },
  SET_PAGE(state, payload){
    state.page = payload
  },
  SET_DATA(state, payload){
    state[payload.name] = payload.value
  }

};
const actions = {
  getCharacters({ commit }) {
    commit("SET_DATA", {name: 'load', value: true})
    api.getCharacters().then((resp) => {
      commit("SET_CHARACTERS", resp.data.results);
      commit("SET_DATA",{name:'count', value: resp.data.info.count})
      commit("SET_DATA",{name:'pages', value: resp.data.info.pages})
    })
    commit("SET_DATA", {name: 'load', value: false})
  },
  getCharactersByPage({commit}, page) {
    commit("SET_DATA", {name: 'load', value: true})
    api.getCharactersByPage(page).then((resp) => {
      commit("SET_CHARACTERS", resp.data.results);
      commit("SET_DATA",{name:'count', value: resp.data.info.count})
      commit("SET_DATA",{name:'pages', value: resp.data.info.pages})
    })
    window.setTimeout(()=>{
      commit("SET_DATA", {name: 'load', value: false})
    }, 300)
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
