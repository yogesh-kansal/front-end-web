import { createStore,combineReducers, applyMiddleware } from 'redux';
import { dishReducer, promoReducer, leaderReducer, commentReducer } from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigStore =() => {
    //creates store for state
    const store= createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            promotions: promoReducer,
            leaders: leaderReducer
        }),
        applyMiddleware(thunk, logger)
    );
    console.log("this is",store.getState());
    return store;
}