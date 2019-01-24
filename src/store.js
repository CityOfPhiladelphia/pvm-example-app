import Vue from 'vue';
import Vuex from 'vuex';
import mergeDeep from './util/merge-deep';
// import pvmStore from '@cityofphiladelphia/phila-vue-mapping';
import pvmStore from '../node_modules/@cityofphiladelphia/phila-vue-mapping/src/store.js';
;

// when you load vuex from a script tag this seems to happen automatically
Vue.use(Vuex);

function createStore(config) {

  const initialState = {
    candidates: [],
    addressEntered: null,
    imagery: 'imagery2018',
    shouldShowImagery: false,
  };

  const mb = {
    state: initialState,
    mutations: {
      setCandidates(state, payload) {
        state.candidates = payload;
      },
      setAddressEntered(state, payload) {
        state.addressEntered = payload;
      },
      setImagery(state, payload) {
        state.map.imagery = payload;
      },
      setShouldShowImagery(state, payload) {
        state.map.shouldShowImagery = payload;
      },
    }
  }

  // let mergeStore = mb;
  let mergeStore = mergeDeep(mb, pvmStore);

  // TODO standardize how payloads are passed around/handled
  return new Vuex.Store({
    state: mergeStore.state,
    getters: mergeStore.getters,
    mutations: mergeStore.mutations
  });
}

export default createStore;
