import React from 'react';
import {Text, View, StyleSheet,ScrollView} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Somad',
    },
    {
      id: 2,
      name: 'Yasin',
    },
    {
      id: 2,
      name: 'Subhan',
    },
    {
      id: 3,
      name: 'Artaza',
    },
    {
      id: 4,
      name: 'Akif',
    },
   
    {
      id: 5,
      name: 'Somad',
    },
    {
      id: 6,
      name: 'Yasin',
    },
    {
      id: 7,
      name: 'Subhan',
    },
    {
      id: 8,
      name: 'Artaza',
    },
    {
      id: 9,
      name: 'Akif',
    },
    {
      id: 10,
      name: 'Somad',
    },
    {
      id: 11,
      name: 'Yasin',
    },
    {
      id: 12,
      name: 'Subhan',
    },
    {
      id: 13,
      name: 'Artaza',
    },
    {
      id: 14,
      name: 'Akif',
    },
   
  ];

  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Custom List with map function</Text>
    <ScrollView style={{marginBottom:50}}>

      {users.map(item => (
        <Text style={styles.item}>{item.name}</Text>
        ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default App;
