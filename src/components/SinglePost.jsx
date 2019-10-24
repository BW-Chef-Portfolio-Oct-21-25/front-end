import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getSinglePost } from "../state/actionCreators";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

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
    <div>
      <img src={props.post.post.imgURL} />
      <h4>{props.post.post.title}</h4>
      <p>{props.post.post.yield}</p>
      <p>{props.post.post.serving}</p>
      <p>{props.post.post.total_time}</p>
      <p>{props.post.post.cook_time}</p>
      <p>{props.post.post.ingredient}</p>
      <p>{props.post.post.directions}</p>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(SinglePost);
