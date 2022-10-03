import { useStoreActions } from "easy-peasy";
import React from "react";
import useResize from "../../hooks/useResize";

import "./SidePane.scss";

function SidePane() {
  const containerRef = React.useRef(null);
  const dragRef = React.useRef(null);
  const setSidebarWidth = useStoreActions((actions) => actions.setSidebarWidth);


  useResize(
    containerRef,
    dragRef,
    (width) => {
      dragRef.current.style.backgroundColor = "var(--daima-sash-hoverBorder)";
      dragRef.current.style.animation = "none";
      document.body.style.cursor = "ew-resize";
      setSidebarWidth(width);
    },
    () => {
      dragRef.current.style.backgroundColor = "";
      dragRef.current.style.animation = "";
      document.body.style.cursor = "";
    }
  );

  return (
    <div className="SidePane" ref={containerRef}>
      <div className="SidePane__sash" ref={dragRef} />
      <div className="SidePane__content"></div>
    </div>
  );
}

export default SidePane;
