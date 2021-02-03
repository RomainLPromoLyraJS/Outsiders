import { CONNECT_WEBSOCKET } from '../store/action';

let socket = null;

const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      if (!socket) {
        // déja, à un moment, il faudrait initialiser la connection au socket
        socket = window.io('http://localhost:3000');
        console.log('Je suis connecté');

        // ensuite, il va falloir que l'on s'abonne aux nouveaux messages
        // socket.on('send_message', (message) => {
        //   // ici, on va dispatcher une action, pour ajouter le message au store
        //   // j'envoie une action RECEIVE_MESSAGE avec en parametre...
        //   // le message en provenance du websocket
        //   store.dispatch(receiveMessage(message));
        // });
      }
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;