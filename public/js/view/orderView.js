var OrderView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h1>Order List</h1>' +
		'{{#each models}}' + 
		'<img src="photos/{{attributes.imagepath}}">' +
		'{{/each}}'
		),
	render: function() {
		this.$el.html(this.template(this.collection));
		return this;
	}
})