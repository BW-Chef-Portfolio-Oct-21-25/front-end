import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getSinglePost } from "../state/actionCreators";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import "./scss/singlepost.scss";

export function SinglePost(props) {
  const id = props.match.params.postId;
  useEffect(() => {
    Axios.get(`https://bwchefportfolio.herokuapp.com/api/users/post/${id}`)
      .then(res => {
        console.log(res);
        props.setSinglePost(res.data.post);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  if (!props.post.post) {
    return <p>Loading</p>;
  }
  return (
      <>
    <div className="single-post">
      <div className="recipe-img">
        <img src={props.post.post.imgURL} />
      </div>
      <div className="recipe-content">
        <h2>{props.post.post.title}</h2>
        <p> <span>Servings:</span> {props.post.post.yield}</p>
        <p> <span>Total time required:</span> {props.post.post.total_time}</p>
        <p> <span>Main ingredient:</span> {props.post.post.ingredient}</p>
        <p> <span>Instructions:</span> {props.post.post.directions}</p>
      </div>
    </div>
    <button className='home-redirect'onClick={() => props.history.push('/')}>Back to homepage</button>
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(SinglePost);
