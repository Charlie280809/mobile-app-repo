import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { CartProvider } from "./components/CartContext.js";

import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import AllProducts from './screens/AllProducts.js';
import AllBlogs from './screens/AllBlogs.js';
import BlogScreen from './screens/BlogScreen.js';
import AboutUs from './screens/AboutUs.js';
import CartScreen from './screens/CartScreen.js';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Support for defaultProps will be removed from function components',
]);

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      Cinzel: require('./assets/Cinzel.ttf'),
      CinzelBold: require('./assets/cinzel.bold.ttf'),
      CinzelDecoRegular: require('./assets/CinzelRegular.ttf'),
      CinzelDecoBold: require('./assets/CinzelBold.ttf'),
      EBGaramond: require('./assets/EBGaramond.ttf'),
      EBGaramondMedium: require('./assets/EBGaramond-Medium.ttf'),
      EBGaramondSemiBold: require('./assets/EBGaramond-SemiBold.ttf'),
      EBGaramondBold: require('./assets/EBGaramond-Bold.ttf'),
      EBGaramondExtraBold: require('./assets/EBGaramond-ExtraBold.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return <View><ActivityIndicator /></View>; return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AllProducts" component={AllProducts} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="AllBlogs" component={AllBlogs} />
          <Stack.Screen name="BlogScreen" component={BlogScreen} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
};