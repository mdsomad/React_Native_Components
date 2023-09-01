import React from 'react';
import {View, Text ,Image,Button} from 'react-native';
import {useDispatch} from 'react-redux'
import { addCartItem } from './redux/cartSlice';

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch()
  const handleAddToCart = (item)  => {
    // console.warn(item)
    dispatch(addCartItem(item))
  }
  
  
  return (
    <View style={{alignItems:'center',borderColor:"orange",borderBottomWidth:2,padding:10}}>
      <Text style={{fontSize: 24}}>{props.item.name}</Text>
      <Text style={{fontSize: 24}}>{props.item.color}</Text>
      <Text style={{fontSize: 24}}>{props.item.price}</Text>
      <Image style={{width: 100, height: 100}} source={{uri: props.item.image}} />
      <Button title="Add to Cart" onPress={()=>handleAddToCart(item)} />
    </View>
  );
};

export default Product;
