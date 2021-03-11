import { createStore } from "vuex";
import { albums } from "../albums";
import {photos} from '../photos'
export  default  createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    albums,
    photos
  }
});
