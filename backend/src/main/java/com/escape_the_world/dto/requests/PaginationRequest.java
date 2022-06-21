package com.escape_the_world.dto.requests;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaginationRequest {

    private int start;
    private int size;

}
