import { eventChannel, buffers } from 'redux-saga';
import SockJs from 'sockjs-client';
import Stomp from 'stompjs';

const defaultMatcher = () => true;

export function createSocketChannel(eventType, buffer, matcher) {
  return eventChannel(
    (emit) => {
      const emitter = (coin) => emit(coin);
      // const webSocket = new SockJs('http://3.38.23.41:6030/subscribe');
      const webSocket = new SockJs('http://3.35.67.138:5020/subscribe');
      const stompClient = Stomp.over(webSocket);
      stompClient.debug = () => null;

      stompClient.connect({}, () => {
        stompClient.subscribe(eventType, emitter);
      });

      return () => {
        stompClient.unsubscribe();
      };
    },
    buffer || buffers.none(),
    matcher || defaultMatcher,
  );
}

export function closeChannel(channel) {
  if (channel) {
    channel.close();
  }
}
