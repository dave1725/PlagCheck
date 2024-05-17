import ReactQuill from 'react-quill'
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Container } from 'react-bootstrap';
import "../components/quill.css"
import Editor from 'quill/core/editor';

function MyComponent ({value, setValue, placeholder, text, setText}){
    
    return(
       <Container style={{padding: '0'}}>
            <ReactQuill id="editor" theme="snow" value={value} onChange={setValue} placeholder={placeholder} />
       </Container>
    )
}

  export default MyComponent;