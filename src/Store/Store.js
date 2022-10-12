import { createStore, action, persist } from "easy-peasy";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

// folder structure in json
const folderStructure = [
  {
    name: "file1",
    path: "src/Store/file1.js",
    type: "file",
  },
  {
    name: "file2",
    path: "src/Store/file2.js",
    type: "file",
  },
  {
    name: "folder 1",
    open: true,
    type: "folder",
    selected: true,
    children: [
      {
        name: "Folder1File1",
        path: "src/Store/Folder1/Folder1File1.js",
        type: "file",
      },
      {
        name: "Folder1File2",
        path: "src/Store/Folder1/Folder1File2.js",
        type: "file",
      },
      {
        name: "folder 1",
        type: "folder",
        children: [
          {
            name: "Folder1Folder1File1",
            path: "src/Store/Folder1/Folder1Folder1/Folder1Folder1File1.js",
            type: "file",
          },
        ],
      },
    ],
  },
];

const Store = createStore(
  persist(
    {
      monaco: monaco,
      theme: "github",
      activityItem: "explorer",
      sidebarWidth: 284,

      selectedFolder: folderStructure,

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
    }
  )
);

export { Store };
