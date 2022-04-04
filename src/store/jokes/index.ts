import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { JokesStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const jokesModule: Module<JokesStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default jokesModule;
