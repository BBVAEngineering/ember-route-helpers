import Ember from 'ember';
import QueryParams from 'ember-route-helpers/utils/query-params';
import { getMountPoint, prefixMountPoint } from 'ember-route-helpers/utils/mount-point';

const { copy, getOwner } = Ember;

export default Ember.Helper.extend({

	compute([...params]) {
		const _params = copy(params);
		const owner = getOwner(this);
		const router = owner.lookup('router:main');
		const queryParams = _params[_params.length - 1];
		const routeName = _params[0];

		// Prefix the route name with the engine's mountPoint, if exists
		_params[0] = prefixMountPoint(getMountPoint(owner), routeName);

		if (queryParams instanceof QueryParams) {
			_params[_params.length - 1] = { queryParams: queryParams.values };
		}

		return function(value) {
			router.transitionTo(..._params);

			return value;
		};
	}

});
