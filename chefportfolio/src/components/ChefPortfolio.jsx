import React from 'react';
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';

export function ChefPortfolio(props){
    return(
        <div>
        </div>
    )
}

export default connect(state => state, actionCreators)(ChefPortfolio)