import EmberRouter from '@ember/routing/router';
import config from 'citas-portal/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('citas-portal');

  this.route('administrador', function () {
    this.route('usuarios');
  });
});
