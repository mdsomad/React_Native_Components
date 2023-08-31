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



# Then run this command
```bash
npx react-native run-android
```



```bash
# Then run this command
npm start ——clean—cache
```



```bash
# JSON server API command
ipconfig
json-server --host 0.0.0.0 db.json
http://10.0.2.2:3000/users
```


## Ref with example focus in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Ref focus view</th>

</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/2be73e42-7bea-4ba4-816e-a776a8ebc509" width="280"/>

</td>




</table>



## Code Example


```bash


import React, {useRef} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const input = useRef();

  const updateInput = () => {
    console.warn('Calling updateInput');
    input.current.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput ref={input} style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter age" />
      <Button title="Update Input" onPress={updateInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 10,
  },
});

export default App;






```

