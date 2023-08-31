import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Modal} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [showMpdal, setShowMpdal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  const deleteUser = async id => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();

    if (result) {
      console.warn('User deleted successfully');
      getApiData();
    }
  };

  useEffect(() => {
    getApiData();
  }, []);


  const updateUser = (data) => {
    setShowMpdal(true);
    setSelectedUser(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Age</Text>
        </View>
        <View style={{flex: 1.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Operations</Text>
        </View>
      </View>

      {data.length
        ? data.map(item => (
            <View style={styles.dataWrapper}>
              <View style={{flex: 1}}>
                <Text style={{color: 'black'}}>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{color: 'black'}}>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update"
                 onPress={()=> updateUser(item)}
                 />
              </View>
            </View>
          ))
        : null}

        <Modal visible={showMpdal} transparent={true}>

          <UserMpdal setShowMpdal = {setShowMpdal} selectedUser = {selectedUser}/>
          
        </Modal>
        
        
    </View>
  );
};



const UserMpdal = (props)=>{
  return(
    <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{color:'black'}}>{props.selectedUser.name}</Text>
              <Button title='Close'
               onPress={() => props.setShowMpdal(false)}
              />
            </View>
          </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 10,
  },
  centeredView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView:{
    backgroundColor:'#fff',
    padding:40,
    borderRadius:10,
    shadowColor: '#000',
    shadowOpacity:'0.70',
    elevation:5
  }
});

export default App;
