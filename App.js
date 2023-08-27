import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{fontSize: 30}}>Show Hide Component
        
      </Text>
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {
          show ? <User /> : null
      }
    </View>
  );
};

const User = () => {

  
  return (
    <View>
      <Text style={{fontSize: 30 ,color:"green"}}>
        User Show Component
      </Text>
    </View>
  );
};

export default App;
