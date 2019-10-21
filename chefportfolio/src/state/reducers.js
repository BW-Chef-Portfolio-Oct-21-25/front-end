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
        return {}
        case types.GET_POSTS: 
        return {}
        default:
            return state;
    }
}

// Signup 

const initialSignupState = {
    error: "",
    fetchingData: false,
    users: [],
    addUser: [],
    isLoadingLOGIN: false,
    successLOGIN: false,
    username: "",
    email: "",
    password: "",
    data: []
  };

export const signupReducer = (state = initialSignupState, action) => {
    switch(action.type){
        case types.SIGNUP_NEW:
            return{
                ...state,
                error: "",
                fetchingData: true
            };
        case types.SIGNUP_SUCCESS:
            return{
                ...state,
                addUser: action.payload,
                error: "",
                fetchingData: false,
                username: action.payload,
                email: action.payload
            };
        case types.SIGNUP_FAILED:
            return{
                ...state,
                error: action.payload,
                fetchingData:false
            }
        default: 
        return state;
    }
}