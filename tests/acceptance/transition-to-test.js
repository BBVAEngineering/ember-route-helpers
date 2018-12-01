import {
	module,
	test
} from 'qunit';
import {
	visit,
	currentURL,
	currentRouteName,
	click
} from '@ember/test-helpers';
import {
	setupApplicationTest
} from 'ember-qunit';

module('Acceptance | Helper |transition-to', (hooks) => {
	setupApplicationTest(hooks);

	test('transitioning to /transition-to/list via helper', async(assert) => {
		await visit('/transition-to');

		assert.equal(currentURL(), '/transition-to');

		await click('button#transition-to-list');

		assert.equal(currentRouteName(), 'transition-to.list');
	});


	test('transitioning to /transition-to/list via helper with queryParams', async(assert) => {
		await visit('/transition-to');

		assert.equal(currentURL(), '/transition-to');

		await click('button#transition-to-list-query-params');

		assert.equal(currentURL(), '/transition-to/list?foo=bar');
	});


	test('transitioning to /transition-to/currying via action with curried params', async(assert) => {
		await visit('/transition-to');

		assert.equal(currentURL(), '/transition-to');

		await click('button#transition-to-currying');

		assert.equal(currentURL(), '/transition-to/currying/curried-value');
	});
});
