## Overview
A toast component for Vue, designed based on Ant Design

## Installation
First, install `vue-toast` from npm:

```
npm install @dwqs/vue-toast --save-dev
```

Or in **package.json**:

```
"dependencies": {
  "@dwqs/vue-toast": "^0.5.2"
}
```

Then use it:

```
// ES6 mudule
import Toast from '@dwqs/vue-toast';

//CommonJS
var Toast = require('@dwqs/vue-toast');
```

## Usage
Basically you can pass a string to `Toast`:

```
Toast.show('this is a example');
```

Or invoke `Toast` with an object as its configuration:

```
Toast.show({
  message: 'this is a example',
  duration: 5000
});
```

## API
|Opthion|Description|Value|Default|
|:--:|:--:|:--:|:--:|
|message|a string as the content of the toast||''|
|duration|time before the toast vanishes, in millisecond||1500|
|type|a string as the category of the toast|**todo**:info/loading/success/warn/error|info|


## License
MIT



