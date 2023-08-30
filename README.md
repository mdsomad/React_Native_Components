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


- [Using This Api Link check now](https://jsonplaceholder.typicode.com/posts)

## Fetch data from JSON server API in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>JSON server API Data view</th>

</tr>
  

  
  
<tr>
  
<td>

<img src="https://github.com/mdsomad/React_Native_Components/assets/103892160/8729b72e-ec5e-433a-af0a-38ed52c8c783" width="280"/>

</td>



</table>


## Code Example


```bash

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
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
        Call JSON server API
      </Text>
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                margin: 10,
                borderColor: 'yellow',
                borderWidth: 2,
              }}>
              <Text style={{fontSize: 20}}>Name : {item.name}</Text>
              <Text style={{fontSize: 20}}>Age : {item.age}</Text>
              <Text style={{fontSize: 20}}>Email : {item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};




```

