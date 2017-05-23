import Ember from 'ember';
import QueryParams from 'buzz/utils/query-params';

const { copy, getOwner } = Ember;

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
 * {{my-component onclick=(transition-to-external 'posts' (query-params id=3 comments=true)}}
 * ```
 */
export default Ember.Helper.extend({

  compute([...params]) {
    const _params = copy(params);
    const owner = getOwner(this);
    const router = owner.lookup('router:main');
    const queryParams = _params[_params.length - 1];

    // Get the external route, defined at config/environment.js
    _params[0] = owner._getExternalRoute(_params[0]);

    if (queryParams instanceof QueryParams) {
      _params[_params.length - 1] = { queryParams: queryParams.values };
    }

    return function(value) {
      router.transitionTo(..._params);

      return value;
    };
  }

});
