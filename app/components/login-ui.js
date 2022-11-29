import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';
import { action } from '@ember/object';

export default class LoginUiComponent extends Component {
  @tracked UserName = 'username here';
  @tracked PassWord = 'password here';
  @tracked remember = 0;

  init() {
    console.log('test');
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
    var login = {
      username: this.UserName,
      password: this.PassWord,
      remember: this.remember,
    };

    console.log(login);
  }
}
