export interface JokesStateInterface {
  currentJoke: string;
  allJokes: string[];
}

function state(): JokesStateInterface {
  return {
    currentJoke: "This is a joke",
    allJokes: [],
  }
}

export default state;
