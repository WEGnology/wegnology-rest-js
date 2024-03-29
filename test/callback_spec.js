require('./common');
var should = require('should');
var api    = require('../lib');
var nock   = require('nock');

describe('callback tests', function() {

  it('should correctly make an auth call', function(done) {
    var client = api.createClient();

    nock('https://api.app.wnology.io', {
      reqheaders: {
        Accept: 'application/json',
      }
    }).post('/auth/user', {
      email: 'myemail@myemail.com',
      password: 'mypassword'
    }).query({ _actions: false, _embedded: true, _links: true})
    .reply(200, '{"userId":"theUserId","token":"an auth token string"}',
      { 'Content-Type': 'application/json' });

    client.auth.authenticateUser({ credentials: {
      email: 'myemail@myemail.com',
      password: 'mypassword'
    }}, function(err, response) {
      should(err).equal(null);
      response.should.deepEqual({
        userId: 'theUserId',
        token: 'an auth token string',
      });
      nock.isDone().should.be.true();
      done();
    });
  });

  it('should correctly make a call with a token', function(done){
    var client = api.createClient({ accessToken: 'my token' });

    nock('https://api.app.wnology.io', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer my token'
      }
    }).get('/applications')
    .query({ _actions: false, _embedded: true, _links: true})
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    client.applications.get({}, function(err, response) {
      should(err).equal(null);
      response.should.deepEqual({
        count: 0,
        items: [],
      });
      nock.isDone().should.be.true();
      done();
    });
  });

  it('should correctly make calls with nested query params', function(done){
    var client = api.createClient({ accessToken: 'my token' });

    nock('https://api.app.wnology.io:443', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer my token'
      }
    }).get('/applications/appId/devices')
    .query({ _actions: false, _embedded: true, _links: true, tagFilter: [
      { key: 'key2' },
      { key: 'key1', value: 'value1' },
      { value: 'value2' },
    ]})
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    client.devices.get({
      applicationId: 'appId',
      tagFilter: [
        { key: 'key2' },
        { key: 'key1', value: 'value1' },
        { value: 'value2' },
      ]
    }, function(err, response) {
      should(err).equal(null);
      response.should.deepEqual({
        count: 0,
        items: [],
      });
      nock.isDone().should.be.true();
      done();
    });
  });

  it('should correctly make a call with an error', function(done){
    var client = api.createClient({ accessToken: 'my token' });

    nock('https://api.app.wnology.io', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer my token'
      }
    }).get('/applications/badId')
    .query({ _actions: false, _embedded: true, _links: true })
    .reply(404, '{"type":"NotFound","message":"Application was not found"}',
      { 'Content-Type': 'application/json' });

    client.application.get({ applicationId: 'badId' }, function(err, response) {
      err.statusCode.should.equal(404);
      err.type.should.equal('NotFound');
      err.message.should.equal('Application was not found');
      should(response).equal(undefined);
      nock.isDone().should.be.true();
      done();
    });
  });

});
