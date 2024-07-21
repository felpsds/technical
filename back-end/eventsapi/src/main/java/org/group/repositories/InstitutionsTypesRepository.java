package org.group.repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.group.models.InstitutionsTypes;

@ApplicationScoped
public class InstitutionsTypesRepository implements PanacheRepository<InstitutionsTypes> {

}
