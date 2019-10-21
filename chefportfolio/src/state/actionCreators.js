import { SIGNUP_NEW, SIGNUP_SUCCESS, SIGNUP_FAILED } from "./actionTypes";

export function newPost(post) {
  return { type: ADD_POST, payload: post };
}
export function getPosts(posts) {
    return { type: GET_POSTS, payload: posts };
}

//Registration

export const addUser = user => dispatch =>{
  dispatch({
    type: SIGNUP_NEW
  });
  axios.post('', {
    email: user.email,
    username: user.username,
    password: user.password
  })
  .then(res => {
    console.log(res.data);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
    return true;
  })
  .catch(error =>{
    console.log(error);
    dispatch({
      type: SIGNUP_FAILED, 
      payload: error.response
    });
  });
}
