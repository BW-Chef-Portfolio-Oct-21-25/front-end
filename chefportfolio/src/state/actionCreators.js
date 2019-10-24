
import Axios from 'axios';
import * as types from './actionTypes';

Axios.defaults.baseURL = 'https://bwchefportfolio.herokuapp.com/api/users';

// Add a new post
export const newPost = (post) => {
  return { 
    type: types.ADD_POST, 
    payload: post 
  };
}
// Get all Posts
import Axios from "axios";
import * as types from "./actionTypes";

Axios.defaults.baseURL = "https://bwchefportfolio.herokuapp.com/api/users";

export const getPosts = () => dispatch => {
  Axios.get("/post")
    .then(res => {
      dispatch({
        type: types.GET_POSTS_SUCCESS,
        payload: res.data.posts
      });
    })
    .catch(err =>
      dispatch({
        type: types.GET_POSTS_FAILURE,
        payload: err.message
      })
    )
} 
// Get all Chefs
export const getAllChefs = () => dispatch => {
  Axios
    .get('https://chefs-portfolio.herokuapp.com/api/users/chef')
    .then(res => {
       console.log(res.data);
      // dispatch({
      //   type: types.GET_CHEFS_SUCCESS,
      //   payload: res.data
      // })
    );
};

export const getSinglePost = props => dispatch => {
  const id = props.match.params.id;
  Axios.get(`https://bwchefportfolio.herokuapp.com/api/users/post${id}`)
    .then(res => {
      console.log(res);
    })
    .catch(err =>
      dispatch({
        type: types.GET_CHEFS_FAILURE,
        payload: err.message
      })
    )
}
//Registration
export const addUser = user => dispatch =>{
  dispatch({
    type: types.SIGNUP_NEW
  });
  Axios.post('', {
    email: user.email,
    username: user.username,
    password: user.password
  })
  .then(res => {
    console.log(res.data);
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload: res.data
    });
    return true;
  })
  .catch(error =>{
    console.log(error);
    dispatch({
      type: types.SIGNUP_FAILED, 
      payload: error.response
    });
  });
}


//log in 
// export const login = (username, password) => dispatch => {
//   dispatch({ type: types.LOGIN_START });
//   return withAuth()
//     .post(`https://bwchefportfolio.herokuapp.com/api/users/login `, {
//       username: username,
//       password: password
//     })
//     .then(res => {
//       dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
//       return true;
//     })
//     .catch(res => {
//       dispatch({
//         type: types.LOGIN_FAILED,
//         payload: res.data
//       });
//     });
// };

        type: types.GET_SINGLE_POST_FAILURE,
        payload: err.message
      })
    );
};

export const getAllChefs = () => dispatch => {
  Axios.get("/chef")
    .then(res => {
      dispatch({
        type: types.GET_CHEFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: types.GET_CHEFS_FAILURE,
        payload: err.message
      })
    );
};
