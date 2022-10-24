import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { CreateFolderMap, OpenFile } from "../../../../utils/FileAccess";
import "./MenuButton.scss";

function MenuButton({ outRef, showMenu, setShowMenu }) {
  const [treeStates, setTreeStates] = React.useState({
    file: false,
    theme: false,
  });

  const currentTheme = useStoreState((state) => state.theme);
  const setCurrentTheme = useStoreActions((actions) => actions.setTheme);
  const setSelectedFolderState = useStoreActions(
    (actions) => actions.setSelectedFolderState
  );
  const toggleAutoSave = useStoreActions((actions) => actions.toggleAutoSave);
  const isAutoSave = useStoreState((state) => state.isAutoSave);

  useOnClickOutside(outRef, () => {
    setShowMenu(false);
    setTreeStates({
      file: false,
      theme: false,
    });
  });
  return (
    <>
      <div
        className={`MenuButton__menu
            ${showMenu ? "MenuButton__menu--active" : ""}
        `}
        onClick={() => {
          const currentMenuState = showMenu;
          setShowMenu(!currentMenuState);
          if (currentMenuState) {
            setTreeStates({
              file: false,
              theme: false,
            });
          }
        }}
        data-icon="&#60308;"
      />
      {showMenu && (
        <ul className="MenuButton__menuBox">
          <li
            className={`MenuButton__menuBox--${
              treeStates.file ? "active" : "item"
            }`}
          >
            <button
              onClick={() => {
                setTreeStates({
                  file: true,
                  theme: false,
                });
              }}
              onMouseEnter={() => {
                setTreeStates({
                  file: true,
                  theme: false,
                });
              }}
            >
              <span>File</span>
              <span data-icon="&#60086;" />
            </button>
          </li>
          <li
            className={`MenuButton__menuBox--${
              treeStates.theme ? "active" : "item"
            }`}
          >
            <button
              onClick={() => {
                setTreeStates({
                  file: false,
                  theme: true,
                });
              }}
              onMouseEnter={() => {
                setTreeStates({
                  file: false,
                  theme: true,
                });
              }}
            >
              <span>Theme</span>
              <span data-icon="&#60086;" />
            </button>
          </li>
        </ul>
      )}
      {treeStates.file && (
        <ul
          className="MenuButton__subMenuBox"
          style={{
            left: "250px",
          }}
        >
          <li className="MenuButton__subMenuBox--item">
            <button
              onClick={async () => {
                await OpenFile();
              }}
            >
              Open File
            </button>
          </li>
          <li className="MenuButton__subMenuBox--item">
            <button
              onClick={async () => {
                const root = await CreateFolderMap();
                console.log(root);
                setSelectedFolderState(root);
              }}
            >
              Open Folder
            </button>
          </li>
          <li className="MenuButton__subMenuBox--separator" />
          <li className="MenuButton__subMenuBox--item">
            <button>Save</button>
          </li>
          <li className="MenuButton__subMenuBox--item">
            <button>Save As</button>
          </li>
          <li className="MenuButton__subMenuBox--item">
            <button onClick={() => toggleAutoSave()}>
              <span>Auto Save</span>
              {isAutoSave && <span data-icon="&#60082;" />}
            </button>
          </li>
        </ul>
      )}
      {treeStates.theme && (
        <ul
          className="MenuButton__subMenuBox"
          style={{
            left: "250px",
          }}
        >
          <li className="MenuButton__subMenuBox--item">
            <button onClick={() => setCurrentTheme("tomorrow-night-blue")}>
              <span>Tomorrow Night Blue</span>
              {currentTheme === "tomorrow-night-blue" && (
                <span data-icon="&#60082;" />
              )}
            </button>
          </li>
          <li className="MenuButton__subMenuBox--item">
            <button onClick={() => setCurrentTheme("github")}>
              <span>Github</span>
              {currentTheme === "github" && <span data-icon="&#60082;" />}
            </button>
          </li>
          <li className="MenuButton__subMenuBox--item">
            <button onClick={() => setCurrentTheme("blackboard")}>
              <span>Blackboard</span>
              {currentTheme === "blackboard" && <span data-icon="&#60082;" />}
            </button>
          </li>
          <li className="MenuButton__subMenuBox--disabled">
            <button
              disabled
              onClick={() => setCurrentTheme("chrome-dev-tools")}
            >
              <span>Chrome Dev Tools</span>
              {currentTheme === "chrome-dev-tools" && (
                <span data-icon="&#60082;" />
              )}
            </button>
          </li>
          <li className="MenuButton__subMenuBox--disabled">
            <button disabled onClick={() => setCurrentTheme("ocean-next")}>
              <span>Ocean Next</span>
              {currentTheme === "ocean-next" && <span data-icon="&#60082;" />}
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default MenuButton;
