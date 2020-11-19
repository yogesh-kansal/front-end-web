import * as Actions from './actiontypes';

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