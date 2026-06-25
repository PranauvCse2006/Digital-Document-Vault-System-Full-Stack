package com.ddvs.digitaldocumentvaultsystem.entity;

public class Document {
    private Long id;
    private Long ownerId;
    private String fileName;
    private String encryptedContent;
    private Long encryptionKeyId;
    private Long fileSize;
    private String mimeType;
    private String checksum;
    private String uploadDate;
    private String lastModified;
    
    private Integer version;
    private String securityClassification;
    private Long retentionPolicyId;

}