# TS Utilities
[![npm](https://img.shields.io/npm/dt/@didiermargarido/ts-utilities.svg?style=for-the-badge)](https://www.npmjs.com/package/@didiermargarido/ts-utilities)
[![GitHub Tag](https://img.shields.io/github/release/didiermargarido/ts-utilities.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utilities/releases)
[![GitHub issues](https://img.shields.io/github/issues/didiermargarido/ts-utilities.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utilities/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utilities/blob/master/LICENSE)

TS Utilities is a versatile collection of TypeScript utility functions designed to simplify your development tasks.\
It provides a range of helpful functions for various common scenarios.

## Installation
To incorporate TS Utilities into your TypeScript projects, you can use either `npm` or `yarn` package manager.\
Choose the one you're most comfortable with:

### Using NPM
```bash
npm install @didiermargarido/ts-utilities
```

### Using Yarn
```bash
yarn add @didiermargarido/ts-utilities
```

## Usage
TS Utilities provides a comprehensive set of utility functions that can streamline various aspects of your TypeScript projects.\
Here's a detailed guide on how to use some of the key utility functions available in TS Utilities:

### isDefined
Method to check if value is defined.

```js
// Util
import { isDefined } from "@didiermargarido/ts-utilities";

// Output: true
isDefined("DM");
isDefined(10);
isDefined([]);

// Output: false
isDefined(null);
isDefined(undefined); 
```

### isEmpty
Method to check if value is empty.

```js
// Util
import { isEmpty } from "@didiermargarido/ts-utilities";

// Output: true
isEmpty("");
isEmpty([]);
isEmpty({});
isEmpty(null);
isEmpty(undefined);

// Output: false
isEmpty("DM");
isEmpty(["DM", 36]);
isEmpty({ key: "DM" }); 
```

### isEqual
Method to check if two values are equal.

```js
// Util
import { isEqual } from "@didiermargarido/ts-utilities";

// Output: true
isEqual("DM", "DM");
isEqual(true, true);
isEqual([1, 2], [1, 2]);
isEqual([{ key: "DM" }], [{ key: "DM" }]);

// Output: false
isEqual("DM", "MD");
isEqual(true, false);
isEqual({ key: "DM" }, { key: "MD" }); 
```

### deepMerge
Method to merge multiple objects.

```js
// Util
import { deepMerge } from "@didiermargarido/ts-utilities";

// Merge two single objects
const obj1 = { 
  car: "Ford",
};

const obj2 = { 
  car: "Peugeot", 
  color: "White"
};

// Output { car: "Peugeot", color: "White" }
deepMerge(obj1, obj2)

// Merge three objects with nested properties
const obj1 = { 
  car: "Ford", 
  specifications: { 
    km: 15000, 
    diesel: true 
  } 
};

const obj2 = { 
  car: "Peugeot", 
  color: "White"
};

const obj3 = { 
  car: "Peugeot", 
  specifications: { 
    diesel: false
  } 
};

// Output: { car: "Peugeot", color: "White", specifications: { km: 15000, diesel: false } }
deepMerge(obj1, obj2, obj3);
```

## Author
**Didier Margarido**\
[github/didiermargarido](https://github.com/didiermargarido)

## License
**TS Utilities** is open-sourced software licensed under the [MIT license](LICENSE)