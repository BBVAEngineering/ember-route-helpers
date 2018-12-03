import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

/**
 * Given this "external routes":
 *
 * ```js
 * // host app
 * dependencies: {
 *   externalRoutes: {
 *     posts: 'blog.posts'
 *   }
 * }
 * ```
 *
 * ```js
 * // engine
 * dependencies: {
 *   externalRoutes: [
 *     'posts'
 *   ]
 * }
 * ```
 *
 * You can then use those external routes within a template:
 *
 * ```hbs
 * {{my-component onclick=(replace-with-external 'posts' (query-params id=3 comments=true)}}
 * ```
 */
export default Helper.extend({

	compute([...params]) {
		const _params = params.slice();
		const owner = getOwner(this);
		const router = owner.lookup('router:main');
		const queryParams = _params[_params.length - 1];

		_params[0] = owner._getExternalRoute(_params[0]);

		if (queryParams.isQueryParams) {
			_params[_params.length - 1] = { queryParams: queryParams.values };
		}

		return function(value) {
			router.replaceWith(..._params);

			return value;
		};
	}

});
