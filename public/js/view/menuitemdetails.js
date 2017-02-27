var MenuDetail = Backbone.View.extend({
		initialize: function(attr, opt) {

			if(attr) {
				this.attr = attr;
			}
			this.listenTo(this.model, 'change', this.render)
		},
		template: Handlebars.compile(
			'<div><h1>{{name}}</h1>' +
			'<p><span class="lable">{{category}}</span></p>' +
			'<img src="photos/{{imagepath}}" class="img-polaroid" />' +
			'</div>' +
			'<p></p>' +
			'<button type="button" class="btn btn-danger">DeleteItem</button>'
		),
		deleteItem: function() {
			this.model.destroy({
				success: function(model) {
					console.log(model.get('id'));
					appRout.itemsCollections.remove(model.get('id'));
					appRout.navigate("", {trigger: true})
				}
			})
		},
		render: function () {
		this.$el.html(this.template(this.model.attributes));
		this.delegateEvents({
			'click .btn-danger': 'deleteItem'
		})
		return this;
	}
});