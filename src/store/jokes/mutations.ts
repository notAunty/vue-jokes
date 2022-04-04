import { MutationTree } from 'vuex';
import { JokesStateInterface } from './state';

const mutation: MutationTree<JokesStateInterface> = {
  setCurrentJoke: (state: JokesStateInterface, payload: string) => {
    state.currentJoke = payload;
    state.allJokes.push(payload);
  }
};

export default mutation;
