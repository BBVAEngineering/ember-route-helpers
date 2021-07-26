import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  currentRouteName,
  click,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Helper | replace-with', (hooks) => {
  setupApplicationTest(hooks);

  test('replacing with /replace-with/list via helper', async function (assert) {
    await visit('/replace-with');

    assert.equal(currentURL(), '/replace-with');

    await click('button#replace-with-list');

    assert.equal(currentRouteName(), 'replace-with.list');
  });

  test('replacing with /replace-with/list via helper with queryParams', async function (assert) {
    await visit('/replace-with');

    assert.equal(currentURL(), '/replace-with');

    await click('button#replace-with-list-query-params');

    assert.equal(currentURL(), '/replace-with/list?foo=bar');
  });

  test('replacing with /replace-with/currying via action with curried params', async function (assert) {
    await visit('/replace-with');

    assert.equal(currentURL(), '/replace-with');

    await click('button#replace-with-currying');

    assert.equal(currentURL(), '/replace-with/currying/curried-value');
  });
});
