import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Helper |transition-to');


test('transitioning to /transition-to/list via helper', (assert) => {
	visit('/transition-to');

	andThen(() => {
		assert.equal(currentURL(), '/transition-to');
	});

	click('button:contains(Go to Helpers)');

	andThen(() => {
		assert.equal(currentPath(), 'transition-to.list');
	});
});


test('transitioning to /transition-to/list via helper with queryParams', (assert) => {
	visit('/transition-to');

	andThen(() => {
		assert.equal(currentURL(), '/transition-to');
	});

	click('button:contains(Show Query Params)');

	andThen(() => {
		assert.equal(currentURL(), '/transition-to/list?foo=bar');
	});
});
