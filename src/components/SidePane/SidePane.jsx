import { useStoreActions } from "easy-peasy";
import React from "react";
import useResize from "../../hooks/useResize";
import "./SidePane.scss";

function SidePane({ children, title }) {
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
      <div
        className="SidePane__sash"
        ref={dragRef}
        onClick={(e) => {
          if (e.detail === 2) {
            setSidebarWidth(284);
            dragRef.current.style.left = "284px";
            containerRef.current.style.width = "284px";

            setTimeout(() => {
              dragRef.current.style.left = "";
              containerRef.current.style.width = "";
            }, 50);
          }
        }}
      />
      <div className="SidePane__header">
        <h2>{title}</h2>
      </div>
      <div className="SidePane__content">
        <div
          className="SidePane__content--inner"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default SidePane;
