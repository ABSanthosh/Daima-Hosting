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
  const setVizItem = useStoreActions((actions) => actions.setVizItem);
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
            activeItem === "visualize" ? "activeItem" : "item"
          }`}
        >
          <button
            onClick={() => {
              if (activeItem !== "visualize") {
                setActiveItem("visualize");
              }
            }}
            data-icon={String.fromCharCode(60068)}
          >
            <p>visualize</p>
          </button>
        </li>
        {/* <li
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
        </li> */}
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

          {currentActivity === "visualize" && (
            <div className="Workbench__content--empty">
              <h2>Visualize Algos</h2>
              <FancyButton
                onClick={() => setVizItem("sort")}
                innerText="Sorting"
              />
              <FancyButton
                onClick={() => setVizItem("path")}
                innerText="Path Finding"
              />
              <br />
              <h2>Learn Algos</h2>
              <FancyButton
                onClick={() => setVizItem("binarySearch")}
                innerText="Binary Search"
              />
              <FancyButton
                onClick={() => setVizItem("minSpanningTree")}
                innerText="Min Spanning Tree"
              />
              <FancyButton
                onClick={() => setVizItem("primAlgo")}
                innerText="Prim's Algo"
              />
              <FancyButton
                onClick={() => setVizItem("kruskal")}
                innerText="Kruskal's Algo"
              />
              <FancyButton
                onClick={() => setVizItem("knapsack")}
                innerText="Knapsack"
              />
              <FancyButton
                onClick={() => setVizItem("heaps")}
                innerText="Heaps"
              />{" "}
              <br />
              <h2>Coming Soon</h2>
              <FancyButton
                onClick={() => setVizItem("traveling")}
                innerText="Traveling Sales Man"
              />{" "}
              <FancyButton onClick={() => setVizItem("astar")} innerText="A*" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftPane;
