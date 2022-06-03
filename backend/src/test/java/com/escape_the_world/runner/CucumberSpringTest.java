package com.escape_the_world.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", extraGlue = "com.escape_the_world")
public class CucumberSpringTest {
}
