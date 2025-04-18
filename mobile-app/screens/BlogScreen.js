import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const BlogScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>De prachtige titel van dit statische blog met extra tekst om eens te zien</Text>
        <Text style={styles.date}>23 februari 1982</Text>

        <Image
          source={require("../images/home thumbnail.jpg")}
          style={styles.image}
        />

        <Text style={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Text>

        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaStevelepossionswaaaaaastevelepoissionsteeveedundundundudndundundnudnudbatmaannduhduhdudhddunddnbatman
        </Text>

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
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      marginBottom: 20,
    //   resizeMode: 'cover',
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
      color: '#444',
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