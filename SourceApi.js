'use strict';

const Source = require('./Source');

async function* getData() {
  let results = await Source.get();
  while (results.length > 0) {
    yield results;
    results = await Source.get();
  }
}

module.exports = {
  getData,
};
