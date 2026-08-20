function DocumentList({ documents }) {

    return (
        <div>
            <h2>Documents</h2>

            {documents.map((document) => (
                <div key={document.id}>

                    <p>Title: {document.documentTitle}</p>
                    <p>Category: {document.category}</p>
                    <p>Upload Date: {document.uploadDate}</p>

                    <button>Download</button>
                    <button>Delete</button>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default DocumentList;