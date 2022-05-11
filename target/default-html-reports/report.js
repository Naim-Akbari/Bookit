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
formatter.scenarioOutline({
  "name": "three point verification (UI, DATABASE, API) DDF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.step({
  "name": "I logged Bookit api using \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.step({
  "name": "UI, API and Database user information must be match",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "sbirdbj@fc2.com",
        "asenorval"
      ]
    },
    {
      "cells": [
        "ccornil1h@usnews.com",
        "corniecornil"
      ]
    }
  ]
});
formatter.scenario({
  "name": "three point verification (UI, DATABASE, API) DDF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"sbirdbj@fc2.com\" \"asenorval\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_logs_in_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Naims-Air.lan\u0027, ip: \u0027fe80:0:0:0:f4:b83c:706c:5e21%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.3.1\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\n\tat com.bookit.pages.TopNavigationBar.goToSelf(TopNavigationBar.java:40)\n\tat com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page(MyInfoStepDefs.java:30)\n\tat ✽.user is on the my self page(file:///Users/naimakbary/Desktop/Bookit/src/test/resources/features/user.feature:27)\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Naims-Air.lan\u0027, ip: \u0027fe80:0:0:0:f4:b83c:706c:5e21%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.3.1\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: driver.version: RemoteWebDriver\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\n\t\tat com.bookit.pages.TopNavigationBar.goToSelf(TopNavigationBar.java:40)\n\t\tat com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page(MyInfoStepDefs.java:30)\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\n\t\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\t\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\t\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\t\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\t\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\t\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\t\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\t\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\t\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\t\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\n\tat com.bookit.pages.TopNavigationBar.goToSelf(TopNavigationBar.java:40)\n\tat com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page(MyInfoStepDefs.java:30)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"my\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Naims-Air.lan\u0027, ip: \u0027fe80:0:0:0:f4:b83c:706c:5e21%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.3.1\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: /var/folders/y9/xfdnbr211ql...}, goog:chromeOptions: {debuggerAddress: localhost:60036}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 86208c592bcfeeae2491145b5b155c9a\n*** Element info: {Using\u003dlink text, value\u003dmy}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\n\t... 66 more\n",
  "status": "failed"
});
formatter.step({
  "name": "I logged Bookit api using \"sbirdbj@fc2.com\" and \"asenorval\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_logged_Bookit_api_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "UI, API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.ui_API_and_Database_user_information_must_be_match()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "three point verification (UI, DATABASE, API) DDF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"ccornil1h@usnews.com\" \"corniecornil\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_logs_in_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged Bookit api using \"ccornil1h@usnews.com\" and \"corniecornil\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_logged_Bookit_api_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UI, API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bookit.step_definitions.ApiStepDefs.ui_API_and_Database_user_information_must_be_match()"
});
formatter.result({
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1002)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getLong(JsonPath.java:332)\n\tat com.bookit.step_definitions.ApiStepDefs.ui_API_and_Database_user_information_must_be_match(ApiStepDefs.java:107)\n\tat ✽.UI, API and Database user information must be match(file:///Users/naimakbary/Desktop/Bookit/src/test/resources/features/user.feature:30)\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:86)\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:130)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:965)\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1000)\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\n\tat io.restassured.path.json.JsonPath.getLong(JsonPath.java:332)\n\tat com.bookit.step_definitions.ApiStepDefs.ui_API_and_Database_user_information_must_be_match(ApiStepDefs.java:107)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});