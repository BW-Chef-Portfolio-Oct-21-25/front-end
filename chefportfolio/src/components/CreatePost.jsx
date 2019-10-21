import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from "../state/actionCreators";

export function CreatePost(props) {
  const title = useRef();
  const mealType = useRef();
  const ingredient = useRef();
  const instructions = useRef();
  const description = useRef();

  function createPost(e) {
    e.preventDefault();
    actionCreators.newPost({
      title: title.current.value,
      meal_type: mealType.current.value,
      ingredient: ingredient.current.value,
      instructions: instructions.current.value,
      description: description.current.value
    });
  }

  return (
    <form>
      Create Post
      <input name="title" placeholder="Title" ref={title} />
      <input name="meal_type" placeholder="Meal Type" ref={mealType} />
      <input name="ingredient" placeholder="Ingredient" ref={ingredient} />
      <input
        name="instructions"
        placeholder="Instructions"
        ref={instructions}
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
