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

## Style in Stack Navigation | React Navigation in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Login Screen Appbar Style view</th>
   <th>Home Screen view</th>

  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/aca674f0-aefc-4056-8a4c-592330cfb329" width="280"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/04668230-9275-44fe-8203-63151b2af354" width="280"/>

</td>



</table>



## Code Example

```bash

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{               //* <-- All Screen ka Appbar Mein apply hota styles
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{                   //* <-- Only Single screen ka Appbar Mein apply hota styles
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Home Screen</Text>
    </View>
  );
};
const LoginScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Login Screen</Text>
      <Button
        title="Go to homeS"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default App;



```
