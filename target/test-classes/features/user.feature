@smoke
  Feature: User Verification

    Scenario: veriy information about logged user
      Given I logged Bookit api using "sbirdbj@fc2.com" and "asenorval"
      When I get the current user information from api
      Then status code shoud be 200