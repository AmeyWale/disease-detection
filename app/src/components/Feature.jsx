
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
    <section id='feature' className='flex flex-col items-center justify-center gap-12 p-20 pb-[250px]'>
        <h1 className='text-center font-bold text-5xl lg:text-start'>Our AI Service</h1>

        <p className='text-center text-2xl lg:text-start'>Upload your MRI scanned Images here</p>

        <div className='flex flex-col items-center gap-12 lg:flex-row'>
            <input type="file" onChange={handleChange}/>
            <button className='bg-textBlue text-white font-bold w-32 p-2 rounded-2xl hover:bg-sky-700 ease-in-out duration-500' onClick={uploadFile}>Upload</button>
        </div>
        {getFileData()}
        {response && <div>Response from server : {response.message}</div>}
    </section>
  )
}
