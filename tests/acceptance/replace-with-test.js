import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Helper | replace-with');


test('replacing with /replace-with/list via helper', function(assert) {
  visit('/replace-with');

  andThen(function() {
    assert.equal(currentURL(), '/replace-with');
  });

  click('button:contains(Go to Helpers)');

  andThen(function() {
    assert.equal(currentPath(), 'replace-with.list');
  });

});


test('replacing with /replace-with/list via helper with queryParams', function(assert) {
  visit('/replace-with');

  andThen(function() {
    assert.equal(currentURL(), '/replace-with');
  });

  click('button:contains(Show Query Params)');

  andThen(function() {
    assert.equal(currentURL(),'/replace-with/list?foo=bar');
  });

});
