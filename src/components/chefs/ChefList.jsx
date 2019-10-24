import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../state/actionCreators';
import SingleChef from './SingleChef';

export function ChefList(props) {

    const { getAllChefs, isFetching } = props;
    const { chefs } = props;
    useEffect(() => {
        getAllChefs();
    }, []);

    return (
        <div className="chef-main-container">
             <ul className="chef-list-container">
                {
                    chefs.map((chef) => (
                        // <Link to={`https://bwchefportfolio.herokuapp.com/api/users/post/${post.id}`}>
                            <SingleChef 
                            key={chef.id}
                            imgURL={chef.imgURL}
                            title={chef.title}
                            total_time={chef.total_time}
                            serving={chef.serving}
                            cook_time={chef.cook_time}                        
                        />
                        // </Link>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chefs: state.posts.chefs,
    }
}

export default connect(mapStateToProps, actions)(ChefList);