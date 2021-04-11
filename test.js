// test.js
// Will run selenium tests to ensure that url loads properly
// This will lay framework if automated testing is needed in the future
// Theoretically this could be set up on a nightly run to ensure the site is not down

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const driver = new webdriver.Builder().forBrowser('firefox')
    .build();
// loading page
(async function(){

// Apply timeout for 10 seconds
    await driver.manage().setTimeouts( { implicit: 10000 } );

// Navigate to url
    await driver.get('http://localhost:3001');
// Testing if page loads
    await driver.getTitle().then(function(title){
        console.log(title == "MIA Example" ? "Verification Successful - Web page for MIA.":
            "Verification Failed - MIA Example failed to load.");
    });

}());