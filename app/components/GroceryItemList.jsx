var React = require('react/addons');

module.exports = React.createClass({
	render:function() {
		return {
			<div>
				<h1> Grocery Litify</h1>
				<div>
					{this.props.items.map(function(item,index){
						return (
								{item.name}
							)
					})
					}
				</div>
			</div>
		}
	}
})