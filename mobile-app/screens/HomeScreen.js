//importeer de benodigde modules
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => { //functie die de homepagina van de app weergeeft
    return (
        <View style={styles.container}>
            <Text style={styles.heading} >Onze favorieten op dit moment!</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
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