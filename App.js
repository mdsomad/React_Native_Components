import React from 'react';
import { Text,View,Button} from 'react-native';

const App = () => {
  let data = 200;
  const fruit = (value)=>{
    data = 50
    console.warn(data)
  }

  return (
    <View>
      <Text style={{fontSize:30}}>{data}</Text>
      <Button title='On Press' color={"red"} onPress={()=> fruit("Hello Somad")}></Button>
      <Button title='On Press 2' color={"green"} onPress={fruit}></Button>
    </View>
  );
};

export default App;
