package com.bookit.pages;

import com.bookit.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SingInPage {

    public SingInPage () {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy (name = "email")
    public WebElement email;

    @FindBy (name = "password")
    public WebElement password;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement signInButton;



}
