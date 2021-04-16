
(function () {
    'use strict';


    var currentPage = 'loginPage';


    var LoginPage = function () {

        return {

            get: function () {
                return browser.driver.get(browser.params.login.baseUrl);
                browser.waitForAngular();
            },

            setName: function (username) {
                return elementManager.findElement(currentPage,'username').sendKeys(username);
            },

            setPassword: function (password) {
                return elementManager.findElement(currentPage,'password').sendKeys(password);
            },

            clickLogin: function () {
                return elementManager.findElement(currentPage,'password').sendKeys(protractor.Key.ENTER);
            },

            getLogin: function (url) {
                browser.driver.get(browser.params.login.baseUrl)
                return browser.driver.isElementPresent(by.xpath('//*[@value="Sign in"]'));
            },

            checkHomePage: function() {
                browser.waitForAngular();
                var title = elementManager.findElement('landingPage','assetTab');
                return title.isPresent();

            },

            checkLogout: function() {
                //browser.waitForAngular();
                return browser.driver.isElementPresent(by.name('password'));

            }
        }

    };

    module.exports = new LoginPage();

}());