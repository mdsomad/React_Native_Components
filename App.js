import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{               //* <-- All Screen ka Appbar Mein apply hota styles
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{                   //* <-- Only Single screen ka Appbar Mein apply hota styles
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'black'}}>Home Screen</Text>
    </View>
  );
};
const LoginScreen = props => {
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

export default App;
