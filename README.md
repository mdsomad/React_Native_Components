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


- [Using This Api Link check now](https://jsonplaceholder.typicode.com/posts)

## List with API Data | Get List with API in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>List Api Call view</th>
   <th>List Api Call view 2</th>

</tr>
  
  
  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/27528f43-2115-4189-bede-67b162260df0" width="280"/>

</td>
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/ebef4b0a-89b7-42f3-9f37-01f86bb93877" width="280"/>

</td>


</table>


## Code Example

```bash

import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ScrollView>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        List with API CALL
      </Text>
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 2,
              }}>
              <Text style={{fontSize: 20, backgroundColor: 'red'}}>
                UserId : {item.userId}
              </Text>
              <Text style={{fontSize: 20}}>Id : {item.id}</Text>
              <Text style={{fontSize: 20}}>Title : {item.title}</Text>
              <Text style={{fontSize: 20}}>Body : {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default App;


```

