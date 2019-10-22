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

export const getSinglePost = (props) => dispatch => {
  const id = props.match.params.id;
  
  Axios
    .get(`/post${id}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_SINGLE_POST,
        payload: res.data.posts
      })
    })
    .catch(err => 
      dispatch({
        type: types.GET_SINGLE_POST_FAILURE,
        payload: err.message
      })
    )
}
