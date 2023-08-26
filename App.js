import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Userdata from './Components/Userdata';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Somad',
      email: 'mdsoamd@gmail.com',
    },
    {
      id: 2,
      name: 'Yasin',
      email: 'yasin@gmail.com',
    },
    {
      id: 2,
      name: 'Subhan',
      email: 'subhan@gmail.com',
    },
    {
      id: 3,
      name: 'Artaza',
      email: 'artaza@gmail.com',
    },
    {
      id: 4,
      name: 'Akif',
      email: 'akif@gmail.com',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>
        Component in loop with flatlist
      </Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Userdata item={item} />}
      />
    </View>
  );
};

export default App;
