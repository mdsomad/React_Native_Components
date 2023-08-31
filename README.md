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


## API Put Method | Update with rest API in React Native Ui Preview

<table>
  
  
<tr>                    
   
   <th>Old Data view</th>
   <th>Dialog Data view</th>
   <th>Updated Data Dialog view</th>
   <th>Updated Data view</th>

</tr>
  
  
  
  
<tr>
  
<td>

<img src="" width="280"/>

</td>
<td>

<img src="" width="280"/>

</td>
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
import {View, Text, Button, StyleSheet, Modal, TextInput} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [showMpdal, setShowMpdal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

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

  const updateUser = data => {
    setShowMpdal(true);
    setSelectedUser(data);
  };

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
                <Button title="Update" onPress={() => updateUser(item)} />
              </View>
            </View>
          ))
        : null}

      <Modal visible={showMpdal} transparent={true}>
        <UserMpdal
          setShowMpdal={setShowMpdal}
          selectedUser={selectedUser}
          getApiData={getApiData}
        />
      </Modal>
    </View>
  );
};

const UserMpdal = props => {
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    setName(props.selectedUser.name);
    setEmail(props.selectedUser.email);
    setAge(props.selectedUser.age.toString());
  }, [props.selectedUser]);

  const updateUser = async () => {
    console.warn(name, age, email);
    const url = 'http://10.0.2.2:3000/users';
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();

    if (result) {
      console.warn(result);
      props.getApiData();
      props.setShowMpdal(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <View style={{marginBottom: 10}}>
          <Button title="Upade" onPress={updateUser} />
        </View>
        <Button title="Close" onPress={() => props.setShowMpdal(false)} />
      </View>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: '0.70',
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    marginBottom: 15,
    color: 'black',
  },
});

export default App;





```

