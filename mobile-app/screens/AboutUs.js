import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native';

const AboutUsScreen = ({ navigation }) => {
  return (
     <View style={styles.container}>
        <Text style={styles.title}>Over ons</Text>

          <Image source={require("../images/Aboutus.jpg")} style={styles.image}/>

          <Text style={styles.h2}>Nocturnia is geboren uit een liefde voor het duistere, het rebelse, het ruwe – maar ook voor de schoonheid die daarin schuilt.
            Ik groeide op tussen punkplaten, gotische kathedralen, en een hoofd vol verhalen. Wat begon als een zoektocht naar accessoires die écht bij mijn stijl pasten, werd al snel een webwinkel voor zielen zoals ik – mensen die het meest comfortabel zijn in duisternis.
            Elk stuk dat je hier vindt – van ringen tot kettingen – is zorgvuldig gekozen met één gedachte: Het schoonste zit vaak in het duistere.
            ‍Nocturnia is meer dan een webshop. Het is een plek voor dromers met stekels, voor nachtridders en nachtegalen, voor wie durft zijn eigen pad te gaan.
            Welkom in de nacht. Welkom bij Nocturnia.
          </Text>

          <View style={styles.founderContainer}>
            <Image source={require("../images/oprichter.jpg")} style={styles.oprichterimg}/>
            <Text style={styles.h2}>De oprichter van Nocturnia heet Charlie Van Belle.</Text>
          </View>
      </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bfa86a',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#1b1f3b',
      marginBottom: 10,
      textAlign: 'center',
    },
    h2: {
      fontSize: 18,
      color: '#1b1f3b',
      marginTop: 5,
    },
    image: {
      width: '60%',
      height: '30%',
      borderRadius: 10,
      marginBottom: 20,
      alignSelf: 'center',
    },
    founderContainer: {
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginTop: 20,
    },
    oprichterimg: {
      width: '40%',
      height: 110,
      borderRadius: 10,
      marginBottom: 20,
      alignSelf: 'center',
    },
  });  