import { createStore, action, persist } from "easy-peasy";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { tree2 } from "../../tree2";
import storage from "../utils/StorageEngine";

const folderStructure = tree2;

const Store = createStore(
  persist(
    {
      monaco: monaco,
      theme: "github",
      activityItem: "explorer",
      sidebarWidth: 284,

      selectedFolder: null,

      selectedFile: null,
      selectedFileContent: null,

      setSelectedFile: action((state, payload) => {
        state.selectedFile = payload;
      }),

      setSelectedFileContent: action((state, payload) => {
        state.selectedFileContent = payload;
      }),

      setSelectedFolderState: action((state, payload) => {
        state.selectedFolder = payload;
      }),

      setTheme: action((state, payload) => {
        state.theme = payload;
        state.monaco.editor.setTheme(payload);
      }),
      setActivityItem: action((state, payload) => {
        state.activityItem = payload;
      }),
      setSidebarWidth: action((state, payload) => {
        state.sidebarWidth = payload;
      }),
    },
    {
      deny: ["monaco"],
      storage: storage("diama-editor"),
    },
  )
);

export { Store };
