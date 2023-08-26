import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>HandLine Text input</Text>
      <Text style={{fontSize: 30, color: 'white'}}>Your Name is : {name}</Text>
      <TextInput
        style={style.textInput}
        placeholder="Enter name"
        value={name}
        onChangeText={val => setName(val)}
      />
      <Button title="Clear Input Value" onPress={() => setName('')}></Button>
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    fontSize: 18,
    margin: 10,
    paddingLeft: 30,
    color: 'green',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
  },
});

export default App;
