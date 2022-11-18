import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor";
import Tabs from "../../components/Tabs/Tabs";
import ToolBar from "../../components/ToolBar/ToolBar";
import useKeyboardShortcut from "use-keyboard-shortcut";
import {
  CreateFolderMap,
  OpenFile,
  saveFileContents,
} from "../../utils/FileAccess";
import "./Home.scss";
import LeftPane from "../../components/Panes/LeftPane/LeftPane";
import RightPane from "../../components/Panes/RightPane/RightPane";
import { useEffect } from "react";

import Split from "react-split-grid";
import useDebounce from "../../hooks/useDebounce";

function Home() {
  const [code, setCode] = React.useState("");
  const currentTheme = useStoreState((state) => state.theme);
  const sidePanelState = useStoreState((state) => state.sidePanelState);

  const folderStructure = useStoreState((state) => state.selectedFolder);
  const currentFile = useStoreState((state) => state.currentFile);
  const selectedFiles = useStoreState((state) => state.selectedFiles);

  const leftPanelWidth = useStoreState((state) => state.leftPanelWidth);
  const rightPanelWidth = useStoreState((state) => state.rightPanelWidth);

  const setLeftPanelWidth = useStoreActions(
    (action) => action.setLeftPanelWidth
  );
  const setRightPanelWidth = useStoreActions(
    (action) => action.setRightPanelWidth
  );
  const setSidePanelState = useStoreActions(
    (action) => action.setSidePanelState
  );
  const setTheme = useStoreActions((action) => action.setTheme);

  const setIsSaving = useStoreActions((action) => action.setIsSaving);
  const currentFileContent = useStoreState((state) => state.currentFileContent);

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
      handler: () => setSidePanelState({ left: !sidePanelState.left }),
    },
    {
      key: "control+alt+`",
      handler: () => {
        const themes = ["tomorrow-night-blue", "github", "blackboard"];
        const currentThemeIndex = themes.indexOf(currentTheme);
        const nextThemeIndex =
          currentThemeIndex === themes.length - 1 ? 0 : currentThemeIndex + 1;
        setTheme(themes[nextThemeIndex]);
      },
    },
    {
      key: "control+s",
      handler: async () => {
        setIsSaving(true);
        await saveFileContents(currentFile.handler, currentFileContent).then(
          () => setIsSaving(false)
        );
      },
    },
  ];

  keybindings.forEach((keybinding) => {
    useKeyboardShortcut(keybinding.key.split("+"), keybinding.handler, {
      overrideSystem: true,
    });
  });

  const gridTemplateGenerator = () => {
    if (sidePanelState.left && sidePanelState.right) {
      return `${leftPanelWidth}px 4px 1fr 4px ${rightPanelWidth}px`;
    }
    if (sidePanelState.left && !sidePanelState.right) {
      return `${leftPanelWidth}px 4px 1fr 4px 0px`;
    }
    if (!sidePanelState.left && sidePanelState.right) {
      return `0px 4px 1fr 4px ${rightPanelWidth}px`;
    }

    return `0px 4px 1fr 4px 0px`;
  };

  const [gridTemplate, setGridTemplate] = useState(gridTemplateGenerator());

  useDebounce(gridTemplate, 500, (dValue) => {
    if (dValue === gridTemplateGenerator()) return;
    const leftRightVal = dValue.split(" 4px 1fr 4px ");
    const leftVal = parseInt(leftRightVal[0].replace("px", ""));
    const rightVal = parseInt(leftRightVal[1].replace("px", ""));

    if (leftVal <= 470) setLeftPanelWidth(leftVal);
    else if (leftVal > 470) setLeftPanelWidth(470);

    if (rightVal <= 470) setRightPanelWidth(rightVal);
    else if (rightVal > 470) setRightPanelWidth(470);
  });

  useEffect(() => {
    setGridTemplate(gridTemplateGenerator());
  }, [sidePanelState]);

  return (
    <div className={`Workbench ${currentTheme}`}>
      <ToolBar />
      <Split
        snapOffset={170}
        onDrag={(_, __, gridTemplateStyle) =>
          setGridTemplate(gridTemplateStyle)
        }
        render={({ getGridProps, getGutterProps }) => (
          <div
            className="Workbench__bottom"
            {...getGridProps()}
            style={{
              gridTemplateColumns: gridTemplate,
            }}
          >
            <LeftPane />
            <span
              role="presentation"
              className="Workbench__sash Workbench__sash--left"
              {...getGutterProps("column", 1)}
            />

            <div
              className="Workbench__bottom--middle"
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
                      <button
                        onClick={async () =>
                          setSidePanelState({ left: !sidePanelState.left })
                        }
                      >
                        <pre>Ctrl + B</pre>
                      </button>
                    </li>
                    <li>
                      <p>Switch theme</p>
                      <button
                        onClick={async () => {
                          const themes = [
                            "tomorrow-night-blue",
                            "github",
                            "blackboard",
                          ];
                          const currentThemeIndex =
                            themes.indexOf(currentTheme);
                          const nextThemeIndex =
                            currentThemeIndex === themes.length - 1
                              ? 0
                              : currentThemeIndex + 1;
                          setTheme(themes[nextThemeIndex]);
                        }}
                      >
                        <pre>Ctrl + Alt + `</pre>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <span
              role="presentation"
              className="Workbench__sash Workbench__sash--right"
              {...getGutterProps("column", 3)}
            />
            <RightPane />
          </div>
        )}
      />
    </div>
  );
}

export default Home;
// return (
//   <div className={`Workbench ${currentTheme}`}>
//     <ToolBar />
//     <div
//       className="Workbench__bottom"
//       style={{
//         gridTemplateColumns: sidePanelState
//           ? ` ${sidebarWidth}px ${`calc(100vw - ${sidebarWidth}px)`}`
//           : ` ${`calc(100vw)`}`,
//       }}
//     >
//       {sidePanelState && (
//         <SidePane>
//           {currentActivity === "explorer" && (
//             <>
//               {showLoader && <BlurredSpinner />}

//               {folderStructure ? (
//                 <FolderTree
//                   original={folderStructure}
//                   folderStructure={folderStructure}
//                 />
//               ) : (
//                 <div className="Workbench__content--empty">
//                   <FancyButton
//                     onClick={async () => {
//                       setShowLoader(true);
//                       try {
//                         const root = await CreateFolderMap();
//                         setSelectedFolderState(root);
//                         setShowLoader(false);
//                       } catch (error) {
//                         setShowLoader(false);
//                       }
//                     }}
//                     innerText="Open a folder"
//                   />
//                 </div>
//               )}
//             </>
//           )}
//         </SidePane>
//       )}
//       <div
//         className="Workbench__bottom--right"
//         style={{
//           gridTemplateRows:
//             selectedFiles.length > 0 ? "35px 22px 1fr" : "1fr",
//         }}
//       >
//         {selectedFiles.length > 0 ? (
//           <>
//             <Tabs folderStructure={folderStructure} />
//             <BreadCrumbs currentFile={currentFile} />
//             <MonacoEditor setCode={setCode} code={code} />
//           </>
//         ) : (
//           <div className="Workbench__bottom--empty">
//             <ul>
//               <li>
//                 <p>Open a folder</p>
//                 <button
//                   onClick={async () => {
//                     const root = await CreateFolderMap();
//                     setSelectedFolderState(root);
//                   }}
//                 >
//                   <pre>Ctrl + Shift + O</pre>
//                 </button>
//               </li>
//               <li>
//                 <p>Toggle side panel</p>
//                 <button onClick={async () => setSidePanelState()}>
//                   <pre>Ctrl + B</pre>
//                 </button>
//               </li>
//               <li>
//                 <p>Switch theme</p>
//                 <button
//                   onClick={async () => {
//                     const themes = [
//                       "tomorrow-night-blue",
//                       "github",
//                       "blackboard",
//                     ];
//                     const currentThemeIndex = themes.indexOf(currentTheme);
//                     const nextThemeIndex =
//                       currentThemeIndex === themes.length - 1
//                         ? 0
//                         : currentThemeIndex + 1;
//                     setTheme(themes[nextThemeIndex]);
//                   }}
//                 >
//                   <pre>Ctrl + Alt + `</pre>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );
