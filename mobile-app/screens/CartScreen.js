import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useCart } from '../components/CartContext'; // importeer de cart context

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart } = useCart(); // Haal de cart context op

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1), 0
  );

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

              <View style={styles.textContainer}>
                <Text style={styles.itemInfo}>{item.title}</Text>
                <Text style={styles.itemInfo}>Aantal: {item.quantity}</Text>
                <Text style={styles.itemInfo}>Subtotaal: €{(item.price * item.quantity).toFixed(2)}</Text>

                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(index)}
                >
                  <Text style={styles.removeButtonText}>Verwijder</Text>
                </TouchableOpacity>
              </View>

            </View>
          ))}
        </ScrollView>
      )}

      <Text style={styles.totalText}>Totaal: €{total.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AllProducts")} // navigatie naar HomeScreen
        >
          <Text style={styles.buttonText}>Browse producten</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")} // navigatie naar HomeScreen
        >
          <Text style={styles.buttonText}>Terug naar Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  textContainer: {
    marginBottom: 10,
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
    flexDirection: 'row',
    gap: 12,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemInfo: {
    fontFamily: 'EBGaramondSemiBold',
    fontSize: 18,
    color: '#1B1F3B',
  },
  totalText: {
    fontFamily: 'EBGaramondSemiBold',
    fontSize: 20,
    backgroundColor: '#F0EDE4',
    padding: 10,
    borderRadius: 4,
    color: '#1B1F3B',
    width: '100%',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#FF6347',
    padding: 4,
    borderRadius: 5,
    width: 100,
  },
  removeButtonText: {
    color: '#fff',
    fontFamily: 'EBGaramondExtraBold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#6A5ACD',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'EBGaramondExtraBold',
    fontSize: 18,
  },
});

export default CartScreen;