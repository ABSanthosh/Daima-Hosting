import React, { useEffect, useRef, useState } from "react";
import "./MonacoEditor.scss";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { DefineMonacoThemes } from "./ThemeHelper";
import { useStoreState } from "easy-peasy";
import Lang from "../../assets/Maps/ExtToMap.json";

function MonacoEditor({ setCode, code }) {
  const currentTheme = useStoreState((state) => state.theme);
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);
  // const monaco = useStoreState((state) => state.monaco);

  const selectedFile = useStoreState((state) => state.selectedFile);
  const selectedFileContent = useStoreState(
    (state) => state.selectedFileContent
  );

  useEffect(() => {
    if (editorRef && !editor & (selectedFile !== null)) {
      monaco.editor.createModel(
        selectedFileContent,
        Lang[selectedFile.ext] ? Lang[selectedFile.ext][0] : "text",
        new monaco.Uri().with({ path: selectedFile.path })
      );

      DefineMonacoThemes(monaco);
      const tempEditor = monaco.editor.create(editorRef.current, {
        value: code,
        language: Lang[selectedFile.ext] ? Lang[selectedFile.ext][0] : "text",
        theme: currentTheme,
        automaticLayout: true,
        model: null,
        fontSize: 14,
        fontFamily: "JetBrains",
        fontLigatures: true,
        bracketPairColorization: { enabled: true },
        autoClosingBrackets: "beforeWhitespace",
        useShadowDOM: true,
        trimAutoWhitespace: true,
      });

      tempEditor.setModel(monaco.editor.getModels()[0]);
      setEditor(tempEditor);
    }
    return () => editor?.dispose();
  }, [editorRef.current]);

  useEffect(() => {
    // console.log(selectedFile)
    if (monaco.editor.getModels().length > 0) {
      monaco.editor.getModels()[0].setValue(selectedFileContent);
      monaco.editor.setModelLanguage(
        monaco.editor.getModels()[0],
        Lang[selectedFile.ext] ? Lang[selectedFile.ext][0] : "text"
      );
    }
  }, [selectedFileContent]);

  useEffect(() => {
    editor?.getModel().onDidChangeContent((e) => {
      setCode(editor?.getModel().getValue());
    });
  });

  return <div className="MonacoEditorWrapper" ref={editorRef} />;
}

export default MonacoEditor;
