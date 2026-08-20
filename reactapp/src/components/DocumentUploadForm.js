import {useState} from "react";
function DocumentUploadForm(){
    const [documentTitle, setDocumentTitle] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        console.log(documentTitle);
        console.log(category);
        console.log(file);
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