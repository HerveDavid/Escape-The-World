package com.escape_the_world.controleurs;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mail")
public class EmailControleur {

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String envoyer() {
        return "1.0";
    }
}
