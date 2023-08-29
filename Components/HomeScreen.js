import {View, Text,} from 'react-native';
 export const HomeScreen = (props) => {
  const {name,age} = props.route.params
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: 'black'}}>Home Screen</Text>
        <Text style={{fontSize: 30, color: 'red'}}>Name : {name}</Text>
        <Text style={{fontSize: 30, color: 'red'}}>Age : {age}</Text>
      </View>
    );
  };