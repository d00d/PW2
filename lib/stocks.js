Stocks = new Mongo.Collection('stocks');

Stocks.allow({
insert: function(userId, doc) {
    // only allow posting if you are logged in
return !! userId; }
});