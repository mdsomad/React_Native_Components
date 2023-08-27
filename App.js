import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import User from './Components/User';

class App extends Component {

  fruit = () =>{
    console.warn("Apple")
  }
  
  
  render() {
    return (
      <View>
        <Text style={{fontSize:30,color:"red"}}>Class Component</Text>
        <Button title='Click Now' onPress={this.fruit}/>
        <User/>
      </View>
    );
  }
}

export default App;
