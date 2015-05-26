Template.stockSubmit.events({ 'submit form': function(e) {
    e.preventDefault();
var stock = {
	ticker: $(e.target).find('[name=ticker]').val(), 
	url: $(e.target).find('[name=url]').val(), 
	isPosition: $(e.target).find('[name=isPosition]').val()
};
Stock.ticker = Stocks.insert(stock);
    Router.go('stockEdit', post);
  }
});