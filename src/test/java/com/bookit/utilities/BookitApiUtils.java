package com.bookit.utilities;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BookitApiUtils {

    //this method should have two parameters, string email and string password. I did not add them currently because they may create problem.

    public static String generateToken () {

//        Response response = given().queryParam("email", email)
//                .and().queryParam("password", password)
//                .when().get(ConfigurationReader.get("qa2api.uri") + "/sign");
//
//        String token = response.path("accessToken");
//        System.out.println("token = " + token);

        String finaltoken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NyIsImF1ZCI6InN0dWRlbnQtdGVhbS1sZWFkZXIifQ.a_N9URDBPGOMcDdEVoaMHsJtk3jOnig0v0SCtSWcsGE";

        return finaltoken;

    }


}
