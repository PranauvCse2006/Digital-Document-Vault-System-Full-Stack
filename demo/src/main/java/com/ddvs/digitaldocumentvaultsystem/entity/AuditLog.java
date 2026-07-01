package com.ddvs.digitaldocumentvaultsystem.entity;

public class AuditLog {
    private Long id;
    private Long userId;
    private String action;
    private Long documentId;
    private String timestamp;
    private String ipAddress;
    private String userAgent;
    private String outcome;
    private Boolean securityEvent;

    
}