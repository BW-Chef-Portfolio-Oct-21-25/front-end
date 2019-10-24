import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../state/actionCreators';
import Chef from './Chef';

export function ChefList(props) {
    const { getAllChefs } = props;
    const { isFetching } = props.chefs
    const { chefs } = props.chefs.chefs;
    useEffect(() => {
        getAllChefs();
    }, []);

    if(!chefs) {
        return <div>Loading Chefs info...</div>
    }
    return (
        <div className="chef-main-container">
             <ul className="chef-list-container">
                {chefs.map((chef) => (
                    <Link to={`/chef/${chef.id}`} key={chef.id}>
                        <Chef key={chef.id} chef={chef} />
                    </Link>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chefs: state.chefs,
    }
}

export default connect(mapStateToProps, actions)(ChefList);