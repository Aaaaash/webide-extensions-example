const extensionsActions = {
  setStatusBarMessage: (message: string) => {
    const statusBar = document.querySelector(".status-bar");
    statusBar.innerHTML = message;
  },
};

export default extensionsActions;
