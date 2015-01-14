var StoryListView = Backbone.View.extend({

  el: '#profile-pg-stories-container',

  template1: _.template($('#story-list-1-template').html()),

  template2: _.template($('#story-list-2-template').html()),

  initialize: function(options){
    this.template = this['template' + options.template_number];
    this.collection = options.collection;
    this.listenTo(this.collection, 'sync', this.render);
    this.render();
  },

  render: function(){
    this.$el.html(this.template({ stories: this.collection }));
  },

  events: {
    'click #submit-story-btn': 'createStory'
  },

  createStory: function(e){
    e.preventDefault();
    var title = this.$('[name="Title"]').val();
    var location = this.$('[name="Location"]').val();
    var description = this.$('[name="Description"]').val();
    var packlist = this.$('[name="PackList"]').val();
    this.collection.create({
      title: title,
      location: location,
      description: description,
      packlist: packlist
    });
  }

});
