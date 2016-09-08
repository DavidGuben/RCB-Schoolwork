var React = require('react');
var ReactDOM = require('react-dom');

var name = "World";
var sampleJSX = <p>Hello {name}</p>;
var foo = 9342042;


ReactDOM.render(

  <div>
  <h2>my name is {name}</h2>
  <h1>math can be done: {foo} + {foo} * {foo} = {foo + foo * foo}</h1>
  </div>,

  document.getElementById('target'));
