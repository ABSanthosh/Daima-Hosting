import { useStoreState } from "easy-peasy";
import { useState } from "react";
import { getMergeSortAnimations } from "../../../utils/VisualizerUtils/SortHelper";
import SortBlocks from "../components/SortBlocks/SortBlocks";
import "./VizLayout.scss";

function VizLayout() {
  const vizItem = useStoreState((state) => state.vizItem);
  const PRIMARY_COLOR = "aqua";
  const SECONDARY_COLOR = "red";

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
        <>
        </>
      )}
    </div>
  );
}

export default VizLayout;
