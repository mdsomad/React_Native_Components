import React from 'react';
import {View, Text, Platform} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Platform : {Platform.OS}</Text>

      {Platform.OS == 'android' ? (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      ) : (
        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View>
      )}
      <Text style={{color: 'yellow'}}>{JSON.stringify(Platform)}</Text>
      <Text style={{color: 'red'}}>
        React Native Version Show :{' '}
        {JSON.stringify(Platform.constants.reactNativeVersion.minor)}
      </Text>
    </View>
  );
};

export default App;
