import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{fontSize: 30}}>useEffect for Unmount Component</Text>
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};

//TODO: Create Student Component
const Student = () => {
  let timer = setInterval(() => {
    console.warn('Timer called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>Student Show Component</Text>
    </View>
  );
};

export default App;
