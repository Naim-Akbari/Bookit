package com.bookit.step_definitions;

import com.bookit.utilities.DBUtils;
import com.bookit.utilities.Driver;
import io.cucumber.java.Scenario;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

//    @Before ("@db")
    public void dbHook () {
        System.out.println("Creating database connection");
        DBUtils.createConnection();
    }

//    @After ("@db")
    public void afterDbHook () {
        System.out.println("Closing database connection");
        DBUtils.destroy();

    }

    @Before
    public void setUp () {

        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    @After
    public void tearDown (Scenario scenario) {

        if (scenario.isFailed()) {
            final byte [] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
    Driver.closeDriver();

    }




}
