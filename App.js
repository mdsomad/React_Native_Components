import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const postApiData = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!name || !email || !age) {
      return false;
    }

    console.warn('Next');

    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Post API with Input Field data
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        onChangeText={text => setName(text)}
        value={name}
      />
      {nameError ? (
        <Text style={styles.errorText}>Please enter valid name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter a age"
        onChangeText={text => setAge(text)}
        value={age}
      />
      {ageError ? (
        <Text style={styles.errorText}>Please enter valid age</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter a email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      {emailError ? (
        <Text style={styles.errorText}>Please enter valid email</Text>
      ) : null}
      <Button title="Post Data" onPress={postApiData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'yellow',
    borderWidth: 2,
    margin: 20,
    padding: 10,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
});

export default App;
