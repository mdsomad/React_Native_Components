import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux'

const Header = () => {

  const cartData = useSelector(state => state.cart)
  console.warn(cartData);
  
  return (
    <View>
      <Text style={{fontSize:30, textAlign:'right',padding:10,backgroundColor:'orange'}}>{cartData.length}</Text>
    </View>
  );
};

export default Header;
