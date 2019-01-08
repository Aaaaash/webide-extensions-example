const ide = require('ide');

function activate() {
  console.log('activate extension!');
  setTimeout(() => {
    ide.setStatusBarMessage('Hello World!');
    ide.showAlert('抓不到我吧!');
  }, 5000);
}

module.exports = activate;
