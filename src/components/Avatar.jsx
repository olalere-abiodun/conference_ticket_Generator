import React, { useState, useRef } from "react";
import Label from "./Label";
import Upload from "./Upload";

function Avatar({onFileChange}) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(false);
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    if (!file) return;

    // check file size (500KB = 500 * 1024 bytes)
    if (file.size > 500 * 1024) {
      setError(true);
      setPreview(null); // clear preview if invalid
      onFileChange(null); // notify parent no valid file
      return;
    }

    // check file type (only jpeg/png)
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError(true);
      setPreview(null);
      onFileChange(null); // notify parent no valid file
      return;
    }

    // valid file
    setError(false);
    setPreview(URL.createObjectURL(file));
    onFileChange(file); // notify parent with valid file
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateFile(file);
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    validateFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  
  const removeImage = () => {
    setPreview(null);
    setError(false);
    fileInputRef.current.value = ""; // clear file input too
    onFileChange(null); // notify parent no valid file
  };

  return (
    <div className="avatar">
      <Label text="Upload Avatar" />
      <div
        className="avatar-upload"
        onClick={handleDivClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {preview ? (
          <img
            src={preview}
            alt="Avatar Preview"
            className="avatar-preview-img"
          />
        ) : (
          <img src="/assets/images/icon-upload.svg" alt="User Avatar" />
        )}

        {/* hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className="avatar-text">
          <Label
            text="Drag and Drop or click to upload"
            style={{ display: preview ? "none" : "flex" }}
          />
          <Upload preview={preview}  removeImage={removeImage}/>
        </div>
      </div>

      <div
        className="avatar-preview"
        style={{ display: error ? "none" : "flex" }}
      >
        <img src="/assets/images/icon-info.svg" alt="User Avatar" />
        <span>Upload your photo (JPEG or PNG, Max size: 500KB)</span>
      </div>

      <div
        className="avatar-error"
        style={{ display: error ? "flex" : "none" }}
      >
        <img src="/assets/images/icon-info.svg" alt="User Avatar" />
        <span>File too large please upload a photo under 500KB</span>
      </div>
    </div>
  );
}

export default Avatar;
