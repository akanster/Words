/* Copyright 2011 Akanster, All rights reserved. */
enyo.kind({
	name: "Akanster.ExhibitionView",
	className: "exhibition", 
	kind: enyo.Scroller,
	autoHorizontal: false,
	horizontal: false, 
	components: [
		{name: "getQuote", url: "data/quoteDB.json", kind: "WebService", onSuccess: "quoteSuccess", onFailure: "quoteFailure"},
		{allowHtml: "true", name: "quotePad", className: "quote-pad"}
	],
	create: function() { 
		this.inherited(arguments); 
		this.quotes = [];
	},
	startQuotes: function() { // this will be called when the view is selected
		this.log("QUOTES STARTED!!");
		this.$.getQuote.call();
	},
	quoteSuccess: function(inSender, inResponse, inRequest) {
		this.quotes = inResponse.results;
		
		// randomize quotes array
		this.quotes.sort(function() {return 0.5 - Math.random()});
		// or return (Math.round(Math.random())-0.5);
		
		this.log("Total Number of quotes: " + this.quotes.length);
		this.displayQuote();
		this.intervalID = setInterval(enyo.bind(this, this.displayQuote), 8000); // 5000 == 5 secs
	},
	quoteFailure: function(inSender, inResponse, inRequest) {
		// TODO: handle failure gracefully. Print error to the user!
		console.log("got failure from getQuote");
	},
	displayQuote: function() {
		var i = Math.floor(Math.random() * this.quotes.length) //random number between 0 and results length
		this.$.quotePad.setContent(this.quotes[i].quote + " <br /> <br /> " + this.quotes[i].author);
		
		this.log(this.quotes[i].quote + " by " + this.quotes[i].author);
		//this.log("Number of quotes: " + (this.quotes.length - 1));
		this.log("Displaying quote #: " + i + " of " + this.quotes.length);
	}
});