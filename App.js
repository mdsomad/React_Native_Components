import React from 'react';
import {Text, View, SectionList} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Somad',
      data: ['Flutter', 'React Native', 'Node.js'],
    },
    {
      id: 2,
      name: 'Yasin',
      data: ['Dart', 'C#', 'C'],
    },
    {
      id: 3,
      name: 'Artaza',
      data: ['Next.js', 'React.js', 'Node.js'],
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>
        Section List in React native
      </Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 24, color: 'yellow'}}>{name}</Text>
        )}
      />
    </View>
  );
};

export default App;
