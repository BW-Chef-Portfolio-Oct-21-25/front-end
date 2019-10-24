import React from 'react';
import Axios from 'axios';

export default function RecipeCard (props){
    const { recipe } = props

    return(
        <div>
            <img src = {recipe.img}/>
            <h2>{recipe.title}</h2>
            <p>{recipe.meal_type}</p>
            <p>{recipe.description}</p>
            <p>{recipe.ingredient}</p>
            <p>{recipe.directions}</p>
        </div>
    )
}