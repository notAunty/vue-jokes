import { ActionContext, ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { JokesStateInterface } from './state';

interface JokesInterface {
  id: string;
  joke: string,
  status: number,
};

const actions: ActionTree<JokesStateInterface, StateInterface> = {
  fetchNewJoke: async (context: ActionContext<JokesStateInterface, StateInterface>) => {
    const url = "https://icanhazdadjoke.com";
    const headers = { Accept: "application/json" };
    const joke: Response = await fetch(url, { headers });
    const j = await joke.json() as JokesInterface;
    context.commit("setCurrentJoke", j.joke);
  }
};

export default actions;
