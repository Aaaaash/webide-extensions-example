const extensionsActions = {
  setStatusBarMessage: (message: string) => {
    const statusBar = document.querySelector(".status-bar");
    statusBar.innerHTML = message;
  },
  showAlert: (message: string) => {
    window.alert(message.toString());
  },
};

export default extensionsActions;
