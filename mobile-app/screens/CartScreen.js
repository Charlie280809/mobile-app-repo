import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useCart } from '../components/CartContext'; // importeer de cart context

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart } = useCart(); // Haal de cart context op

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Winkelmand</Text>

      {cartItems.length === 0 ? ( // Als de winkelwagen leeg is: dit bericht
        <Text style={styles.emptyText}>Je winkelmand is momenteel leeg.</Text>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.card}>
              {item.image?.uri && (
                <Image source={{ uri: item.image.uri }} style={styles.image} />
              )}
              <Text style={styles.body}>{item.title}</Text>
              <Text style={styles.body}>€{item.price}</Text>
              <Text style={styles.body}>Aantal: {item.quantity}</Text>
              <Text style={styles.body}>Subtotaal: €{(item.price * item.quantity).toFixed(2)}</Text>


              <TouchableOpacity // Button: verwijderen uit de index
                style={styles.removeButton}
                onPress={() => removeFromCart(index)}
              >
                <Text style={styles.removeButtonText}>Verwijder</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AllProducts")} // navigatie naar HomeScreen
      >
        <Text style={styles.buttonText}>Browse producten</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bfa86a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: 'CinzelDecoBold',
    fontSize: 28,
    color: '#1b1f3b',
  },
  scrollContainer: {
    width: '100%',
  },
  emptyText: {
    fontFamily: 'EBGaramondMedium',
    fontSize: 18,
    color: '#1b1f3b',
  },
  card: {
    backgroundColor: '#F0EDE4',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8153D3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'EBGaramondSemiBold',
    fontSize: 16,
  },
});