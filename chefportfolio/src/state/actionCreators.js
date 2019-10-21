export function newPost(post) {
  return { type: ADD_POST, payload: post };
}
export function getPosts(posts) {
    return { type: GET_POSTS, payload: posts };
  }
