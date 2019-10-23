import Axios from 'axios';
import * as types from './actionTypes';

Axios.defaults.baseURL = 'https://bwchefportfolio.herokuapp.com/api/users';

export const newPost = (post) => {
  return { 
    type: types.ADD_POST, 
    payload: post 
  };
}

export const getPosts = () => dispatch => {
  Axios
    .get('/post')
    .then(res => {
      // console.log(res);
      dispatch({
        type: types.GET_POSTS_SUCCESS,
        payload: res.data.posts
      })
    })
    .catch(err =>
      dispatch({
        type: types.GET_POSTS_FAILURE,
        payload: err.message
      })
    )
} 

export const getAllChefs = () => dispatch => {
  Axios
    .get('/chef')
    .then(res => {
      dispatch({
        type: types.GET_CHEFS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => 
      dispatch({
        type: types.GET_CHEFS_FAILURE,
        payload: err.message
      })
    )
}