package com.bookit.step_definitions;

import com.bookit.pages.SelfPage;
import com.bookit.utilities.BookitApiUtils;
import com.bookit.utilities.ConfigurationReader;
import com.bookit.utilities.DBUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.Map;

import static io.restassured.RestAssured.given;

public class ApiStepDefs {

    Response response;
    String token;
    String globalEmail;

    @Given("I logged Bookit api using {string} and {string}")
    public void i_logged_Bookit_api_using_and(String email, String password) {

        token = BookitApiUtils.generateToken();
        System.out.println("token = " + token);
        System.out.println(email);
        System.out.println(password);
        globalEmail = email;


    }

    @When("I get the current user information from api")
    public void i_get_the_current_user_information_from_api() {

        String url = ConfigurationReader.get("qa2api.uri")+"/api/users/me";

         response = given()
                            .accept(ContentType.JSON)
                            .and()
                            .header("Authorization", token)
                 .when()
                            .get(url);
         response.prettyPrint();


    }

    @Then("status code should be {int}")
    public void status_code_should_be(int statusCode) {

        Assert.assertEquals(statusCode, response.statusCode());
        System.out.println(statusCode);

    }

    @Then("the information about the current user form api and database should match")
    public void the_information_about_the_current_user_form_api_and_database_should_match() {

        String query = "select id, firstname, lastname, role from users where email = '"+globalEmail+"';";
        Map<String, Object> rowMap = DBUtils.getRowMap(query);
        System.out.println(rowMap);
        long expectedId = (long) rowMap.get("id");
        String expectedFirstName = (String) rowMap.get("firstname");
        String expectedLastName = (String) rowMap.get("lastname");
        String expectedRole = (String) rowMap.get("role");




        JsonPath jsonPath = response.jsonPath();
        long actualId = jsonPath.getLong("id");
        String actualFirstname = jsonPath.getString("firstName");
        String actualLastname = jsonPath.getString("lastName");
        String actualRole = jsonPath.getString("role");


        Assert.assertEquals(expectedId, actualId);
        Assert.assertEquals(expectedFirstName, actualFirstname);
        Assert.assertEquals(expectedLastName, actualLastname);
        Assert.assertEquals(expectedRole, actualRole);

        Map <String, Object> apiMap = response.as(Map.class);
        System.out.println("apiMap = " + apiMap);
   }

    @Then("UI, API and Database user information must be match")
    public void ui_API_and_Database_user_information_must_be_match() {


        String query = "select id, firstname, lastname, role from users where email = '"+globalEmail+"';";
        Map<String, Object> rowMap = DBUtils.getRowMap(query);
        System.out.println(rowMap);
        long expectedId = (long) rowMap.get("id");
        String expectedFirstName = (String) rowMap.get("firstname");
        String expectedLastName = (String) rowMap.get("lastname");
        String expectedRole = (String) rowMap.get("role");




        JsonPath jsonPath = response.jsonPath();
        long actualId = jsonPath.getLong("id");
        String actualFirstname = jsonPath.getString("firstName");
        String actualLastname = jsonPath.getString("lastName");
        String actualRole = jsonPath.getString("role");


        Assert.assertEquals(expectedId, actualId);
        Assert.assertEquals(expectedFirstName, actualFirstname);
        Assert.assertEquals(expectedLastName, actualLastname);
        Assert.assertEquals(expectedRole, actualRole);


        SelfPage selfPage = new SelfPage();
        String actualUIFullName = selfPage.name.getText();
        String actualUIRole = selfPage.role.getText();
        String expectedFullName = expectedFirstName + " " + expectedLastName;

        Assert.assertEquals(expectedFullName, actualUIFullName);
        Assert.assertEquals(expectedRole, actualUIRole);

        String actualFullName = actualFirstname + " " + actualLastname;
        Assert.assertEquals(actualFullName, actualUIFullName);
        Assert.assertEquals(actualRole, actualUIRole);




    }


}
