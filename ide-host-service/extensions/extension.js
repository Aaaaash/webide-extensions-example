const ide = require('ide');

function activate() {
  console.log('activate extension!');
  setTimeout(() => {
    ide.setStatusBarMessage('Hello World!');
  }, 5000);
}

module.exports = activate;
