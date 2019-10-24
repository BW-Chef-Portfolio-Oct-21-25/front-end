import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import * as actions from '../state/actionCreators';
import SinglePost from './Post';

// export function Home({posts, getPosts, isFetching }) {
    export function Home(props) {
    const { getPosts, isFetching } = props;
    const { posts } = props;
    useEffect(() => {
        getPosts();
    }, []);

    // if(!singlePost) {
    //     return <div>Loading Post info...</div>
    // }
    return (
        <div className="post-main-container">
             <ul className="posts-list-container">
                {
                    posts.map((post) => (
                        <Link to={`post/${post.id}`} key={post.id}>
                         {/* <Link to='/post/:postId' key={post.id}> */}
                            <SinglePost 
                            key={post.id} post={post}
                            // imgURL={post.imgURL}
                            // title={post.title}
                            // total_time={post.total_time}
                            // serving={post.serving}
                            // cook_time={post.cook_time}                        
                        />
                        </Link>
                    ))
                }
            </ul>
            <main>
                {/* <Route exact path='/post/:postId' component={SinglePost} /> */}
                <Route exact path='/post/:postId' render={props => {
                    const { id } = props.match.params;
                    console.log(id);
                    const user = posts.find((usr) => usr.id == id)
                    console.log(user);
                    // return <div>The title is {user.title}</div>
                }} />
            </main>
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