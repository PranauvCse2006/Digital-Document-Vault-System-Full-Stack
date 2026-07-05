package com.ddvs.digitaldocumentvaultsystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ddvs.digitaldocumentvaultsystem.entity.Document;

import com.ddvs.digitaldocumentvaultsystem.service.DocumentService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
public class DocumentController {
    

    private final DocumentService documentService;
    
    public DocumentController(DocumentService documentService){
        this.documentService=documentService;
    }

    @GetMapping("/documents")
    public List<Document> getAllDocuments() {
        return documentService.getAllDocuments();
    }

    @PostMapping("/documents")
    public Document uploadDocument(@RequestBody Document document) {
        return documentService.uploadDocument(document);
    }

    @DeleteMapping("/documents/{id}")
    public void deleteDocument(@PathVariable Long id){
        documentService.deleteDocument(id);
    }

    @GetMapping("/documents/{id}")
    public Document downloadDocument(@PathVariable Long id){
        return documentService.downloadDocument(id);
    }

    @PutMapping("/documents/{id}")
    public Document updateDocument(@PathVariable Long id,
                                @RequestBody Document document) {
        return documentService.updateDocument(id, document);
    }
}
