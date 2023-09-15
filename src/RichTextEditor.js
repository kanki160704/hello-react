import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichTextEditor() {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link'],
      ['image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  useEffect(() => {
    setContent('<p>Start typing...</p>');
  
    const resizeObserverError = setInterval(() => {
      const { error } = console;
      console.error = (message) => {
        if (message.includes('ResizeObserver loop')) {
          return;
        }
        error.apply(console, arguments);
      };
    }, 1000);
  
    return () => {
      clearInterval(resizeObserverError);
    };
  }, []);
  

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        theme="snow"
      />
    </div>
  );
}

export default RichTextEditor;
