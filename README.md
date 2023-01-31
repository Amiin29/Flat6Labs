![Logo](https://dev.f6l-new.mobelite.fr/assets/images/logo/logo-black.svg)

# Table of Contents
1. [Features](#Features)
2. [Installing](#Installing)
3. [Environment Variables](#Environment-Variables)
4. [Run-Locally](#Run-Locally)
5. [Achitecture of the project](#Achitecture-of-the-project)
6. [Screenshots of the different cypress interfaces for test results](#Screenshots-of-the-different-cypress-interfaces-for-test-results) 
7. [Documentation](#Documentation)


## Features

- Check application  
- Create cycle selection phase
- Mentorr request
- Support request
- SignIn
- SignUp


## Installing
- Link for installing NodeJs : [nodejs](https://nodejs.org/en/)
- Link for installing NPM Cypress mochawesome reporter  : [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- Link for installing NPM Cypress allure plugin  : [cypress-mochawesome-reporter](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
- Link for installing Java : [Java](https://www.oracle.com/java/technologies/downloads/)

## Environment Variables

- To run this project, you will need to add the following environment variables to your .env file `NODE_HOME` 
- To run allure reports , you will need to add the following environment variables to your .env file `JAVA_HOME` 

## Run Locally
Clone the project
```bash
git clone https://github.com/Amiin29/Flat6Labs.git
  ```

Go to the project directory
```bash
  cd Flat6Labs
```
Install dependencies
```bash
  npm install
```
Running the project
```bash
# dev env
  npm run dev_open
# prod env
  npm run prod_open
# staging env
  npm run stage_open
```
Check the execution result in allure reports
```bash
  npm run allure:report
```

## Achitecture of the project 
```bash
cypress\
  |--config\                 # contain the config file of the environment (Dev/Prod/stage)
  |--e2e\                    # contains all scenarios
  |--fixtures\               # contains all json files with all inputs(data) and all locators
  |--PageObjects\            # contains all the methods used for each interface of scenario
  |--reports\                # contains reports (files) generated during the execution of the tests
  |--screenshots\            # contains screenshots generated during the execution of the tests
  |--videos\                 # contains videos generated during the execution about every scenario
```

## Screenshots of the different cypress interfaces for test results
- Screenshots of the execution result in Cloud cypress

![App Screenshot](https://user-images.githubusercontent.com/67683686/208398421-6a6cdbb5-1685-4e64-affb-aeb9df0fffbe.png)

![App Screenshot](https://user-images.githubusercontent.com/67683686/208398850-4edee7b1-fe21-4c1e-849d-8d5da5114adb.png)

![App Screenshot](https://user-images.githubusercontent.com/67683686/208399069-edfeb40d-256a-44ce-9f45-17368a24108c.png)

- Screenshots of the execution result in Allure reports

![App Screenshot](https://user-images.githubusercontent.com/67683686/210776927-2c2c8a8f-2b4b-4600-82fa-76f53a14bafa.png)

![App Screenshot](https://user-images.githubusercontent.com/67683686/210777857-a37434ba-d951-4b63-8736-426d67df17d6.png)

## Documentation

[Documentation cypress](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn)

