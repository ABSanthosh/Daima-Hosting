import { useStoreActions, useStoreState } from "easy-peasy";
import { useRef, useState } from "react";
import toggleFullScreen from "../../utils/ToggleFullscreen";
import MenuButton from "../ActivityBar/Components/MenuButton/MenuButton";
import "./ToolBar.scss";

function ToolBar() {
  const [showMenu, setShowMenu] = useState(false);
  const outRef = useRef(null);
  const toggleSidePanel = useStoreActions((actions) => actions.toggleSidePanel);
  const toggleFullScreenState = useStoreActions(
    (actions) => actions.toggleFullScreenState
  );
  const isFullScreen = useStoreState((state) => state.isFullScreen);
  const sidePanelState = useStoreState((state) => state.sidePanelState);

  return (
    <div className="ToolBar" ref={outRef}>
      <div className="ToolBar__left">
        <MenuButton
          outRef={outRef}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <span
          className={`ToolBar__icon--sidePanelToggle ToolBar__icon${
            sidePanelState ? "--active" : ""
          }`}
          title="Toggle Side Panel"
          data-icon={String.fromCharCode(60418)}
          onClick={() => toggleSidePanel()}
        />
      </div>
      <div className="ToolBar__right">
        <span
          className={`ToolBar__icon--toggleFullScreen ${
            !isFullScreen ? "ToolBar__icon--active" : ""
          }`}
          data-icon={String.fromCharCode(isFullScreen ? 60236 : 60237)}
          title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
          onClick={() => {
            toggleFullScreenState();
            toggleFullScreen();
          }}
        />
      </div>
    </div>
  );
}

export default ToolBar;
