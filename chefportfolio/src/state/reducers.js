import * as types from './actionTypes';

const initialState = {
newPost: {    
    image: '',
    title: '',
    meal_type: '',
    description: '',
    ingredients: '',
    directions: '' 
},
posts: [],
};

export function postReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_POST: 
        return {...state, posts: [...initialState.posts, action.payload]}
        case types.GET_POSTS: 
        return {}
        default:
            return state;
    }
}