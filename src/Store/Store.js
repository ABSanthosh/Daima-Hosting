import { createStore, action, persist } from "easy-peasy";

const Store = createStore(
  persist({
    theme: "github",
    activityItem: "explorer",
    sidebarWidth: 284,

    setTheme: action((state, payload) => {
      state.theme = payload;
    }),
    setActivityItem: action((state, payload) => {
      state.activityItem = payload;
    }),
    setSidebarWidth: action((state, payload) => {
      state.sidebarWidth = payload;
    }),
  })
);

export { Store };
