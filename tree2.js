export const tree2 = {
  path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src",
  name: "src",
  type: "directory",
  open: true,
  children: [
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/App.jsx",
      name: "App.jsx",
      content:
        'import Router from "./router";\n' +
        "\n" +
        "export default function App() {\n" +
        "  return <Router />;\n" +
        "}",
      type: "file",
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/Store",
      name: "Store",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/Store/Store.js",
          name: "Store.js",
          content:
            'import { createStore, action, persist } from "easy-peasy";\r\n' +
            'import * as monaco from "monaco-editor/esm/vs/editor/editor.api";\r\n' +
            'import { tree } from "../../tree";\r\n' +
            'import { tree2 } from "../../tree2";\r\n' +
            "\r\n" +
            "const folderStructure = tree2;\r\n" +
            "\r\n" +
            "const Store = createStore(\r\n" +
            "  persist(\r\n" +
            "    {\r\n" +
            "      monaco: monaco,\r\n" +
            '      theme: "github",\r\n' +
            '      activityItem: "explorer",\r\n' +
            "      sidebarWidth: 284,\r\n" +
            "\r\n" +
            "      selectedFolder: folderStructure,\r\n" +
            "\r\n" +
            "      setSelectedFolderState: action((state, payload) => {\r\n" +
            "        state.selectedFolder = payload;\r\n" +
            "      }),\r\n" +
            "\r\n" +
            "      setTheme: action((state, payload) => {\r\n" +
            "        state.theme = payload;\r\n" +
            "        state.monaco.editor.setTheme(payload);\r\n" +
            "      }),\r\n" +
            "      setActivityItem: action((state, payload) => {\r\n" +
            "        state.activityItem = payload;\r\n" +
            "      }),\r\n" +
            "      setSidebarWidth: action((state, payload) => {\r\n" +
            "        state.sidebarWidth = payload;\r\n" +
            "      }),\r\n" +
            "    },\r\n" +
            "    {\r\n" +
            '      deny: ["monaco"],\r\n' +
            "    }\r\n" +
            "  )\r\n" +
            ");\r\n" +
            "\r\n" +
            "export { Store };\r\n",
          type: "file",
        },
      ],
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets",
      name: "assets",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Fonts",
          name: "Fonts",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Fonts/JetBrainsMono-Regular.ttf",
              name: "JetBrainsMono-Regular.ttf",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Fonts/MonacoMap.json",
              name: "MonacoMap.json",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Fonts/SF-Pro.otf",
              name: "SF-Pro.otf",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Fonts/SetiMap.json",
              name: "SetiMap.json",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Fonts/codicon.ttf",
              name: "codicon.ttf",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Fonts/seti.woff",
              name: "seti.woff",
              content: "hello",
              type: "file",
            },
          ],
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Images",
          name: "Images",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/Images/Logo.png",
              name: "Logo.png",
              content: "hello",
              type: "file",
            },
          ],
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/themes",
          name: "themes",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/themes/ChromeDevTools.json",
              name: "ChromeDevTools.json",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/themes/Github.json",
              name: "Github.json",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/themes/OceanNext.json",
              name: "OceanNext.json",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/themes/Tomorrow-Night-Blue.json",
              name: "Tomorrow-Night-Blue.json",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/assets/themes/blackboard.json",
              name: "blackboard.json",
              content: "hello",
              type: "file",
            },
          ],
        },
      ],
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components",
      name: "components",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/ActivityBar",
          name: "ActivityBar",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/ActivityBar/ActivityBar.jsx",
              name: "ActivityBar.jsx",
              content:
                'import { useStoreActions, useStoreState } from "easy-peasy";\n' +
                'import React from "react";\n' +
                'import "./ActivityBar.scss";\n' +
                'import MenuButton from "./Components/MenuButton/MenuButton";\n' +
                "\n" +
                "function ActivityBar() {\n" +
                "  const [showMenu, setShowMenu] = React.useState(false);\n" +
                "  const setActiveItem = useStoreActions((actions) => actions.setActivityItem);\n" +
                "  const activeItem = useStoreState((state) => state.activityItem);\n" +
                "\n" +
                "  const outRef = React.useRef(null);\n" +
                "\n" +
                "  return (\n" +
                '    <div className="ActivityBar" ref={outRef}>\n' +
                "      <MenuButton\n" +
                "        outRef={outRef}\n" +
                "        showMenu={showMenu}\n" +
                "        setShowMenu={setShowMenu}\n" +
                "      />\n" +
                '      <ul className="ActivityBar__actionList">\n' +
                "        <li\n" +
                "          className={`ActivityBar__actionList--${\n" +
                '            activeItem === "explorer" ? "active" : "item"\n' +
                "          }`}\n" +
                "        >\n" +
                "          <button\n" +
                '            data-icon="&#60144;"\n' +
                "            onClick={() => {\n" +
                '              if (activeItem !== "explorer") {\n' +
                '                setActiveItem("explorer");\n' +
                "              } else {\n" +
                "                setActiveItem(null);\n" +
                "              }\n" +
                "            }}\n" +
                "          />\n" +
                "        </li>\n" +
                "        <li\n" +
                "          className={`ActivityBar__actionList--${\n" +
                '            activeItem === "search" ? "active" : "item"\n' +
                "          }`}\n" +
                "        >\n" +
                "          <button\n" +
                '            data-icon="&#60013;"\n' +
                "            onClick={() => {\n" +
                '              if (activeItem !== "search") {\n' +
                '                setActiveItem("search");\n' +
                "              } else {\n" +
                "                setActiveItem(null);\n" +
                "              }\n" +
                "            }}\n" +
                "          />\n" +
                "        </li>\n" +
                "        <li\n" +
                "          className={`ActivityBar__actionList--${\n" +
                '            activeItem === "git" ? "active" : "item"\n' +
                "          }`}\n" +
                "        >\n" +
                "          <button\n" +
                '            data-icon="&#60008;"\n' +
                "            onClick={() => {\n" +
                '              if (activeItem !== "git") {\n' +
                '                setActiveItem("git");\n' +
                "              } else {\n" +
                "                setActiveItem(null);\n" +
                "              }\n" +
                "            }}\n" +
                "          />\n" +
                "        </li>\n" +
                "      </ul>\n" +
                "    </div>\n" +
                "  );\n" +
                "}\n" +
                "export default ActivityBar;\n",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/ActivityBar/ActivityBar.scss",
              name: "ActivityBar.scss",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/ActivityBar/Components",
              name: "Components",
              type: "directory",
              open: false,
              children: [
                {
                  path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/ActivityBar/Components/MenuButton",
                  name: "MenuButton",
                  type: "directory",
                  open: false,
                  children: [
                    {
                      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/ActivityBar/Components/MenuButton/MenuButton.jsx",
                      name: "MenuButton.jsx",
                      content:
                        'import { useStoreActions, useStoreState } from "easy-peasy";\r\n' +
                        'import React from "react";\r\n' +
                        'import useOnClickOutside from "../../../../hooks/useOnClickOutside";\r\n' +
                        'import "./MenuButton.scss";\r\n' +
                        "\r\n" +
                        "function MenuButton({ outRef, showMenu, setShowMenu }) {\r\n" +
                        "  const [treeStates, setTreeStates] = React.useState({\r\n" +
                        "    file: false,\r\n" +
                        "    theme: false,\r\n" +
                        "  });\r\n" +
                        "\r\n" +
                        "  const currentTheme = useStoreState((state) => state.theme);\r\n" +
                        "  const setCurrentTheme = useStoreActions((actions) => actions.setTheme);\r\n" +
                        "\r\n" +
                        "  useOnClickOutside(outRef, () => {\r\n" +
                        "    setShowMenu(false);\r\n" +
                        "    setTreeStates({\r\n" +
                        "      file: false,\r\n" +
                        "      theme: false,\r\n" +
                        "    });\r\n" +
                        "  });\r\n" +
                        "  return (\r\n" +
                        "    <>\r\n" +
                        "      <div\r\n" +
                        "        className={`MenuButton__menu\r\n" +
                        '            ${showMenu ? "MenuButton__menu--active" : ""}\r\n' +
                        "        `}\r\n" +
                        "        onClick={() => {\r\n" +
                        "          const currentMenuState = showMenu;\r\n" +
                        "          setShowMenu(!currentMenuState);\r\n" +
                        "          if (currentMenuState) {\r\n" +
                        "            setTreeStates({\r\n" +
                        "              file: false,\r\n" +
                        "              theme: false,\r\n" +
                        "            });\r\n" +
                        "          }\r\n" +
                        "        }}\r\n" +
                        '        data-icon="&#60308;"\r\n' +
                        "      />\r\n" +
                        "      {showMenu && (\r\n" +
                        '        <ul className="MenuButton__menuBox">\r\n' +
                        "          <li\r\n" +
                        "            className={`MenuButton__menuBox--${\r\n" +
                        '              treeStates.file ? "active" : "item"\r\n' +
                        "            }`}\r\n" +
                        "          >\r\n" +
                        "            <button\r\n" +
                        "              onClick={() => {\r\n" +
                        "                setTreeStates({\r\n" +
                        "                  file: true,\r\n" +
                        "                  theme: false,\r\n" +
                        "                });\r\n" +
                        "              }}\r\n" +
                        "              onMouseEnter={() => {\r\n" +
                        "                setTreeStates({\r\n" +
                        "                  file: true,\r\n" +
                        "                  theme: false,\r\n" +
                        "                });\r\n" +
                        "              }}\r\n" +
                        "            >\r\n" +
                        "              <span>File</span>\r\n" +
                        '              <span data-icon="&#60086;" />\r\n' +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        "          <li\r\n" +
                        "            className={`MenuButton__menuBox--${\r\n" +
                        '              treeStates.theme ? "active" : "item"\r\n' +
                        "            }`}\r\n" +
                        "          >\r\n" +
                        "            <button\r\n" +
                        "              onClick={() => {\r\n" +
                        "                setTreeStates({\r\n" +
                        "                  file: false,\r\n" +
                        "                  theme: true,\r\n" +
                        "                });\r\n" +
                        "              }}\r\n" +
                        "              onMouseEnter={() => {\r\n" +
                        "                setTreeStates({\r\n" +
                        "                  file: false,\r\n" +
                        "                  theme: true,\r\n" +
                        "                });\r\n" +
                        "              }}\r\n" +
                        "            >\r\n" +
                        "              <span>Theme</span>\r\n" +
                        '              <span data-icon="&#60086;" />\r\n' +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        "        </ul>\r\n" +
                        "      )}\r\n" +
                        "      {treeStates.file && (\r\n" +
                        "        <ul\r\n" +
                        '          className="MenuButton__subMenuBox"\r\n' +
                        "          style={{\r\n" +
                        '            left: "250px",\r\n' +
                        "          }}\r\n" +
                        "        >\r\n" +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        "            <button>Open File</button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        "            <button>Open Folder</button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--separator" />\r\n' +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        "            <button>Save</button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        "            <button>Save As</button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        "            <button>\r\n" +
                        "              <span>Auto Save</span>\r\n" +
                        '              <span data-icon="&#60082;" />\r\n' +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        "        </ul>\r\n" +
                        "      )}\r\n" +
                        "      {treeStates.theme && (\r\n" +
                        "        <ul\r\n" +
                        '          className="MenuButton__subMenuBox"\r\n' +
                        "          style={{\r\n" +
                        '            left: "250px",\r\n' +
                        "          }}\r\n" +
                        "        >\r\n" +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        '            <button onClick={() => setCurrentTheme("tomorrow-night-blue")}>\r\n' +
                        "              <span>Tomorrow Night Blue</span>\r\n" +
                        '              {currentTheme === "tomorrow-night-blue" && (\r\n' +
                        '                <span data-icon="&#60082;" />\r\n' +
                        "              )}\r\n" +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        '            <button onClick={() => setCurrentTheme("github")}>\r\n' +
                        "              <span>Github</span>\r\n" +
                        '              {currentTheme === "github" && <span data-icon="&#60082;" />}\r\n' +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--item">\r\n' +
                        '            <button onClick={() => setCurrentTheme("blackboard")}>\r\n' +
                        "              <span>Blackboard</span>\r\n" +
                        '              {currentTheme === "blackboard" && <span data-icon="&#60082;" />}\r\n' +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--disabled">\r\n' +
                        "            <button\r\n" +
                        "              disabled\r\n" +
                        '              onClick={() => setCurrentTheme("chrome-dev-tools")}\r\n' +
                        "            >\r\n" +
                        "              <span>Chrome Dev Tools</span>\r\n" +
                        '              {currentTheme === "chrome-dev-tools" && (\r\n' +
                        '                <span data-icon="&#60082;" />\r\n' +
                        "              )}\r\n" +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        '          <li className="MenuButton__subMenuBox--disabled">\r\n' +
                        '            <button disabled onClick={() => setCurrentTheme("ocean-next")}>\r\n' +
                        "              <span>Ocean Next</span>\r\n" +
                        '              {currentTheme === "ocean-next" && <span data-icon="&#60082;" />}\r\n' +
                        "            </button>\r\n" +
                        "          </li>\r\n" +
                        "        </ul>\r\n" +
                        "      )}\r\n" +
                        "    </>\r\n" +
                        "  );\r\n" +
                        "}\r\n" +
                        "\r\n" +
                        "export default MenuButton;\r\n",
                      type: "file",
                    },
                    {
                      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/ActivityBar/Components/MenuButton/MenuButton.scss",
                      name: "MenuButton.scss",
                      content: "hello",
                      type: "file",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/FolderTree",
          name: "FolderTree",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/FolderTree/FolderTree.jsx",
              name: "FolderTree.jsx",
              content:
                'import { useStoreActions } from "easy-peasy";\n' +
                'import React, { useState } from "react";\n' +
                'import "./FolderTree.scss";\n' +
                "\n" +
                "function File({ name, depth }) {\n" +
                "  return (\n" +
                "    <div\n" +
                '      className="File"\n' +
                "      tabIndex={1}\n" +
                "      style={{\n" +
                "        paddingLeft: `${depth * 9}px`,\n" +
                "      }}\n" +
                "    >\n" +
                "      <div\n" +
                '        className="Folder__intentBox"\n' +
                "        style={{\n" +
                "          width: `${depth * 8}px`,\n" +
                "        }}\n" +
                "      >\n" +
                "        {[...Array(depth - 1)].map((_, index) => (\n" +
                "          <i data-intent key={index} />\n" +
                "        ))}\n" +
                "      </div>\n" +
                '      <span data-lang="&#57379;">\n' +
                "        <p>{name}</p>\n" +
                "      </span>\n" +
                "    </div>\n" +
                "  );\n" +
                "}\n" +
                "\n" +
                "function Folder({ folderStructure, depth, original }) {\n" +
                "  const [open, setOpen] = useState(folderStructure.open);\n" +
                "  const [isFocused, setIsFocused] = useState(false);\n" +
                "  const setSelectedFolderState = useStoreActions(\n" +
                "    (action) => action.setSelectedFolderState\n" +
                "  );\n" +
                "\n" +
                "  return (\n" +
                "    <div\n" +
                '      className="Folder"\n' +
                "      tabIndex={1}\n" +
                "      onFocus={() => setIsFocused(true)}\n" +
                "      onKeyDown={(e) => {\n" +
                '        if (isFocused && e.key === "Enter") {\n' +
                "          setOpen(!open);\n" +
                "        }\n" +
                "      }}\n" +
                "    >\n" +
                "      <div\n" +
                '        className="Folder__intentBox"\n' +
                "        style={{\n" +
                "          width: `${depth * 8}px`,\n" +
                "        }}\n" +
                "      >\n" +
                "        {[...Array(depth - 1)].map((_, index) => (\n" +
                "          <i data-intent key={index} />\n" +
                "        ))}\n" +
                "      </div>\n" +
                "      <div\n" +
                '        className="Folder__title"\n' +
                "        onClick={() => {\n" +
                "          setOpen(!open);\n" +
                "          const tempOriginal = { ...original };\n" +
                "          console.log(folderStructure)\n" +
                "\n" +
                "          const findParent = (folder, original) => {\n" +
                "            if (\n" +
                "              folder.path === folderStructure.path &&\n" +
                "              folder.name === folderStructure.name\n" +
                "            ) {\n" +
                "              folder.open = !folder.open;\n" +
                "              return original;\n" +
                "            }\n" +
                '            if (folder.type === "directory") {\n' +
                "              for (let child of folder.children) {\n" +
                "                const result = findParent(child, original);\n" +
                "                if (result) {\n" +
                "                  return result;\n" +
                "                }\n" +
                "              }\n" +
                "            }\n" +
                "          };\n" +
                "\n" +
                "          setSelectedFolderState(findParent(folderStructure, tempOriginal));\n" +
                "        }}\n" +
                "        style={{\n" +
                "          paddingLeft: `${depth * 9}px`,\n" +
                "        }}\n" +
                "      >\n" +
                "        <span\n" +
                '          className={`Folder__title--logo${open ? "Open" : "Closed"}`}\n' +
                '          data-icon="&#60084;"\n' +
                "        >\n" +
                "          <p>{folderStructure.name}</p>\n" +
                "        </span>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  );\n" +
                "}\n" +
                "\n" +
                "function FolderTree({ folderStructure, depth = 1, original }) {\n" +
                '  if (folderStructure.type === "directory") {\n' +
                "    return (\n" +
                "      <>\n" +
                "        <Folder\n" +
                "          depth={depth}\n" +
                "          original={original}\n" +
                "          folderStructure={folderStructure}\n" +
                "        />\n" +
                "        {folderStructure.open &&\n" +
                "          folderStructure.children.map((child, index) => (\n" +
                "            <FolderTree\n" +
                "              key={index}\n" +
                "              depth={depth + 1}\n" +
                "              original={original}\n" +
                "              folderStructure={child}\n" +
                "            />\n" +
                "          ))}\n" +
                "      </>\n" +
                "    );\n" +
                "  }\n" +
                '  if (folderStructure.type === "file") {\n' +
                "    return <File name={folderStructure.name} depth={depth} />;\n" +
                "  }\n" +
                "}\n" +
                "\n" +
                "export default FolderTree;\n",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/FolderTree/FolderTree.scss",
              name: "FolderTree.scss",
              content: "hello",
              type: "file",
            },
          ],
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/MonacoEditor",
          name: "MonacoEditor",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/MonacoEditor/MonacoEditor.jsx",
              name: "MonacoEditor.jsx",
              content:
                'import React from "react";\r\n' +
                'import "./MonacoEditor.scss";\r\n' +
                '// import * as monaco from "monaco-editor/esm/vs/editor/editor.api";\r\n' +
                'import { DefineMonacoThemes } from "./ThemeHelper";\r\n' +
                'import { useStoreState } from "easy-peasy";\r\n' +
                "\r\n" +
                "function MonacoEditor({ setCode, code }) {\r\n" +
                "  const currentTheme = useStoreState((state) => state.theme);\r\n" +
                "  const [editor, setEditor] = React.useState(null);\r\n" +
                "  const editorRef = React.useRef(null);\r\n" +
                "  const monaco = useStoreState((state) => state.monaco);\r\n" +
                "\r\n" +
                "  const files = {\r\n" +
                '    "/MonacoEditor.js": `\r\n' +
                'const ThisVar = "This Value";\r\n' +
                'const ThisVar2 = "This Value 2";\r\n' +
                "console.log(ThisVar+ThisVar2);    \r\n" +
                "    `,\r\n" +
                "  };\r\n" +
                "\r\n" +
                "  React.useEffect(() => {\r\n" +
                "    if (editorRef && !editor) {\r\n" +
                "      Object.keys(files).forEach((path) =>\r\n" +
                "        monaco.editor.createModel(\r\n" +
                "          files[path],\r\n" +
                '          "javascript",\r\n' +
                "          new monaco.Uri().with({ path })\r\n" +
                "        )\r\n" +
                "      );\r\n" +
                "\r\n" +
                "      DefineMonacoThemes(monaco);\r\n" +
                "      const tempEditor = monaco.editor.create(editorRef.current, {\r\n" +
                "        value: code,\r\n" +
                '        language: "javascript",\r\n' +
                "        theme: currentTheme,\r\n" +
                "        automaticLayout: true,\r\n" +
                "        model: null,\r\n" +
                "        fontSize: 14,\r\n" +
                '        fontFamily: "JetBrains",\r\n' +
                "        fontLigatures: true,\r\n" +
                "        bracketPairColorization: { enabled: true },\r\n" +
                '        autoClosingBrackets: "beforeWhitespace",\r\n' +
                "        useShadowDOM: true,\r\n" +
                "        trimAutoWhitespace: true,\r\n" +
                "      });\r\n" +
                "\r\n" +
                "      tempEditor.setModel(monaco.editor.getModels()[0]);\r\n" +
                "      setEditor(tempEditor);\r\n" +
                "    }\r\n" +
                "    return () => editor?.dispose();\r\n" +
                "  }, [editorRef.current]);\r\n" +
                "\r\n" +
                "  React.useEffect(() => {\r\n" +
                "    editor?.getModel().onDidChangeContent((e) => {\r\n" +
                "      setCode(editor?.getModel().getValue());\r\n" +
                "    });\r\n" +
                "  });\r\n" +
                "\r\n" +
                '  return <div className="MonacoEditorWrapper" ref={editorRef} />;\r\n' +
                "}\r\n" +
                "\r\n" +
                "export default MonacoEditor;\r\n",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/MonacoEditor/MonacoEditor.scss",
              name: "MonacoEditor.scss",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/MonacoEditor/ThemeHelper.js",
              name: "ThemeHelper.js",
              content:
                'import TomorrowNightBlue from "../../assets/themes/Tomorrow-Night-Blue.json";\n' +
                'import OceanNext from "../../assets/themes/OceanNext.json";\n' +
                'import Github from "../../assets/themes/Github.json";\n' +
                'import ChromeDevTools from "../../assets/themes/ChromeDevTools.json";\n' +
                'import BlackBoard from "../../assets/themes/blackboard.json";\n' +
                "\n" +
                "export function DefineMonacoThemes(monaco){\n" +
                '  monaco.editor.defineTheme("tomorrow-night-blue", TomorrowNightBlue);\n' +
                '  monaco.editor.defineTheme("ocean-next", OceanNext);\n' +
                '  monaco.editor.defineTheme("github", Github);\n' +
                '  monaco.editor.defineTheme("chrome-devtools", ChromeDevTools);\n' +
                '  monaco.editor.defineTheme("blackboard", BlackBoard);\n' +
                "}",
              type: "file",
            },
          ],
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/SidePane",
          name: "SidePane",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/SidePane/SidePane.jsx",
              name: "SidePane.jsx",
              content:
                'import { useStoreActions } from "easy-peasy";\r\n' +
                'import React from "react";\r\n' +
                'import useResize from "../../hooks/useResize";\r\n' +
                "\r\n" +
                'import "./SidePane.scss";\r\n' +
                "\r\n" +
                "function SidePane({ children, title }) {\r\n" +
                "  const containerRef = React.useRef(null);\r\n" +
                "  const dragRef = React.useRef(null);\r\n" +
                "  const setSidebarWidth = useStoreActions((actions) => actions.setSidebarWidth);\r\n" +
                "\r\n" +
                "  useResize(\r\n" +
                "    containerRef,\r\n" +
                "    dragRef,\r\n" +
                "    (width) => {\r\n" +
                '      dragRef.current.style.backgroundColor = "var(--daima-sash-hoverBorder)";\r\n' +
                '      dragRef.current.style.animation = "none";\r\n' +
                '      document.body.style.cursor = "ew-resize";\r\n' +
                "      setSidebarWidth(width);\r\n" +
                "    },\r\n" +
                "    () => {\r\n" +
                '      dragRef.current.style.backgroundColor = "";\r\n' +
                '      dragRef.current.style.animation = "";\r\n' +
                '      document.body.style.cursor = "";\r\n' +
                "    }\r\n" +
                "  );\r\n" +
                "\r\n" +
                "  return (\r\n" +
                '    <div className="SidePane" ref={containerRef}>\r\n' +
                "      <div\r\n" +
                '        className="SidePane__sash"\r\n' +
                "        ref={dragRef}\r\n" +
                "        onClick={(e) => {\r\n" +
                "          if (e.detail === 2) {\r\n" +
                "            setSidebarWidth(284);\r\n" +
                '            dragRef.current.style.left = "284px";\r\n' +
                '            containerRef.current.style.width = "284px";\r\n' +
                "\r\n" +
                "            setTimeout(() => {\r\n" +
                '              dragRef.current.style.left = "";\r\n' +
                '              containerRef.current.style.width = "";\r\n' +
                "            }, 50);\r\n" +
                "          }\r\n" +
                "        }}\r\n" +
                "      />\r\n" +
                '      <div className="SidePane__header">\r\n' +
                "        <h2>{title}</h2>\r\n" +
                "      </div>\r\n" +
                '      <div className="SidePane__content">{children}</div>\r\n' +
                "    </div>\r\n" +
                "  );\r\n" +
                "}\r\n" +
                "\r\n" +
                "export default SidePane;\r\n",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/components/SidePane/SidePane.scss",
              name: "SidePane.scss",
              content: "hello",
              type: "file",
            },
          ],
        },
      ],
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/config",
      name: "config",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/config/userWorker.js",
          name: "userWorker.js",
          content:
            'import * as monaco from "monaco-editor";\n' +
            'import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";\n' +
            'import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";\n' +
            'import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";\n' +
            'import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";\n' +
            'import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";\n' +
            "\n" +
            "// @ts-ignore\n" +
            "self.MonacoEnvironment = {\n" +
            "  getWorker(_, label) {\n" +
            '    if (label === "json") {\n' +
            "      return new jsonWorker();\n" +
            "    }\n" +
            '    if (label === "css" || label === "scss" || label === "less") {\n' +
            "      return new cssWorker();\n" +
            "    }\n" +
            '    if (label === "html" || label === "handlebars" || label === "razor") {\n' +
            "      return new htmlWorker();\n" +
            "    }\n" +
            '    if (label === "typescript" || label === "javascript") {\n' +
            "      return new tsWorker();\n" +
            "    }\n" +
            "    return new editorWorker();\n" +
            "  },\n" +
            "};\n" +
            "\n" +
            "monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);\n",
          type: "file",
        },
      ],
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/global.scss",
      name: "global.scss",
      content: "hello",
      type: "file",
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/hooks",
      name: "hooks",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/hooks/useOnClickOutside.js",
          name: "useOnClickOutside.js",
          content:
            'import { useEffect } from "react";\n' +
            "\n" +
            "export default function useOnClickOutside(ref, handler) {\n" +
            "  useEffect(() => {\n" +
            "    const listener = (event) => {\n" +
            "      if (!ref.current || ref.current.contains(event.target)) {\n" +
            "        return;\n" +
            "      }\n" +
            "      handler(event);\n" +
            "    };\n" +
            '    document.addEventListener("mousedown", listener);\n' +
            '    document.addEventListener("touchstart", listener);\n' +
            "    return () => {\n" +
            '      document.removeEventListener("mousedown", listener);\n' +
            '      document.removeEventListener("touchstart", listener);\n' +
            "    };\n" +
            "  }, [ref, handler]);\n" +
            "}\n",
          type: "file",
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/hooks/useResize.js",
          name: "useResize.js",
          content:
            'import { useEffect } from "react";\n' +
            "\n" +
            "export default function useResize(containerRef, dragRef, onDrag, onStop) {\n" +
            "  useEffect(() => {\n" +
            "    // on mouse down on the drag bar\n" +
            "    const onMouseDown = (e) => {\n" +
            "      const initialX = e.clientX;\n" +
            "      const initialWidth = containerRef.current.offsetWidth;\n" +
            "\n" +
            "\n" +
            '      document.addEventListener("mousemove", onMouseMove);\n' +
            '      document.addEventListener("mouseup", onMouseUp);\n' +
            "\n" +
            "      window.getSelection().removeAllRanges();\n" +
            "\n" +
            "      function onMouseMove(e) {\n" +
            "        const currentX = e.clientX;\n" +
            "        const width = initialWidth + (currentX - initialX);\n" +
            "\n" +
            "        if (width >= 170 && width <= 470) {\n" +
            "          onDrag(width);\n" +
            "          containerRef.current.style.width = `${width}px`;\n" +
            "        }\n" +
            "      }\n" +
            "\n" +
            "      function onMouseUp() {\n" +
            '        document.removeEventListener("mousemove", onMouseMove);\n' +
            '        document.removeEventListener("mouseup", onMouseUp);\n' +
            "        onStop();\n" +
            "      }\n" +
            "    };\n" +
            "\n" +
            '    dragRef.current.addEventListener("mousedown", onMouseDown);\n' +
            "  }, [containerRef, dragRef, onDrag, onStop]);\n" +
            "}\n",
          type: "file",
        },
      ],
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/main.jsx",
      name: "main.jsx",
      content:
        'import React from "react";\n' +
        'import ReactDOM from "react-dom/client";\n' +
        'import App from "./App";\n' +
        'import "./global.scss";\n' +
        'import "./config/userWorker";\n' +
        'import { StoreProvider } from "easy-peasy";\n' +
        'import { Store } from "./Store/Store";\n' +
        "\n" +
        'ReactDOM.createRoot(document.getElementById("root")).render(\n' +
        "  <StoreProvider store={Store}>\n" +
        "    <App />\n" +
        "  </StoreProvider>\n" +
        ");\n",
      type: "file",
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/router.jsx",
      name: "router.jsx",
      content:
        'import { BrowserRouter, Route, Routes } from "react-router-dom";\n' +
        'import * as views from "./views";\n' +
        'import React from "react";\n' +
        "\n" +
        "export default function Router() {\n" +
        "  return (\n" +
        "    <BrowserRouter>\n" +
        "      <Routes>\n" +
        '        <Route exact path="/" element={<views.Home />} />\n' +
        "      </Routes>\n" +
        "    </BrowserRouter>\n" +
        "  );\n" +
        "}\n",
      type: "file",
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/styles",
      name: "styles",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/styles/Fonts.scss",
          name: "Fonts.scss",
          content: "hello",
          type: "file",
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/styles/Themes",
          name: "Themes",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/styles/Themes/Blackboard.scss",
              name: "Blackboard.scss",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/styles/Themes/Github.scss",
              name: "Github.scss",
              content: "hello",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/styles/Themes/TomorrowNightBlue.scss",
              name: "TomorrowNightBlue.scss",
              content: "hello",
              type: "file",
            },
          ],
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/styles/_mixins.scss",
          name: "_mixins.scss",
          content: "hello",
          type: "file",
        },
      ],
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/utils",
      name: "utils",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/utils/GeneralTree.js",
          name: "GeneralTree.js",
          content:
            "class Node {\n" +
            "  constructor(data, key) {\n" +
            "    /**\n" +
            "     * @param {Object} data\n" +
            "     * @param {String} data.name\n" +
            "     * @param {String} data.path\n" +
            "     * @param {String} data.type\n" +
            "     * @param {Boolean} data.open\n" +
            "     * @param {Boolean} data.selected\n" +
            "     */\n" +
            "    this.key = key;\n" +
            "    this.data = data;\n" +
            "    this.children = [];\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            "const root = new Node(\n" +
            "  {\n" +
            '    name: "Components",\n' +
            '    type: "directory",\n' +
            "    open: true,\n" +
            "  },\n" +
            '  "0"\n' +
            ");\n" +
            "\n" +
            "function addNode(parent, data) {\n" +
            "  const node = new Node(data, parent.children.length);\n" +
            "  parent.children.push(node);\n" +
            "  return node;\n" +
            "}\n" +
            "\n" +
            "const folderStructure = {\n" +
            '  name: "Components",\n' +
            '  type: "directory",\n' +
            "  open: true,\n" +
            "  children: [\n" +
            "    {\n" +
            '      name: "Box",\n' +
            "      open: true,\n" +
            '      type: "directory",\n' +
            "      selected: true,\n" +
            "      children: [\n" +
            "        {\n" +
            '          name: "a.js",\n' +
            '          path: "Components/Box/a.js",\n' +
            '          type: "file",\n' +
            "        },\n" +
            "        {\n" +
            '          name: "a.scss",\n' +
            '          path: "Components/Box/a.scss",\n' +
            '          type: "file",\n' +
            "        },\n" +
            "        {\n" +
            '          name: "a.test.js",\n' +
            '          path: "Components/Box/a.test.js",\n' +
            '          type: "file",\n' +
            "        },\n" +
            "      ],\n" +
            "    },\n" +
            "    {\n" +
            '      name: "Cries",\n' +
            "      open: true,\n" +
            '      type: "directory",\n' +
            "      selected: true,\n" +
            "      children: [\n" +
            "        {\n" +
            '          name: "b.js",\n' +
            '          path: "Components/Box/b.js",\n' +
            '          type: "file",\n' +
            "        },\n" +
            "        {\n" +
            '          name: "b.scss",\n' +
            '          path: "Components/Box/b.scss",\n' +
            '          type: "file",\n' +
            "        },\n" +
            "        {\n" +
            '          name: "b.test.js",\n' +
            '          path: "Components/Box/b.test.js",\n' +
            '          type: "file",\n' +
            "        },\n" +
            "      ],\n" +
            "    },\n" +
            "    {\n" +
            '      name: "Type",\n' +
            "      open: true,\n" +
            '      type: "directory",\n' +
            "      selected: true,\n" +
            "      children: [\n" +
            "        {\n" +
            '          name: "c.js",\n' +
            '          path: "Components/Box/c.js",\n' +
            '          type: "file",\n' +
            "        },\n" +
            "        {\n" +
            '          name: "Assets",\n' +
            "          open: true,\n" +
            '          type: "directory",\n' +
            "          selected: true,\n" +
            "          children: [\n" +
            "            {\n" +
            '              name: "d.js",\n' +
            '              path: "Components/Box/d.js",\n' +
            '              type: "file",\n' +
            "            },\n" +
            "          ],\n" +
            "        },\n" +
            "      ],\n" +
            "    },\n" +
            "  ],\n" +
            "};\n" +
            "\n" +
            "function buildTree(root, data) {\n" +
            "  const { children } = data;\n" +
            "  if (!children) return;\n" +
            "  children.forEach((child) => {\n" +
            "    const node = addNode(root, child);\n" +
            "    buildTree(node, child);\n" +
            "  });\n" +
            "}\n" +
            "\n" +
            "\n" +
            "buildTree(root, folderStructure);\n" +
            "\n" +
            "console.log(JSON.stringify(root, null, 2));\n" +
            "\n",
          type: "file",
        },
      ],
    },
    {
      path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/views",
      name: "views",
      type: "directory",
      open: false,
      children: [
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/views/Home",
          name: "Home",
          type: "directory",
          open: false,
          children: [
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/views/Home/Home.jsx",
              name: "Home.jsx",
              content:
                'import { useStoreState } from "easy-peasy";\r\n' +
                'import React from "react";\r\n' +
                'import ActivityBar from "../../components/ActivityBar/ActivityBar";\r\n' +
                'import FolderTree from "../../components/FolderTree/FolderTree";\r\n' +
                'import MonacoEditor from "../../components/MonacoEditor/MonacoEditor";\r\n' +
                'import SidePane from "../../components/SidePane/SidePane";\r\n' +
                'import "./Home.scss";\r\n' +
                "\r\n" +
                "function Home() {\r\n" +
                '  const [code, setCode] = React.useState("");\r\n' +
                "  const currentTheme = useStoreState((state) => state.theme);\r\n" +
                "  const currentActivity = useStoreState((state) => state.activityItem);\r\n" +
                "  const sidebarWidth = useStoreState((state) => state.sidebarWidth);\r\n" +
                "  const folderStructure = useStoreState((state) => state.selectedFolder);\r\n" +
                "  // React.useEffect(() => {\r\n" +
                "  //   console.log(code);\r\n" +
                "  // }, [code]);\r\n" +
                "\r\n" +
                "  return (\r\n" +
                "    <div\r\n" +
                "      className={`Workbench ${currentTheme}`}\r\n" +
                "      style={{\r\n" +
                "        gridTemplateColumns:\r\n" +
                "          currentActivity !== null\r\n" +
                "            ? `48px ${sidebarWidth}px ${`calc(100% - ${48 + sidebarWidth}px)`}`\r\n" +
                "            : `48px ${`calc(100% - 48px)`}`,\r\n" +
                "      }}\r\n" +
                "    >\r\n" +
                "      <ActivityBar />\r\n" +
                "      {currentActivity !== null && (\r\n" +
                "        <SidePane title={currentActivity}>\r\n" +
                "          <FolderTree\r\n" +
                "            original={folderStructure}\r\n" +
                "            folderStructure={folderStructure}\r\n" +
                "          />\r\n" +
                "        </SidePane>\r\n" +
                "      )}\r\n" +
                "      {/* <MonacoEditor setCode={setCode} code={code} /> */}\r\n" +
                "    </div>\r\n" +
                "  );\r\n" +
                "}\r\n" +
                "\r\n" +
                "export default Home;\r\n",
              type: "file",
            },
            {
              path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/views/Home/Home.scss",
              name: "Home.scss",
              content: "hello",
              type: "file",
            },
          ],
        },
        {
          path: "/home/santhosh/Desktop/Projects/JavaScript/2022/20_Editor/Diama/src/views/index.jsx",
          name: "index.jsx",
          content: 'export { default as Home } from "./Home/Home";\n',
          type: "file",
        },
      ],
    },
  ],
};
