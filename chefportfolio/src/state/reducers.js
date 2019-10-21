import * as types from './actionTypes';

const initialState = {
    image: '',
    title: '',
    meal_type: '',
    description: '',
    ingredients: '',
    directions: '' 
}

export function postReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_POST: 
        return {}
        default:
            return state;
    }
}