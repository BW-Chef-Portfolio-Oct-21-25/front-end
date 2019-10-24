import React, { useEffect } from 'react';
import { getSinglePost } from '../state/actionCreators';

export default function SinglePost({ post }) {

    return (
        <div className="list-card">
            <div className="img-container">
                <img src={post.imgURL}/>
            </div>
            <div className="post-info-container">
                <p className="title">{post.title}</p>
                <p className="others">Total Preparation Time: {post.total_time}</p>
                <p className="cook-time">Cooking Time: {post.cook_time}</p>
                <p className="others">No of Servings: {post.serving}</p>
            </div>
        </div>
    )
}