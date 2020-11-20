import * as Actions from './actiontypes';
import Dishes from '../shared/dishes';

const err ="this is an err";
export const addcomment = (dishId, rating, author, comment) => {
    return({
        type: Actions.ADD_COMMENT,
        payload: {
            dishId,
            rating,
            author,
            comment,
        }
    })
}

export const fetchDishes = ()=>(dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(Dishes))
    }, 2000);
}

export const dishesLoading = () => ({
    type: Actions.DISH_LOADING
});

export const dishesFailed =() => ({
    type: Actions.DISH_FALIURE,
    payload: err
});

export const addDishes =(dishes) => ({
    type: Actions.ADD_DISH,
    payload: dishes
});