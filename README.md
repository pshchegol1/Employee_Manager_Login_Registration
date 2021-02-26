# Employee_Manager_Login_Registration

# About
This app alows you to register a user. Once you register through the **Register** page, the data will go to the users.json file and will redirect you to the **login** page. On the **login** page , you will enter your registered information. Once you provide correct information, you will be redirected to the **dashboard** page.

# How to use the App

If you are not registerd yet, click the **Signup** button. Once you click the button, you will be redirected to the **Register** page where you can provide the necessary information. After you filled everything, click on the **Register** button. The data that you've entered will be saved into the json.file
and you will be redirected to the **login** page.

# Validation

Forms will not allow you to submit empty data.

On the **Login** page, if you will try to enter irrelevant information, the **express validator** will display an array of errors on a different page.

If you enter the correct email but incorrect password, you will get an error message that will say : *password doesn't seem to be correct*

If you enter the correct password but incorrect email, you will get an error message that will say : *email doesn't seem to be correct*

# Installation

- Download the project from [GitHub](https://github.com/pshchegol1/Employee_Manager_Login_Registration)

- Then, open it on your machine by using VS CODE.
- Bring the terminal and enter: 
                    1. npm init
                    2. npm install
                    3. npm run server or npm run start

**nmp run server and npm run start are the scripts in package.json that will start the project**


