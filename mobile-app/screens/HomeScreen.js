import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.h1}>Welkom bij Nocturnia!</Text>
        <Text style={styles.h2}>Vind de stijl die bij jou past.</Text>

          <Image
            source={require("../images/thumbnail.jpg")}
            style={styles.image}
          />

          <Text style={styles.h3}>Als je houdt van de gothic en grunge aesthetic, dan ben je op de juiste site belandt. Op Nocturnia vind je variërende accessoires die aansluiten bij jouw stijl.</Text>

    {/* <LinearGradient
      colors={['#ff9a9e', '#fad0c4']}
      style={styles.container}
    >
      <Text>Inhoud met gradient achtergrond</Text>
    </LinearGradient> */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AllProducts")}
          >
            <Text style={styles.buttonText}>Bekijk onze producten</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AllBlogs")}
          >
            <Text style={styles.buttonText}>Bekijk onze blogs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CartScreen")}
          >
            <Text style={styles.buttonText}>Ga naar winkelmand</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AboutUs")}
          >
            <Text style={styles.buttonText}>Meer over ons</Text>
          </TouchableOpacity>
    </View>
  );
};

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
  h1: {
    fontFamily: 'CinzelDecoBold',
    fontSize: 28,
    color: '#1b1f3b',
    marginTop: 20,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'EBGaramondSemiBold',
    fontSize: 22,
    color: '#1b1f3b',
    textAlign: 'center',
    marginBottom: 12,
  },
  image:{
    width: 350,
    height: '30%',
    borderRadius: 10,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 8,
  },
  h3: {
    fontFamily: 'EBGaramondSemiBold',
    fontSize: 18,
    color: '#1b1f3b',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,

    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'EBGaramondExtraBold',
    fontSize: 18,
  }
});

export default HomeScreen;