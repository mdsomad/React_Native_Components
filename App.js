import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>First API CALL</Text>
      {data ? (
        <View>
          <Text>UserId : {data.userId}</Text>
          <Text>Id : {data.id}</Text>
          <Text>Title : {data.title}</Text>
          <Text>Body : {data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;
