import * as monaco from "monaco-editor";

import { connectExtensionHostService } from "./extensionHostAgent";
import "./workbench.css";

const app = document.querySelector("#app");

const workbench = document.createElement("div");
workbench.className = "ide-online-workbench";
app.appendChild(workbench);

const statusBar = document.createElement("div");
statusBar.className = "status-bar";
app.appendChild(statusBar);

const fileTree = document.createElement("div");
fileTree.className = "file-tree";
workbench.appendChild(fileTree);

const editorArea = document.createElement("div");
editorArea.className = "editor-area";
workbench.appendChild(editorArea);

const value = `
import * as monaco from 'monaco-editor';

import "./workbench.css";
import { connectExtensionHostService } from  "./extensionHostAgent";

const app = document.querySelector('#app');
const workbench = document.createElement('div');

workbench.className = 'ide-online-workbench';

app.appendChild(workbench);

const fileTree = document.createElement("div");
fileTree.className = "file-tree";
workbench.appendChild(fileTree);

const editorArea = document.createElement('div');
editorArea.className = "editor-area";

workbench.appendChild(editorArea);


const editor = monaco.editor.create(editorArea, {
  language: 'typescript',
  value: '',
  theme: "vs-dark",
});

connectExtensionHostService();
`;

const editor = monaco.editor.create(editorArea, {
  language: "typescript",
  theme: "vs-dark",
  value,
});

connectExtensionHostService();
