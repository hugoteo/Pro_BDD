
(function () {
    'use strict';

    var chart = require('ProUI-Utils').HighChart;
    var hem = new ElementManager('../../../Test_Modules/Highchart/highchart-element-repo.json');
    var section;

    var HighchartPage = function () {

        return {

            setChart: function () {
                section = hem.findElement('lineChartPage', 'lineChartContainer');
                chart.setChartElements(section);
            },

            isChartVisibile: function () {
                return chart.isChartDisplayed();
            },

            getXAxisLabels: function () {
                return chart.getXaxisLabels();
            },

            getYAxisLabels: function () {
                return chart.getYaxisLabels();
            },

            getYaxisText: function () {
            	return chart.getYaxisText();
            },

            getLegends: function() {
                return chart.getLegendsFromSVG();
            },

            getChartData: function(index_data) {
                return chart.getData(index_data);
            },

            compareData: function(data) {
                return chart.compareData(data);
            }

        }

    };

    module.exports = new HighchartPage();

}());