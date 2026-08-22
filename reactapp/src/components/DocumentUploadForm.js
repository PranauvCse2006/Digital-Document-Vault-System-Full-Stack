import {useState} from "react";
import { uploadDocument } from "../services/api";
function DocumentUploadForm({ onUploadSuccess }){
    const [documentTitle, setDocumentTitle] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("documentTitle",documentTitle);
        formData.append("category",category);
        formData.append("file",file);
        
        uploadDocument(formData)
            .then(() =>{
                console.log("Document uploaded successfully");
                onUploadSuccess();
            })
            .catch((error) =>{
                console.error("Upload failed:", error);
            });
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Document Title"
            value={documentTitle}
            onChange={(e)=>setDocumentTitle(e.target.value)}
            />

            <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            />

            <input
            type="file"
            onChange={(e)=>setFile(e.target.files[0])}
            />


            <p>Title: {documentTitle}</p>
            <p>Category: {category}</p>
            <p>File: {file ? file.name:"No file selected"}</p>

            <button type="submit">Upload</button>
            </form>
        </div>

    )
}
export default DocumentUploadForm;