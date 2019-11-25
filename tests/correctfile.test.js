'use strict';
const awsMock = require('aws-sdk-mock');
var index;

describe(`Test with correct audio files`, () => {
  beforeAll(() => {
    awsMock.mock("S3", "getObject", new Buffer(require("fs").readFileSync("./assets/1.mp3")));
    awsMock.mock("S3", "putObject", null);
    index = require('../index.js');
  });
  afterAll(() => {
    AWS.restore('S3');
  });
  test(`Merge file`, (done) => {
    index.handler(require('./request/correctJoinRequest'), null, (err, response) => {
      expect(response.status).toBe('200');
      expect(response.headers['content-length'][0].value).toBe('61441');
      done();
    });
  });
});

