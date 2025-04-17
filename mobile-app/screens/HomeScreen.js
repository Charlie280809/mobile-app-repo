import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom bij Nocturnia!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AllProducts")}
      >
        <Text style={styles.buttonText}>Bekijk onze producten</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        title="Bekijk onze blogposts"
        onPress={() => navigation.navigate("BlogPosts")}
      /> */}
      
      {/* Voeg hier later andere knoppen toe zoals Contact, Over ons, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bfa86a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1b1f3b',
    marginBottom: 40,
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
