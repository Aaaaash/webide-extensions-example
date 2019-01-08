let _rpcProtocol = null;
class RPCProtocol {
  static getInstance() {
    if (!_rpcProtocol) {
      _rpcProtocol = new RPCProtocol();
    }
    return _rpcProtocol;
  }

  setSocket(socket) {
    this.socket = socket;
  }

  emit(method, args) {
    this.socket.emit(method, args);
  }
}

module.exports = RPCProtocol.getInstance();
