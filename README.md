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

## Post api in React-native in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Post api Data Response view</th>

</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="280"/>

</td>



</table>


## Code Example


```bash

import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const postApiData = async () => {
    const data = {
      name: 'Amir',
      age: 18,
      email: 'amir@gmail.com',
      id: 3,
    };

    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>Post API Call</Text>

      <Button title="Post Data" onPress={postApiData} />
    </View>
  );
};

export default App;



```

