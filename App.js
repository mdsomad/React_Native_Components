import React, {useState} from 'react';
import {View, StatusBar, StyleSheet, Button} from 'react-native';

const App = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle={barStyle} hidden={hide} />

      <View style={styles.button1}>
        <Button title="Toogle Status bar" onPress={() => setHide(!hide)} />
      </View>
      <View style={styles.button2}>
        <Button
          title="Update Style"
          onPress={() => setBarStyle('dark-content')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button1: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  button2: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
});

export default App;
