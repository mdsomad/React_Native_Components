import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const postApiData = async () => {
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
      <TextInput
        style={styles.input}
        placeholder="Enter a age"
        onChangeText={text => setAge(text)}
        value={age}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

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
  },
});

export default App;
