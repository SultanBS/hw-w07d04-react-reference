import React, { Component } from 'react';
import JSXInfo from './jsxInfo';
import ComponentInfo from './componentInfo';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <ComponentInfo/>
                <JSXInfo/>

            </div>
        )
    }
}

export default Content;