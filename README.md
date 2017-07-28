# Boilerplate for EZS plugin

This package cannot be used alone. EZS has to be installed.

## Example

```js
#!/usr/bin/env ezs

[use]
plugin = boilerplate

[BOILERPLATE]
param = A
param = 1

```

## Installation

    $ git clone https://github.com/touv/node-boilerplate.git
    $ cd node-boilerplate
    $ npm install -g ezs
    $ npm install
    $ npm link
    $ npm run build 
    $ echo "Boilerplate do nothing !" | ./examples/boilerplate.ezs


## Statements


<a id="BOILERPLATE"></a>
### BOILERPLATE
-  **param** = Paramter value

Boilerplate statement do nothing.

