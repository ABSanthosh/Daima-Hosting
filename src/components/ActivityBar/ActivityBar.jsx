import React from "react";
import "./ActivityBar.scss";
import MenuButton from "./Components/MenuButton/MenuButton";

function ActivityBar() {
  const [showMenu, setShowMenu] = React.useState(false);

  const outRef = React.useRef(null);

  return (
    <div className="ActivityBarWrapper" ref={outRef}>
      <MenuButton
        outRef={outRef}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
}
export default ActivityBar;
