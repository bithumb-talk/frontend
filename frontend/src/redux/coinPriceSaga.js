import { buffers } from 'redux-saga';
import { fork, flush, call, delay, put } from 'redux-saga/effects';
import { createSocketChannel } from './createSocketChannel';
import { updateCoinList } from './coinPriceSlice';

function* onMessage(type) {
  const channel = yield call(createSocketChannel, type, buffers.expanding(100));

  while (true) {
    const messages = yield flush(channel);
    const bodys = messages.map((message) => JSON.parse(message.body));

    if (bodys.length) {
      yield put(updateCoinList({ data: [...bodys] }));
    }

    yield delay(700);
  }
}

export default function* rootSaga() {
  yield fork(onMessage, '/topic/coin');
}
