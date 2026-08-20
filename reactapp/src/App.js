import DocumentList from './components/DocumentList';
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
    

    <DocumentList documents={documents} />
    </div>
  );
}

export default App;
