import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductCard = () => {
    const handlePress = () => {
        alert('Meer informatie over dit product...');
    };

  return (
    <View style={styles.card}>
      <Image 
        source={require('../images/blue-eyed-runes-necklace.png')} 
        style={styles.image} 
      />
      <Text style={styles.title}>Blue-eyed runes necklace</Text>
      <Text style={styles.price}>€15.99</Text>
      <Button title="Bekijk product" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '44%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
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
    color: '#666',
  },
});

export default ProductCard;