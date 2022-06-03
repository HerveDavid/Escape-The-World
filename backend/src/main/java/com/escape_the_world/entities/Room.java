package com.escape_the_world.entities;

import lombok.Getter;

import java.time.LocalTime;
import java.util.ArrayList;


public class Room {

    @Getter
    private long duration; // in minutes

    @Getter
    private ArrayList<Availability> availabilities = new ArrayList<>();

    final private LocalTime open = LocalTime.parse("08:00:00");
    final private LocalTime close = LocalTime.parse("23:00:00");

    private boolean isBetweenDuration(LocalTime current) {
        return current.isBefore(close) && (current.equals(open) || current.isAfter(open));
    }

    public void setDuration(long duration) {
        this.duration = duration;
        availabilities.clear();
        for(LocalTime current = open; isBetweenDuration(current); current = current.plusMinutes(duration * 2)) {
            availabilities.add(new Availability(current, AvailabilityStatus.AVAILABLE));
        }
    }

    public void setUnavailabilityBetween(LocalTime start, LocalTime end) {
        for (int i = 0; i < availabilities.size(); i++) {
            availabilities.get(i).setStatus(AvailabilityStatus.UNAVAILABLE);
//            if(
//                availabilities.get(i).getSchedule().isAfter(start) &&
//                availabilities.get(i).getSchedule().isBefore(end)
//            ) {
//                availabilities.get(i).setStatus(AvailabilityStatus.UNAVAILABLE);
//            }
        }
    }
}
