//importeer de benodigde modules
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//importeer de productCard component
import ProductCard from '../components/ProductCard';

//importeer de afbeeldingen
import bigSkullRing from '../images/big-skull-ring.png';
import blueEyedRunesNecklace from '../images/blue-eyed-runes-necklace.png';
import chainBeadsBracelet from '../images/chain-beads-bracelet.png';
import metalRoseRing from '../images/metal-rose-ring.png';
import redGemstoneNecklace from '../images/red-gemstone-necklace.png';
import sharpTeethRing from '../images/sharp-teeth-ring.png';

const HomeScreen = ({ navigation }) => { //functie die de homepagina van de app weergeeft
    return (
        <View style={styles.container}>
            <Text style={styles.heading} >Onze favorieten op dit moment!</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ProductCard 
                    title="Blue-eyed runes necklace"
                    price="€15.99"
                    image={blueEyedRunesNecklace}
                    onPress={() =>
                      navigation.navigate("Product", {
                        title: "Blue-eyed runes necklace",
                        price: "€15.99",
                        image:  require("../images/blue-eyed-runes-necklace.png"),
                        description: "This necklace is perfect for any occasion. It is made of high quality materials and is very durable."
                      })
                    }
                />
                <ProductCard 
                    title="Chain beads bracelet"
                    price="€12.99"
                    image={chainBeadsBracelet}
                    onPress={() =>
                      navigation.navigate("Product", {
                        title: "Chain beads bracelet",
                        price: "€12.99",
                        image: chainBeadsBracelet,
                        description: "This bracelet is perfect for any occasion. It is made of high quality materials and is very durable."
                      })
                    }
                />
                <ProductCard 
                    title="Big skull ring"
                    price="€19.99"
                    image={bigSkullRing}
                    onPress={() => 
                      navigation.navigate("Product", {
                        title: "Big skull ring",
                        price: "€19.99",
                        image: bigSkullRing,
                        description: "This ring is perfect for any occasion. It is made of high quality materials and is very durable."
                      })
                    }
                />
                <ProductCard 
                    title="Metal rose ring"
                    price="€14.99"
                    image={metalRoseRing}
                    onPress={() =>
                      navigation.navigate("Product", {
                        title: "Metal rose ring",
                        price: "€14.99",
                        image: metalRoseRing,
                        description: "This ring is perfect for any occasion. It is made of high quality materials and is very durable."
                      })
                    }
                />
                <ProductCard 
                  title="Red gemstone necklace"
                  price="€17.99"
                  image={require('../images/red-gemstone-necklace.png')}
                  onPress={() =>
                    navigation.navigate("Product", {
                      title: "Red gemstone necklace",
                      price: "€17.99",
                      image: redGemstoneNecklace,
                      description: "This necklace is perfect for any occasion. It is made of high quality materials and is very durable."
                    })
                  }
                />
                <ProductCard 
                  title="Sharp teeth ring"
                  price="€16.99"
                  image={require('../images/sharp-teeth-ring.png')}
                  onPress={() =>
                    navigation.navigate("Product", {
                      title: "Sharp teeth ring",
                      price: "€16.99",
                      image: sharpTeethRing,
                      description: "This ring is perfect for any occasion. It is made of high quality materials and is very durable."
                    })
                  }
                />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 140, 
  },
});