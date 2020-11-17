import { createStore } from 'redux';
import { Reducer, initalState } from './reducer';

export const ConfigStore =() => {
    //creates store for state
    const store= createStore(Reducer, initalState);
    console.log("this is",store)
    return store;
}