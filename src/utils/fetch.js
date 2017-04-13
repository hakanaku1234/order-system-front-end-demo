require('es6-promise').polyfill();
require('isomorphic-fetch');

let myFetch = fetch;

function _checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    // TODO: 处理 fetch 数据错误
    throw error
  }
}

function _parseJSON(response) {
  return response.json()
}

myFetch.get = function (url, data) {
  return fetch(url)
    .then(_checkStatus)
    .then(_parseJSON)
};

myFetch.post = function (url, data) {
  return fetch(url, {
    method: 'POST',
    body: data
  })
    .then(_checkStatus)
    .then(_parseJSON)
};

module.exports = myFetch;
