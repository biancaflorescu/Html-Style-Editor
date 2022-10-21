import { useState } from "react";
import "./editor.css";

const Editor = () => {
  const [inputText, setInputText] = useState();
  const [bgColor, setBgColor] = useState();
  const [fontColor, setFontColor] = useState();
  const [fontSize, setFontSize] = useState();

  return (
    <div className="editor-container">
      <textarea
        placeholder="Write simple text or HTML here..."
        onChange={(e) => setInputText(e.target.value)}
      />

      <div className="editor-inputs">
        <div className="editor-input">
          <label htmlFor="bg-color">Background Color</label>
          <input
            type="color"
            id="bg-color"
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
        <div className="editor-input">
          <label htmlFor="text-color">Text Color</label>
          <input
            type="color"
            id="text-color"
            onChange={(e) => setFontColor(e.target.value)}
          />
        </div>
        <div className="editor-input">
          <label htmlFor="font-size">Font Size</label>
          <input
            type="range"
            id="font-size"
            min="16"
            max="40"
            defaultValue="16"
            step="1"
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: bgColor,
          color: fontColor,
          fontSize: fontSize + "px",
        }}
        className="editor-output"
        dangerouslySetInnerHTML={{ __html: inputText }}
      ></div>
    </div>
  );
};

export default Editor;
