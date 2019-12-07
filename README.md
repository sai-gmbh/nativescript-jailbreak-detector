# NativeScript-Jailbreak-Detector


[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]

[npm-image]:https://img.shields.io/npm/v/nativescript-jailbreak-detector.svg
[npm-url]:https://www.npmjs.com/package/nativescript-jailbreak-detector
[downloads-image]:http://img.shields.io/npm/dm/nativescript-jailbreak-detector.svg
[total-downloads-image]:http://img.shields.io/npm/dt/nativescript-jailbreak-detector.svg?label=total%20downloads

A Nativescript plugin that makes detection of root and jailbreak hassle free. 

## Contributors

[RootBeer](https://github.com/scottyab/rootbeer)

[DTTJailbreakDetection](https://github.com/thii/DTTJailbreakDetection)

## Supported Platforms
- iOS
- Android

## Installation
```bash
tns plugin add nativescript-jailbreak-detector
```

### iOS

Does not need any configuration.

### Android

Does not need any configuration.

## Usage
### Typescript

```typescript
import { JailbreakDetector } from 'nativescript-jailbreak-detector';
if (new JailbreakDetector().isRooted()) {
   // Logic here
 }
```

### iOS

`JailbreakDetector` contains `isJailBroken()` method for IOS.

```typescript
import { JailbreakDetector } from 'nativescript-jailbreak-detector';import {isIOS} from "tns-core-modules/platform";
import {isIOS} from "tns-core-modules/platform";

if (isIOS && new JailbreakDetector().isJailBroken()) {
  // Logic here
}
```

`Note: isRooted() will call isJailBroken() internally for IOS devices
so there is no need to check for platform before using isRooted() even on IOS.`

### Android

This plugin uses rootbeer package to find out is the device is rooted or not.
 Hence it exposes all the other helper methods too. 
```typescript
import { JailbreakDetector } from 'nativescript-jailbreak-detector';
const jailDetector = new JailbreakDetector();

// All the available methods
jailDetector.isRooted();
jailDetector.checkForBusyBoxBinary();
jailDetector.checkForDangerousProps();
jailDetector.checkForMagiskBinary();
jailDetector.checkForRootNative();
jailDetector.checkForRWPaths();
jailDetector.checkForSuBinary();
jailDetector.checkSuExists();
jailDetector.detectPotentiallyDangerousApps();
jailDetector.detectRootCloakingApps();
jailDetector.detectRootManagementApps();
jailDetector.detectTestKeys();
jailDetector.isRootedOrBusyboxInstalled();
jailDetector.isSelinuxFlagInEnabled();
```

## Demo
```bash
# install required dependencies for demo and 
cd src && npm run postclone
# iOS
npm run demo.ios
# Android
npm run demo.android
```


