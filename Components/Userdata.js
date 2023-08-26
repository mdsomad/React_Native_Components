import {Text, View, StyleSheet} from 'react-native';

export default Userdata = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    color: 'yellow',
    margin: 5,
    flex: 1,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'yellow',
    marginBottom: 10,
  },
});
