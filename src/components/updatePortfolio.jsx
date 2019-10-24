import React, { useRef, useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth/index";
import { connect } from "react-redux";

export const UpdateItem = props => {
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
  const chef_id = localStorage.getItem("userID");
  const recipeID = props.match.params.id;
  const recipe = props.posts.posts.filter(post => post.id === parseInt(recipeID))
  const updatePost = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://bwchefportfolio.herokuapp.com/api/users/post/${recipeID}`, {
        title: title.current.value,
        chef: chef.current.value,
        meal_type: mealType.current.value,
        ingredient: ingredient.current.value,
        ingredient_id: 4,
        directions: directions.current.value,
        description: description.current.value,
        prep_time: prep_time.current.value,
        cook_time: cook_time.current.value,
        oven_temperature: oven_temp.current.value,
        yield: yieldRef.current.value,
        chef_id: chef_id
      })
      .then(res => {
        alert(res.data.message);
        props.history.push("/portfolio");
      })
      .catch(err =>
        alert(
          "Something went wrong. Please make sure you have filled in all required fields."
        )
      );
  };
  return (
    <div className="create_post">
      {console.log(recipe)}
      <form>
        <h1>Update Recipe</h1>
        <input name="title" placeholder="Title" ref={title} value={recipe.title}/>
        <input name="chef" placeholder="Chef" ref={chef} value={recipe.chef}/>
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
        <input
          name="oven_temp"
          placeholder="Oven Temperature"
          ref={oven_temp}
        />
        <input name="yield" placeholder="Yield" ref={yieldRef} />
        <button onClick={updatePost}>Submit</button>
      </form>
    </div>
  );
};

export default connect(
  state => state,
  {}
)(UpdateItem);
