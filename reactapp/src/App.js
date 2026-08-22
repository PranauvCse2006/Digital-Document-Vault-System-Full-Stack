import DocumentList from './components/DocumentList';
import DocumentUploadForm from "./components/DocumentUploadForm";
import './App.css';
import { useState,useEffect } from 'react';
import { getDocuments } from "./services/api";

function App() {
  
  const [documents,setDocuments]=useState([]);

    function loadDocuments() {
    getDocuments()
        .then((data) => {
            setDocuments(data);
        })
        .catch((error) => {
            console.error("Error fetching documents:", error);
        });
    }

    useEffect(() => {
        loadDocuments();
    }, []);
  return (
    <div>
    <h1>Digital Document Vault System </h1>
    <DocumentUploadForm onUploadSuccess={loadDocuments} />

    <DocumentList documents={documents} />

    </div>
  );
}

export default App;
