package org.group.models.dao;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class EventDAO {
    private Long id;
    @NotNull(message = "Um nome deve ser informado.")
    private String name;
    @NotNull(message = "Uma data de inicio deve ser informado.")
    private String startDate;
    @NotNull(message = "Uma data final deve ser informado.")
    private String endDate;
    @NotNull(message = "Um status deve ser informado.")
    private Boolean active;
    @NotNull(message = "Uma instituição deve ser informado.")
    private Long institutionId;
}
