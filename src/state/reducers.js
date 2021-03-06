import * as types from './actionTypes';

const initialState = {
    posts: [],
    chefs: [],
    isFetching: false,
    error: "",
    post: {}
};

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

export function singlePostReducer(state = initialState.post, action){
    switch(action.type){
        case types.SET_POST:
            return {post: action.payload}
        default:
            return state;
    }
}

export function postReducer(state = initialState, action){
    switch(action.type){

        case types.DELETE_POST: 
        return { posts: state.posts.filter(post => post.id !== action.payload)}

        case types.ADD_POST: 
        return {posts: [...state.posts, action.payload]}

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
                case types.DELETE_POST: 
                return 
        default:
            return state;
    }
}