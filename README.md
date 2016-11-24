## Overview
A toast component for Vue, designed based on Ant Design

## Show Cases
![toast case](https://segmentfault.com/img/bVF0XK)

## Installation
First, install `vue-toast` from npm:

```
npm install @dwqs/vue-toast --save-dev
```

Or in **package.json**:

```
"dependencies": {
  "@dwqs/vue-toast": "version"
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
Toast.info('this is a example');
```

Or invoke `Toast` with an object as its configuration:

```
Toast.info({
  message: 'this is a example',
  duration: 5000
});
```

## API
|Opthion|Description|
|:--:|:--:|
|Toast.info(message:String\|config:Object)|show a info toast|
|Toast.success(message:String\|config:Object)|show a success toast|
|Toast.warn(message:String\|config:Object)|show a warn toast|
|Toast.error(message:String\|config:Object)|show a error toast|
|Toast.loading(message:String\|config:Object)|show a loading toast|

## Configuration
|Opthion|Description|Default|
|:--:|:--:|:--:|:--:|
|message|a string as the content of the toast|''|
|duration|time before the toast vanishes, in millisecond|1500|

If `duration` is 0, toast won't disappear but you invoke `remove`:

```
<button @click="loading"><span>显示加载中...</span></button>

loading() {
  const instance = Toast.loading({
    message:"Action....",
    duration:0
  });
  setTimeout(instance.remove, 2500);
}
```

This is useful showing loading state for user in async action.

## License
MIT



