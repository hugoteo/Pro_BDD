
(function () {
    //'use strict';

    var currentPage = 'highChartsDemopage';
    //var chart = require('../../Utils/HighChart.js');
    var chart = require('ProUI-Utils').HighChart;
    var section;

    var WFVPage = function () {

        return {

            setChart: function () {
                section = elementManager.findElement(currentPage, 'timeSeriesClicked');
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
            getCSV: function() {
                return chart.getCSVData();
            }
        }

    };

    module.exports = new WFVPage();

}());