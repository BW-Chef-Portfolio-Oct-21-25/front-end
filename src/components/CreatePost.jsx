import React, { useRef } from "react";
import { connect } from "react-redux";
import axiosWithAuth from '../axiosWithAuth';
import * as actionCreators from "../state/actionCreators";
import './scss/createpost.scss';

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
  const total_time = useRef('');
  const oven_temp = useRef('');
  const yieldRef = useRef();
  const chef_id = localStorage.getItem('userID');

  function createPost(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("https://bwchefportfolio.herokuapp.com/api/users/post", {
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
        chef_id: chef_id,
        imgURL: imgURL.current.value
      })
      .then(res => {
        props.newPost(res.data.post);
        props.history.push("/portfolio");
      })
      .catch(err => {
        alert('Please make sure you fill in all the required fields');
      });
  }


  return (
      <div className='create_post'>
        <form>
        <h1>Create New Recipe<span>* fill all the required fields</span> </h1>
        {/* <span>*</span> */}
        <input name="title" placeholder="Title" ref={title} required/>
        <input name="chef" placeholder="Chef" ref={chef} />
        <input name='image' placeholder="Image URL" ref={imgURL}/>
        <input name="description" placeholder="Description" ref={description} required/>
        <select ref={mealType} required>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
        <input name="ingredient" placeholder="Ingredients" ref={ingredient} required/>
        <textarea
          name="directions"
          placeholder="Instructions"
          ref={directions}
          required
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

export default connect(state => state, actionCreators)(CreatePost);
