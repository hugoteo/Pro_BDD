
module.exports = function() {
    this.Given(/^I have a variable (.*)$/, function (username, callback) {

        browser.ignoreSynchronization = true;
        console.log(browser.params.login.baseUrl);
        browser.params.login.baseUrl = "123123123";
        callback();
    });


    this.When(/^I print the variable (.*)$/, function (username, callback) {
        console.log(browser.params.login.baseUrl);
        callback();

    });



};








