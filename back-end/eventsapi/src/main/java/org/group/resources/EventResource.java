package org.group.resources;

import com.google.gson.Gson;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.group.models.Events;
import org.group.models.Institutions;
import org.group.models.dao.EventDAO;
import org.group.repositories.EventsRepository;
import org.group.repositories.InstitutionsRepository;
import org.group.repositories.InstitutionsTypesRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.regex.Pattern;

@Path("event")
@Consumes(value = MediaType.APPLICATION_JSON)
@Produces(value = MediaType.APPLICATION_JSON)
public class EventResource {
    private final InstitutionsTypesRepository institutionsTypesRepository;
    private final InstitutionsRepository institutionsRepository;
    private final EventsRepository eventsRepository;
    private final Gson gson = new Gson();

    public EventResource (
            InstitutionsTypesRepository institutionsTypesRepository,
            InstitutionsRepository institutionsRepository,
            EventsRepository eventsRepository
    ) {
        this.institutionsTypesRepository = institutionsTypesRepository;
        this.institutionsRepository = institutionsRepository;
        this.eventsRepository = eventsRepository;
    }

    @POST
    @Path("new")
    @Transactional
    public Response newEvent (@Valid EventDAO eventDAO) {
        if(!validateDates(eventDAO.getStartDate()) || !validateDates(eventDAO.getEndDate())) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        Events events = new Events();
        Institutions institutions = institutionsRepository.findById(eventDAO.getInstitutionId());
        events.setName(eventDAO.getName());
        events.setStartDate(eventDAO.getStartDate());
        events.setEndDate(eventDAO.getEndDate());
        events.setActive(eventDAO.getActive());
        events.setInstitution(institutions);
        eventsRepository.persist(events);
        return Response.status(Response.Status.CREATED).build();
    }

    @PUT
    @Path("update")
    @Transactional
    public Response updateEvent (@Valid EventDAO eventDAO) {
        if(!validateDates(eventDAO.getStartDate()) || !validateDates(eventDAO.getEndDate())) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        Events events = eventsRepository.findById(eventDAO.getId());
        if(events == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        events.setName(eventDAO.getName());
        events.setStartDate(eventDAO.getStartDate());
        events.setEndDate(eventDAO.getEndDate());
        events.setActive(eventDAO.getActive());
        events.setInstitution(institutionsRepository.findById(eventDAO.getInstitutionId()));
        eventsRepository.persist(events);
        return Response.status(Response.Status.OK).build();
    }

    @DELETE
    @Path("delete/{eventid}")
    @Transactional
    public Response deleteEvent (@PathParam("eventid") Long eventid) {
        Events events = eventsRepository.findById(eventid);
        if(events == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        eventsRepository.delete(events);
        return Response.status(Response.Status.NO_CONTENT).build();
    }

    private Boolean validateDates(String date) {
        String DATE_PATTERN = "^\\d{4}-\\d{2}-\\d{2}$";
        if(!Pattern.matches(DATE_PATTERN, date)) {
            return false;
        }

        try {
            LocalDate.parse(date, DateTimeFormatter.ISO_DATE);
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }

}
