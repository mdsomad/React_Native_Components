import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text
              style={{color: 'black', textAlign: 'center', marginBottom: 10}}>
              Custom Dialog
            </Text>
            <Button title="Close dialog" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}

      <Button title="Open Dialog" onPress={() => setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(180, 180, 180,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'yellow',
    height: 250,
    width: 320,
    // alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default App;
