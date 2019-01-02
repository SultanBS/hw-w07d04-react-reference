import React, { Component } from 'react';
import PropsInfo from './propsInfo';
import StateInfo from './stateInfo';
import LifeCycleInfo from './lifeCycleInfo';


class ComponentInfo extends Component {
    render() {
        return (
            <div className="componentInfo">

                <h2>Components:</h2>
                <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>

                <PropsInfo/>
                <StateInfo/>
                <LifeCycleInfo/>


            </div>
        )
    }
}

export default ComponentInfo;