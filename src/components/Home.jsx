import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import * as actions from "../state/actionCreators";
import Post from "./Post";
import SinglePost from './SinglePost';

export function Home(props) {
  const { getPosts, isFetching } = props;
  const { posts } = props;
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post-main-container">
      <ul className="posts-list-container">
        {posts.map(post => (
          <Link to={`post/${post.id}`} key={post.id}>
            <Post key={post.id} post={post} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(
  mapStateToProps,
  actions
)(Home);