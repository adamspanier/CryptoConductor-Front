import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { router } from '@ember/service';

export default class LoginUiComponent extends Component {
  @service authManager;
  @service router;
  @tracked UserName = 'username here';
  @tracked PassWord = 'password here';
  @tracked remember = 0;
  @tracked anonStatus = true;

  // Called when UI is created
  constructor(owner, args) {
    super(owner, args);
    this.authManager.print();
  }

  // Disable the submit button until all fields are filled
  get disableSubmit() {
    //if either value is empty we don't want to allow submitting the form
    return !this.UserName.length || !this.PassWord.length;
  }

  // JS Validation, Sanitization, and Escaping
  @action
  validateNames() {
    un.value = un.value.replace(/[&*<>/';{}]/g, '');
    pw.value = pw.value.replace(/[&*<>/';{}]/g, '');
  }

  // Creates login data and calls login function in authManager
  @action
  submitData() {
    var loginData = {
      username: this.UserName,
      password: this.PassWord,
      remember: this.remember,
    };

    //pass into authManager
    this.authManager.login(loginData);
  }

  // Redirect for logged in users
  @action
  redirectToDashboard() {
    this.router.transitionTo('projectDashboard');
  }
}
