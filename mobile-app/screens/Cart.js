import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const Cart = ({ route }) => {
  const [cart, setCart] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params?.product) {
      const product = route.params.product;
      const existing = cart.find((item) => item.id === product.id);

      if (existing) {
        setCart(cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
  }, [route.params, isFocused]);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Winkelmand</Text>
      {cart.map(item => (
        <View key={item.id} style={styles.item}>
          <Text>{item.title} x{item.quantity}</Text>
          <Text>€{(item.price * item.quantity).toFixed(2)}</Text>
          <Button title="Verwijder" onPress={() => removeFromCart(item.id)} />
        </View>
      ))}
      <Text style={styles.total}>Totaal: €{total.toFixed(2)}</Text>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { marginBottom: 15 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
});