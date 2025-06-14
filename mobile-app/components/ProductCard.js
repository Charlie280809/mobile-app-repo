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
        onPress={onPress}
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
    padding: 12,
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
    fontFamily: 'EBGaramondBold',
    fontSize: 18,
    color: '#1b1f3b',
    marginTop: 10,
  },
  price: {
    fontFamily: 'EBGaramond',
    fontSize: 16,
    color: '#1b1f3b',
    marginTop: 5,
    alignSelf: 'flex-end',
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
    fontFamily: 'EBGaramondExtraBold',
    fontSize: 18,
    color: '#fff',
  },
});

export default ProductCard;