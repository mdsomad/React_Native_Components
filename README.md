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


## Tab Navigation Related commands
### First install library Tab navigation
- [Navigation react documentation website link](https://reactnavigation.org/docs/tab-based-navigation)
```bash
# Then run this command
npx react-native run-android
```



```bash
# Then run this command
npm start ——clean—cache
````

## Tab Navigation | React Navigation in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Tab Navigator home view</th>
   <th>Tab Navigator settings view</th>

</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/2228d9a2-756d-4441-89bd-fc77f50698d5" width="280"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/73c20acd-6a82-40ad-8454-5b0f78f47d30" width="280"/>

</td>
>

</table>





## Code Example

```bash

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Home!</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Settings!</Text>
    </View>
  );
};

export default App;


```

