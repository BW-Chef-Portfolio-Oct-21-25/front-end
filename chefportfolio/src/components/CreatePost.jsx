import React from 'react';
import { connect } from 'react-redux';

export function CreatePost(props){
    return(
        <div>Create Post</div>
    );
}

export default connect(state => state)(CreatePost);