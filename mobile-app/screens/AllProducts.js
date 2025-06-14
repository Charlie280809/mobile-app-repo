import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import ProductCard from '../components/ProductCard';
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "Alle producten",
  "67c582d4d93c43f8a2bc2bf3": "Earrings",
  "67c582cc17dc36a7021e0088": "Bracelets",
  "67c582c4f973eff421547390": "Necklaces",
  "67c582bcf020ad398dfe6eae": "Rings"
};

const AllProducts = ({ navigation }) => { 
  const [products, setProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch( 
      "https://api.webflow.com/v2/sites/67a3c55c66dddd03e1a0140b/products",
      {
        headers: {
          Authorization:
            "Bearer c080a257e44723e32978e8fc3d376a77194f77ec768aa2de07bbc8d929cd545a",
        },
      }
    )

      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
            category:
              categoryNames[item.product.fieldData.category[0]] || "Onbekend",
          }))
        )
      )
      .catch((err) => console.error("Error:", err));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price; //prijs oplopend
    if (sortOption === "price-desc") return b.price - a.price; //prijs aflopend
    if (sortOption === "name-asc") return a.title.localeCompare(b.title); //naam A-Z
    if (sortOption === "name-desc") return b.title.localeCompare(a.title); //naam Z-A
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading} >Onze favorieten op dit moment!</Text>

      <TextInput
        style={styles.input}
        placeholder="Zoek producten..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.pickerRow}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={setSelectedCategory}
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
            selectedValue={sortOption}
            onValueChange={setSortOption}
            style={styles.picker}
          >
            <Picker.Item label="Prijs (↗️)" value="price-asc" />
            <Picker.Item label="Prijs (↘️)" value="price-desc" />
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
  container: {
    backgroundColor: '#bfa86a',
    padding: 20,
  },
  heading: {
    fontFamily: 'CinzelBold',
    fontSize: 26,
    color: '#1b1f3b',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ededed',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    height: 50,
    fontFamily: 'CinzelBold',
    fontSize: 16,
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
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 200,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  }
});

export default AllProducts;