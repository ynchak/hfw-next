const openInNewTab = (links) => {
  for (const link of links) {
    window.open(link, "_blank");
  }
};
const addToClipboard = (text) => {
  window.navigator.clipboard.writeText(text);
};
export { addToClipboard, openInNewTab };
