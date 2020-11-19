import { createStore,combineReducers } from 'redux';
import { dishReducer, promoReducer, leaderReducer, commentReducer } from './reducer';

export const ConfigStore =() => {
    //creates store for state
    const store= createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            promotions: promoReducer,
            leaders: leaderReducer
        })
    );
    console.log("this is",store)
    return store;
}