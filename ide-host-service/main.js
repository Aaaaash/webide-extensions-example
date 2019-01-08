const Module = require('module');
const original = Module.prototype.require;

Module.prototype.require = function(request) {
  if (request !== 'ide') {
    return original.apply(this, arguments);
  }
  return require('./extensionsApi');
}

const server = require('http').createServer();
const io = require('socket.io')(server);
const rpcProtocol = require('./rpcProtocol');

io.on('connection', client => {
  const extension = require('./extensions/extension');
  rpcProtocol.setSocket(client);
  extension();
});

server.listen(7788, () => {
  console.log('Extension host service is running on port: 7788!');
});
