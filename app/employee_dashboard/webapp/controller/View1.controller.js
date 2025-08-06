sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    var that;
    return Controller.extend("employeedashboard.controller.View1", {
        onInit() {
            that = this;
            that.oEventBus = that.getOwnerComponent().getEventBus();
        },
        onRowSelection: function(oEvent){
            var oSelected = oEvent.getSource().getBindingContext().getObject();
            var oModel = that.getOwnerComponent().getModel();
            var empId = oSelected.emp_id;

            var OGModel = that.getOwnerComponent().getModel("globalModel");
            OGModel.setProperty("/e_Id",empId);

            that.oEventBus.publish("flexible","setView2",{
                id : empId
            });
        }
    });
});