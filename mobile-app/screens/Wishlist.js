import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WishlistScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Je verlanglijst</Text>
      
    </View>
  );
}

export default WishlistScreen;

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
  },
  
});