var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Deletes an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceOrg.*, or instanceOrg.delete.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If organization was successfully deleted (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if organization was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.delete = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/instances/{instanceId}/orgs/{orgId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.instanceId) { pathParams.instanceId = params.instanceId; }
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Returns device counts by day for the time range specified for this organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceOrg.*, or instanceOrg.deviceCounts.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} start - Start of range for device count query (ms since epoch)
   *  {string} end - End of range for device count query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device counts by day (https://api.app.wnology.io/#/definitions/deviceCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if instance or organization was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.deviceCounts = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/instances/{instanceId}/orgs/{orgId}/deviceCounts');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.instanceId) { pathParams.instanceId = params.instanceId; }
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.start) { req.params.start = params.start; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieves information on an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceOrg.*, or instanceOrg.get.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - A single organization (https://api.app.wnology.io/#/definitions/instanceOrg)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if organization was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.get = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/instances/{instanceId}/orgs/{orgId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.instanceId) { pathParams.instanceId = params.instanceId; }
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.summaryInclude) { req.params.summaryInclude = params.summaryInclude; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Returns notebook execution usage by day for the time range specified for this organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceOrg.*, or instanceOrg.notebookMinuteCounts.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} start - Start of range for notebook execution query (ms since epoch)
   *  {string} end - End of range for notebook execution query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Notebook usage information (https://api.app.wnology.io/#/definitions/notebookMinuteCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if organization was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.notebookMinuteCounts = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/instances/{instanceId}/orgs/{orgId}/notebookMinuteCounts');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.instanceId) { pathParams.instanceId = params.instanceId; }
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.start) { req.params.start = params.start; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Updates information about an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceOrg.*, or instanceOrg.patch.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {hash} organization - Object containing new organization properties (https://api.app.wnology.io/#/definitions/instanceOrgPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated organization information (https://api.app.wnology.io/#/definitions/instanceOrg)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if organization was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.patch = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/instances/{instanceId}/orgs/{orgId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.instanceId) { pathParams.instanceId = params.instanceId; }
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.summaryInclude) { req.params.summaryInclude = params.summaryInclude; }
    if ('undefined' !== typeof params.organization) { req.data = params.organization; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
