import { useStoreState } from "easy-peasy";
import React from "react";
import ActivityBar from "../../components/ActivityBar/ActivityBar";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor";
import SidePane from "../../components/SidePane/SidePane";
import "./Home.scss";

function Home() {
  const [code, setCode] = React.useState("");
  const currentTheme = useStoreState((state) => state.theme);
  const currentActivity = useStoreState((state) => state.activityItem);
  const sidebarWidth = useStoreState((state) => state.sidebarWidth);

  React.useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <div
      className={`Workbench ${currentTheme}`}
      style={{
        gridTemplateColumns: `48px ${sidebarWidth}px 1fr`,
      }}
    >
      <ActivityBar />
      {currentActivity !== null && <SidePane />}
      {/* <MonacoEditor setCode={setCode} code={code} /> */}
    </div>
  );
}

export default Home;
