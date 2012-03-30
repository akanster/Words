enyo.kind({
   name:"Akanster.BaseApp",
   kind:"Component",
   appWindow:null,
   dockWindow:null,
   components:[
      {kind: "ApplicationEvents", onLoad:"onload", onUnload:"unload",
      onApplicationRelaunch: "onload",
      onWindowParamsChange: "windowParamsChangeHandler"},
   ],
   create: function(){
      this.inherited(arguments);
      this.log();
   },
   windowParamsChangeHandler: function() {
		if (enyo.windowParams.cmd == "unload") {
			this.log(enyo.windowParams.source+" closed");
			if(enyo.windowParams.source == "appView") {
				this.appWindow = null;
			}
			if (enyo.windowParams.source == "exhibitionView") {
				this.dockWindow = null;
			}
		}
   },
	onload:function(){
		this.log(enyo.windowParams);
		if (enyo.windowParams && enyo.windowParams.windowType == "dockModeWindow" && enyo.windowParams.dockMode == true) {
			if (this.dockWindow) {
				this.log("dock view exists")
				enyo.windows.activateWindow(this.dockWindow);
			} else {
				this.dockWindow = enyo.windows.openWindow("exhibitionview.html", "Akanster.ExhibitionView",{},{window:"dockMode"});
			}
		} else
			if (this.appWindow) {
				this.log("app view exists")
				enyo.windows.activateWindow(this.appWindow);
			} else {
				this.appWindow = enyo.windows.openWindow("appview.html", "Akanster.AppView",{});
			}
	},
	appRelaunch: function(){
		this.log();
	},
	unload: function(){
		this.log();
	}
})