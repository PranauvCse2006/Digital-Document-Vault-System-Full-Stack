package com.ddvs.digitaldocumentvaultsystem.service;
import java.util.List;
import com.ddvs.digitaldocumentvaultsystem.entity.Document;
public interface DocumentService {
    Document uploadDocument(Document document);

    List<Document> getAllDocuments();

    Document downloadDocument(Long id);

    void deleteDocument(Long id);


    
}
