import React from 'react';
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';
import getPosts from '../state/actionCreators'
import Home from './Home';
import {Link} from 'react-router-dom';
import SinglePost from './Post';

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
                    <h1>{ `${chefRecipes[0].chef}` }</h1>

                    <div>
                        {
                            chefRecipes.map((post) => (
                                <Link to={`post/${post.id}`} key={post.id}>
                                    <SinglePost 
                                    key={post.id} post={post}                   
                                />
                                </Link>
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