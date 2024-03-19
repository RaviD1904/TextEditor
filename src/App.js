import "./App.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "./textEditorModules";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <ReactQuill
          style={{
            width: "80%",
            borderRadius: "8px",
            paddingBottom: "10%",
          }}
          theme="snow"
          value={value}
          onChange={setValue}
          formats={formats}
          modules={modules}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "15%",
          marginBottom: "15%",
          marginLeft: "15%",
          width: "50%",
        }}
      >
        <div>{value && value}</div>
      </div>
    </>
  );
}

export default App;
