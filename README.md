# 📂 Digital Document Vault System

A full-stack web application for securely storing, organizing, downloading, and managing digital documents. The application is built using **Spring Boot** for the backend and **React.js** for the frontend, communicating through REST APIs.

---

## 🚀 Features

- 📤 Upload documents with title and category
- 📁 Secure file storage on the server
- 🗂 Store document metadata in the database
- 📋 View all uploaded documents
- ⬇ Download stored documents
- 🗑 Delete documents
- 🔄 RESTful API integration
- 🌐 React-based responsive user interface

---

## 🛠 Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Spring Boot
- Spring Web
- Spring Data JPA
- Maven

### Database
- MySQL

### Build Tools
- Maven
- npm

---

## 📁 Project Structure

```
Digital-Document-Vault-System
│
├── springapp
│   ├── controller
│   ├── model
│   ├── repository
│   ├── service
│   ├── config
│   └── resources
│
├── React
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/digital-document-vault-system.git
cd digital-document-vault-system
```

---

## ▶ Running Backend

```bash
cd springapp
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

## ▶ Running Frontend

```bash
cd React
npm install
npm start
```

Frontend runs on:

```
http://localhost:8081
```

---

## 📡 REST API Endpoints

### Upload Document

```
POST /api/documents
```

**Request (Multipart Form Data)**

| Parameter | Type |
|-----------|------|
| documentTitle | String |
| category | String |
| file | File |

---

### Get All Documents

```
GET /api/documents
```

Returns all uploaded documents.

---

### Download Document

```
GET /api/documents/download/{id}
```

Downloads the selected document.

---

### Delete Document

```
DELETE /api/documents/{id}
```

Deletes the selected document.

---

## 📸 Application Workflow

1. Enter document title.
2. Select category.
3. Choose a file.
4. Upload the document.
5. View uploaded documents.
6. Download or delete documents when required.

---

## 🔒 Security

- REST API architecture
- Server-side file storage
- Metadata stored in the database
- CORS configuration enabled
- Spring Security configuration included

---

## 🎯 Future Enhancements

- User Authentication (JWT)
- Role-Based Access Control
- File Encryption
- Cloud Storage Integration
- Document Versioning
- OCR Search
- Email Notifications
- Audit Logs

---

## 👨‍💻 Author

Developed as a Full Stack Web Application using:

- Spring Boot
- React.js
- MySQL
- REST API

---

## 📄 License

This project is developed for educational and learning purposes.
