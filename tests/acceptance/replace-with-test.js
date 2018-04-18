import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Helper | replace-with');


test('replacing with /replace-with/list via helper', (assert) => {
	visit('/replace-with');

	andThen(() => {
		assert.equal(currentURL(), '/replace-with');
	});

	click('button:contains(Go to Helpers)');

	andThen(() => {
		assert.equal(currentPath(), 'replace-with.list');
	});
});


test('replacing with /replace-with/list via helper with queryParams', (assert) => {
	visit('/replace-with');

	andThen(() => {
		assert.equal(currentURL(), '/replace-with');
	});

	click('button:contains(Show Query Params)');

	andThen(() => {
		assert.equal(currentURL(), '/replace-with/list?foo=bar');
	});
});
