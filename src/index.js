// Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create React Component

const App = () =>{
    const buttonText = 'Click Me';
    const labelText = 'Enter Name: ';
    function getTime() {
        return (new Date()).toLocaleTimeString()
    }
    return (
        <div>
        <label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color:'white'}}>
            {buttonText}
        </button>
            <br/><br/>
                <div><h3> Current Time: {getTime()}</h3>
                </div>
    </div>)
};
//test

// Take React Component and show on screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);