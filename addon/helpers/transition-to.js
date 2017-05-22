import Ember from 'ember';
import QueryParams from 'ember-route-helpers/utils/query-params';

const { getOwner } = Ember;

export default Ember.Helper.extend({
	compute(params) {
		params = params.slice();

		const router = getOwner(this).lookup('router:main');
		const queryParams = params[params.length - 1];

		if (queryParams instanceof QueryParams) {
			params[params.length - 1] = { queryParams: queryParams.values };
		}

		return function(value) {
			router.transitionTo(...params);
			return value;
		};
	}
});
