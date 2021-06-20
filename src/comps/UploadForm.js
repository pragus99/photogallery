import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const UploadForm = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>Upload</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
