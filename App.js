import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const postApiData = async () => {
    const data = {
      name: 'Amir',
      age: 18,
      email: 'amir@gmail.com',
      id: 3,
    };

    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>Post API Call</Text>

      <Button title="Post Data" onPress={postApiData} />
    </View>
  );
};

export default App;
