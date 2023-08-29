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


## Tab Navigation Related commands
### First install library Tab navigation
- [Navigation react documentation website link](https://reactnavigation.org/docs/material-top-tab-navigator)
```bash
# Then run this command
npx react-native run-android
```



```bash
# Then run this command
npm start ——clean—cache
```


- [Using This Api Link check now](https://jsonplaceholder.typicode.com/posts/1)

##  API Call | Fetch Rest API in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th> First Api Call view</th>

</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/59f173a0-2c43-41e2-932f-ac0bbeb4be6b" width="280"/>

</td>


</table>




## Code Example

```bash

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>API CALL</Text>
      {data ? (
        <View>
          <Text>UserId : {data.userId}</Text>
          <Text>Id : {data.id}</Text>
          <Text>Title : {data.title}</Text>
          <Text>Body : {data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;


```

