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
            ? ` ${sidebarWidth}px ${`calc(100% - ${sidebarWidth}px)`}`
            : ` ${`calc(100%)`}`,
        }}
      >
        {sidePanelState && (
          <SidePane title={currentActivity}>
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
        <div className="Workbench__bottom--right">
          <Tabs folderStructure={folderStructure} />
          <BreadCrumbs currentFile={currentFile} />
          <MonacoEditor setCode={setCode} code={code} />
        </div>
      </div>
    </div>
  );
}

export default Home;
