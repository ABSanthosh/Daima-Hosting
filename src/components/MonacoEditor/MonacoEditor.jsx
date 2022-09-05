import React from "react";
import "./MonacoEditor.scss";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

function MonacoEditor({ setCode, code }) {
  const [editor, setEditor] = React.useState(null);
  const editorRef = React.useRef(null);
  const files = {
    "/MonacoEditor.js": `
const ThisVar = "This Value";
const ThisVar2 = "This Value 2";
console.log(ThisVar+ThisVar2);    
    `,
  };

  React.useEffect(() => {
    //     console.log(editor);
    if (editorRef && !editor) {
      Object.keys(files).forEach((path) =>
        monaco.editor.createModel(
          files[path],
          "javascript",
          new monaco.Uri().with({ path })
        )
      );
      const tempEditor = monaco.editor.create(editorRef.current, {
        value: code,
        language: "javascript",
        theme: "vs-dark",
        model: null,
      });

      tempEditor.setModel(monaco.editor.getModels()[0]);

      setEditor(tempEditor);
    }
    return () => editor?.dispose();
  }, [editorRef.current]);

  React.useEffect(() => {
    editor?.getModel().onDidChangeContent((e) => {
      setCode(editor?.getModel().getValue());
    });
  });

  return <div className="MonacoEditorWrapper" ref={editorRef} />;
}

export default MonacoEditor;