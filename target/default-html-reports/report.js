$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/user.feature");
formatter.feature({
  "name": "User Verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "verify information about logged user from api and database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I logged Bookit api using \"sbirdbj@fc2.com\" and \"asenorval\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_logged_Bookit_api_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the information about the current user form api and database should match",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});