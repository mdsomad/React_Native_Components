import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

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
      <Text style={{fontSize: 30, color: 'red'}}>Grid with Dynamic Data</Text>

      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    padding: 5,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
