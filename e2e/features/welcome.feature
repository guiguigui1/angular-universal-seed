Feature: Welcome
  As a developer using Angular
  I want to be able to write BDD tests
  So that I always know that my application is working as intended

  Scenario: Opens the welcome page
    Given A users opens the welcome page
    Then He should see all the awesomeness this boilerplate has to offer
      | featureText                                                                                           |
      | Angular Universal                                                                                     |
      | Cucumber for automation tests                                                                         |
      | NgRx (store, effects, devtools, router-store)                                                         |
      | Essent ts linter                                                                                      |
      | Essent stylelinter                                                                                    |
      | Example using the Essent Core Modules                                                                 |
      | Gitlab CI steps that runs the linter, unit tests and the automation tests and creates a release build |
      | Express proxy, Express authentication middleware                                                      |
      | Mocking server to run automation tests and develop locally                                            |
