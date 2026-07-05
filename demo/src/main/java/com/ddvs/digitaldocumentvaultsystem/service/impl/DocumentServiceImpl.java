package com.ddvs.digitaldocumentvaultsystem.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ddvs.digitaldocumentvaultsystem.entity.Document;
import com.ddvs.digitaldocumentvaultsystem.exception.ResourceNotFoundException;
import com.ddvs.digitaldocumentvaultsystem.repository.DocumentRepository;
import com.ddvs.digitaldocumentvaultsystem.service.DocumentService;




@Service

public class DocumentServiceImpl implements DocumentService {

    private final DocumentRepository documentRepository;

    public DocumentServiceImpl(DocumentRepository documentRepository){
        this.documentRepository=documentRepository;
    }

    @Override
    public Document uploadDocument(Document document) {
      
        return documentRepository.save(document);
    }

    @Override
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @Override
    public Document downloadDocument(Long id) {
        return documentRepository.findById(id)
                 .orElseThrow(() -> new RuntimeException("Document not found"));
    }

    @Override
    public void deleteDocument(Long id) {
        
        documentRepository.deleteById(id);;
    }

    @Override
    public Document updateDocument(Long id, Document document) {
        Document existingDocument = documentRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Document not found "));
        
         existingDocument.setDocumentTitle(document.getDocumentTitle());
         existingDocument.setCategory(document.getCategory());
         existingDocument.setFileName(document.getFileName());
         existingDocument.setFileType(document.getFileType());
         existingDocument.setFilePath(document.getFilePath());
         existingDocument.setUploadDate(document.getUploadDate());

         return documentRepository.save(existingDocument);

    }

}
