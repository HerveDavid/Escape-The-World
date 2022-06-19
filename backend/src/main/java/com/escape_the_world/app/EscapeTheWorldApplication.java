package com.escape_the_world.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ConfigurationPropertiesScan("com.escape_the_world.configurations")
@ComponentScan(basePackages = {"com.escape_the_world"})
public class EscapeTheWorldApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(EscapeTheWorldApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(EscapeTheWorldApplication.class);
    }

}
