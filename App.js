import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, TextInput} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './Components/LoginScreen';
import {HomeScreen} from './Components/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const buttonAction = () => {
    console.warn('Button Press');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{                  //* <-- All Screen ka Appbar Mein apply hota styles
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
          options={{                    //* <-- Only Single screen ka Appbar Mein apply hota styles
            title: 'User Login',
            headerTitle: () => (
              <Button title="AppBar left side but add" onPress={buttonAction} />
            ),
            headerRight: () => <Header />,
            headerStyle: {
              backgroundColor: 'orange',
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

const Header = () => {
  return <TextInput placeholder="Enter name" />;
};

export default App;
