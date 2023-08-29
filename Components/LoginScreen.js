import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
export const LoginScreen = props => {
  const [name, setName] = useState('');
  const age = 20;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Login Screen</Text>
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 2,
          color: 'black',
          fontSize: 20,
        }}
        onChangeText={text => setName(text)}
        placeholder="Enter name"
      />

      <Button
        title="Go to homeS"
        onPress={
          () => props.navigation.navigate('Home', {name: name, age: age}) //* <-- 2 tarike se data bhej sakte Hain
        }
      />
    </View>
  );
};
