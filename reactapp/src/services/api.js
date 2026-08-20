const BASE_URL = "http://localhost:8080/documents";

export function getDocuments() {
    return fetch(BASE_URL)
        .then(response => response.json());
}

export function uploadDocument(documentData) {
    return fetch(BASE_URL, {
        method: "POST",
        body: documentData
    })
        .then(response => response.json());
}

export function deleteDocument(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}

export function downloadDocument(id) {
    return fetch(`${BASE_URL}/${id}`);
}