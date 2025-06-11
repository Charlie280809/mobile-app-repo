import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const BlogScreen = ({route, navigation}) => {
  const {title, date, image, intro, content} = route.params; //haal de waarden uit de route.params
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Image source={image} style={styles.image}/>

        <Text style={styles.intro}>{intro}</Text>

        <Text style={styles.content} numberOfLines={0}>{content}</Text>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bfa86a',
    },
    scrollContainer: {
      padding: 20,
      paddingBottom: 350,
    },
    image: {
      width: '80%',
      height: '40%',
      borderRadius: 10,
      marginBottom: 20,
      alignSelf: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#1b1f3b',
      marginBottom: 10,
      textAlign: 'center',
    },
    date: {
      fontSize: 14,
      color: '#1b1f3b',
      marginBottom: 20,
      textAlign: 'center',
    },
    intro: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#1b1f3b',
      marginBottom: 20,
    },
    content: {
      fontSize: 16,
      color: '#1b1f3b',
      marginBottom: 20,
    },
  });  