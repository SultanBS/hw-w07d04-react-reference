import React, { Component } from 'react';


class LifeCycleInfo extends Component {
    render() {
        return (
            <div className="lifeCycleInfo">

                <h4>Life Cycle:</h4>
                <ul>
                    <li>Mounting</li>
                    <li>Updating</li>
                    <li>Unmounting</li>
                    <li>Error Handling</li>
                </ul>

                

            </div>
        )
    }
}

export default LifeCycleInfo;