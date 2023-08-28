This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
## First install webview npm package 
```bash
# Then run the following command
npx react-native run-android
```

## Webview in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Webview Example 1 view</th>
   <th>Webview Example 2 view</th>
   <th>Webview Example 3 view</th>
  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/0bb008a4-f517-4217-9404-4483917df0f4" width="280"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/8b95c886-8846-46a8-9df3-9c17c6ce1836" width="280"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/7f215fbf-6aec-4566-9d22-ae372aecd3e3" width="280"/>

</td>


</table>







## Code Example

```bash


import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView source={{uri: 'https://github.com/mdsomad'}} style={{flex: 1}} />
  );
};

export default App;





```
