package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.joda.time.DateTime;

import javax.persistence.*;

@Entity
public class Unavailability {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Getter @Setter
    private String id;

    @Column
    @Getter @Setter
    private String idRoom;

    @Column
    @Getter @Setter
    private DateTime schedule;


}
