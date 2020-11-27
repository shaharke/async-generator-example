'use strict';

const _ = require('lodash');

let data = _.range(0, 546);
const pageSize = 100;

async function get() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = _.take(data, pageSize);
      data = _.drop(data, pageSize);
      resolve(result);
    }, 500)
  })
}

module.exports = {
  get,
};
