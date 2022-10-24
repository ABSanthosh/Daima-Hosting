import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import "./Tabs.scss";
import SetiMap from "../../assets/Maps/SetiMap.json";

function Tabs() {
  const monaco = window.monaco;
  const editor = window.editor;

  const selectedFiles = useStoreState((state) => state.selectedFiles);
  const currentFile = useStoreState((state) => state.currentFile);
  const setCurrentFile = useStoreActions((action) => action.setCurrentFile);
  const removeSelectedFile = useStoreActions(
    (action) => action.removeSelectedFile
  );

  return (
    <ul className="TabsWrapper">
      {selectedFiles.map((item, index) => {
        const iconChar =
          SetiMap["iconDefinitions"][SetiMap["languageIds"][item.ext]];
        const iconOctal = String.fromCharCode(
          parseInt(iconChar?.fontCharacter.replace("\\", ""), 16)
        );

        const model = monaco.editor
          .getModels()
          .find((model) => model._associatedResource.path === "/" + item.path);

        const modelIndex = monaco.editor.getModels().indexOf(model);
        const models = monaco.editor.getModels();
        return (
          <li
            className={`TabsWrapper--${
              currentFile.path === item.path ? "activeItem" : "item"
            }`}
            key={index}
          >
            <span
              data-lang={
                iconChar !== undefined ? iconOctal : String.fromCharCode(57379)
              }
              style={{
                color: iconChar !== undefined ? iconChar.fontColor : "",
              }}
              onClick={async () => {
                editor.setModel(model);
                setCurrentFile(item);
              }}
            >
              <p>{item.name}</p>
            </span>
            <span
              data-icon={String.fromCharCode(60022)}
              onClick={() => {
                removeSelectedFile(item);
                model.dispose();

                if (currentFile.path === item.path) {
                  if (modelIndex === 0 && models.length > 1) {
                    editor.setModel(monaco.editor.getModels()[0]);
                    setCurrentFile(selectedFiles[1]);
                  } else if (
                    modelIndex === models.length - 1 &&
                    models.length > 1
                  ) {
                    editor.setModel(monaco.editor.getModels()[modelIndex - 1]);
                    setCurrentFile(selectedFiles[selectedFiles.length - 2]);
                  } else if (models.length > 2) {
                    editor.setModel(monaco.editor.getModels()[modelIndex + 1]);
                    setCurrentFile(selectedFiles[modelIndex + 1]);
                  } else if (models.length === 1) {
                    setCurrentFile({ path: "" });
                  }
                }
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}

Tabs.propTypes = {
  // bla: PropTypes.string,
};

Tabs.defaultProps = {
  // bla: 'test',
};

export default Tabs;
