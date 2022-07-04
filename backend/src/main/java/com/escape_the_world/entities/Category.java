package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "Category")
public class Category {

    @Id
    @Getter @Setter
    private String name;

    @Column
    @Getter @Setter
    private int rating;

}
