# SystemJS unpack module plugin

SystemJS loads CJS modules (and perhaps AMD modules) in such a way that all of the CJS exports are packed into `module.default`. This annoys me. Thus, this plugin will unpack all properties of `module.default` into the module namespace itself.

Does not work:

```js
import { feature } from 'some-cjs-module';

// do stuff with `feature`
```

Works:

```js
import someCjsModule from 'some-cjs-module';

// do stuff with `someCjsModule.feature`
```

With this plugin (mapped as `unpack`):

```js
import { feature } from 'some-cjs-module!unpack';

// do stuff with `feature`
```
