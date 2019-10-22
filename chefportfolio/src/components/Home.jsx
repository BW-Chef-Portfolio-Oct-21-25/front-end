import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../state/actionCreators';
import SinglePost from './Post';

export function Home(props) {
    // const { posts } = useSelector( state => state.posts);
    const { posts, getPosts, isFetching } = props;
    // const dispatch = useDispatch();

    useEffect(() => {
        getPosts();
    }, [])

    // if(isFetching && !posts.length ) {
    //     // debugger
    //     return <div>Loading...</div>
    // }

    console.log(posts);
// console.log(props)
    return (
        <div>
         {console.log(posts)}

             <ul>
                {
                    posts.map((post) => (
                        <SinglePost 
                            key={post.id}
                            imgURL={post.imgURL}
                            title={post.title}
                            total_time={post.total_time}
                            serving={post.serving}
                            cook_time={post.cook_time}                        
                        />
                    ))
                }
            </ul>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps, actions)(Home);