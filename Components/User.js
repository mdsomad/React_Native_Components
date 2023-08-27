import React, {Component} from 'react';
import {Text, View} from 'react-native';

class User extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30,color:"green"}}>User name : {this.props.name}</Text>
      </View>
    );
  }
}

export default User;
