package com.mnemosyne.app;

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
public class MnemosyneApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(MnemosyneApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(MnemosyneApplication.class);
    }

}
