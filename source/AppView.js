/* Copyright 2011 Akanster, All rights reserved. */
enyo.kind({
	name: "Akanster.AppView",
	className: "help", 
	kind: enyo.VFlexBox,
	components: [
		{kind: "ApplicationEvents", onLoad: "onload", onUnload: "unload"},
		{kind: "HFlexBox", className: "help-heading", flex: 1, components: [
			{flex: 1},
			{content: "Words"},
			{flex: 1}
		]},
		{kind: "HFlexBox", className: "help-body", flex: 1, components: [
			{flex: 1},
			{content: "Words works in exhibition mode only.   <br /> Close the app and then run Exhibition Mode and enable Words to see it in action. <br />  <br /> Send feedback & comments to support@akanster.com"},
			{flex: 1}
		]},
	],
	rendered: function() {
		// is this function still needed?
	},
	onload:function() {
		this.log();
	},
	unload:function() {
		this.log();
		var winRoot = enyo.windows.getRootWindow();
		if(winRoot)
			enyo.windows.setWindowParams(winRoot, {source:this.name, cmd: "unload"});
	}
});