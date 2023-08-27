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

##   ComponentDidUnmount | Life Cycle Method in React native Ui Preview

<table>
  
  
<tr>                    
   
   <th> Component Unmount view</th>
   <th> Component Unmount view 2</th>
 
</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/89910bac-627c-4a70-8352-1d17eee469a5" width="270"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Learn-/assets/103892160/355a97c5-e4a1-496e-b2b8-b81a29e39000" width="270"/>

</td>



</table>




## Code Example
```bash
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{fontSize: 30}}>useEffect for Unmount Component</Text>
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};



#TODO: Create Student Component
const Student = () => {
  let timer = setInterval(() => {
    console.warn('Timer called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>Student Show Component</Text>
    </View>
  );
};

export default App;

```
