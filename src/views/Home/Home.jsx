import { useStoreState } from "easy-peasy";
import React from "react";
import ActivityBar from "../../components/ActivityBar/ActivityBar";
import FolderTree from "../../components/FolderTree/FolderTree";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor";
import SidePane from "../../components/SidePane/SidePane";
import "./Home.scss";

function Home() {
  const [code, setCode] = React.useState("");
  const currentTheme = useStoreState((state) => state.theme);
  const currentActivity = useStoreState((state) => state.activityItem);
  const sidebarWidth = useStoreState((state) => state.sidebarWidth);
  const folderStructure = useStoreState((state) => state.selectedFolder);
  // React.useEffect(() => {
  //   console.log(code);
  // }, [code]);

  return (
    <div
      className={`Workbench ${currentTheme}`}
      style={{
        gridTemplateColumns:
          currentActivity !== null
            ? `48px ${sidebarWidth}px ${`calc(100% - ${48 + sidebarWidth}px)`}`
            : `48px ${`calc(100% - 48px)`}`,
      }}
    >
      <ActivityBar />
      {currentActivity !== null && (
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
      <MonacoEditor setCode={setCode} code={code} />
    </div>
  );
}

export default Home;
