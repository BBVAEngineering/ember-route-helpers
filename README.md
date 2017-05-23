# ember-route-helpers [![Build Status](https://travis-ci.org/BBVAEngineering/ember-route-helpers.svg?branch=master)](https://travis-ci.org/BBVAEngineering/ember-route-helpers) [![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fember-route-helpers.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fember-route-helpers) [![Dependency Status](https://david-dm.org/BBVAEngineering/ember-route-helpers.svg)](https://david-dm.org/BBVAEngineering/ember-route-helpers)

Transition into routes with helpers directly on template.

### `(transition-to 'destination' model (query-params foo='bar'))`

`(transition-to)` helper that receives the same argument signature as `link-to` but evaluates to an action that can be called to trigger transition.

```hbs
<button {{action (transition-to 'index')}}>Go to Index</button>
```

### `(replace-with 'destination' model (query-params foo='bar'))`

`(replace-with)` helper that transition into another route while replacing the current URL, if possible. This will replace the current history entry instead of adding a new one. Beside that, it is identical to transitionTo in all other respects.

```hbs
<button {{action (replace-with 'index')}}>Go to Index</button>
```


## Installation

```
ember install ember-route-helpers
```
