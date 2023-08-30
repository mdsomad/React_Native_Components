import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        Call JSON server API
      </Text>
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                margin: 10,
                borderColor: 'yellow',
                borderWidth: 2,
              }}>
              <Text style={{fontSize: 20}}>Name : {item.name}</Text>
              <Text style={{fontSize: 20}}>Age : {item.age}</Text>
              <Text style={{fontSize: 20}}>Email : {item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default App;
