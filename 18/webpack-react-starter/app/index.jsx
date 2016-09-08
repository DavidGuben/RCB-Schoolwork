var React = require('react');
var ReactDOM = require('react-dom');

var name = "world";
var sampleJSX = <p>Hello {name}</p>;

ReactDOM.render(sampleJSX, document.getElementById('target'));
