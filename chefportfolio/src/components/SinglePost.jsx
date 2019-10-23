import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { getSinglePost } from '../state/actionCreators';

export default function SingleNewPost (props) {
    const [singlePost, setSinglePost] = useState(null);

     const { id }= props.match.params.id;

    // useEffect(() => {
    //     getSinglePost();
    // }, [id]);
    useEffect(() => {
        Axios
            .get(`https://bwchefportfolio.herokuapp.com/api/users/post${id}`)
            .then(res => {
                setSinglePost(res.data);
            })
            .catch(err => {
                console.error(err);
            });
        }, [id]);

        if(!singlePost) {
            return <div>Loading Post info...</div>
        }

    const { imgURL, title, yield, serving, total_time, cook_time} = singlePost;

    return (
        <div>
            <h4>{title}</h4>
            <p>{yield}</p>
            <p>{serving}</p>
            <p>{total_time}</p>
            <p>{cook_time}</p>
        </div>
    )
}