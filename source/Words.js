/* Copyright 2011 Akanster, All rights reserved. */
enyo.kind({
	name: "Akanster.Words",
	kind: enyo.Pane,
	flex: 1,
	components: [
		{name: "blank", className: "enyo-bg", kind: "enyo.VFlexBox"},  // first view will be selected by default
		{name: "help", className: "enyo-bg", kind: "Akanster.AppView"},
		{name: "exhibition", className: "enyo-bg", kind: "Akanster.ExhibitionView"},
	],
	create: function() {
		this.inherited(arguments);
		
		// determine what view to display based on how app is launched
		if (window.PalmSystem && enyo.windowParams && enyo.windowParams.windowType == "dockModeWindow" && enyo.windowParams.dockMode == true) {
			this.selectViewByName("exhibition"); // Display exhibition
			this.$.exhibition.startQuotes();
		}
		else {
			this.selectViewByName("help");  // Display Help/About if launched manually! 
		}

		// render entire app div with custom text 
		Cufon.replace("#words");
	}
});