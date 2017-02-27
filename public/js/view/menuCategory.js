var MenuCategory = Backbone.View.extend({
	initialize: function(attr) {
		if(attr) {
			this.attr = attr;
		}
	},
	template: Handlebars.compile(
		'<h1>{{category}}</h1>' + 
		'{{#each images}}' + 
		'<img src="photos/{{this}}" class="img-poliroid">' +
		'{{/each}}'
	),
	render: function() {
		this.$el.html(this.template(this.attr));
		return this
	}
})