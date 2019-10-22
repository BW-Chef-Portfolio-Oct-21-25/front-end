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
    isFetching: false,
    error: ""
};

export function postReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_POST: 
        return {

        }
        case types.GET_POSTS: 
        return {
            ...state,
        }
        case types.GET_POSTS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                posts: action.payload,
                isFetching: false,
                error: ""
            }
        case types.GET_POSTS_FAILURE:
            return {
                ...state,
                error: action.payload,
            } 
        default:
            return state;
    }
}
