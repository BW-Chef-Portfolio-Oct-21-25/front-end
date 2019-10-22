import React, { useEffect } from 'react';
import { getSinglePost } from '../state/actionCreators';

export default function SinglePost(props) {
    
    // const id = props.match.params.id;

    // useEffect(() => {
    //     getSinglePost();
    // }, [id]);

    return (
        <div className="list-card">
            <div className="img-container">
                <img src={props.imgURL}/>
            </div>
            <div className="post-info-container">
                <p className="title">{props.title}</p>
                <p className="others">Total Preparation Time: {props.total_time}</p>
                <p className="cook-time">Cooking Time: {props.cook_time}</p>
                <p className="others">No of Servings: {props.serving}</p>
            </div>
        </div>
    )
}