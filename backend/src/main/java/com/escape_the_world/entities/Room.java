package com.escape_the_world.entities;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.util.ArrayList;


public class Room {

    @Getter @Setter
    private long duration; // in minutes

    @Getter @Setter
    private boolean availabilityAllJourney;

    final private LocalTime open = LocalTime.parse("08:00:00");
    final private LocalTime close = LocalTime.parse("23:00:00");

    public ArrayList<Availability> getAvailabilities() {
        ArrayList<Availability> availabilities = new ArrayList<>();

        for(LocalTime current = open;
            current.isBefore(close) && (current.equals(open) || current.isAfter(open));
            current = current.plusMinutes(duration * 2)) {
            availabilities.add(new Availability(current, AvailabilityStatus.AVAILABLE));
        }

        return availabilities;
    }

}
