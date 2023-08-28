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

## Modal | Dialog Box in React Native in React native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Normal on press view</th>
   <th>Long on press view</th>
   <th>On press in view</th>
   <th>On press out view</th>
  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="270"/>

</td>
<td>

<img src="" width="270"/>

</td>
<td>

<img src="" width="270"/>

</td>
<td>

<img src="" width="270"/>

</td>

</table>

## Code Example

```bash

import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';

const App = () => {

  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.warn('normal on press')}
        onLongPress={() => console.warn('Long on press')}
        onPressin={() => console.warn('On press in')}
        onPressOut={() => console.warn('Press Out')}>
        <Text style={styles.pressableButtton}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableButtton: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});

export default App;





```
