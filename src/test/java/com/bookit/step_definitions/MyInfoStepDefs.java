package com.bookit.step_definitions;

import com.bookit.pages.SelfPage;
import com.bookit.pages.SingInPage;
import com.bookit.utilities.BrowserUtils;
import com.bookit.utilities.ConfigurationReader;
import com.bookit.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class MyInfoStepDefs {

    @Given("user logs in using {string} {string}")
    public void user_logs_in_using (String email, String password) {

        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().manage().window().maximize();
        SingInPage singInPage = new SingInPage();
        singInPage.email.sendKeys(email);
        singInPage.password.sendKeys(password);
        BrowserUtils.waitFor(1);
        singInPage.signInButton.click();

    }

    @When("user is on the my self page")
    public void user_is_on_the_my_self_page () {

        SelfPage selfPage = new SelfPage();
        selfPage.goToSelf();

    }


}
