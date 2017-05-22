import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transition to');


test('transitioning to /transition-to/list via helper', function(assert) {
  visit('/transition-to');

  andThen(function() {
    assert.equal(currentURL(), '/transition-to');
  });

  click('button:contains(Go to Helpers)');

  andThen(function() {
    assert.equal(currentPath(), 'transition-to.list');
  });

});


test('transitioning to /transition-to/list via helper with queryParams', function(assert) {
  visit('/transition-to');

  andThen(function() {
    assert.equal(currentURL(), '/transition-to');
  });

  click('button:contains(Show Query Params)');

  andThen(function() {
    assert.equal(currentURL(),'/transition-to/list?foo=bar');
  });

});
