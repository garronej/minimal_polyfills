
<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/74083910-7305c180-4a69-11ea-9595-331c7976c292.png">  
</p>
<p align="center">
    <i> 🎯An ultra light-weight, nonexhaustive, polyfills library 🎯 </i>
    <br>
    <br>
    <img src="https://img.shields.io/bundlephobia/min/minimal-polyfills">
    <img src="https://img.shields.io/bundlephobia/minzip/minimal-polyfills">
    <img src="https://img.shields.io/david/garronej/minimal-polyfills">
    <img src="https://img.shields.io/npm/l/minimal-polyfills">
</p>

---

Set of polyfills for allowing usage of common data structures on older browsers ( Map, Set, WeakMap ).
Focus is placed on bundle size rather than performance and transparency.  
The goal is to allow our code to run on older browsers without significantly increasing the bundle size by adding exhaustive polyfills that in 95% of the cases won't be necessary.  
The classes exposed only implement the more common features of their native counterpart, it does so in a very naïve and inefficient way to keep the code as short as possible.
As you would expect the polyfills will only be used when the native classes are missing.

# Usage


## Example with Map

```typescript
//Example with map.
import { Polyfill as Map, LightMap } from "minimal-polyfills/dist/lib/Map";

// Explicitly define the type of your variable to make it clear
// that you are using a subset of Map...
const map: LightMap<string, number>= new Map();
//...or let the type be inferred.
const map = new Map<string, number>();
```

![Screenshot 2020-02-08 at 10 45 06](https://user-images.githubusercontent.com/6702424/74083059-210c6e00-4a60-11ea-8b63-1a42799a2ebd.png)
![Screenshot 2020-02-08 at 10 46 34](https://user-images.githubusercontent.com/6702424/74083085-50bb7600-4a60-11ea-99ef-93d95d2d48f8.png)

## Others data structures: 

```typescript
import { Polyfill as Set, LightSet } from "minimal-polyfills/dist/lib/Set";
//WARNING: If not natively supported WeakMap will only be a simple Map that will keep string references of it's keys.
import { Polyfill as WeakMap } from "minimal-polyfills/dist/lib/WeakMap";
```

## Common missing features on older browsers:

```typescript
import "minimal-polyfills/dist/lib/Array.prototype.find";
import "minimal-polyfills/dist/lib/String.prototype.startsWith.ts";
import "minimal-polyfills/dist/lib/Array.from.ts";
import "minimal-polyfills/dist/lib/ArrayBuffer.isView.ts";
```
