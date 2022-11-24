# Telnyx tests

## Requirements

 - [node.js](https://nodejs.org/)
 - [WebdriverIO](https://cypress.io/)
 - [Allure-reporter](https://github.com/bahmutov/cypress-if)
 - [Docker](https://www.docker.com)

## Setup

1. Clone this repository to your local machine
2. Download node.js (preferable 16.x version)
3. Enter the following command to your terminal in the root folder:
      ```bash
       npm install
      ```

## Execution

- To run all tests with Chrome:
    `npm run wdio`
- To run all tests with Chrome in headless mode:
    `npm run chrome` 
- To run all tests with Firefox:
    `npm run firefox`
- To run all tests with Microsoft Edge:
    `npm run edge`    
- To generate allure report:
    `npm run allure:generate`
- To open allure report:
    `npm run allure:open`
- To clean allure results:
    `npm run allure:clean`
- To start docker:
    `npm run docker up`
- To run docker locally at https://localhost/4444
    `npm run docker`
- To terminate docker:
    `npm run docker down`  


## Reports and results

- You will find allure report at [githubpages](https://ihorkk.github.io/wdio_docker_allure/)

