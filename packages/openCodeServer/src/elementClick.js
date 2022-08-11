import openEditor from "./openEditor";

function getFilePath(element) {
  if (!element || !element.getAttribute) return null;
  if (element.getAttribute("code-location")) {
    return element.getAttribute("code-location");
  }
  return getFilePath(element.parentNode);
}

export default function openCode(e) {
  e.preventDefault();
  const filePath = getFilePath(e.target);
  openEditor(filePath);
}
