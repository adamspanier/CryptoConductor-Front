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

  constructor(owner, args) {
    super(owner, args);
    this.authManager.print();
  }

  get disableSubmit() {
    //if either value is empty we don't want to allow submitting the form
    return !this.UserName.length || !this.PassWord.length;
  }

  @action
  validateNames() {
    un.value = un.value.replace(/[&*<>/';{}]/g, '');
    pw.value = pw.value.replace(/[&*<>/';{}]/g, '');
  }

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

  @action
  redirectToDashboard() {
    this.router.transitionTo('projectDashboard');
  }
}
