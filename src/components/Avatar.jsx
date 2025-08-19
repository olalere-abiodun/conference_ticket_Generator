import React from "react";
import Label from "./Label";

function Avatar() {
  return (
    <div className="avatar">
        <Label text="Upload Avatar" />
        <div className="avatar-upload">
            <img src="/assets/images/icon-upload.svg" alt="User Avatar" />
            <div className="avatar-text">
                <Label text="Drag and Drop or click to upload" />
            </div>
        </div>
        <div className="avatar-preview">
            <img src="/assets/images/icon-info.svg" alt="User Avatar" />
            <span>Upload your photo (JPEG or PNG, Max size: 500KB)</span>
        </div>
      
    </div>
  );
}

export default Avatar;
