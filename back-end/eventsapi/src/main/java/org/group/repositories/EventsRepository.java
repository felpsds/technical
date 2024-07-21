package org.group.repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.group.models.Events;

import java.util.List;

@ApplicationScoped
public class EventsRepository implements PanacheRepository<Events> {
    public List<Events> findByFilter(Boolean active, Long institutionId) {
        String query = "SELECT e FROM Events e";
        String whereClause = "";
        if (active != null) {
            whereClause += "e.active = :active";
        }
        if (institutionId != null) {
            if (!whereClause.isEmpty()) whereClause += " AND ";
            whereClause += "e.institution.id = :institutionId";
        }
        if (!whereClause.isEmpty()) {
            query += " WHERE " + whereClause;
        }
        var queryObj = getEntityManager().createQuery(query, Events.class);
        if (active != null) {
            queryObj.setParameter("active", active);
        }
        if (institutionId != null) {
            queryObj.setParameter("institutionId", institutionId);
        }
        return queryObj.getResultList();
    }
}
