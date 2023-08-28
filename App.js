import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Button} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <View style={styles.main}>

      {/* <ActivityIndicator size="small" color="red" /> */}
      
      <ActivityIndicator size={100} color="red" animating={show} />

      {show ? (
        <ActivityIndicator size={100} color="green" animating={show} />
      ) : null}

      <Button title="Show Loader" onPress={displayLoader} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
