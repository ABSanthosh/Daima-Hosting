import "./SortBlocks.scss";

function SortBlocks({ blockArray }) {
  return (
    <ul className="SortBlocks">
      {blockArray.map((height, index) => (
        <li
          className="SortBlocks__blockBox"
          key={index}
          style={{
            height: `${height}px`,
          }}
        >
          {/* <pre>{height}</pre> */}
        </li>
      ))}
    </ul>
  );
}

export default SortBlocks;
