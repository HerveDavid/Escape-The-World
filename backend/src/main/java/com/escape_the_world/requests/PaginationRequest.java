package com.escape_the_world.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaginationRequest {

    private int start;
    private int size;

}
