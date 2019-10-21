import * as types from './actionTypes'
import axios from 'axios'
import withAuth from '../axios/index'

export function newPost(post) {
  return { type: types.ADD_POST, payload: post };
}
export function getPosts(posts) {
    return { type: types.GET_POSTS, payload: posts };
}

//Registration

export const addUser = user => dispatch =>{
  dispatch({
    type: types.SIGNUP_NEW
  });
  axios.post('', {
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


export const login = (email, username, password) => dispatch => {
  dispatch({type: types.LOGIN_START});
  return withAuth().post('', {
    email: email,
    username: username,
    password: password
  })
  .then(res => {
    dispatch({type: types.LOGIN_SUCCESS, payload: res.data})
    return true
  })
  .catch(response => {
    dispatch({
      type: types.LOGIN_FAILED,
      payload:response.data
    })
  })
}