var React = require('react-addons');

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

React.render(<GroceryItemList items={inistial}/>,app)