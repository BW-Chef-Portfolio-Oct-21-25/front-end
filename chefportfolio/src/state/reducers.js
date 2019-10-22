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


//login

// export const loginReducer = (state = initialSignupState, action)=>{
//     switch (action.type){
//         case types.LOGIN_START:
//             return{
//                 ...state,
//                 isLoadingLOGIN: true,
//                 successLOGIN: false
//             }
//         case types.LOGIN_SUCCESS:
//             return{
//                 ...state, 
//                 isLoadingLOGIN: false,
//                 successLOGIN: true,
//                 email: action.payload,
//                 username: action.payload,
//                 password: action.payload
//             };
//         case types.LOGIN_FAILED:
//             return{
//                 ...state,
//                 isLoadingLOGIN: false,
//                 successLOGIN: false,
//                 username: "",
//                 password: ""
//             }
//         default: 
//         return state;
//     }
// }