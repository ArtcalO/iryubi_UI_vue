import Vue from 'vue';
import Vuex from 'vuex';
import { getAPI } from './axios-api';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
     APIData: ''
  },
 
})
