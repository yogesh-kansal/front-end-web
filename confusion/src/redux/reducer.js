//import Dishes from '../shared/dishes';
import { Comments } from '../shared/comments';
import { Promotions } from '../shared/promotions';
import { Leaders } from '../shared/leaders';
import * as Actions from './actiontypes';

// creating multi reducers
export const dishReducer =(state = {isLoading: true, err: null, dishes: []}, action) => {
    switch(action.type) {
        case Actions.ADD_DISH:
            return {...state,isLoading:false,err:null,dishes:action.payload}

        case Actions.DISH_LOADING:
            return {...state,isLoading:true,err:null,dishes:[]}

        case Actions.DISH_FALIURE:
            return {...state,isLoading:false, err:action.payload ,dishes:[]}

        default: 
            return state;
    }
}


export const leaderReducer =(state = Leaders, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}
export const promoReducer =(state = Promotions, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}
export const commentReducer =(state = Comments, action) => {
    switch(action.type) {
        case Actions.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();

            //return state.concat(comment);
            state =[...state, comment]; 
            return state;

        default: 
            return state;
    }
}
