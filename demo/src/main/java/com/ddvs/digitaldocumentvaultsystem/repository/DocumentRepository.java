package com.ddvs.digitaldocumentvaultsystem.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ddvs.digitaldocumentvaultsystem.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    
}
