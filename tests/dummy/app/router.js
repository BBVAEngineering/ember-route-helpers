import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('transition-to', function () {
		this.route('list');
		this.route('currying', { path: 'currying/:curried_param' });
	});
	this.route('replace-with', function () {
		this.route('list');
		this.route('currying', { path: 'currying/:curried_param' });
	});
});
