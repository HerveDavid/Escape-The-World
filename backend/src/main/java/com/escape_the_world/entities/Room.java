package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "Room")
public class Room {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Getter @Setter
    private String id;


    @Column
    @CreationTimestamp
    @Getter @Setter
    private Date createdAt;

    @Column
    @UpdateTimestamp
    @Getter @Setter
    private Date uptatedAt;

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
    private int capacity;
}
