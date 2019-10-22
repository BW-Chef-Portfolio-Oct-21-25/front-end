import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";

const StyledCreatePost = styled.div`
display: flex;

background-color: grey;
  form {
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 0 auto;
    input,
    select,
    button {
      margin: 1rem 0;
      height: 2rem;
      border: 1px solid grey;
      border-radius: 6px;
      padding-left: 0.5rem;
    }
    textarea {
      padding: 0.6rem 0 0 0.5rem;
      border: 1px solid grey;
      border-radius: 6px;
      height: 4rem;
      margin: 1rem 0;
    }
  }
`;

export function CreatePost(props) {
  const title = useRef();
  const mealType = useRef();
  const ingredient = useRef();
  const directions = useRef();
  const description = useRef();

  function createPost(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("https://bwchefportfolio.herokuapp.com/api/users/post", {
        title: title.current.value,
        meal_type: mealType.current.value,
        ingredient: ingredient.current.value,
        ingredient_id: 4,
        chef_id: 4,
        directions: directions.current.value,
        description: description.current.value
      })
      .then(res => {
        actionCreators.newPost(res.data.post);
        console.log(res.data);
        alert("success");
        props.history.push("/");
      })
      .catch(err => {
        debugger;
        alert(err.response.data.message);
      });
  }

  function axiosWithAuth() {
    // const token = localStorage.getItem("token");
    return axios.create({
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiTWVnYW4yMiIsImlhdCI6MTU3MTcyOTIxMywiZXhwIjoxNTcyMzM0MDEzfQ.wkHy9ZZPa4veeHah1fS95jyek4qYxgXwc2J2afBe7MY"
      }
    });
  }

  return (
    <StyledCreatePost>
      <form>
        Create Post
        <input name="title" placeholder="Title" ref={title} />
        <input name="description" placeholder="Description" ref={description} />
        <select ref={mealType}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
        <input name="ingredient" placeholder="Ingredients" ref={ingredient} />
        <textarea name="directions" placeholder="Directions" ref={directions} />
        <button onClick={createPost}>Submit</button>
      </form>
    </StyledCreatePost>
  );
}

export default connect(
  state => state,
  actionCreators
)(CreatePost);
