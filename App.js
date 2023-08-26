import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>
        Simple Form in React native
      </Text>
      <TextInput
        style={style.textInput}
        placeholder="Enter User Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={style.textInput}
        placeholder="Enter User Email Address"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={style.textInput}
        placeholder="Enter User Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <View style={{marginBottom: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Details" onPress={resetFormData} />

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>User Name is : {name}</Text>
            <Text style={{fontSize: 20}}>User Email is : {email}</Text>
            <Text style={{fontSize: 20}}>User Password is : {password}</Text>
          </View>
        ) : null}
      </View>
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
