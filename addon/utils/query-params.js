import Ember from 'ember';

const QueryModule = Ember.__loader.require('ember-routing') || Ember.__loader.require('ember-routing/lib/system/query_params');
const QueryParams = QueryModule.default || QueryModule.QueryParams;

export default QueryParams;
