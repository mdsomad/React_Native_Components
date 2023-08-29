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

## FlatList with API Data | use flat list with API in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>FlatList Api Data Show view</th>
   <th>FlatList Api Data Show view 2</th>

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

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

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
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        FlatList with API Data
      </Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 2,
              }}>
              <Text style={{fontSize: 20, backgroundColor: 'green'}}>
                UserId : {item.userId}
              </Text>
              <Text style={{fontSize: 20}}>Id : {item.id}</Text>
              <Text style={{fontSize: 20}}>Title : {item.title}</Text>
              <Text style={{fontSize: 20}}>Body : {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default App;



```

