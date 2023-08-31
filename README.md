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


- [Async Storage installation packages link](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Async Storage Usage link](https://react-native-async-storage.github.io/async-storage/docs/usage)
# Async Storage Install command
```bash
# With npm
npm install @react-native-async-storage/async-storage
```
# Then run this command
```bash
npx react-native run-android
```



```bash
# Then run this command
npm start ——clean—cache
```



## Async Storage in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Async Storage Data Set & Get view</th>

</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="280"/>

</td>




</table>



## Code Example


```bash


import React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const setData = async () => {
    await AsyncStorage.setItem('name', 'Md Somad');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    console.warn(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('name');
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Async Storage
      </Text>
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Button title="set Data" onPress={setData} />
      </View>
      <Button title="get Data" onPress={getData} />
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Button title="remove Data" onPress={removeData} />
      </View>
    </View>
  );
};

export default App;





```

