import React, {useState} from 'react';
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';
import getPosts from '../state/actionCreators'
import {Link} from 'react-router-dom';
import SinglePost from './Post';
import axiosWithAuth from '../axiosWithAuth/index'


class ChefPortfolio extends React.Component {
    componentDidMount(){
        this.props.getPosts()
    }

 

    render(){

        
        const chef_id = localStorage.getItem('userID');
        const chefRecipes = this.props.posts.filter(recipe => {
            return recipe.chef_id == chef_id
        })

        if(this.props.posts.length){
        

            return(
                <div>
                    
                    <h1>Welcome!</h1>

                    <div>
                        {
                            chefRecipes.map((post) => (
                                <div>
                                <Link to={`post/${post.id}`} key={post.id}>
                                    <SinglePost 
                                    key={post.id} post={post}                   
                                />
                                </Link>
                                <Link to = {`/updateitem/${post.id}`}>Button</Link>
                                </div>
                            ))

                        }
                        

                    </div>
                </div>
            )

            
        }

        else{
            return null
        }

    }
}





const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps, actionCreators)(ChefPortfolio)
