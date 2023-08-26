import React, { useState } from 'react';
import { Text,View,Button} from 'react-native';

const App = () => {
  const [name, setName] = useState("Somad")
  return (
    <View>
      <Text style={{fontSize:30}}>Props in React native</Text>
      <Button title='Update name' onPress={()=> setName("Yasin")}></Button>
      <User name={name} age={20}/>
    </View>
  );
};


const User = (Props)=>{
  console.warn(Props.name)
  return(
    <View style={{backgroundColor:"green",padding:5}}>

      <Text style={{fontSize:30}}>Name: {Props.name}</Text>
      <Text style={{fontSize:30}}>Age: {Props.age}</Text>
      
    </View>
  )
}



export default App;
