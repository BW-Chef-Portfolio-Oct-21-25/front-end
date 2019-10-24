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
        return {...state, posts: [...state, action.payload]}

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
            case types.GET_SINGLE_POST: 
            return {
                ...state,
            }
            case types.GET_SINGLE_POST_SUCCESS:
                return {
                    ...state,
                    posts: action.payload,
                    isFetching: false,
                    error: ""
                }
            case types.GET_SINGLE_POST_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                } 
        default:
            return state;
    }
}