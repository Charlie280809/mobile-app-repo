import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom bij Nocturnia!</Text>

        <Image
          source={require("../images/thumbnail.jpg")}
          style={styles.image}
        />

        <Text style={styles.h2}>Als je houdt van de gothic en grunge aesthetic, dan ben je op de juiste site belandt. Op Nocturnia vind je variërende accessoires die aansluiten bij jouw stijl.</Text>

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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1b1f3b',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  image:{
    width: '100%',
    height: '40%',
    borderRadius: 10,
    marginBottom: 20,
  },
  h2: {
    fontSize: 18,
    color: '#1b1f3b',
    marginTop: 5,
    textAlign: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default HomeScreen;
