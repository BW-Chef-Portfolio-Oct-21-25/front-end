import * as types from './actionTypes'
import axios from 'axios'

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
