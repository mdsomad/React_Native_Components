import React from 'react';
import {Text, View, Button} from 'react-native';
import CompanyData from './Components/CompanyData';

const App = () => {
  return (
    <View>
      <UserData />
      <CompanyData />
    </View>
  );
};

//TODO: Create UserData Component
const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name: Md Somad</Text>
      <Text style={{fontSize: 20}}>Age: 20</Text>
      <Text style={{fontSize: 20}}>Email: mdsomad@gamil.com</Text>
    </View>
  );
};

export default App;
