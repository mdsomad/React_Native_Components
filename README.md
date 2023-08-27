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

## Responsive Layout with Flexbox in React native Ui Preview

<table>
  
  
<tr>                    
   
   <th> Portrait view</th>
   <th> Landscape view 2</th>
 
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/2d465f57-a07a-4424-8b3b-dfb57bc15002" width="270"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/8c792824-b2a1-4209-92d0-e0ff9ca06f88" width="700"/>

</td>



</table>


## Code Example
```bash
import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.innerbox1}></View>
        <View style={styles.innerbox2}></View>
        <View style={styles.innerbox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection:'row'
  },

  box1: {backgroundColor: 'red', flex: 2, flexDirection: 'row'},
  box2: {backgroundColor: 'green', flex: 1},
  box3: {backgroundColor: 'blue', flex: 1},
  innerbox: {backgroundColor: 'yellow', flex: 1, margin: 10},
  innerbox1: {backgroundColor: 'skyblue', flex: 1, margin: 10},
  innerbox2: {backgroundColor: 'yellow', flex: 1, margin: 10},
  innerbox3: {backgroundColor: 'orange', flex: 1, margin: 10},
});

export default App;

```
