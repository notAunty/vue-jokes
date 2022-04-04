import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { JokesStateInterface } from './state';

const getters: GetterTree<JokesStateInterface, StateInterface> = {
  getCurrentJoke: state => state.currentJoke, 
  getAllJokes: state => state.allJokes,
};

export default getters;
