import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../state/actionCreators';
import SinglePost from './Post';

// export function Home({posts, getPosts, isFetching }) {
    export function Home(props) {
    const { getPosts, isFetching } = props;
    const { posts } = props;
    useEffect(() => {
        getPosts();
    }, []);

    // if(isFetching && !posts.length ) {
    //     // debugger
    //     return <div>Loading...</div>
    // }
    return (
        <div className="post-main-container">
             <ul className="posts-list-container">
                {
                    posts.map((post) => (
                        <Link to={`https://bwchefportfolio.herokuapp.com/api/users/post/${post.id}`}>
                            <SinglePost 
                            key={post.id}
                            imgURL={post.imgURL}
                            title={post.title}
                            total_time={post.total_time}
                            serving={post.serving}
                            cook_time={post.cook_time}                        
                        />
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        // state,
    }
}

export default connect(mapStateToProps, actions)(Home);