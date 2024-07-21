package org.group.resources;

import com.google.gson.Gson;
import io.smallrye.common.constraint.NotNull;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.group.models.Events;
import org.group.models.Institutions;
import org.group.models.InstitutionsTypes;
import org.group.models.dto.EventsDTO;
import org.group.models.dto.InstitutionDTO;
import org.group.repositories.EventsRepository;
import org.group.repositories.InstitutionsRepository;
import org.group.repositories.InstitutionsTypesRepository;

import java.util.List;

@Path("list")
@Consumes(value = MediaType.APPLICATION_JSON)
@Produces(value = MediaType.APPLICATION_JSON)
public class ListResource {
    private final InstitutionsTypesRepository institutionsTypesRepository;
    private final InstitutionsRepository institutionsRepository;
    private final EventsRepository eventsRepository;
    private final Gson gson = new Gson();


    public ListResource(
            InstitutionsTypesRepository institutionsTypesRepository,
            InstitutionsRepository institutionsRepository,
            EventsRepository eventsRepository
    ) {
        this.institutionsTypesRepository = institutionsTypesRepository;
        this.institutionsRepository = institutionsRepository;
        this.eventsRepository = eventsRepository;
    }

    @GET
    @Path("types")
    public Response getAllInstitutionsTypes() {
        List<InstitutionsTypes> institutionsTypes = institutionsTypesRepository.listAll();
        return Response.ok(gson.toJson(institutionsTypes)).build();
    }

    @GET
    @Path("institutions")
    public Response getAllInstitutions() {
        List<Institutions> institutions = institutionsRepository.listAll();
        List<InstitutionDTO> institutionDTOS = institutions.stream()
                .map(item -> {
                    InstitutionDTO dto = new InstitutionDTO();
                    dto.setId(item.getId());
                    dto.setName(item.getName());
                    dto.setType(item.getInstitutionsType().getName());
                    return dto;
                })
                .toList();
        return Response.ok(gson.toJson(institutionDTOS)).build();
    }

    @GET
    @Path("events")
    public Response getAllEvents() {
        List<Events> events = eventsRepository.listAll();
        List<EventsDTO> eventsDTOS = events.stream()
                .map(item -> {
                    EventsDTO dto = new EventsDTO();
                    dto.setId(item.getId());
                    dto.setName(item.getName());
                    dto.setStartdate(item.getStartDate());
                    dto.setEnddate(item.getEndDate());
                    dto.setActive(item.getActive());
                    dto.setInstitution(item.getInstitution().getName());
                    return dto;
                })
                .toList();
        return Response.ok(gson.toJson(eventsDTOS)).build();
    }

    @GET
    @Path("eventsFilter")
    public Response getEventByFilter(
            @QueryParam("institution") Long institutions,
            @QueryParam("active") Boolean active
    ) {
        List<Events> events = eventsRepository.findByFilter(active, institutions);
        List<EventsDTO> eventsDTOS = events.stream()
                .map(item -> {
                    EventsDTO dto = new EventsDTO();
                    dto.setId(item.getId());
                    dto.setName(item.getName());
                    dto.setStartdate(item.getStartDate());
                    dto.setEnddate(item.getEndDate());
                    dto.setActive(item.getActive());
                    dto.setInstitution(item.getInstitution().getName());
                    return dto;
                })
                .toList();
        return Response.ok(gson.toJson(eventsDTOS)).build();
    }
}
