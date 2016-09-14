# is-global-exec
> Checks whether executable is global.

## Installation
```shell
npm i is-global-exec -S
```

## Usage
test/test
```javascript
var isGlobal = require('is-global-exec')
console.log(isGlobal())
```

run script
```shell
$ node test/test
# -> true # 'node' is global executable

$ test/test
# false # 'test/test' is local executable
# if 'test/test' is install global, it will print 'true'
```

## License
MIT

