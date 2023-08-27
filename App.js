import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const App = ()=>{

  const  [count,setCount] = useState(0)

 useEffect(()=>{
     console.warn("Hello World")
  },[]);
  
   return(
    <View>
      <Text style={{fontSize:30}}>life cycle with Use Effect: {count}</Text>
      <Button title='UpdateCount' onPress={()=> setCount(count+1)}/>
    </View>
   )
}

export default App;
