import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import User from './Components/User';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Somad',
    };
  }

  updateName(value) {
    this.setState({name: value});
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'red'}}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter your name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="Click Now" onPress={this.fruit} />
        <User name={this.state.name} />
      </View>
    );
  }
}

export default App;
