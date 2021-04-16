
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
                return cem.findElement(currentPage,'username').sendKeys(username);
            },

            setPassword: function (password) {
                return cem.findElement(currentPage,'password').sendKeys(password);
            },

            clickLogin: function () {
                return cem.findElement(currentPage,'password').sendKeys(protractor.Key.ENTER);
            },

            getLogin: function (url) {
                browser.ignoreSynchronization = true;
                browser.driver.get(url);

                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath('//*[@value="Sign in"]'));
                browser.wait(EC.visibilityOf(el), 5000);
                return browser.driver.isElementPresent(by.xpath('//*[@value="Sign in"]'));
            },

            checkHomePage: function() {
                browser.waitForAngular();
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath('//*[@id="headertext"]'));
                browser.wait(EC.visibilityOf(el), 30000);
                var title = cem.findElement('landingPage','title');
                return title.isPresent();

            },

            checkLoginFailErrorMessage: function () {
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath('//*[text()="Unable to verify email or password. Please try again."]'));
                browser.wait(EC.visibilityOf(el), 30000);

                var errorMessage = cem.findElement('loginPage','errorMessage');
                return errorMessage.isPresent();

            },

            checkLogout: function() {
                //browser.waitForAngular();
                return browser.driver.isElementPresent(by.name('password'));

            }
        }

    };

    module.exports = new LoginPage();

}());