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
export const Reducer = (state = initalState, action) => {
    return state;
}