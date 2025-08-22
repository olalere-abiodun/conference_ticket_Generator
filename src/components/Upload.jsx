import React from "react";

function Upload({ preview, removeImage }) {
  return (
    <div
      className="upload-buttons"
      style={{ display: preview ? "flex" : "none" }}
    >
      <span onClick={removeImage} style={{ cursor: "pointer" }}>
        <u>Remove image</u>
      </span>
      <span style={{ cursor: "pointer" }}>Change image</span>
    </div>
  );
}

export default Upload;
