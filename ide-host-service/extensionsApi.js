const rpcProtocol = require('./rpcProtocol');

const extensionsApi = {
  setStatusBarMessage: (message) => {
    rpcProtocol.emit('[RPC-MESSAGE]', { method: 'setStatusBarMessage', args: message });
  },
};

module.exports = extensionsApi;
