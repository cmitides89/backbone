app.models.Project = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio'),

  initialize: function() {
    this.bind("change", this.updateTitle);
  },

  updateTitle: function() {
    this.attributes.title();
  },

  updateDescription: function() {
    this.attributes.description();
  }


  // validate: function() {
  //   if(this.attributes.url === "") {
  //     return "Argh!";
  //   }
  // }

});