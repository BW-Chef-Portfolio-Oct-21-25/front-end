import React, { useRef, useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth/index";
import { connect } from "react-redux";

export const UpdateItem = props => {
  const recipeID = props.match.params.id;
  const recipe = props.posts.posts.filter(post => post.id === parseInt(recipeID))
  const imgURL = useRef();
  const title = useRef(`${recipe[0].title}`);
  const chef = useRef(`${recipe[0].chef}`);
  const mealType = useRef(`${recipe[0].meal_type}`);
  const ingredient = useRef(`${recipe[0].ingredient}`);
  const directions = useRef(`${recipe[0].directions}`);
  const description = useRef(`${recipe[0].description}`);
  const prep_time = useRef(`${recipe[0].prep_time}`);
  const cook_time = useRef(`${recipe[0].cook_time}`);
  const total_time = useRef(`${recipe[0].total_time}`);
  const oven_temp = useRef(`${recipe[0].oven_temperature}`);
  const yieldRef = useRef(`${recipe[0].yield}`);
  const chef_id = localStorage.getItem("userID");

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
        <input name="title" ref={title} defaultValue={title.current}/>
        <input name="chef" placeholder="Chef" ref={chef} defaultValue={chef.current}/>
        <input name="description" placeholder="Description" ref={description} defaultValue={description.current}/>
        <select ref={mealType} defaultValue={mealType.current}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
        <input name="ingredient" placeholder="Ingredients" ref={ingredient} defaultValue={ingredient.current}/>
        <textarea
          name="directions"
          placeholder="Instructions"
          ref={directions}
          defaultValue={directions.current}
        />
        <input name="prep_time" placeholder="Prep Time" ref={prep_time} defaultValue={prep_time.current}/>
        <input name="cook_time" placeholder="Cook Time" ref={cook_time} defaultValue={cook_time.current}/>
        <input name="total_time" placeholder="Total Time" ref={total_time} defaultValue={total_time.current}/>
        <input
          name="oven_temp"
          placeholder="Oven Temperature"
          ref={oven_temp}
          defaultValue={oven_temp.current}
        />
        <input name="yield" placeholder="Yield" ref={yieldRef} defaultValue={yieldRef.current}/>
        <button onClick={updatePost}>Submit</button>
      </form>
    </div>
  );
};

export default connect(
  state => state,
  {}
)(UpdateItem);
