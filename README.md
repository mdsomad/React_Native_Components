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
   
   <th>Modal | Dialog Box view</th>
  
</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="270"/>

</td>




</table>


```bash

import React, {useState} from 'react';
import {View, Button, Modal, StyleSheet, Text} from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modealView}>
            <Text style={styles.modalText}>Hello Somad</Text>
            <Button title="Clode Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modealView: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
  },
});

export default App;




```
