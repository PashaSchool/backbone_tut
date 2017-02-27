var MenuItemForm = Backbone.View.extend({
    template: Handlebars.compile(
        '<form action="" class="form-horizontal">' +
        '<fieldset>' +
        '  <legend>New menu Item</legend>' +
        '  <div class="control-group">' +
        '      <input type="text" name="name" placeholder="name">' +
        '  </div>' +
        '  <div class="control-group">' +
        '      <input type="text" name="category" placeholder="category">' +
        '  </div>' +
        '  <div class="control-group">' +
        '      <input type="text" name="url" placeholder="URL">' +
        '  </div>' +
        '  <div class="control-group">' +
        '      <input type="text" name="imagepath" placeholder="Path to img">' +
        '  </div>' +
        '  <button class="btn" type="button">Cansel</button>' +
        '  <button class="btn btn-primary" type="button">Save</button>' +
        '</fieldset>' +
        '</form>'),

    setModelData: function() {
        this.model.set({
            name: this.$el.find("[name='name']").val(),
            category: this.$el.find("[name='category']").val(),
            url: this.$el.find("[name='url']").val(),
            id: null,
            imagepath: this.$el.find("[name='imagepath']").val()
        })
    },
    save: function() {
        this.setModelData();
        this.model.save(this.model.attributes, {
            success: function(model) {
                console.log(model.get('id'));
                appRout.itemsCollections.add(model);
                appRout.navigate('menu-items/' + model.get('url'), { trigger: true });
            }
        })
    },
    render: function() {
        this.$el.html(this.template());
        this.delegateEvents({
            'click .btn-primary': "save"
        });
        return this
    }

})
