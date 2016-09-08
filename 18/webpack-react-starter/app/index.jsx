var React = require('react');
var ReactDOM = require('react-dom');

var name = "World";
var sampleJSX = <p>Hello {name}</p>;
var foo = 9342042;

var Header = require('./header.js');
var Footer = require('./footer.js');


ReactDOM.render(

  <div>
  <Header />
  <h2>my name is {name}</h2>
  <h1>math can be done: {foo} + {foo} * {foo} = {foo + foo * foo}</h1>
  <Footer />
  </div>,

  document.getElementById('target'));
