# Auth Actions

Details on the various actions that can be performed on the
Auth resource, including the expected
parameters and the potential responses.

##### Contents

*   [Authenticate Device](#authenticate-device)
*   [Authenticate User](#authenticate-user)
*   [Authenticate User Github](#authenticate-user-github)
*   [Authenticate User Saml](#authenticate-user-saml)
*   [Sso Domain](#sso-domain)

<br/>

## Authenticate Device

Authenticates a device using the provided credentials.

```javascript
var params = {
  credentials: myCredentials
};

// with callbacks
client.auth.authenticateDevice(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateDevice(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [Device Credentials](_schemas.md#device-credentials) | Y | Device authentication credentials |  | [Device Credentials Example](_schemas.md#device-credentials-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated Device](_schemas.md#authenticated-device) | Successful authentication. The included api access token by default has the scope &#x27;all.Device&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |

<br/>

## Authenticate User

Authenticates a user using the provided credentials.

```javascript
var params = {
  credentials: myCredentials
};

// with callbacks
client.auth.authenticateUser(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateUser(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [User Credentials](_schemas.md#user-credentials) | Y | User authentication credentials |  | [User Credentials Example](_schemas.md#user-credentials-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](_schemas.md#authenticated-user) | Successful authentication. The included api access token has the scope &#x27;all.User&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |

<br/>

## Authenticate User Github

Authenticates a user via GitHub OAuth.

```javascript
var params = {
  oauth: myOauth
};

// with callbacks
client.auth.authenticateUserGithub(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateUserGithub(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| oauth | [Github Login](_schemas.md#github-login) | Y | User authentication credentials (access token) |  | [Github Login Example](_schemas.md#github-login-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](_schemas.md#authenticated-user) | Successful authentication. The included api access token has the scope &#x27;all.User&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |

<br/>

## Authenticate User Saml

Authenticates a user via a SAML response.

```javascript
var params = {
  saml: mySaml
};

// with callbacks
client.auth.authenticateUserSaml(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateUserSaml(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| saml | [SAML Response](_schemas.md#saml-response) | Y | Encoded SAML response from an IDP for a user. |  | [SAML Response Example](_schemas.md#saml-response-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](_schemas.md#authenticated-user) | Successful authentication. The included api access token has the scope &#x27;all.User&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |

<br/>

## Sso Domain

Checks email domain for SSO configuration.

```javascript
var params = {
  email: myEmail
};

// with callbacks
client.auth.ssoDomain(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.ssoDomain(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| email | string | Y | The email address associated with the user login |  | example@example.com |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [SSO Request](_schemas.md#sso-request) | Successful finding SSO for domain. Returns SSO request URL and type. |
| 204 | undefined | No domain associated with an SSO configuration |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
