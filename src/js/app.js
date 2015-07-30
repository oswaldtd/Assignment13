(function() {

  var Service = Backbone.Model.extend({

    defaults:{
      title: 'My service',
      price: 100,
      checked: false
    },

    toggle: function() {
      this.set('checked', !this.get('checked'));
    }
  });

  var ServiceList = Backbone.Collection.extend({

    model: Service,

    getChecked: function() {
      return this.where({checked:true});
    }
  });

  var services = new ServiceList([
    new Service({ title: 'UX Analysis& Consulting', price: 8000}),
    new Service({ title: 'Visual Design', price: 4000}),
    new Service({ title: 'Usability Testing', price: 7000}),
    new Service({ title: 'Wireframing', price: 2000}),
    new Service({ title: 'UI Testing', price: 5000}),
    new Service({ title: 'Research', price: 3000}),
    new Service({ title: 'Front End Dev', price: 6000}),
    new Service({ title: 'Back End Dev', price: 6000})
	]);

  var ServiceView = Backbone.View.extend({
    tagName: 'li',

    events:{
      click: 'toggleService'
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
      this.$('input').prop('checked', this.model.get('checked'));

      return this;
    },

    toggleService: function() {
      this.model.toggle();
    }
  });

  var App = Backbone.View.extend({

    el: $('#main'),

    initialize: function() {
      this.total = $('#total span');
      this.list = $('#services');
      this.listenTo(services, 'change', this.render);

      services.each(function(service) {

        var view = new ServiceView({ model: service });
        this.list.append(view.render().el);

      }, this);
    },

    render: function() {
      var total = 0;
      _.each(services.getChecked(), function(elem) {
        total += elem.get('price');
      });

      this.total.text('$' + total);
      return this;
    }
  });

  new App();

});
