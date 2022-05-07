package com.bookit.step_definitions;

import com.bookit.utilities.BookitApiUtils;
import com.bookit.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import static io.restassured.RestAssured.given;

public class ApiStepDefs {

    Response response;
    String token;

    @Given("I logged Bookit api using {string} and {string}")
    public void i_logged_Bookit_api_using_and(String email, String password) {

        token = BookitApiUtils.generateToken();
        System.out.println("token = " + token);
        System.out.println(email);
        System.out.println(password);


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

        Assert.assertEquals(response.statusCode(), statusCode);
        System.out.println(statusCode);

    }

}
