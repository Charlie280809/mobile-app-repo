import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useFonts } from 'expo-font';

const BlogScreen = ({ route, navigation }) => {
  const { title, date, image, intro, content } = route.params;
  const [fontsLoaded] = useFonts({
    EBGaramondSemiBold: require('../assets/EBGaramond-SemiBold.ttf'),
    EBGaramondMedium: require('../assets/EBGaramond-Medium.ttf'),
    EBGaramondBold: require('../assets/EBGaramond-Bold.ttf'),
  });
  const { width } = useWindowDimensions();
  const systemFonts = ['EBGaramondSemiBold', 'EBGaramondMedium', 'EBGaramondBold'];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Image source={image} style={styles.image} />
        <RenderHTML
          contentWidth={width}
          systemFonts={systemFonts}
          source={{ html: intro }}
          tagsStyles={{
            p: {
              fontFamily: 'EBGaramondSemiBold',
              fontSize: 18,
              color: '#1b1f3b',
            },
          }}
        />
        <RenderHTML
          contentWidth={width}
          systemFonts={systemFonts}
          source={{ html: content }}
          tagsStyles={{
            p: {
              fontFamily: 'EBGaramondMedium',
              fontSize: 18,
              color: '#1b1f3b',
            },
            strong: {
              fontFamily: 'EBGaramondBold',
              fontSize: 18,
              color: '#1b1f3b',
            },
            li: {
              fontFamily: 'EBGaramondMedium',
              fontSize: 16,
              color: '#1b1f3b',
              marginBottom: 10,
            },
          }}
        />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

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
    height: '24%',
    borderRadius: 10,
    marginBottom: 12,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'EBGaramondBold',
    fontSize: 26,
    color: '#1b1f3b',
    marginBottom: 10,
    textAlign: 'center',
  },
  date: {
    fontFamily: 'EBGaramond',
    fontSize: 16,
    color: '#1b1f3b',
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
});

export default BlogScreen;