import React from 'react';
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';

export function ChefPortfolio (){
    return(
        <div>
            <p>Chef Portfolio</p>
        </div>
    )
}

export default connect(state => state, actionCreators)(ChefPortfolio)