const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up successfully')
  // TODO: add/remove classes once HTML has been built
  // TODO: modify tags/methods as needed once HTML has been built
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').html('You signed in successfully')
  // TODO: add/remove classes once HTML has been built
  // TODO: modify tags/methods as needed once HTML has been built
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('You changed your password successfully.')
  // TODO: add/remove classes once HTML has been built
  // TODO: modify tags/methods as needed once HTML has been built
}

const signOutSuccess = function () {
  $('#message').html('You signed out successfully.')
  // TODO: add/remove classes once HTML has been built
  // TODO: modify tags/methods as needed once HTML has been built
}

const failure = function (failureResponse) {
  $('#message').html('Something went wrong, please try again')
  // TODO: add/remove classes once HTML has been built
  // TODO: modify tags/methods as needed once HTML has been built
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
