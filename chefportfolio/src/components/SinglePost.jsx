import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function SingleNewPost (props) {
    const [singlePost, setSinglePost] = useState({});

    const id = props.match.params.postId;

    useEffect(() => {
        Axios
            .get(`https://bwchefportfolio.herokuapp.com/api/users/post/${id}`)
            .then(res => {
                console.log(res.data.post)
                setSinglePost(res.data.post);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);


    if(!singlePost) {
        return <div>Loading Post Info...</div>
    }
    const { ingredient, title, serving, total_time, cook_time } = singlePost;
    return (
        <div>
            <h4>{title}</h4>
            <p>{ingredient}</p>
            <p>{serving}</p>
            <p>{total_time}</p>
            <p>{cook_time}</p>
        </div>
    )
}