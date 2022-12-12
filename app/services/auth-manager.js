import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import $ from 'jquery';
import Cookies from 'ember-cli-js-cookie';
import { service } from '@ember/service';

export default class AuthManagerService extends Service {
  //Store authentication state here
  @tracked username;
  @tracked usergroup;
  @tracked userid;
  @service router;
  @tracked isLoggedIn = false;

  // Get current session cookie
  init() {
    super.init(...arguments);
    let authService = this;
    let data = $.get('/session/', function (response) {
      authService.username = response.data.username;
      authService.usergroup = response.data.usergroup;
      authService.userid = response.data.userid;
      authService.isLoggedIn = response.data.isLoggedIn;
    });
  }

  // Post creds to the server
  login(loginData) {
    const csrftoken = Cookies.get('csrftoken');
    let authService = this;
    $.post('/session/', loginData, function (response) {
      console.log(response);
      authService.username = response.data.username;
      authService.usergroup = response.data.usergroup;
      authService.userid = response.data.userid;
      authService.isLoggedIn = response.data.isLoggedIn;
    });
  }

  // Delete session token and logout
  logout(logoutData) {
    var csrftoken = Cookies.get('csrftoken');
    let authService = this;
    $.ajax({
      url: '/session/',
      type: 'DELETE',
      headers: { 'X-CSRFToken': csrftoken },
      success: function (response) {
        authService.username = null;
        authService.usergroup = null;
        authService.userid = null;
        authService.isLoggedIn = false;
      },
    });
    this.router.transitionTo('login');
  }

  //Helper print function
  print() {
  }
}
