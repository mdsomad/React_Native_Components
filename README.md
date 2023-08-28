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

## Activity Indicator | Loader in React Native in React native Ui Preview

<table>
  
  
<tr>                    
   
   <th>ActivityIndicator view</th>
  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/b8066b84-3fe1-47a5-b987-ca036d7da7d2" width="270"/>

</td>




</table>


```bash

import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Button} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <View style={styles.main}>

      {/* <ActivityIndicator size="small" color="red" /> */}
      
      <ActivityIndicator size={100} color="red" animating={show} />

      {show ? (
        <ActivityIndicator size={100} color="green" animating={show} />
      ) : null}

      <Button title="Show Loader" onPress={displayLoader} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

export default App;



```
