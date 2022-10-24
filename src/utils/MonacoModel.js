import Lang from "../assets/Maps/ExtToMap.json";

export function handleEditorContent(folderStructure, content) {
  const monaco = window.monaco;
  const editor = window.editor;

  const exist = monaco.editor
    .getModels()
    .map((elem) => elem._associatedResource.path);

  if (!exist.includes("/" + folderStructure.path)) {
    monaco.editor.createModel(
      content,
      Lang[folderStructure.ext] ? Lang[folderStructure.ext][0] : "txt",
      new monaco.Uri().with({ path: folderStructure.path })
    );
  }
  editor.setModel(
    monaco.editor
      .getModels()
      .find(
        (model) => model._associatedResource.path === "/" + folderStructure.path
      )
  );
}
