Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('stocks'); }
});

Router.route('/', {name: 'stocksList'});
Router.route('/stocks/:_id', {
  name: 'stockPage',
  data: function() {return Stocks.findOne(this.params._id); }
});