import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';


export function ChefPortfolio (props, { user }){
    return(
        <div>
            {console.log(props)}
            <p>Chef Portfolio</p>
        </div>
    )
}
export default connect(state=>state, actionCreators)(ChefPortfolio)