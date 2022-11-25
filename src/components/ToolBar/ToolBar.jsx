import { useStoreActions, useStoreState } from "easy-peasy";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import toggleFullScreen from "../../utils/ToggleFullscreen";
import MenuButton from "../ActivityBar/Components/MenuButton/MenuButton";
import "./ToolBar.scss";
import { customAlphabet } from "nanoid";
import { useEffect } from "react";

function ToolBar() {
  const [showMenu, setShowMenu] = useState(false);
  const outRef = useRef(null);
  const nanoid = customAlphabet("1234567890abcdef");

  const setSidePanelState = useStoreActions(
    (actions) => actions.setSidePanelState
  );
  const setHostSessionId = useStoreActions(
    (actions) => actions.setHostSessionId
  );
  const toggleFullScreenState = useStoreActions(
    (actions) => actions.toggleFullScreenState
  );
  const isFullScreen = useStoreState((state) => state.isFullScreen);
  const sidePanelState = useStoreState((state) => state.sidePanelState);
  const isSaving = useStoreState((state) => state.isSaving);
  const hostSessionId = useStoreState((state) => state.hostSessionId);
  const joinSessionId = useStoreState((state) => state.joinSessionId);
  const setJoinSessionId = useStoreActions((action) => action.setJoinSessionId);
  const [showSessionMenu, setShowSessionMenu] = useState(false);
  const [joinSessionInput, setJoinSessionInput] = useState(false);

  const [copiedState, setCopiedState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopiedState(false);
    }, 1500);
  }, [copiedState]);

  useOnClickOutside(outRef, () => {
    setShowSessionMenu(false);
    setJoinSessionInput(false);
  });

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
        {joinSessionId !== null && (
          <>
            <pre>Editing: {joinSessionId}</pre>
            &nbsp;
          </>
        )}
        {hostSessionId !== null && (
          <>
            <pre>Hosting: {hostSessionId}</pre>
            &nbsp;
          </>
        )}
        <button
          className="ToolBar__icon--liveHelp"
          onClick={() => setShowSessionMenu(!showSessionMenu)}
          data-icon={String.fromCharCode(60184)}
        />
        {showSessionMenu && (
          <ul className="ToolBar__liveHelp">
            <li className="ToolBar__liveHelp--item">
              {hostSessionId === null ? (
                <button
                  onClick={() => {
                    setHostSessionId(nanoid(7));
                  }}
                >
                  Start Session
                </button>
              ) : (
                <button
                  className="ToolBar__liveHelp--copyLabel"
                  onClick={() => {
                    navigator.clipboard.writeText(hostSessionId);
                    setCopiedState(true);
                  }}
                >
                  <pre>{hostSessionId}</pre>
                  {copiedState === false ? (
                    <span data-icon={String.fromCharCode(60364)} />
                  ) : (
                    <i data-icon={String.fromCharCode(60082)}>
                      <p>Copied!</p>
                    </i>
                  )}
                </button>
              )}
            </li>
            {joinSessionId === null && (
              <li className="ToolBar__liveHelp--item">
                <button
                  onClick={() => {
                    setJoinSessionInput(!joinSessionInput);
                  }}
                >
                  Join Session
                </button>
              </li>
            )}
            {(joinSessionInput || joinSessionId !== null) && (
              <>
                <li className="ToolBar__liveHelp--item">
                  <input
                    type="text"
                    placeholder="Enter Session ID"
                    value={joinSessionId ? joinSessionId : ""}
                    onChange={(e) => {
                      setJoinSessionId(
                        e.target.value === "" ? null : e.target.value
                      );
                    }}
                  />
                </li>
              </>
            )}
            {hostSessionId && (
              <>
                <li className="MenuButton__subMenuBox--separator" />
                <li className="ToolBar__liveHelp--dangerItem">
                  <button onClick={() => setHostSessionId(null)}>
                    Close Session
                  </button>
                </li>
              </>
            )}
            {joinSessionId && (
              <>
                <li className="MenuButton__subMenuBox--separator" />
                <li className="ToolBar__liveHelp--dangerItem">
                  <button onClick={() => setJoinSessionId(null)}>
                    Exit Session
                  </button>
                </li>
              </>
            )}
          </ul>
        )}
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
