import React, { useState } from 'react';
import { Text,View,Button} from 'react-native';

const App = () => {
  const [name, setName] = useState("Md Somad");

  function testName(){
    setName("Updated Name: Sanchita")
  }


  return (
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      <Button title='Update Name' color={"red"} onPress={testName}></Button>
    </View>
  );
};

export default App;
