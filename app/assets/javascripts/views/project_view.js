app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: _.template($('#project-template').html()),
  events: {
    'dblclick .project-name': 'editProjectName',
    'dblclick .body' : 'editDescription',
    'keypress .edit-body' : 'updateDescription',
    'keypress .edit-title': 'updateTitle',
    'click .remove-project': 'trashIt'
  },

  render: function() {
    this.$el.html(this.template({project: this.model}));
    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  editDescription: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-body').show().focus().prev('div').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
  } else {
    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  }
  },
  updateDescription: function(){
    var new_description = this.$el.find('.edit-body').val().trim();
    if(event.which !== 13 || !new_description){
      this.save();
      return;
    }else {
    this.model.set('description', new_description);
    this.model.save();
    this.$el.find('.edit-body').val('').hide().prev('div').show().html(new_description);
  }
},
  trashIt: function() {
    this.$el.hide();
    this.model.destroy();
  }
});
