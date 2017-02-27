var MenuItemModel = Backbone.Model.extend({
	urlRoot: './items',
	defaults: {
		name: '',
		category: 'Entery',
		imagepath: "./garden-salad.jpg"
	}
	// initialize: function(attributes) {
	// 	console.log(attributes);
	// }
})