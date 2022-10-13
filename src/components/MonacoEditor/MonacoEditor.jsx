import React, { useEffect, useRef, useState } from "react";
import "./MonacoEditor.scss";
// import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { DefineMonacoThemes } from "./ThemeHelper";
import { useStoreState } from "easy-peasy";

function MonacoEditor({ setCode, code }) {
  const currentTheme = useStoreState((state) => state.theme);
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);
  const monaco = useStoreState((state) => state.monaco);

  const selectedFile = useStoreState((state) => state.selectedFile);

  useEffect(() => {
    if (editorRef && !editor & (selectedFile !== null)) {
      monaco.editor.createModel(
        selectedFile.content,
        "javascript",
        new monaco.Uri().with({ path: selectedFile.path })
      );

      DefineMonacoThemes(monaco);
      const tempEditor = monaco.editor.create(editorRef.current, {
        value: code,
        language: "javascript",
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
    if (monaco.editor.getModels().length > 0) {
      monaco.editor.getModels()[0].setValue(selectedFile.content);
    }
  }, [selectedFile]);

  useEffect(() => {
    editor?.getModel().onDidChangeContent((e) => {
      setCode(editor?.getModel().getValue());
    });
  });

  return <div className="MonacoEditorWrapper" ref={editorRef} />;
}

export default MonacoEditor;
