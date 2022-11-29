import EmberRouter from '@ember/routing/router';
import config from 'crypto-conductor-front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.baseURL;
}

Router.map(function () {
  this.route('login');
  this.route('projectDashboard');
  this.route('accountManagement');
  this.route('projectManagement');
  this.route('projectDetail');
  this.route('scoringDashboard');
  this.route('contactPage');
});
