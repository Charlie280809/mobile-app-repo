//importeer de benodigde modules
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
//importeer de productCard component
import ProductCard from '../components/ProductCard';
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "" : "Alle producten",
  "67c582d4d93c43f8a2bc2bf3" : "Earrings",
  "67c582cc17dc36a7021e0088" : "Bracelets",
  "67c582c4f973eff421547390" : "Necklaces",
  "67c582bcf020ad398dfe6eae" : "Rings"
};

const HomeScreen = ({ navigation }) => { //functie die de homepagina van de app weergeeft
  const[products, setProducts] = useState([]); //maak een state aan voor de producten
  const[selectedCategory, setSelectedCategory] = useState(""); //maak een state aan voor de geselecteerde categorie
  const[searchQuery, setSearchQuery] = useState(""); //searchQuery houd de huidige zoekopdracht bij & met setSearchQuery passen we de zoekopdracht aan wanneer de gebruiker iets typt
  const[sortOption, setSortOption] = useState(""); //maak een state aan voor de sorteeroptie

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
          category:
            categoryNames[item.product.fieldData.category[0]] || "Onbekend",
        }))
      )
    )
    .catch((err) => console.error("Error:", err)); //als er een fout optreedt, log deze in de console
  }, []);

  const filteredProducts = products.filter(
    (p) =>
    (selectedCategory === "" || p.category === selectedCategory) &&
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) //toLowerCase() --> zorgt ervoor dat de zoekopdracht hoofletterongevoelig is
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price; //prijs oplopend
    if (sortOption === "price-desc") return b.price - a.price; //prijs aflopend
    if(sortOption === "name-asc") return a.title.localeCompare(b.title); //naam A-Z
    if(sortOption === "name-desc") return b.title.localeCompare(a.title); //naam Z-A
  });
  
  return (
        <View style={styles.container}>
            <Text style={styles.heading} >Onze favorieten op dit moment!</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Zoek producten..." //de tekst als het veld leeg is
              placeholderTextColor="#999" 
              value={searchQuery} //houd de huidige waarde van de zoekopdracht bij
              onChangeText={setSearchQuery} //elke keer dat de gebruiker iets typt, wordt de zoekopdracht aangepast
            />

            <View style={styles.pickerRow}>
              <View style={styles.pickerContainer}>    
                <Picker
                selectedValue={selectedCategory} //houd de huidige waarde van de picker bij
                onValueChange={setSelectedCategory} //past de categorie aan wanneer de gebruiker een andere categorie selecteert
                style={styles.picker}
                >
                  <Picker.Item label="Alle producten" value="" />
                  {[...new Set(products.map((p) => p.category))].map((category) => (
                    <Picker.Item
                      key={category}
                      label={category}
                      value={category}
                    />
                  ))}
                </Picker> 
              </View>

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={sortOption} //houd de huidige waarde van de picker bij
                  onValueChange={setSortOption} //past de sorteeroptie aan wanneer de gebruiker een andere optie selecteert
                  style={styles.picker}
                >
                  <Picker.Item label="Prijs (<)" value="price-asc" />
                  <Picker.Item label="Prijs (>)" value="price-desc" />
                  <Picker.Item label="Naam (A - Z)" value="name-asc" />
                  <Picker.Item label="Naam (Z - A)" value="name-desc" />
                </Picker>
              </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.row}>
                {sortedProducts.map((product) => (
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
  input: {
    backgroundColor: '#ededed',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    borderRadius: 8,
    marginBottom: 12,
  },
  scrollContainer: { //de container waarin de producten staan
    alignItems: 'center',
    paddingBottom: 240,
  },
  row: { //de rij waarin de producten staan
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  }
});

export default HomeScreen;