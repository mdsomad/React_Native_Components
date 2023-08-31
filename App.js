import React from 'react';
import {View, Button,Text,StyleSheet,Image,ScrollView} from 'react-native';
import Header from './Components/Header';
import Product from './Components/Product';

const App = () => {


  const products = [
    {
      name:"Samsung",
      color:"red",
      price:15000,
      image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/v/0/c51-mzb0dxkin-poco-original-imagzdpycgrcdc8z.jpeg?q=70"
    },
    {
      name:"OnePlus",
      color:"red",
      price:25000,
      image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/v/0/c51-mzb0dxkin-poco-original-imagzdpycgrcdc8z.jpeg?q=70"
    },
    {
      name:"Appple",
      color:"green",
      price:50000,
      image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/v/0/c51-mzb0dxkin-poco-original-imagzdpycgrcdc8z.jpeg?q=70"
    },
    {
      name:"Redme",
      color:"pink",
      price:15000,
      image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/v/0/c51-mzb0dxkin-poco-original-imagzdpycgrcdc8z.jpeg?q=70"
    },
  ]
  

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
      {
        products.map((item)=> <Product item={item}/> )
      }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
