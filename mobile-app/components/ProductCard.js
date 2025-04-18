import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({image, title, price, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>€{price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress} //gebruik de onPress-functie die wordt meegegeven vanuit de HomeScreen.js
      >
        <Text style={styles.buttonText}>Bekijk product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 300,
    padding: 16,
    backgroundColor: '#ededed',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b1f3b',
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#1b1f3b',
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#6A5ACD',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ProductCard;