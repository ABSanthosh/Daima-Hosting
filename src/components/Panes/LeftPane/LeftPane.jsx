import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { CreateFolderMap } from "../../../utils/FileAccess";
import BlurredSpinner from "../../BlurredSpinner/BlurredSpinner";
import FancyButton from "../../FancyButton/FancyButton";
import FolderTree from "../../FolderTree/FolderTree";
import "./LeftPane.scss";

function LeftPane() {
  const currentActivity = useStoreState((state) => state.activityItem);
  const [isMouseOver, setMouseOver] = useState(false);
  const setActiveItem = useStoreActions((actions) => actions.setActivityItem);
  const setSelectedFolderState = useStoreActions(
    (actions) => actions.setSelectedFolderState
  );
  const activeItem = useStoreState((state) => state.activityItem);
  const [showLoader, setShowLoader] = useState(false);
  const folderStructure = useStoreState((state) => state.selectedFolder);

  return (
    <div className="LeftPane">
      <ul className="LeftPane__headerTabs">
        <li
          className={`LeftPane__headerTabs--${
            activeItem === "explorer" ? "activeItem" : "item"
          }`}
        >
          <button
            onClick={() => {
              if (activeItem !== "explorer") {
                setActiveItem("explorer");
              }
            }}
            data-icon={String.fromCharCode(60035)}
          >
            <p>Files</p>
          </button>
        </li>
        <li
          className={`LeftPane__headerTabs--${
            activeItem === "git" ? "activeItem" : "item"
          }`}
        >
          <button
            onClick={() => {
              if (activeItem !== "git") {
                setActiveItem("git");
              }
            }}
            data-icon={String.fromCharCode(60158)}
          >
            <p>Git</p>
          </button>
        </li>
        <li
          className={`LeftPane__headerTabs--${
            activeItem === "search" ? "activeItem" : "item"
          }`}
        >
          <button
            onClick={() => {
              if (activeItem !== "search") {
                setActiveItem("search");
              }
            }}
            data-icon={String.fromCharCode(60013)}
          >
            <p>Search</p>
          </button>
        </li>
      </ul>
      <div
        className="LeftPane__content"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        style={{
          overflow: isMouseOver ? "auto" : "hidden",
        }}
      >
        <div className="LeftPane__content--inner">
          {currentActivity === "explorer" && (
            <>
              {showLoader && <BlurredSpinner />}

              {folderStructure ? (
                <FolderTree
                  original={folderStructure}
                  folderStructure={folderStructure}
                />
              ) : (
                <div className="Workbench__content--empty">
                  <FancyButton
                    onClick={async () => {
                      setShowLoader(true);
                      try {
                        const root = await CreateFolderMap();
                        setSelectedFolderState(root);
                        setShowLoader(false);
                      } catch (error) {
                        setShowLoader(false);
                      }
                    }}
                    innerText="Open a folder"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftPane;
