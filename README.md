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

## Status Bar Customise in React Native in React native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Status Bar view</th>
   <th>Status Bar Hide view</th>
   <th>Status Bar Update Style view</th>
  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/0f28fe65-a316-426b-bb34-8f0dd7c56216" width="270"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/3c900003-2f6c-442b-a7d8-08d036b25eff" width="270"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/30e3260a-f354-4ed1-a183-3da15befa158" width="270"/>

</td>

</table>

## Code Example

```bash


import React, {useState} from 'react';
import {View, StatusBar, StyleSheet, Button} from 'react-native';

const App = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle={barStyle} hidden={hide} />

      <View style={styles.button1}>
        <Button title="Toogle Status bar" onPress={() => setHide(!hide)} />
      </View>
      <View style={styles.button2}>
        <Button
          title="Update Style"
          onPress={() => setBarStyle('dark-content')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button1: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  button2: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
});

export default App;



```
