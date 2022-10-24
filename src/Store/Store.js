import { createStore, action, persist, debug } from "easy-peasy";
import storage from "../utils/StorageEngine";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

window.monaco = monaco;

const Store = createStore(
  persist(
    {
      // monaco: monaco,
      theme: "github",
      activityItem: "explorer",
      sidebarWidth: 284,

      selectedFolder: null,

      selectedFiles: [],
      selectedFileContent: [],
      currentFile: { path: "" },
      isAutoSave: false,

      toggleAutoSave: action((state) => {
        state.isAutoSave = !state.isAutoSave;
      }),
      setCurrentFile: action((state, payload) => {
        state.currentFile = payload;
      }),

      setSelectedFiles: action((state, payload) => {
        if (
          state.selectedFiles.find((item) => item.path === payload.path) ===
          undefined
        ) {
          state.selectedFiles = [...state.selectedFiles, payload];
        }
      }),

      removeSelectedFile: action((state, payload) => {
        // console.log(
        //   debug(
        //     state.selectedFiles.filter((item) => item.path === payload.path)
        //   )
        // );
        state.selectedFiles = state.selectedFiles.filter(
          (item) => item.path !== payload.path
        );
      }),

      setSelectedFileContent: action((state, payload) => {
        state.selectedFileContent = [...state.selectedFileContent, payload];
      }),

      setSelectedFolderState: action((state, payload) => {
        state.selectedFolder = payload;
      }),

      setTheme: action((state, payload) => {
        state.theme = payload;
        window.monaco.editor.setTheme(payload);
      }),
      setActivityItem: action((state, payload) => {
        state.activityItem = payload;
      }),
      setSidebarWidth: action((state, payload) => {
        state.sidebarWidth = payload;
      }),
    },
    {
      deny: [
        "selectedFolder",
        "selectedFiles",
        "selectedFileContent",
        "currentFile",
      ],
      storage: storage("diama-editor"),
    }
  )
);

export { Store };
