import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

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
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        FlatList with API Data
      </Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 2,
              }}>
              <Text style={{fontSize: 20, backgroundColor: 'green'}}>
                UserId : {item.userId}
              </Text>
              <Text style={{fontSize: 20}}>Id : {item.id}</Text>
              <Text style={{fontSize: 20}}>Title : {item.title}</Text>
              <Text style={{fontSize: 20}}>Body : {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default App;
