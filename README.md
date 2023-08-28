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

## TouchableHighlight | Style with Buttonin React native Ui Preview

<table>
  
  
<tr>                    
   
   <th> TouchableHighlight button view</th>
 
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/2d465f57-a07a-4424-8b3b-dfb57bc15002" width="270"/>

</td>



</table>


## Code Example
```bash
import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles}>
      <TouchableHighlight onPress={() => console.warn('Press Success Button ')}>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.warn('Press Primary Button')}>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.warn('Press Warning Button ')}>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.warn('Press Error Button ')}>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    fontSize: 24,
    color: '#fff',
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'gold',
  },
  error: {
    backgroundColor: 'red',
  },
});

export default App;


```
