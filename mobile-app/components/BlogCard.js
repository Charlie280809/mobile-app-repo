import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({image, title, date, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>

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
    width: 300,
    height: 420,
    padding: 16,
    backgroundColor: '#ededed',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'EBGaramondBold',
    fontSize: 18,
    color: '#1b1f3b',
    marginTop: 8,
  },
  date: {
    fontFamily: 'EBGaramond',
    fontSize: 16,
    color: '#1b1f3b',
    marginTop: 5,
    alignSelf: 'flex-end',
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
    fontFamily: 'EBGaramondExtraBold',
    fontSize: 18,
    color: '#fff',
  },
});

export default BlogCard;