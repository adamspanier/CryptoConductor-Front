import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import $ from 'jquery';
import Cookies from 'ember-cli-js-cookie';

export default class AuthManagerService extends Service {
  //Store state here
  @tracked username;
  @tracked usergroup;
  @tracked userid;
  @tracked isLoggedIn = false;


  //Go to Django, let Django check current status, then returning interval
  //function is the callback for what to do when the function returns - async
  // this - the reference to the immediate object you are in
  // Get
  init() {
    super.init(...arguments);
    let authService = this
    let data = $.get("/session/", function(response) {
      console.log(response);
      authService.username = response.data.username;
      authService.usergroup = response.data.usergroup;
      authService.userid = response.data.userid;
      authService.isLoggedIn = response.data.isLoggedIn;
      console.log(authService.username);
    });
  }

  // Post
  login(loginData) {
    //url, data, success handler
    let authService = this
    $.post("/session/", loginData, function(response) {
      console.log(response);
      authService.username = response.data.username;
      authService.usergroup = response.data.usergroup;
      authService.userid = response.data.userid;
      authService.isLoggedIn = response.data.isLoggedIn;
    });
  }

  //delete
  logout(logoutData) {
    const csrftoken = Cookies.get('csrftoken');
    console.log(logoutData)
    let authService = this
    console.log("test")
    /$.ajax({
      url: "/session/",
      type: "DELETE",
      headers: {'X-CSRFToken': csrftoken},
      success: function(response) {
        console.log(response);
        authService.username = null;
        authService.usergroup = null;
        authService.userid = null;
        authService.isLoggedIn = false;
      }
    });
  }

  //Run queries to get specialty, niche

  print() {
    console.log(this.username);
    console.log(this.userid);
    console.log(this.isLoggedIn);
  }

}
