import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../axiosWithAuth';

export default function SingleChef (props) {
    console.log(props);

    const [singleChef, setSingleChef] = useState({});

    const id = props.match.params.id;

    useEffect(() => {
        axiosWithAuth()
            .get(`https://bwchefportfolio.herokuapp.com/api/users/chef/${id}`)
            .then(res => {
                console.log(res.data.chef);
                setSingleChef(res.data.chef);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);
    
    if(!singleChef) {
        return <div>Loading Chef Info...</div>
    }
    
    const { first_name, last_name, chef_type, city, zip_code } = singleChef;
    return (
        <div>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{chef_type}</p>
            <p>{city}</p>
            <p>{zip_code}</p>
        </div>
    )
}