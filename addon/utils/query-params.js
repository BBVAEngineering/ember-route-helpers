import Ember from 'ember';

const QueryParams = Ember.__loader.require('ember-routing/lib/system/query_params').default;
const {
	QueryParamsOldVersions
} = Ember.__loader.require('ember-routing');

export default QueryParams || QueryParamsOldVersions;
