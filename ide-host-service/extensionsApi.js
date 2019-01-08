const rpcProtocol = require('./rpcProtocol');

function rpcCall(name, args) {
  if (rpcProtocol) {
    rpcProtocol.emit('[RPC-MESSAGE]', { method: name, args });
  }
}

function apiFactory() {
  const handler = {
    get: (target, name) => {
      target[name] = (...args) => {
        rpcCall(name, args);
      }
      return target[name];
    }
  }
  const proxy = new Proxy(Object.create(null), handler)
  return proxy;
}

module.exports = apiFactory();
