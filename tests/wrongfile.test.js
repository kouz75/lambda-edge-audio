'use strict';
const awsMock = require('aws-sdk-mock');
var index;

describe(`Test with wrong files`, () => {
  beforeAll(() => {
    awsMock.mock("S3", "getObject", new Buffer(require("fs").readFileSync("./assets/errorFile.empty")));
    awsMock.mock("S3", "putObject", null);
    index = require('../index.js');
  });

  afterAll(() => {
    AWS.restore('S3');
  });

   test(`Merge with wrong mp3 source file`, (done) => {
     index.handler(require('./request/wrongFileFormatRequest'), null, (err, response) => {
       expect(response.status).toBe('500');
       done();
     });
   });

});
