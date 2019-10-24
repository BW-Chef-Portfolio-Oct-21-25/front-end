import React from 'react';
import { Link } from 'react-router-dom'


export default class Success extends React.Component {
    render (){
        return(
            <div>
                <h1>Sign Up Successful</h1>
                <h4>You can now log in<Link to = "/login">here</Link></h4>
            </div>
        )
    }
}