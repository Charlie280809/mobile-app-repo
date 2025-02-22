//importeer de benodigde modules
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProductCard from '../components/ProductCard';

const ProductScreen = ({ navigation }) => { //functie die de homepagina van de app weergeeft
    return (
        <View style={styles.container}>
            <Image 
                source={require('../images/blue-eyed-runes-necklace.png')} 
                style={styles.image}
            />
            <Text style={styles.title}>Blue-eyed runes necklace</Text>
            <Text style={styles.price}>€15.99</Text>
            <Text style={styles.description}>This necklace is perfect for any occasion. It is made of high quality materials and is very durable.</Text>

            <StatusBar style="auto" />
        </View>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20, 
  },
  image: {
    width: "80%",
    height: "40%",
    borderRadius: 5,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    color: '#444',
    marginTop: 5
  },
  description: {
    fontSize: 14,
    color: '#222',
    marginTop: 5,
    padding: 20,
    textAlign: 'center',
  },
});