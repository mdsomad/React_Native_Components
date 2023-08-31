import React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const setData = async () => {
    await AsyncStorage.setItem('name', 'Md Somad');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    console.warn(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('name');
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Async Storage
      </Text>
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Button title="set Data" onPress={setData} />
      </View>
      <Button title="get Data" onPress={getData} />
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Button title="remove Data" onPress={removeData} />
      </View>
    </View>
  );
};

export default App;
