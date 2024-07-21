package org.group.repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.group.models.Institutions;

@ApplicationScoped
public class InstitutionsRepository implements PanacheRepository<Institutions> {
}
