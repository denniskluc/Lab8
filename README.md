# Lab8_Starter

Authors: Dennis Luc and Behruz (Bruce) Haidrey

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

Answer: 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: No, because a unit test should be used to test just one component of the application, but the "message" feature includes multiple components of the application (writing and sending).

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Answer: Yes. As stated above, a unit test should be used to test just one component of the application, and here we are only testing the "max message length" feature. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

Answer: If we run our Puppeteer tests with the field "headless" set to true, the tests will be run without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

Answer: We would need to manually click on the settings icon before every test case. We can do so by adding `await page.click('header > img');` to our beforeAll callback, as the last line.

