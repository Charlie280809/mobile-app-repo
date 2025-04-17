import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import AllProducts from './screens/AllProducts.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
        <Stack.Screen name="Product" component={ProductScreen} />
        {/* <Stack.Screen name="AllBlogs" component={AllBlogs} /> */}
        {/* <Stack.Screen name="BlogScreen" component={BlogScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};