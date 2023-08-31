import React, {useRef} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const input = useRef();

  const updateInput = () => {
    console.warn('Calling updateInput');
    input.current.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput ref={input} style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter age" />
      <Button title="Update Input" onPress={updateInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 10,
  },
});

export default App;
