import React, { useState } from "react";
import axiosWithAuth from '../axiosWithAuth/index';
import { connect } from 'react-redux';


 export const UpdateItem = props =>{
    const initialList = {
        title: '',
        chef: ''
        
    }

    const [updateId, setUpdateId]= useState(initialList);

    const id = props.match.paramas.id;

    const handleChange = e =>{
        e.preventDefault();
        setUpdateId({
            ...updateId,
            [e.target.name]: e.target.value
        });
    }

    const updatePost = e =>{
        e.preventDefault()
        axiosWithAuth().put('https://bwchefportfolio.herokuapp.com/api/users/post/:id', ...updateId)

        .then(res => {
            props.history.push('/home')
        })

        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div>
            <h1>Update Post</h1>
            <form onSubmit = {updatePost}>
                <input name="title" placeholder="Title" value ={updateId.title} onChange={handleChange}/>
                <input name="chef" placeholder="Chef" value ={updateId.chef} onChange={handleChange} />
                <input name="image_url" placeholder="Image Url" value={updateId.image_url} onChange={handleChange}/>
                <input name="description" placeholder="Description" value={updateId.description} onChange={handleChange}/>
                <select value={updateId.meal_type} onChange={handleChange}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Dessert</option>
                </select >
                <input name="ingredient" placeholder="Ingredients" value={updateId.ingredients} onChange={handleChange} />
                <input name="prep_time" placeholder="Prep Time" value={updateId.prep_time} onChange={handleChange}/>
                <input name="cook_time" placeholder="Cook Time"  value={updateId.cook_time} onChange={handleChange}/>
                <input name="total_time" placeholder="Total Time"  value={updateId.total_time} onChange={handleChange}/>
                <input name="oven_temp" placeholder="Oven Temperature" value={updateId.oven_temp} onChange={handleChange} />
                <input name="yield" placeholder="Yield"  value={updateId.yield} onChange={handleChange}/>
                <button className="button" type="submit">Update </button>

            </form>
        </div>
    )
}

export default connect(state => {
    console.log(state)
    return state;

})(UpdateItem)

