import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import AllProducts from './screens/AllProducts.js';
import AllBlogs from './screens/AllBlogs.js';
import BlogScreen from './screens/BlogScreen.js';
import Cart from './screens/Cart.js';
import Wishlist from './screens/Wishlist.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="AllBlogs" component={AllBlogs} />
        <Stack.Screen name="BlogScreen" component={BlogScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};