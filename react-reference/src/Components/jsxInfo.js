import React, { Component } from 'react';


class JSXInfo extends Component {
    render() {
        return (
            <div className="jsx">
                <h2>JSX:</h2>
                <p>Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. </p>

                <h4>The JSX code:</h4>
                <p>- JSX is special for react which stands for "Javascript and XML" and JSX is combinathion from these two to writ HTML an JS in one file.</p>

            </div>
        );
    }
}

export default JSXInfo;