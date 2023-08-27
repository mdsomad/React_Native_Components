import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.innerbox1}></View>
        <View style={styles.innerbox2}></View>
        <View style={styles.innerbox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection:'row'
  },

  box1: {backgroundColor: 'red', flex: 2, flexDirection: 'row'},
  box2: {backgroundColor: 'green', flex: 1},
  box3: {backgroundColor: 'blue', flex: 1},
  innerbox: {backgroundColor: 'yellow', flex: 1, margin: 10},
  innerbox1: {backgroundColor: 'skyblue', flex: 1, margin: 10},
  innerbox2: {backgroundColor: 'yellow', flex: 1, margin: 10},
  innerbox3: {backgroundColor: 'orange', flex: 1, margin: 10},
});

export default App;
