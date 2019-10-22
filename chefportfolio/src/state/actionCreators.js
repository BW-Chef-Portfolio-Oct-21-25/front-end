import Axios from 'axios';
import * as types from './actionTypes';

Axios.defaults.baseURL = 'https://bwchefportfolio.herokuapp.com/api/users';

export const newPost = (post) => {
  return { 
    type: types.ADD_POST, 
    payload: post 
  };
}
// export function getPosts(posts) {
//   return { 
//     type: types.GET_POSTS, 
//     payload: posts 
//   };
// }

export const getPosts = () => dispatch => {
  Axios
    .get('/post')
    .then(res => {
      console.log(res);
      const posts = res.data;
      dispatch({
        type: types.GET_POSTS_SUCCESS,
        payload: posts
      })
    })
    .catch(err =>
      dispatch({
        type: types.GET_POSTS_FAILURE,
        payload: err.message
      })
    )
} 
