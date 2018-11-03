## dyimp.js
ey ey ey!

this is just another simple lib that might be help your life easier & more fun!

So, I dont like importing file like this

```javascript
const moduleA = require('../../modules/moduleA');
// or
const moduleB = require('../../../../utils/modules/moduleB');
```

how if we could always importing file start from root dir huh?

```javascript
const dyimp = require('dyimp');
const moduleA = dyimp('modules/moduleA');
const moduleB = dyimp('utils/modules/moduleB');
```

ok, just it!
