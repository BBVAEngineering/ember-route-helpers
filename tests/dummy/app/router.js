import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('transition-to', function() {
		this.route('list');
		this.route('currying', { path: 'currying/:curried_param' });
	});
	this.route('replace-with', function() {
		this.route('list');
		this.route('currying', { path: 'currying/:curried_param' });
	});
});

export default Router;
