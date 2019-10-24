import React, { useRef } from "react";
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
    const chef_id = localStorage.getItem('userID');
    const recipeID = props.match.params.id;

  const updatePost = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://bwchefportfolio.herokuapp.com/api/users/post/${recipeID}`,{
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
      })
      .then(res => {
          alert(res.data.message)
          props.history.push('/portfolio')
        })
      .catch(err => console.log(err));
  };

  return (
    <div className='create_post'>
        <form>
        <h1>Update Recipe</h1>
        <input name="title" placeholder="Title" ref={title} />
        <input name="chef" placeholder="Chef" ref={chef} />
        {/* <input type='file' ref={imgURL}/> */}
        {/* <input name="file" placeholder="Image URL" ref={imgURL} type='file'/> */}
        {/* <button onClick={upload}>Upload</button> */}
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
        <button onClick={updatePost}>Submit</button>
      </form>
      </div>
  );
};

//  export const UpdateItem = props =>{
//     const initialList = {
//         title: '',
//         chef: ''

//     }

//     const [updateId, setUpdateId]= useState(initialList);

//     const id = props.match.params.id;

//     const handleChange = e =>{
//         e.preventDefault();
//         setUpdateId({
//             ...updateId,
//             [e.target.name]: e.target.value
//         });
//     }

//     const updatePost = e =>{
//         e.preventDefault()
//         axiosWithAuth().put('https://bwchefportfolio.herokuapp.com/api/users/post/:id', ...updateId)

//         .then(res => {
//             props.history.push('/home')
//         })

//         .catch(error => {
//             console.log(error)
//         })
//     }

//     return(
//         <div>
//             <h1>Update Post</h1>
//             <form onSubmit = {updatePost}>
//                 <input name="title" placeholder="Title" value ={updateId.title} onChange={handleChange}/>
//                 <input name="chef" placeholder="Chef" value ={updateId.chef} onChange={handleChange} />
//                 <input name="image_url" placeholder="Image Url" value={updateId.image_url} onChange={handleChange}/>
//                 <input name="description" placeholder="Description" value={updateId.description} onChange={handleChange}/>
//                 <select value={updateId.meal_type} onChange={handleChange}>
//                 <option>Breakfast</option>
//                 <option>Lunch</option>
//                 <option>Dinner</option>
//                 <option>Dessert</option>
//                 </select >
//                 <input name="ingredient" placeholder="Ingredients" value={updateId.ingredients} onChange={handleChange} />
//                 <input name="prep_time" placeholder="Prep Time" value={updateId.prep_time} onChange={handleChange}/>
//                 <input name="cook_time" placeholder="Cook Time"  value={updateId.cook_time} onChange={handleChange}/>
//                 <input name="total_time" placeholder="Total Time"  value={updateId.total_time} onChange={handleChange}/>
//                 <input name="oven_temp" placeholder="Oven Temperature" value={updateId.oven_temp} onChange={handleChange} />
//                 <input name="yield" placeholder="Yield"  value={updateId.yield} onChange={handleChange}/>
//                 <button className="button" type="submit">Update </button>

//             </form>
//         </div>
//     )
// }

export default connect(
  state => state,
  {}
)(UpdateItem);
