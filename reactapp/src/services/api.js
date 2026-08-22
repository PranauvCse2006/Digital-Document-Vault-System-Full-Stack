const BASE_URL = "http://localhost:8080/documents";

export function getDocuments() {
    return fetch(BASE_URL)
        .then(response =>  {
            if (!response.ok) {
                throw new Error(`Failed to fetch documents: ${response.status}`);
            }
            return response.json();
        });
}

export function uploadDocument(documentData) {
    return fetch(BASE_URL, {
        method: "POST",
        body: documentData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Upload failed: ${response.status}`);
            }
            return response.json();
        });
}

export function deleteDocument(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}

export function downloadDocument(id) {
    return fetch(`${BASE_URL}/${id}`);
}