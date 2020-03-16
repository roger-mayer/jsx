// Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create React Component
const App = () =>{
    return (
        <div>
        <label htmlFor="name">Enter Name</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>
    </div>)
};


// Take React Component and show on screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);