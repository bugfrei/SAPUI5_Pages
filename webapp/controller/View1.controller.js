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
                jQuery.sap.require('sap.m.NavContainer');
                jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');
                jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-effect')
                jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-effects-core');
                jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-effects-fade');
                
                        sap.m.NavContainer.transitions["custom"] = {
            
                    to: function(oFromPage, oToPage, fCallback) {
                        window.setTimeout(function(){
                            oFromPage.$().toggle("fade");
                            oToPage.$().toggle("fade");
                            fCallback();
                        },600);
                        
                    },
            
                    back: function(oFromPage, oToPage, fCallback) {
                        window.setTimeout(function(){
                            oFromPage.$().toggle("fade");
                            oToPage.$().toggle("fade");
                            fCallback();
                        },600);
                    }
            };/* code for transition */
            },
            onBtn2Press: function() {
                let nc = this.getView().byId("app");
                let p1 = this.getView().byId("page1");
                nc.to(p1, "custom");
            },
            onBtn1Press: function() {
                let nc = this.getView().byId("app");
                let p2 = this.getView().byId("page2");
                nc.to(p2, "custom");
            }
        });
    });
