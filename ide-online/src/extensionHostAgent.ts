import * as io from "socket.io-client";

import extensionActions from "./extensionsActions";

interface IRPCMessage {
  method: string;
  args: any;
}

function connectExtensionHostService() {
  console.log("this is extension host agent!");
  // will connect to extension host
  const socketOptions = {
    reconnection: true,
    reconnectionAttempts: 1,
    reconnectionDelay: 2000,
    transports: ["websocket"],
    query: {
      port: 9988,
    },
  };

  const client = io.connect(
    "localhost:7788",
    socketOptions,
  );

  client.on("[RPC-MESSAGE]", rpcMessasgeHandler);
}

function rpcMessasgeHandler(message: IRPCMessage) {
  const { method, args } = message;
  extensionActions[method].call({}, args);
}

export { connectExtensionHostService };
