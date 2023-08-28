import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles}>
      <TouchableHighlight onPress={() => console.warn('Press Success Button ')}>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.warn('Press Primary Button')}>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.warn('Press Warning Button ')}>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.warn('Press Error Button ')}>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    fontSize: 24,
    color: '#fff',
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'gold',
  },
  error: {
    backgroundColor: 'red',
  },
});

export default App;
