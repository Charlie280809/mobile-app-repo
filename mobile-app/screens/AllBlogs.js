import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BlogCard from '../components/BlogCard';

// const AllBlogs = ({ navigation }) => {
const AllBlogs = () => {

//   useEffect(() => { //dit stukje code wordt uitgevoerd zodra de pagina geladen wordt, hier haal je producten op uit de API
//     fetch( //HTTP-aanroep naar de Webflow API om productinformatie op te halen 
//       "https://api.webflow.com/v2/sites/67a3c55c66dddd03e1a0140b/products",
//       {
//         headers: {
//           Authorization: //voor toegang tot de API (als een soort van wachtwoord)
//           "Bearer c080a257e44723e32978e8fc3d376a77194f77ec768aa2de07bbc8d929cd545a",
//         },
//       }
//     )

//     .then((res) => res.json()) //data van de API wordt omgezet naar formaat dat ja kan gebruiken (JSON)
//     .then((data) =>
//       setProducts(
//         data.items.map((item) => ({
//           id: item.product.id,
//           title: item.product.fieldData.name,
//           subtitle: item.product.fieldData.description,
//           price: (item.skus[0]?.fieldData.price.value || 0) / 100,
//           image: {uri: item.skus[0]?.fieldData["main-image"]?.url},
//           category:
//             categoryNames[item.product.fieldData.category[0]] || "Onbekend",
//         }))
//       )
//     )
//     .catch((err) => console.error("Error:", err)); //als er een fout optreedt, log deze in de console
//   }, []);
  
  return (
        <View style={styles.container}>
            <Text style={styles.heading} >Lees meer over onze blogs!</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <BlogCard
                        // key={blog.id}
                        // title="Blog 1"
                        // date="Datum van blog 1"
                        // image={{uri: "https://example.com/image1.jpg"}}
                        // onPress={() => navigation.navigate("Blog", {title: "Blog 1"})}
                    />
                    <BlogCard
                        // key={blog.id}
                        // title="Blog 2"
                        // date="Datum van blog 2"
                        // image={{uri: "https://example.com/image2.jpg"}}
                        // onPress={() => navigation.navigate("Blog", {title: "Blog 2"})}
                    />
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
            </ScrollView>

{/* //             <ScrollView contentContainerStyle={styles.scrollContainer}>
//               <View style={styles.row}>
{/* //                   <BlogCard
//                     key={blog.id}
//                     title={blog.title}
//                     intro={blog.intro}
//                     content={blog.content}
//                     date={blog.date}
//                     image={blog.image}
//                     onPress={() => navigation.navigate("Blog", blog)}
//                   /> */}
{/* //               </View> */}
{/* //             </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#bfa86a',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1b1f3b',
    marginBottom: 15,
    textAlign: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 120,
  },
});

export default AllBlogs;