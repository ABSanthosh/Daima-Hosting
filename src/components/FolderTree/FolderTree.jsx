import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import { getFileContents } from "../../utils/FileAccess";
import "./FolderTree.scss";
import SetiMap from "../../assets/Maps/SetiMap.json";
import { handleEditorContent } from "../../utils/MonacoModel";

function File({ folderStructure, depth }) {
  const setSelectedFiles = useStoreActions((action) => action.setSelectedFiles);
  const setCurrentFile = useStoreActions((action) => action.setCurrentFile);

  const setCurrentFileChanged = useStoreActions(
    (action) => action.setCurrentFileChanged
  );
  const iconChar =
    SetiMap["iconDefinitions"][SetiMap["languageIds"][folderStructure.ext]];
  const iconOctal = String.fromCharCode(
    parseInt(iconChar?.fontCharacter.replace("\\", ""), 16)
  );

  return (
    <div
      className="File"
      tabIndex={1}
      style={{
        paddingLeft: `${depth * 9}px`,
      }}
      onClick={async () => {
        setSelectedFiles(folderStructure);
        setCurrentFile(folderStructure);
        const content = await getFileContents(folderStructure.handler);
        setCurrentFileChanged(false);
        handleEditorContent(folderStructure, content);
      }}
    >
      <div
        className="Folder__intentBox"
        style={{
          width: `${depth * 8}px`,
        }}
      >
        {[...Array(depth - 1)].map((_, index) => (
          <i data-intent key={index} />
        ))}
      </div>
      <span
        data-lang={
          iconChar !== undefined ? iconOctal : String.fromCharCode(57379)
        }
        style={{
          color: iconChar !== undefined ? iconChar.fontColor : "",
        }}
      >
        <p>{folderStructure.name}</p>
      </span>
    </div>
  );
}

function Folder({ folderStructure, depth, original }) {
  const [open, setOpen] = useState(folderStructure.open);
  const [isFocused, setIsFocused] = useState(false);
  const setSelectedFolderState = useStoreActions(
    (action) => action.setSelectedFolderState
  );

  return (
    <div
      className="Folder"
      tabIndex={1}
      onFocus={() => setIsFocused(true)}
      onKeyDown={(e) => {
        if (isFocused && e.key === "Enter") {
          setOpen(!open);
        }
      }}
    >
      <div
        className="Folder__intentBox"
        style={{
          width: `${depth * 8}px`,
        }}
      >
        {[...Array(depth - 1)].map((_, index) => (
          <i data-intent key={index} />
        ))}
      </div>
      <div
        className="Folder__title"
        onClick={() => {
          setOpen(!open);
          const tempOriginal = { ...original };

          const findParent = (folder, original) => {
            if (
              folder.path === original.path &&
              folder.name === original.name
            ) {
              original.open = !original.open;
              return original;
            }
            if (
              folder.path === folderStructure.path &&
              folder.name === folderStructure.name
            ) {
              folder.open = !folder.open;
              return original;
            }
            if (folder.type === "directory") {
              for (let child of folder.children) {
                const result = findParent(child, original);
                if (result) {
                  return result;
                }
              }
            }
          };
          setSelectedFolderState(findParent(folderStructure, tempOriginal));
        }}
        style={{
          paddingLeft: `${depth * 9}px`,
        }}
      >
        <span
          className={`Folder__title--logo${open ? "Open" : "Closed"}`}
          data-icon="&#60084;"
        >
          <p>{folderStructure.name}</p>
        </span>
      </div>
    </div>
  );
}

function FolderTree({ folderStructure, depth = 1, original }) {
  if (folderStructure.type === "directory") {
    return (
      <>
        <Folder
          depth={depth}
          original={original}
          folderStructure={folderStructure}
        />
        {folderStructure.open &&
          folderStructure.children.map((child, index) => (
            <FolderTree
              key={index}
              depth={depth + 1}
              original={original}
              folderStructure={child}
            />
          ))}
      </>
    );
  }
  if (folderStructure.type === "file") {
    return <File folderStructure={folderStructure} depth={depth} />;
  }
}

export default FolderTree;
