import React from 'react';
import {Text, View,FlatList, StyleSheet} from 'react-native';

const App = () => {

  const user = [
    {
      "id":1,
      "name":"Somad"
    },
    {
      "id":2,
      "name":"Yasin"
    },
    {
      "id":2,
      "name":"Subhan"
    },
    {
      "id":3,
      "name":"Akif 🍌🍌🍌🍆🍆🍆"
    },
  ]


  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>
        List with Flat List Components
      </Text>

      <FlatList
       data={user}
       renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
       keyExtractor={item => item.id}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize:24,
    padding:10,
    color:"#fff",
    backgroundColor:"blue",
    borderColor:"black",
    borderWidth:1,
    margin:10
  }
})


export default App;
