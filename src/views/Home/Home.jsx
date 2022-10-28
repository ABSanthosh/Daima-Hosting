import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import FolderTree from "../../components/FolderTree/FolderTree";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor";
import SidePane from "../../components/SidePane/SidePane";
import Tabs from "../../components/Tabs/Tabs";
import ToolBar from "../../components/ToolBar/ToolBar";
import useHotKey from "../../hooks/useHotKey";
import { CreateFolderMap, OpenFile } from "../../utils/FileAccess";
import "./Home.scss";

function Home() {
  const [code, setCode] = React.useState("");
  const currentTheme = useStoreState((state) => state.theme);
  const currentActivity = useStoreState((state) => state.activityItem);
  const sidePanelState = useStoreState((state) => state.sidePanelState);
  const sidebarWidth = useStoreState((state) => state.sidebarWidth);
  const folderStructure = useStoreState((state) => state.selectedFolder);
  const currentFile = useStoreState((state) => state.currentFile);
  const selectedFiles = useStoreState((state) => state.selectedFiles);

  const toggleSidePanel = useStoreActions((action) => action.toggleSidePanel);
  const setTheme = useStoreActions((action) => action.setTheme);

  const setSelectedFolderState = useStoreActions(
    (actions) => actions.setSelectedFolderState
  );

  const keybindings = [
    {
      key: "control+shift+o",
      handler: async () => {
        const root = await CreateFolderMap();
        setSelectedFolderState(root);
      },
    },
    {
      key: "control+alt+o",
      handler: async () => {
        const root = await OpenFile();
        // TODO: Open file in editor
      },
    },
    {
      key: "control+b",
      handler: () => toggleSidePanel(),
    },
    {
      key: "control+alt+`",
      handler: () => {
        const themes = ["tomorrow-night-blue", "github", "blackboard"];
        // based on currentTheme, set the next theme
        const currentThemeIndex = themes.indexOf(currentTheme);
        const nextThemeIndex =
          currentThemeIndex === themes.length - 1 ? 0 : currentThemeIndex + 1;
        setTheme(themes[nextThemeIndex]);
      },
    },
  ];

  keybindings.forEach((keybinding) => {
    useHotKey(keybinding.key, keybinding.handler);
  });

  return (
    <div className={`Workbench ${currentTheme}`}>
      <ToolBar />
      <div
        className="Workbench__bottom"
        style={{
          gridTemplateColumns: sidePanelState
            ? ` ${sidebarWidth}px ${`calc(100vw - ${sidebarWidth}px)`}`
            : ` ${`calc(100vw)`}`,
        }}
      >
        {sidePanelState && (
          <SidePane>
            {currentActivity === "explorer" && (
              <>
                {folderStructure ? (
                  <FolderTree
                    original={folderStructure}
                    folderStructure={folderStructure}
                  />
                ) : (
                  "Open Folder"
                )}
              </>
            )}
          </SidePane>
        )}
        <div
          className="Workbench__bottom--right"
          style={{
            gridTemplateRows:
              selectedFiles.length > 0 ? "35px 22px 1fr" : "1fr",
          }}
        >
          {selectedFiles.length > 0 ? (
            <>
              <Tabs folderStructure={folderStructure} />
              <BreadCrumbs currentFile={currentFile} />
              <MonacoEditor setCode={setCode} code={code} />
            </>
          ) : (
            <div className="Workbench__bottom--empty">
              <ul>
                <li>
                  <p>Open a folder</p>
                  <button
                    onClick={async () => {
                      const root = await CreateFolderMap();
                      setSelectedFolderState(root);
                    }}
                  >
                    <pre>Ctrl + Shift + O</pre>
                  </button>
                </li>
                <li>
                  <p>Toggle side panel</p>
                  <button onClick={async () => toggleSidePanel()}>
                    <pre>Ctrl + B</pre>
                  </button>
                </li>
                <li>
                  <p>Switch theme</p>
                  <button onClick={async () => toggleSidePanel()}>
                    <pre>Ctrl + Alt + `</pre>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
