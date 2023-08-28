import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.warn('normal on press')}
        onLongPress={() => console.warn('Long on press')}
        onPressin={() => console.warn('On press in')}
        onPressOut={() => console.warn('Press Out')}>
        <Text style={styles.pressableButtton}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableButtton: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});

export default App;
