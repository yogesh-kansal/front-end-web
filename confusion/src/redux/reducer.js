import Dishes from '../shared/dishes';
import { Comments } from '../shared/comments';
import { Promotions } from '../shared/promotions';
import { Leaders } from '../shared/leaders';


export const initalState ={
    dishes:Dishes,
    comments: Comments,
    promotions: Promotions,
    leaders: Leaders
}

// creating multi reducers
export const dishReducer =(state = Dishes, action) => {
    switch(action.type) {
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
        default: 
            return state;
    }
}
