import { useStoreActions, useStoreState } from "easy-peasy";
import { useRef, useState } from "react";
import toggleFullScreen from "../../utils/ToggleFullscreen";
import MenuButton from "../ActivityBar/Components/MenuButton/MenuButton";
import "./ToolBar.scss";

function ToolBar() {
  const [showMenu, setShowMenu] = useState(false);
  const outRef = useRef(null);
  const setSidePanelState = useStoreActions(
    (actions) => actions.setSidePanelState
  );
  const toggleFullScreenState = useStoreActions(
    (actions) => actions.toggleFullScreenState
  );
  const isFullScreen = useStoreState((state) => state.isFullScreen);
  const sidePanelState = useStoreState((state) => state.sidePanelState);
  const isSaving = useStoreState((state) => state.isSaving);

  return (
    <div className="ToolBar" ref={outRef}>
      <div className="ToolBar__left">
        <MenuButton
          outRef={outRef}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <span
          className="ToolBar__icon--sidePanelToggle"
          title="Toggle Side Panel"
          data-icon={String.fromCharCode(sidePanelState.left ? 60403 : 60418)}
          onClick={() => setSidePanelState({ left: !sidePanelState.left })}
        />
        <span
          className="ToolBar__icon--sidePanelToggle"
          title="Toggle Side Panel"
          data-icon={String.fromCharCode(sidePanelState.right ? 60404 : 60416)}
          onClick={() => setSidePanelState({ right: !sidePanelState.right })}
        />
      </div>
      <div className="ToolBar__right">
        {isSaving && (
          <span
            className="ToolBar__icon--savingStatus"
            data-icon={String.fromCharCode(60185)}
          >
            <p>Saving...</p>
          </span>
        )}
        <button
          className="ToolBar__icon--learn"
          data-icon={String.fromCharCode(60068)}
        />
        <button
          className="ToolBar__icon--liveHelp"
          data-icon={String.fromCharCode(60184)}
        />
        <button
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
