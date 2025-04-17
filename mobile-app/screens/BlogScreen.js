// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// const BlogScreen = ({ route, navigation }) => { //functie die de homepagina van de app weergeeft
//   const { title, price, image, description } = route.params; //haal de waarden uit de route.params

//   return (
//         <View style={styles.container}>
//             <Image style={styles.image} source={{uri: image.uri}}/>
//             <Text style={styles.title}>{title}</Text>
//             <Text style={styles.price}>{price}</Text>
//             <Text style={styles.description}>{description}</Text>

//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={decreaseQuantity}>
//                 <Text style={styles.quantityButton}>-</Text>
//               </TouchableOpacity>

//               <Text style={styles.quantityText}>{quantity}</Text>
              
//               <TouchableOpacity onPress={increaseQuantity}>
//                 <Text style={styles.quantityButton}>+</Text>
//               </TouchableOpacity>
//             </View>

//             <Text style={styles.totalPrice}>Totaal: €{(numericPrice * quantity).toFixed(2)}</Text>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// export default BlogScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#bfa86a',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   scrollContainer: {
//     alignItems: 'center',
//     paddingBottom: 20, 
//   },
//   image: {
//     width: "80%",
//     height: "40%",
//     borderRadius: 5,
//     marginBottom: 20
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   price: {
//     fontSize: 18,
//     color: '#444',
//     marginTop: 5
//   },
//   description: {
//     fontSize: 14,
//     color: '#222',
//     marginTop: 5,
//     padding: 20,
//     textAlign: 'center',
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   quantityButton: {
//     fontSize: 24,
//     color: '#444',
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ededed',
//   },
//   quantityText: {
//     fontSize: 24,
//     color: '#444',
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ededed',
//     marginHorizontal: 10,
//   },
//   totalPrice: {
//     fontSize: 18,
//     color: '#444',
//     marginTop: 5
//   },
// });