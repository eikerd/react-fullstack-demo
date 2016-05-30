var React = require('react');
var ReactDOM = require('react-dom');

console.log("hellow JSX idio");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
	name:"Ice Cream"
},{
	name:"Wafles"
},{
	name:"Candy",
	purchased:true
},{
	name:"Snarks",
}];

ReactDOM.render(<GroceryItemList items={initial} />, app);