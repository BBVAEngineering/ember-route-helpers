import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import { setHelperManager, capabilities } from '@ember/helper';
import handleQueryParams from '../utils/handle-query-params';
import { getMountPoint, prefixMountPoint } from '../utils/mount-point';

class FunctionalHelperManager {
	constructor() {
		this.capabilities = capabilities('3.23', {
			hasValue: true,
		});
	}

	// This prevents executing the helper when it's defined, instead it returns a function that will
	// be called when the helper is executed by an action
	createHelper(fn, args) {
		return () => fn(args.positional, args.named);
	}

	getValue(fn) {
		return fn;
	}
}

const FUNCTIONAL_HELPER_MANAGER = () => new FunctionalHelperManager();

export default class TransitionHelper extends Helper {
	routerInjection = 'router:main';

	transitionMethod = 'transitionTo';

	getRouteName(routeName, mountPoint) {
		return prefixMountPoint(mountPoint, routeName);
	}

	compute(_params) {
		const fn = (maybeEvents) => {
			maybeEvents = !Array.isArray(maybeEvents)
				? [maybeEvents]
				: maybeEvents;

			const maybeEvent = maybeEvents[0];
			const owner = getOwner(this);
			const router = owner.lookup(this.routerInjection);
			const mountPoint = getMountPoint(owner);
			let [routeName, ...rest] = _params;

			if (
				maybeEvent !== undefined &&
				typeof maybeEvent.preventDefault === 'function'
			) {
				maybeEvent.preventDefault();
				maybeEvents.splice(0, 1);
			} else {
				rest = [...rest, ...maybeEvents];
			}

			routeName = this.getRouteName(routeName, mountPoint);

			const params = handleQueryParams(
				[routeName, ...rest].filter(Boolean)
			);

			return router[this.transitionMethod](...params);
		};

		setHelperManager(FUNCTIONAL_HELPER_MANAGER, fn);

		return fn;
	}
}
