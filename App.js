import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ScrollView>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        List with API CALL
      </Text>
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 2,
              }}>
              <Text style={{fontSize: 20, backgroundColor: 'red'}}>
                UserId : {item.userId}
              </Text>
              <Text style={{fontSize: 20}}>Id : {item.id}</Text>
              <Text style={{fontSize: 20}}>Title : {item.title}</Text>
              <Text style={{fontSize: 20}}>Body : {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default App;
