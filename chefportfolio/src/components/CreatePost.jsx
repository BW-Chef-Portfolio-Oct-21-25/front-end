import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from '../state/actionCreators';

export function CreatePost() {
  const title = useRef();
  const mealType = useRef();
  const ingredient = useRef();
  const directions = useRef();
  const description = useRef();

  function createPost(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/users/post", {
        title: title.current.value,
        meal_type: mealType.current.value,
        ingredient: ingredient.current.value,
        ingredient_id: 4,
        chef_id: 4,
        directions: directions.current.value,
        description: description.current.value
      })
      .then(res => {
       actionCreators.newPost(res.data.post)
      })
      .catch(err => {
          debugger
        alert(err.response.data.message)
      });
  }

  function axiosWithAuth() {
    // const token = localStorage.getItem("token");
    return axios.create({
      headers: {
        "Content-Type": "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJuYW1lIjoiTWVnYW4iLCJpYXQiOjE1NzE2ODUxNjUsImV4cCI6MTU3MjI4OTk2NX0.jXb1fpCFda7Zy2mJa6hmqxD2YpB0wh-ePF1Kn6t9USc"
      }
    });
  }

  return (
    <form>
      Create Post
      <input name="title" placeholder="Title" ref={title} />
      <input name="meal_type" placeholder="Meal Type" ref={mealType} />
      <input name="ingredient" placeholder="Ingredient" ref={ingredient} />
      <input
        name="directions"
        placeholder="Directions"
        ref={directions}
      />
      <input name="description" placeholder="Description" ref={description} />
      <button onClick={createPost}>Submit</button>
    </form>
  );
}

export default connect(
  state => state,
  actionCreators
)(CreatePost);
