// Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create React Component
const App = () =>{
    return <div>Hi There!</div>;
}


// Take React Component and show on screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);