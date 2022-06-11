package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;


public class Room {

    @Getter
    private long duration; // in minutes

    private ArrayList<Availability> availabilities = new ArrayList<>();

    @Getter @Setter
    private RoomStatus status = RoomStatus.AVAILABLE;

    final private LocalTime open = LocalTime.parse("08:00:00");
    final private LocalTime close = LocalTime.parse("23:00:00");

    private boolean isBetweenDuration(LocalTime current, LocalTime start, LocalTime end) {
        return (current.equals(start) || current.isAfter(start)) && (current.equals(end) ||current.isBefore(end));
    }

    public void setDuration(long duration) {
        this.duration = duration;
        availabilities.clear();
        for(LocalTime current = open; isBetweenDuration(current, open, close); current = current.plusMinutes(duration * 2)) {
            availabilities.add(new Availability(current, AvailabilityStatus.AVAILABLE));
        }
    }

    public void setUnavailabilityBetween(LocalTime start, LocalTime end) {
        for (int i = 0; i < availabilities.size(); i++) {
            if(isBetweenDuration(availabilities.get(i).getSchedule(), start, end)) {
                availabilities.get(i).setStatus(AvailabilityStatus.UNAVAILABLE);
            }
        }
    }

    public ArrayList<Availability> getAvailabilities() {
        if(status.equals(RoomStatus.UNAVAILABLE))
            return new ArrayList<>();
        return availabilities;
    }

    public ArrayList<Availability> getAvailabilities(final Date date) {
        if(status.equals(RoomStatus.UNAVAILABLE))
            return new ArrayList<>();
        return availabilities;
    }
}
