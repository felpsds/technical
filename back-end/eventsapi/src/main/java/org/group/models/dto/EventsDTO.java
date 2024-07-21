package org.group.models.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EventsDTO {
    private Long id;
    private String name;
    private String startdate;
    private String enddate;
    private Boolean active;
    private String institution;
}
