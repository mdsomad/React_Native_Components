import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ExternalStyles from './Components/Style'

const App = () => {
  const [name, setName] = useState('Somad');
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red', backgroundColor: 'yellow'}}>
        In Line Style Add
      </Text>
      <Text style={styles.textBox}>Style in React native</Text>
      <Text style={styles.textBox}>Style in React native</Text>
      <Text style={styles.textBox}>Style in React native</Text>
      <Text style={ExternalStyles.textBox}>Only External Styles Add</Text>
      <Text style={[styles.textBox, ExternalStyles.textBox,{marginTop:30}]}>Add All Style Add</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    color: 'blue',
    backgroundColor: 'lightblue',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor:"red",
    borderWidth:3
  },
});

export default App;
