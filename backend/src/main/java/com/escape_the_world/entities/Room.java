package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Room {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @Column
    @Getter @Setter
    private long duration; // in minutes

//    private ArrayList<Availability> availabilities = new ArrayList<>();

    @Column
    @Getter @Setter
    private RoomStatus status = RoomStatus.AVAILABLE;

//    final private LocalTime open = LocalTime.parse("08:00:00");
//    final private LocalTime close = LocalTime.parse("23:00:00");

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

//    private boolean isBetweenDuration(LocalTime current, LocalTime start, LocalTime end) {
//        return (current.equals(start) || current.isAfter(start)) && (current.equals(end) ||current.isBefore(end));
//    }
//
//    public void setDuration(long duration) {
//        this.duration = duration;
//        availabilities.clear();
//        for(LocalTime current = open; isBetweenDuration(current, open, close); current = current.plusMinutes(duration * 2)) {
//            availabilities.add(new Availability(current, AvailabilityStatus.AVAILABLE));
//        }
//    }
//
//    public void setUnavailabilityBetween(LocalTime start, LocalTime end) {
//        for (int i = 0; i < availabilities.size(); i++) {
//            if(isBetweenDuration(availabilities.get(i).getSchedule(), start, end)) {
//                availabilities.get(i).setStatus(AvailabilityStatus.UNAVAILABLE);
//            }
//        }
//    }
//
//    public ArrayList<Availability> getAvailabilities() {
//        if(status.equals(RoomStatus.UNAVAILABLE))
//            return new ArrayList<>();
//        return availabilities;
//    }

//    public ArrayList<Availability> getAvailabilities(final Date date) {
//        if(status.equals(RoomStatus.UNAVAILABLE))
//            return new ArrayList<>();
//        return availabilities;
//    }
}
