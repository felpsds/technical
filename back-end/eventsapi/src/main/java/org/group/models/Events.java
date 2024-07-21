package org.group.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "events")
@Getter
@Setter
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "startdate")
    private String startDate;

    @Column(name = "enddate")
    private String endDate;

    private Boolean active;

    @ManyToOne
    @JoinColumn(name = "institution_id")
    private Institutions institution;
}
