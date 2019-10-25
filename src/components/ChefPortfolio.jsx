import React, { useState } from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import getPosts from "../state/actionCreators";
import { Link } from "react-router-dom";
import SinglePost from "./Post";
import axiosWithAuth from "../axiosWithAuth/index";
import './scss/portfolio.scss'


class ChefPortfolio extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const chef_id = localStorage.getItem("userID");
    const chefRecipes = this.props.posts.filter(recipe => {
      return recipe.chef_id == chef_id;
    });


    if (this.props.posts.length) {
      return (
        <div className = "portfolio-container">
          <h1>Welcome to your portfolio!</h1>
          <div className = "post-container">
            {chefRecipes.map(post => (
              <div className = "link-container">
                <Link to={`post/${post.id}`} key={post.id}>
                  <SinglePost key={post.id} post={post} />
                </Link>
                <button className='delete-button' onClick={() => this.props.deleteRecipe(post.id)}>Delete Post</button>
                <Link  className = "login-button" to={`/updateitem/${post.id}`}>Edit Post</Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(ChefPortfolio);

