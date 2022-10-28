import React, { useEffect, useRef } from "react";
import "./MonacoEditor.scss";
// import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { DefineMonacoThemes } from "./ThemeHelper";
import { useStoreState } from "easy-peasy";
import Lang from "../../assets/Maps/ExtToMap.json";

function MonacoEditor({ setCode, code }) {
  const currentTheme = useStoreState((state) => state.theme);
  const monaco = window.monaco;

  const editorRef = useRef(null);
  DefineMonacoThemes(monaco);

  const selectedFiles = useStoreState((state) => state.selectedFiles);

  useEffect(() => {
    let tempEditor;
    if (editorRef) {
      tempEditor = monaco.editor.create(editorRef.current, {
        value: code,
        language: Lang[selectedFiles?.ext]
          ? Lang[selectedFiles.ext][0]
          : "text",
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
      window.editor = tempEditor;
    }
    return () => tempEditor?.dispose();
  }, [editorRef]);

  return <div className="MonacoEditorWrapper" ref={editorRef} />;
}

export default MonacoEditor;
