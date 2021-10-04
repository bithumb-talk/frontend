import { fork, take, call } from 'redux-saga/effects';
import { createSocketChannel } from './createSocketChannel';

function* onMessage(type) {
  const channel = yield call(createSocketChannel, type);

  while (true) {
    try {
      const message = yield take(channel);
      console.log(message);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default function* rootSaga() {
  yield fork(onMessage, '/topic/coin');
}
