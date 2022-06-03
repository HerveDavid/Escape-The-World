package com.escape_the_world.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalTime;

@AllArgsConstructor
@Getter
public class Availability {

    private LocalTime schedule;
    private AvailabilityStatus status;

}
