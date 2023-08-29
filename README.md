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

## Pass data between Screens in Stack Navigation | React Navigation in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Login Screen Send Data view 1</th>
   <th>Login Screen Send Data view 2</th>
   <th>Home Screen Receive Data view 1</th>
   <th>Home Screen Receive Data view 2</th>
  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="280"/>

</td>
<td>

<img src="" width="280"/>

</td>
<td>

<img src="" width="280"/>

</td>
<td>

<img src="" width="280"/>

</td>

</table>







## Code Example

```bash

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, TextInput} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './Components/LoginScreen';
import {HomeScreen} from './Components/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const buttonAction = () => {
    console.warn('Button Press');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{                  //* <-- All Screen ka Appbar Mein apply hota styles
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
          options={{                    //* <-- Only Single screen ka Appbar Mein apply hota styles
            title: 'User Login',
            headerTitle: () => (
              <Button title="AppBar left side but add" onPress={buttonAction} />
            ),
            headerRight: () => <Header />,
            headerStyle: {
              backgroundColor: 'orange',
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

const Header = () => {
  return <TextInput placeholder="Enter name" />;
};

export default App;




```






## Login Screen Code Example
```bash
import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
export const LoginScreen = props => {
  const [name, setName] = useState('');
  const age = 20;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Login Screen</Text>
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 2,
          color: 'black',
          fontSize: 20,
        }}
        onChangeText={text => setName(text)}
        placeholder="Enter name"
      />

      <Button
        title="Go to homeS"
        onPress={
          () => props.navigation.navigate('Home', {name: name, age: age}) //* <-- 2 tarike se data bhej sakte Hain
        }
      />
    </View>
  );
};








```
## Home Screen Code Example
```bash
import {View, Text,} from 'react-native';
 export const HomeScreen = (props) => {
  const {name,age} = props.route.params
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: 'black'}}>Home Screen</Text>
        <Text style={{fontSize: 30, color: 'red'}}>Name : {name}</Text>
        <Text style={{fontSize: 30, color: 'red'}}>Age : {age}</Text>
      </View>
    );
  };


```
