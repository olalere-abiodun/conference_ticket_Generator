import React from "react";

function Upload({ preview }) {
  return (
    <div className="upload-buttons" style={{ display: preview ? "flex" : "none" }}>
        <span><u>Remove image</u></span> <span>Change image</span>
    </div>
  );
}

export default Upload;
