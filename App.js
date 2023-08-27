import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn('Conuter count value Update USE Effect CALL');
  // }, [count]);

  // useEffect(() => {
  //   console.warn('Conuter data value Update USE Effect CALL');
  // }, [data]);

  return (
    <View>
      <Text style={{fontSize: 30}}>
        {data}useEffect as ComponenDidUpdate: {count}
      </Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
};

const User = props => {
  useEffect(() => {
    console.warn('run this code when data prop is updated');
  }, [props.info.data]);

  useEffect(() => {
    console.warn('run this code when count prop is updated');
  }, [props.info.count]);

  return (
    <View>
      <Text style={{fontSize: 30}}>Data Value: {props.info.data}</Text>
      <Text style={{fontSize: 30}}>Count Value : {props.info.count}</Text>
    </View>
  );
};

export default App;
