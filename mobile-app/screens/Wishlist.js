import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Wishlist = ({ route }) => {
  const [wishlist, setWishlist] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.product) {
      const product = route.params.product;
      const exists = wishlist.some(item => item.id === product.id);
      if (!exists) {
        setWishlist([...wishlist, product]);
      }
    }
  }, [route.params, isFocused]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const moveAllToCart = () => {
    wishlist.forEach(item => {
      navigation.navigate('Cart', { product: item });
    });
    setWishlist([]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Verlanglijst</Text>
      {wishlist.map(item => (
        <View key={item.id} style={styles.item}>
          <Text>{item.title}</Text>
          <Button title="Verwijder" onPress={() => removeFromWishlist(item.id)} />
        </View>
      ))}
      {wishlist.length > 0 && (
        <Button title="Zet alles in winkelmand" onPress={moveAllToCart} />
      )}
    </ScrollView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { marginBottom: 15 },
});