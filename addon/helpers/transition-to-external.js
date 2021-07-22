import { getOwner } from '@ember/application';
import TransitionHelper from './transition';

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
export default class TransitionToHelper extends TransitionHelper {
	getRouteName(routeName) {
		const owner = getOwner(this);

		return owner._getExternalRoute(routeName);
	}
}
