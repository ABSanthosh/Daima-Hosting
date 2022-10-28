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
      sidePanelState: true,

      selectedFolder: null,

      selectedFiles: [],

      currentFileContent: null,
      currentFileChanged: false,
      currentFile: { path: "" },

      isAutoSave: false,
      isSaving: false,
      isFullScreen: false,
      debounce: 1000,

      toggleAutoSave: action((state) => {
        state.isAutoSave = !state.isAutoSave;
      }),
      setIsSaving: action((state, payload) => {
        state.isSaving = payload;
      }),

      toggleFullScreenState: action((state) => {
        state.isFullScreen = !state.isFullScreen;
      }),

      toggleSidePanel: action(
        (state, payload = { manual: false, newState: false }) => {
          if (payload.manual) {
            state.sidePanelState = payload.newState;
          } else {
            state.sidePanelState = !state.sidePanelState;
          }
        }
      ),

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
        state.selectedFiles = state.selectedFiles.filter(
          (item) => item.path !== payload.path
        );
      }),

      setCurrentFileChanged: action((state, payload) => {
        state.currentFileChanged = payload;
      }),

      setCurrentFileContent: action((state, payload) => {
        state.currentFileContent = payload;
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
        "currentFileContent",
      ],
      // storage: storage("diama-editor"),
    }
  )
);

export { Store };
