
import React, { useState } from 'react'
import axios from 'axios';

export default function Feature() {

    const [file,setFile] = useState();
    const [response,setResponse] = useState();

    const handleChange = event => {
        setFile(event.target.files[0])
    };
 
    const uploadFile = async () => {

        const formData = new FormData();
        formData.append(
            "file",
            file
        );
        const res = await axios.post("http://localhost:8000/upload", formData);
        
        setResponse(res.data)
    };
 
    
    const getFileData = () => {
 
        if (file) {
 
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {file.name}</p>
 
                    <p>File Type: {file.type}</p>
 
                    <p>
                        Last Modified:{" "}
                        {file.lastModifiedDate.toDateString()}
                    </p>
 
                </div>
            );
        } else {
            return (
                <></>
            );
        }
    };    
    
  return (
    <section className='flex flex-col items-center justify-center gap-12 p-20 pb-[250px]'>
        <h1 className='font-bold text-5xl'>Our AI Service</h1>

        <p className='text-2xl'>Upload your MRI scanned Images here</p>

        <div>
            <input type="file" onChange={handleChange}/>
            <button className='bg-textBlue text-white font-bold w-32 p-2 rounded-2xl' onClick={uploadFile}>Upload</button>
        </div>
        {getFileData()}
        {response && <div>Response from server : {response.filename}</div>}
    </section>
  )
}
