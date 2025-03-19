//importeer de benodigde modules
import React, { useEffect, useState } from 'react';
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
  const[products, setProducts] = useState([]); //maak een state aan voor de producten
  
  useEffect(() => { //dit stukje code wordt uitgevoerd zodra de pagina geladen wordt, hier haal je producten op uit de API
    fetch( //HTTP-aanroep naar de Webflow API om productinformatie op te halen 
      "https://api.webflow.com/v2/sites/67a3c55c66dddd03e1a0140b/products",
      {
        headers: {
          Authorization: //voor toegang tot de API (als een soort van wachtwoord)
          "Bearer c080a257e44723e32978e8fc3d376a77194f77ec768aa2de07bbc8d929cd545a",
        },
      }
    )

    .then((res) => res.json()) //data van de API wordt omgezet naar formaat dat ja kan gebruiken (JSON)
    .then((data) =>
      setProducts( //als we de data hebben, slaan we dzee op in de products state
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          subtitle: item.product.fieldData.description,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: {uri: item.skus[0]?.fieldData["main-image"]?.url},
        }))
      )
    )
    .catch((err) => console.error("Error:", err)); //als er een fout optreedt, log deze in de console
  }, []);
  
  return (
        <View style={styles.container}>
            <Text style={styles.heading} >Onze favorieten op dit moment!</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.row}>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    image={product.image}
                    onPress={() => navigation.navigate("Product", product)}
                  />
                ))}
              </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { //vrijwel heel de homepagina
    backgroundColor: '#bfa86a',
    padding: 20,
  },
  heading: { //title 'Onze favorieten op dit moment!'
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1b1f3b',
    marginBottom: 15,
    textAlign: 'center',
  },
  scrollContainer: { //de container waarin de producten staan
    alignItems: 'center',
    paddingBottom: 60,
  },
  row: { //de rij waarin de producten staan
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  }
});

export default HomeScreen;