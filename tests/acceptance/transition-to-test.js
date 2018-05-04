import { module, test } from 'qunit';
import { visit, currentURL, currentRouteName, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Helper |transition-to', function(hooks) {
	setupApplicationTest(hooks);

	test('transitioning to /transition-to/list via helper', async function(assert) {
		await visit('/transition-to');

		assert.equal(currentURL(), '/transition-to');

		await click('button#transition-to-list');

		assert.equal(currentRouteName(), 'transition-to.list');
	});


	test('transitioning to /transition-to/list via helper with queryParams', async function(assert) {
		await visit('/transition-to');

		assert.equal(currentURL(), '/transition-to');

		await click('button#transition-to-list-query-params');

		assert.equal(currentURL(), '/transition-to/list?foo=bar');
	});
});
