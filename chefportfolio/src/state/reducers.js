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
    chefs: [],
    isFetching: false,
    error: ""
};

export function postReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_POST: 
        return {
        }

        return {...state, posts: [...initialState.posts, action.payload]}

        case types.GET_POSTS: 
        return {
            ...state,
        }
        case types.GET_POSTS_SUCCESS:
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

export function chefReducer(state = initialState, action){
    switch(action.type){
        case types.GET_CHEFS: 
        return {
            ...state,
        }
        case types.GET_CHEFS_SUCCESS:
            return {
                ...state,
                chefs: action.payload,
                isFetching: false,
                error: ""
            }
        case types.GET_CHEFS_FAILURE:
            return {
                ...state,
                error: action.payload,
            } 
        default:
            return state;
    }
}
