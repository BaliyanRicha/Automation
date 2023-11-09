import React, { useState } from 'react';

const Popup = ({ onClose }) => {
  const [content, setContent] = useState('');

  const handleUpload = () => {
    const contentData = { content };

    fetch('/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contentData),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`Error uploading file: ${response.status} - ${response.statusText}`);
        }
      })
      .then((data) => {
        console.log(data);
        onClose();
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className='close-btn' onClick={onClose}>Close</button>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleUpload}>Save</button>
      </div>
    </div>
  );
};

export default Popup;
