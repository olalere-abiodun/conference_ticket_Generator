import React, { useState } from "react";
import Label from "./Label";
import Upload from "./Upload";

function Avatar() {
  const [preview, setPreview] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="avatar">
      <Label text="Upload Avatar" />
      <div className="avatar-upload" >
        {preview ? (
          <img
            src={preview}
            alt="Avatar Preview"
            className="avatar-preview-img"
          />
        ) : (
          <img src="/assets/images/icon-upload.svg" alt="User Avatar" />
        )}
           <input
      id="fileInput"
      type="file"
      accept="image/*"
      style={{ display: "none" }}
      // onChange={}
    />
        <div className="avatar-text">
          <Label
            text="Drag and Drop or click to upload"
            style={{ display: preview ? "none" : "flex" }}
            htmlFor="fileInput"
            
          />
          <Upload preview={preview} />
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
