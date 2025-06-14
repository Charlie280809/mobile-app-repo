import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductScreen = ({ route, navigation }) => { //functie die de homepagina van de app weergeeft
  const { title, price, image, subtitle } = route.params; //haal de waarden uit de route.params
  const numericPrice = Number(price); 


  const [quantity, setQuantity] = useState(1); //maak een state aan voor de hoeveelheid van het product (deze state staat standaard op 1)
  
  const increaseQuantity = () => setQuantity(quantity + 1); //functie die de hoeveelheid verhoogt
  const decreaseQuantity = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1); //functie die de hoeveelheid verlaagt
    }
  };

  return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.image} source={{uri: image.uri}}/>
            <Text style={styles.price}>€{price}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>

            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>{quantity}</Text>
              
              <TouchableOpacity onPress={increaseQuantity}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.totalPrice}>Totaal: €{(numericPrice * quantity).toFixed(2)}</Text>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart({ title, price, image, id: route.params.id }, quantity)}
            >
              <Text style={styles.buttonText}>Toevoegen aan winkelmand</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfa86a',
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
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontFamily: 'CinzelBold',
    fontSize: 30,
    marginBottom: 10,
    width: '90%',
    textAlign: 'center',
    color: '#1B1F3B',
  },
  price: {
    fontFamily: 'EBGaramondSemiBold',
    fontSize: 20,
    color: '#1B1F3B',
    marginTop: 5,
  },
  subtitle: {
    fontFamily: 'EBGaramondMedium',
    fontSize: 18,
    color: '#1B1F3B',
    marginTop: 5,
    marginBottom: 20,
    width: '80%',
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 10,
  },
  quantityButton: {
    fontFamily: 'CinzelBold',
    fontSize: 24,
    color: '#444',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#F0EDE4',
  },
  quantityText: {
    fontFamily: 'CinzelBold',
    fontSize: 24,
    color: '#444',
    padding: 10,
    borderRadius: 2,
    backgroundColor: '#F0EDE4',
    marginHorizontal: 10,
  },
  totalPrice: {
    fontFamily: 'EBGaramondSemiBold',
    fontSize: 18,
    color: '#1B1F3B',
    marginTop: 5
  },
  button: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'EBGaramondExtraBold',
    fontSize: 18,
  },
});