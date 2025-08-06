sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/odata/v2/ODataModel"
], (Controller, JSONModel, Filter, FilterOperator, ODataModel) => {
    "use strict";
    var that;
    return Controller.extend("employeedashboard.controller.View2", {
        onInit() {
            that = this;
            this.oEventBus = this.getOwnerComponent().getEventBus();
            this.oEventBus.subscribe("flexible", "setView2", this.setDetailView, this);
        },

        getData: function (eId) {
            // var oComponent = this.getOwnerComponent();
            var oModel = this.getOwnerComponent().getModel();
            var oFilter = new Filter("emp_id", FilterOperator.EQ, eId);

            oModel.read("/EMP_DASHBOARD", {
                filters: [oFilter],
                success: function (oData) {
                    console.log(oData);
                    var oFilteredModel = new JSONModel({
                        items: oData.results
                    })
                    this.getView().setModel(oFilteredModel, "dataModel");
                    // var length = this.byId("table2").getBinding("items").getLength()
                    // console.log(length);
                    // this.byId("table2").setModel(oFilteredModel);
                }.bind(this),
                error(err) {
                    console.log(err);
                }
            })
        },

        onAfterRendering: function () {
            var oGlobalModel = this.getOwnerComponent().getModel("globalModel");
            var eId = oGlobalModel.getProperty("/e_Id");
            this.getData(eId);
        },

        setDetailView: function (sChannel, sEventId, oData) {
            var eId = oData.id;
            this.getData(eId);
        },

        onClose: function () {
            this.oEventBus.publish("flexible", "setView1");
        }
    });
});