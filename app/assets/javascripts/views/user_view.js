app.views.UserView = Backbone.View.extend({
//we need to tell the view what element and class it's going to be
  className: 'bio',
  tagName: 'div',
  id: 'bio',
  template:_.template($('#user-template').html()),
  render: function() {

    //1. Render the template
    var html = this.template({
      user: (this.model)
  });
    // $('#bio').html(html);
    this.$el.html(html);
    //2. Connect this view's element to the DOM
    //el is the underlying DOM tree that we've created
    $('#user-placeholder').html(this.$el);
    return this;
  }
});