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


##  List with API data in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Akif User not deleted view</th>
   <th>Akif User deleted view</th>

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
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  const deleteUser = async id => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();

    if (result) {
      console.warn('User deleted successfully');
      getApiData();
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Age</Text>
        </View>
        <View style={{flex: 1.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Operations</Text>
        </View>
      </View>

      {data.length
        ? data.map(item => (
            <View style={styles.dataWrapper}>
              <View style={{flex: 1}}>
                <Text style={{color: 'black'}}>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{color: 'black'}}>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" />
              </View>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 10,
  },
});

export default App;



```

