const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').html('You signed in successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#start-new-game').removeClass('hidden')
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('You changed your password successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#start-new-game').removeClass('hidden')
}

const signOutSuccess = function () {
  $('#message').html('You signed out successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#game-board').addClass('hidden')
  $('#start-new-game').addClass('hidden')
  $('#change-password-form').trigger('reset')
}

const failure = function (failureResponse) {
  $('#message').html('Something went wrong, please try again')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function (failureResponse) {
  $('#message').html('Something went wrong, please try again')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure,
  changePasswordFailure
}
