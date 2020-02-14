import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';


import 'piral/polyfills';
import { renderInstance } from 'piral';
import { createNgApi } from 'piral-ng';
import { errors } from './layout';
import { layout } from './custom-layout';

// change to your feed URL here (either using feed.piral.io or your own service)
// const feedUrl = 'https://feed.piral.io/api/v1/pilet/store-feed';
const feedUrl = 'http://34.231.208.232/';

renderInstance({
  layout,
  errors,
  extendApi: [
      createNgApi()
  ],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
