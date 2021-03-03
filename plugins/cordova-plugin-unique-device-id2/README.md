# cordova-plugin-unique-device-id2

## Difference from original forked version

1. Removed `READ_PHONE_STATE` permission https://android-developers.googleblog.com/2018/10/providing-safe-and-secure-experience.html
2. Using `SharedPreferences` to store the unique UUID

PhoneGap / Cordova unique device id (UUID) plugin for Android, iOS and Windows Phone 8. ~~Remains the same after app uninstall~~.

## Installation

```bash
cordova plugin add cordova-plugin-unique-device-id2
# or  
phonegap local plugin add cordova-plugin-unique-device-id2
```

## Supported Platforms

- Android
- iOS
- Windows Phone 8

## Usage

```javascript
// Success callback function
function fooSuccessCallback(uuid) {
    console.log(uuid);
};

function fooFailCallback(error) {
    console.log(error);
};

// Get UUID
window.plugins.uniqueDeviceID.get(fooSuccessCallback, fooFailCallback);
```
