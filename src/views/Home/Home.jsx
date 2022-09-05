import React from "react";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor";
import "./Home.scss";

function Home() {
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <div className="HomeWrapper">
      <MonacoEditor setCode={setCode} code={code} />
    </div>
  );
}

export default Home;
