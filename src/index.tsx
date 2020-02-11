import 'piral/polyfills';
import { renderInstance, Piral } from 'piral';
import { errors } from './layout';
import { layout } from './custom-layout';

// change to your feed URL here (either using feed.piral.io or your own service)
// const feedUrl = 'https://feed.piral.io/api/v1/pilet/store-feed';
const feedUrl = 'http://127.0.0.1:9000/';

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
