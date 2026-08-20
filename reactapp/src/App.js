import DocumentList from './components/DocumentList';
import DocumentUploadForm from "./components/DocumentUploadForm";
import './App.css';
import { useState,useEffect } from 'react';
import { getDocuments } from "./services/api";

function App() {
  
  const [documents,setDocuments]=useState([]);

    useEffect(() => {
        getDocuments()
            .then((data) => {
                setDocuments(data);
            })
            .catch((error) => {
                console.error("Error fetching documents:", error);
            });
    }, []);
  return (
    <div>
    <h1>Digital Document Vault System </h1>
    <DocumentUploadForm />

    <DocumentList documents={documents} />
    

    <DocumentList documents={documents} />
    </div>
  );
}

export default App;
