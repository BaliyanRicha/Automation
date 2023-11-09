import { useEffect, useState } from "react";
import {AiFillInfoCircle} from 'react-icons/ai'
 import './TestSuite.css'
 import Popup from './Popup';

const SERVER_PATH = "http://localhost:5000";

const TestSuite = () => {
  const [fileList, setFileList] = useState({ uploads: [], alarm: [] });
  const [selectedFileContent, setSelectedFileContent] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
// -------------------plus btn code ------------------
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopups = () => {
    setPopupOpen(false);
  };
// ------------------------------------------------------------
  const fetchFileContent = async (filename) => {
    try {
      const response = await fetch(`${window.location.port === "3000" ? SERVER_PATH : ""}/files/${filename}`);
      console.log("my " , response);
      const content = await response.text();
      setSelectedFileContent(content);
      setSelectedFileName(filename);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching file content:', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const data = await res.json();
        setFileList(data);
      } else {
        console.error("Request failed with status:", res.status);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(SERVER_PATH + "/files");
  }, []);

  return (
    <>
      <div className="App">
      {/* ------------plus btn code --------------- */}
      <h1>React Popup and Upload</h1>
      <button onClick={openPopup}>+</button>
      {isPopupOpen && <Popup onClose={closePopups} />}
      {/* --------------------------------------------------- */}
      <details className="up-detail">
        <summary>Uploads </summary>
        <ul>
          {fileList.uploads.map((file, index) => (
            <li key={index} onClick={() => fetchFileContent(file)}>{file}  <AiFillInfoCircle/></li>
          ))}
        </ul>
</details>
<details className="up-detail">
        <summary>Alarm </summary>
        <ul>
          {fileList.alarm.map((file, index) => (
            <li key={index} onClick={() => fetchFileContent(file)}>{file }  </li>
            
          ))}
        </ul>
  </details>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              <h3 className="heads"> {selectedFileName}</h3>
              <pre>{selectedFileContent}</pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TestSuite;
