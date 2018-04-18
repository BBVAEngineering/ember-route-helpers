import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('transition-to', function() {
		this.route('list');
	});
	this.route('replace-with', function() {
		this.route('list');
	});
});
export default Router;
