
<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/74083910-7305c180-4a69-11ea-9595-331c7976c292.png">  
</p>
<p align="center">
    <i> 🎯A collection of polyfills that focuses on being ultra light-weight 🎯 </i>
    <br>
    <br>
    <img src="https://github.com/garronej/minimal_polyfills/workflows/ci/badge.svg?branch=develop">
    <img src="https://img.shields.io/bundlephobia/minzip/minimal-polyfills">
    <img src="https://img.shields.io/npm/l/minimal-polyfills">
</p>

---

Set of polyfills for ``Map``, ``Set``, ``WeakMap`` and other standard functions that could be missing in some legacy runtime environnement.
Focus is placed on bundle size rather than performance and transparency.  
The goal is to allow our code to run on older browsers without significantly increasing the bundle size by adding exhaustive polyfills that in 95% of the cases won't be necessary.  
The classes exposed only implement the more common features of their native counterpart, it does so in a very naïve and inefficient way to keep the code as short as possible.
As you would expect the polyfills will only be used when the native classes are missing.

# Usage

## Example with Map

```typescript
//Example with map.
import { Polyfill as Map, LightMap } from "minimal-polyfills/Map";

// Explicitly define the type of your variable to make it clear
// that you are using a subset of Map...
const map: LightMap<string, number>= new Map();
//...or let the type be inferred.
const map = new Map<string, number>();
```

![Screenshot 2020-02-08 at 10 45 06](https://user-images.githubusercontent.com/6702424/82556081-564d4f80-9b69-11ea-9b62-46eaa910a2e3.png)
![Screenshot 2020-02-08 at 10 46 34](https://user-images.githubusercontent.com/6702424/82556246-a5938000-9b69-11ea-8b3f-6a6036288ba1.png)

## Others data structures: 

```typescript
import { Polyfill as Set, LightSet } from "minimal-polyfills/Set";
//WARNING: If not natively supported WeakMap will only be a simple Map that will keep string references of it's keys.
import { Polyfill as WeakMap } from "minimal-polyfills/WeakMap";
import { Polyfill as WeakSet } from "minimal-polyfills/WeakSet";
```

## Common missing features on older browsers:

```typescript
import "minimal-polyfills/Array.prototype.find";
import "minimal-polyfills/String.prototype.startsWith.ts";
import "minimal-polyfills/Array.from.ts";
import "minimal-polyfills/ArrayBuffer.isView.ts";
import "minimal-polyfills/Object.fromEntries";
import "minimal-polyfills/Object.is.ts";
import "minimal-polyfills/Object.assign.ts";
```

# Try it now

Thanks to Stackblitz you can try this lib with within your browser like if you where in VSCode. 

<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/82556457-0622bd00-9b6a-11ea-8056-5a9c31a4ba39.png">  
</p>

[__Run the example__](https://stackblitz.com/edit/minimal-polyfills-demo?embed=1&file=index.ts)
