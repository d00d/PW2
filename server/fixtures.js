if (Stocks.find().count() === 0) {
	Stocks.insert({
		ticker: 'AAPL',
		url: 'https://www.youtube.com/watch?v=Kve1jq0psh8'
	});

	Stocks.insert({
		ticker: 'BMO',
		url: 'https://www.youtube.com/watch?v=Kve1jq0psh8'
	});
	
	Stocks.insert({
		ticker: 'NGLS',
		url: 'https://www.youtube.com/watch?v=Kve1jq0psh8'
	});
	
}