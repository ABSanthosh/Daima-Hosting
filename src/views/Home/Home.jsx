import { useStoreState } from "easy-peasy";
import React from "react";
import ActivityBar from "../../components/ActivityBar/ActivityBar";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor";
import "./Home.scss";

function Home() {
  const [code, setCode] = React.useState("");
  const currentTheme = useStoreState((state) => state.theme);

  React.useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <div className={`Workbench ${currentTheme}`}>
      <ActivityBar />
      {/* <MonacoEditor setCode={setCode} code={code} /> */}
    </div>
  );
}

export default Home;
