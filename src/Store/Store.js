import { createStore, action, persist } from "easy-peasy";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

const Store = createStore(
  persist(
    {
      monaco: monaco,
      theme: "github",
      activityItem: "explorer",
      sidebarWidth: 284,

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
