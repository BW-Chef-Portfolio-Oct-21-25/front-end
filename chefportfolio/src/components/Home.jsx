import React from 'react';
import { connect } from 'react-redux';

export function Home(props) {

    return (
        <div>Home</div>
    );
}

export default connect(state => state, {})(Home);