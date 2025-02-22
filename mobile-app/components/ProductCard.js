import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image 
        source={require('../images/blue-eyed-runes-necklace.png')} 
        style={styles.image} 
      />
      <Text style={styles.title}>Blue-eyed runes necklace</Text>
      <Text style={styles.price}>€15.99</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Product')}
      >
        <Text style={styles.buttonText}>Bekijk product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: '#444',
    marginTop: 5
  },
  buttonText: {
    padding: 4,
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    width: '100%',
    backgroundColor: '#8153d3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },  
});

export default ProductCard;