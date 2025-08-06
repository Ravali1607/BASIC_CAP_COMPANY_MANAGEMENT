sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/f/library",
  "sap/ui/core/mvc/XMLView"
], (BaseController, fioriLibrary, XMLView) => {
  "use strict";

  return BaseController.extend("employeedashboard.controller.App", {
    onInit() {
      this.oEventBus = this.getOwnerComponent().getEventBus();
      this.oEventBus.subscribe("flexible","setView1",this.setView1,this);
      this.oEventBus.subscribe("flexible","setView2",this.setView2,this);
      this.oFlexible = this.byId("fcl");
    },
    setView1 : function(){
      this._loadView({
        id: "beginView",
        viewName: "employeedashboard.view.View1",
      }).then(function(View1) {
        this.oFlexible.addMidColumnPage(View1);
        this.oFlexible.setLayout(fioriLibrary.LayoutType.OneColumn);
      }.bind(this));
    },
    setView2 : function(){
      this._loadView({
        id: "midView",
        viewName: "employeedashboard.view.View2",
      }).then(function(View2) {
        this.oFlexible.addMidColumnPage(View2);
        this.oFlexible.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
      }.bind(this));
    },
    _loadView: function(options) {
      var mViews = this._mViews = this._mViews || Object.create(null);
      if (!mViews[options.id]) {
        mViews[options.id] = this.getOwnerComponent().runAsOwner(function() {
          return XMLView.create(options);
        });
      }
      return mViews[options.id];
    }
  });
});