package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

public class Unavailability {

    @Getter @Setter
    private String idRoom;

    @Getter @Setter
    private LocalTime schedule;

}
