var MenuItems = Backbone.Collection.extend({
	comparator: function(a, b) {
		if(a.get('name') > b.get('name')) {
			return 1;
		}else if(a.get('name') < b.get('name')) {
			return -1;
		}
	},
	model: MenuItemModel,
	url: '/items'
})