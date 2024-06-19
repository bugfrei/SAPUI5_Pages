sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
            },
            onBtn2Press: function() {
                let nc = this.getView().byId("app");
                let p1 = this.getView().byId("page1");
                nc.to(p1, "show");
            },
            onBtn1Press: function() {
                let nc = this.getView().byId("app");
                let p2 = this.getView().byId("page2");
                nc.to(p2, "show");
            }
        });
    });
