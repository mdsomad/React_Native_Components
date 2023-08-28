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

## Dynamic radio button in React native Ui Preview

<table>
  
  
<tr>                    
   
   <th> Select Dart view</th>
   <th>Select Node.js view</th>
 
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/6bead342-a71e-45d5-b118-3236c4c74cb7" width="270"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/c00d2f25-bdb8-4c5f-90c9-00003a2de1f3" width="270"/>

</td>



</table>


```bash

import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const skills = [
    {
      id: 1,
      name: 'Dart',
    },
    {
      id: 2,
      name: 'Javascript',
    },
    {
      id: 3,
      name: 'Node.js',
    },
    {
      id: 4,
      name: 'PHP',
    },
  ];

  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio == item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}> {item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: '#fff',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'red',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;



```
