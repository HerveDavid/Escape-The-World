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
    @Getter @Setter
    private String id;

    @Column
    @Getter @Setter
    private long duration; // in minutes

    @Column
    @Getter @Setter
    private String title;

    @Column
    @Getter @Setter
    private String description;

    @Column
    @Getter @Setter
    private RoomStatus status = RoomStatus.AVAILABLE;

}
