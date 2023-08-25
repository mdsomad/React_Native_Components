import React from 'react';
import { Text,View,Button} from 'react-native';

const App = () => {

  return (
    <View>
      <Text style={{fontSize:30}}>Hello Text Component</Text>
      <Text style={{fontSize:20}}>Hellob Second Text Component</Text>
      <Button title='Press here'></Button>
      <Text style={{fontSize:15}}>Hellob Third Text Component</Text>
      <Button title='Press me too'></Button>
    </View>
  );
};

export default App;
