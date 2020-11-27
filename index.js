'use strict';

const SourceApi = require('./SourceApi');

async function main() {
  for await (const page of SourceApi.getData()) {
    console.log('Page', page);
  }
}

main();
