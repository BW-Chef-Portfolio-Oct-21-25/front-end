import * as types from './actionTypes';

const initialState = {
    image: '',
    title: '',
    meal_type: '',
    ingredients: '',
    instructions: '' 
}

export function postReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_POST: 
        return {}
        default:
            return state;
    }
}