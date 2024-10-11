"use client";
import { useRef, useState, useEffect } from "react";
import BundledEditor from "@/components/bundlededitor";

export default function Richtexteditor() {
  const editorRef = useRef(null);
  const [textValue, setTextValue] = useState("");

  const log = () => {
    if (editorRef.current) {
      setTextValue(editorRef.current.getContent());
    }
  };

  useEffect(() => {
    console.log("textValue:", textValue);
  }, [textValue]); // Add 'textValue' to dependencies

  return (
    <div>
      <div className="editordiv">
        <BundledEditor
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            height: 0.5,
            width: 0.75,
            menubar: false,
            plugins: [
              "advlist",
              "anchor",
              "autolink",
              "link",
              "lists",
              "searchreplace",
              "wordcount",
              "directionality",
              "image",
              "emoticons",
            ],
            toolbar:
              "bold italic underline forecolor alignleft aligncenter alignright bullist numlist link code directionality media table preview image emoticons | undo redo",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onChange={() => {
            log(); // Call the log function properly
          }}
        />
        {/* Uncomment if you want to display the HTML content */}
        {/* <button onClick={log}>Get HTML</button>
        <textarea value={textValue} readOnly></textarea> */}
      </div>
    </div>
  );
}
