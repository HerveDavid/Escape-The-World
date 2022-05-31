package com.escape_the_world.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@Configuration
@ComponentScan(basePackages = {"com.mnemosyne"})
@EntityScan("com.mnemosyne.entites")
@EnableJpaRepositories("com.mnemosyne.repertoires")
public class EscapeTheWorldApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(EscapeTheWorldApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(EscapeTheWorldApplication.class);
    }

}
