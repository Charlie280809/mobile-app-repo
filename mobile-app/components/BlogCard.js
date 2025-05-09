import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({title, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      {/* <Image source={image} style={styles.image}/> */}
      <Image
        source={require("../images/home thumbnail.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>23 februari 1982</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
          <Text style={styles.buttonText}>Lees meer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 260,
    height: 380,
    padding: 16,
    backgroundColor: '#ededed',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b1f3b',
    textAlign: 'center',
  },
  date: {
    fontSize: 16,
    color: '#1b1f3b',
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#6A5ACD',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BlogCard;