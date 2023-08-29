import {View, Text, Button} from 'react-native';
export const LoginScreen = (props) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: 'black'}}>Login Screen</Text>
        <Button
          title="Go to homeS"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    );
  };