Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('stocks'); }
});

Router.route('/', {name: 'stocksList'});

Router.route('/stocks/:ticker', {
  name: 'stockPage',
  data: function() {return Stocks.findOne({ticker: this.params.ticker}); }

});
Router.route('/edit', {name: 'stockEdit'});

var requireLogin = function() { if (! Meteor.user()) {
this.render('accessDenied'); } else {
this.next(); }
}

Router.onBeforeAction('dataNotFound', {only: 'stockPage'});
Router.onBeforeAction(requireLogin, {only: 'stockEdit'});