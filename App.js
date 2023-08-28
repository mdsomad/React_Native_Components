import React, {useState} from 'react';
import {View, Button, Modal, StyleSheet, Text} from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modealView}>
            <Text style={styles.modalText}>Hello Somad</Text>
            <Button title="Clode Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modealView: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
  },
});

export default App;
