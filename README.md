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

## Custom Dialog Box in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Show Dialog view</th>
   <th>Close Dialog view</th>

  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="280"/>

</td>
<td>

<img src="" width="280"/>

</td>



</table>







## Code Example

```bash

import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text
              style={{color: 'black', textAlign: 'center', marginBottom: 10}}>
              Custom Dialog
            </Text>
            <Button title="Close dialog" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}

      <Button title="Open Dialog" onPress={() => setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(180, 180, 180,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'yellow',
    height: 250,
    width: 320,
    // alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default App;

```
