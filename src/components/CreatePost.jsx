import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import axiosWithAuth from '../axiosWithAuth';
import * as actionCreators from "../state/actionCreators";


export function CreatePost(props) {
  const imgURL = useRef();
  const title = useRef();
  const chef = useRef();
  const mealType = useRef();
  const ingredient = useRef();
  const directions = useRef();
  const description = useRef();
  const prep_time = useRef();
  const cook_time = useRef();
  const total_time = useRef();
  const oven_temp = useRef();
  const yieldRef = useRef();

  function createPost(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("https://bwchefportfolio.herokuapp.com/api/users/post", {
        imgURL: imgURL.current.value,
        title: title.current.value,
        chef: chef.current.value,
        meal_type: mealType.current.value,
        ingredient: ingredient.current.value,
        ingredient_id: 4,
        chef_id: 4,
        directions: directions.current.value,
        description: description.current.value,
        prep_time: prep_time.current.value,
        cook_time: cook_time.current.value,
        oven_temperature: oven_temp.current.value,
        yield: yieldRef.current.value,
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

  return (
    <div>
      <form>
        <h1>Create Post</h1>
        <input name="title" placeholder="Title" ref={title} />
        <input name="chef" placeholder="Chef" ref={chef} />
        {/* <input type='file' ref={imgURL}/> */}
        <input name="imgURL" placeholder="Image URL" ref={imgURL} />
        <input name="description" placeholder="Description" ref={description} />
        <select ref={mealType}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
        <input name="ingredient" placeholder="Ingredients" ref={ingredient} />
        <textarea
          name="directions"
          placeholder="Instructions"
          ref={directions}
        />
        <input name="prep_time" placeholder="Prep Time" ref={prep_time} />
        <input name="cook_time" placeholder="Cook Time" ref={cook_time} />
        <input name="total_time" placeholder="Total Time" ref={total_time} />
        <input name="oven_temp" placeholder="Oven Temperature" ref={oven_temp} />
        <input name="yield" placeholder="Yield" ref={yieldRef} />
        <button onClick={createPost}>Submit</button>
      </form>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(CreatePost);
