import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const skills = [
    {
      id: 1,
      name: 'Dart',
    },
    {
      id: 2,
      name: 'Javascript',
    },
    {
      id: 3,
      name: 'Node.js',
    },
    {
      id: 4,
      name: 'PHP',
    },
  ];

  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio == item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}> {item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: '#fff',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'red',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
