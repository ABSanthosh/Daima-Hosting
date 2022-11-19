import { useStoreState } from "easy-peasy";
import { useState } from "react";
import {
  dijkstra,
  getInitialGrid,
  getNodesInShortestPathOrder,
} from "../../../utils/VisualizerUtils/GridUtils";
import { getMergeSortAnimations } from "../../../utils/VisualizerUtils/SortHelper";
import DijkstraGrid from "../components/DijkstraGrid/DijkstraGrid";
import SortBlocks from "../components/SortBlocks/SortBlocks";
import "./VizLayout.scss";

function VizLayout() {
  const vizItem = useStoreState((state) => state.vizItem);
  const PRIMARY_COLOR = "aqua";
  const SECONDARY_COLOR = "red";
  const START_NODE_ROW = 10;
  const START_NODE_COL = 9;
  const FINISH_NODE_ROW = 10;
  const FINISH_NODE_COL = 30;

  const randomHeights = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const generateBlockArray = () => {
    return [
      ...Array(arraySize)
        .fill()
        .map(() => randomHeights(10, 400)),
    ];
  };

  const [animationSpeed, setAnimationSpeed] = useState(20);
  const [arraySize, setArraySize] = useState(70);
  const [blockArray, setBlockArray] = useState(generateBlockArray());

  //=================== SORTING ===================
  function mergeSort() {
    const animations = getMergeSortAnimations(blockArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("SortBlocks__blockBox");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          // arrayBars[barOneIdx].innerHTML = `<pre>${newHeight}</pre>`;
        }, i * animationSpeed);
      }
    }
  }

  // =================== PATHFINDING ===================

  const [basicGrid, setBasicGrid] = useState(getInitialGrid());
  function animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`NodeItem-${node.row}-${node.col}`).className =
          "NodeItem NodeItem--visited";
      }, 10 * i);
    }
  }

  function animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`NodeItem-${node.row}-${node.col}`).className =
          "NodeItem NodeItem--shortest-path";
      }, 50 * i);
    }
  }

  function visualizeDijkstra() {
    const grid = basicGrid;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  return (
    <div className={`VizLayout VizLayout__${vizItem}`}>
      {vizItem === "sort" && (
        <>
          <div className="VizLayout__sort--top">
            <SortBlocks blockArray={blockArray} />
          </div>
          <div className="VizLayout__sort--bottom">
            <button onClick={mergeSort}>Merge Sort</button>
            <button onClick={() => setBlockArray(generateBlockArray())}>
              New Array
            </button>
            <br />
            <br />
            <div>
              <p>Set animation speed</p>
              <input
                type="range"
                min="10"
                max="1000"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(e.target.value)}
              />
              <pre>{animationSpeed}</pre>
            </div>
            <br />
            <div>
              <p>Array size</p>
              <input
                type="range"
                min="10"
                max="100"
                value={arraySize}
                onChange={(e) => {
                  setArraySize(parseInt(e.target.value));
                  setBlockArray(generateBlockArray());
                }}
              />
              <pre>{arraySize}</pre>
            </div>
          </div>
        </>
      )}

      {vizItem === "path" && (
        <div className="VizLayout__pathBox">
          <DijkstraGrid basicGrid={basicGrid} setBasicGrid={setBasicGrid} />
          <button onClick={visualizeDijkstra}>
            Visualize Dijkstra's Algorithm
          </button>
        </div>
      )}
    </div>
  );
}

export default VizLayout;
