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

## Platform | Check OS in React Native | Operating System Ui Preview

<table>
  
  
<tr>                    
   
   <th>Platform | Check OS view</th>
  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="270"/>

</td>


</table>

## Code Example

```bash


import React from 'react';
import {View, Text, Platform} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Platform : {Platform.OS}</Text>

      {Platform.OS == 'android' ? (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      ) : (
        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View>
      )}
      <Text style={{color: 'yellow'}}>{JSON.stringify(Platform)}</Text>
      <Text style={{color: 'red'}}>
        React Native Version Show :{' '}
        {JSON.stringify(Platform.constants.reactNativeVersion.minor)}
      </Text>
    </View>
  );
};

export default App;




```
