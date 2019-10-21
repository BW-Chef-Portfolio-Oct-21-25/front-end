import * as types from './actionTypes';

export function newPost(post) {
  return { type: types.ADD_POST, payload: post };
}
export function getPosts(posts) {
    return { type: types.GET_POSTS, payload: posts };
  }
