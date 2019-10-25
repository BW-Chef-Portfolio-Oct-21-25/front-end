import Axios from "axios";
import * as types from "./actionTypes";
import axiosWithAuth from '../axiosWithAuth/';

Axios.defaults.baseURL = "https://bwchefportfolio.herokuapp.com/api/users";

export const getPosts = () => dispatch => {
  Axios.get("/post")
    .then(res => {
      // console.log(res);
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

export const newPost = (post) => {
  return {type: types.ADD_POST, payload: post }
}

export const setSinglePost = (post) => {
  return { type: types.SET_POST, payload: post}
}
export const deleteRecipe = (id) => dispatch => {
  // const item = localStorage.getItem(`newPost${id}`)
 axiosWithAuth().delete(`https://bwchefportfolio.herokuapp.com/api/users/post/${id}`)
 .then(res => {
   dispatch({
     type: types.DELETE_POST,
     payload: id
   })
 })
 .catch(err => console.log(err))
}