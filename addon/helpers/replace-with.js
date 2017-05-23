import Ember from 'ember';
import QueryParams from 'ember-route-helpers/utils/query-params';

const { copy, getOwner } = Ember;

export default Ember.Helper.extend({

  compute([...params]) {
    const _params = copy(params);
    const router = getOwner(this).lookup('router:main');
    const queryParams = _params[_params.length - 1];

    if (queryParams instanceof QueryParams) {
      _params[_params.length - 1] = { queryParams: queryParams.values };
    }

    return function(value) {
      router.replaceWith(..._params);

      return value;
    };
  }

});
