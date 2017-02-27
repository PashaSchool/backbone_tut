var AppRouter = Backbone.Router.extend({
    routes: {
        "": "item",
        "menu-items/new": "menuItemNew",
        "menu-items/:item": "menuItemNewDetail",
        "categories/:category": "categoryDetails",
        "orders/:item":"orderItem"
    },
    initialize: function(){
        this.itemsCollections = new MenuItems();
        this.itemsCollections.fetch();

        this.orderItems = new MenuItems();
        this.orderView = new OrderView({collection: this.orderItems});
        // console.log(this.orderView);

        this.menuItemModel = new MenuItemModel();

        this.menuDetail = new MenuDetail({
            model: this.menuItemModel
        });

        this.menuItemForm = new MenuItemForm({model: new MenuItemModel});

        // this.menuItemListModel = new MenuListItemModel();
        // this.menuItem = new MenuItem({
        //    model: this.menuItemListModel
        // });
        this.menuItem = new MenuItem({collection: this.itemsCollections});
        this.menuCategory = new MenuCategory({
            category: 'Entree',
            images: ['carrots.jpg', 'cheesecake.jpg', 'pizza.jpg']
        })
    },
    orderItem: function(item) {
        var menuItem = this.itemsCollections.get(item);
        console.log(menuItem);
        this.orderItems.add(menuItem);
        $("#app").html(this.orderView.render().el)
    },

    categoryDetails: function(category) {
        this.menuCategory.attr.category = category;
        $("#app").html(this.menuCategory.render().el)
    },

    item: function() {
        $("#app").html(this.menuItem.render().el);
    },

    menuItemNew: function() {
        $("#app").html(this.menuItemForm.render().el);
    },

    menuItemNewDetail: function(item) {
        // this.menuItemModel.set('id', item);
        // this.menuItemModel.fetch();
        this.menuDetail.model = this.itemsCollections.get(item);
        $("#app").html(this.menuDetail.render().el)
    }

});

var appRout = new AppRouter();

$(function() {
    Backbone.history.start()
});
