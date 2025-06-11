import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BlogCard from '../components/BlogCard';

function removetime(str){
  return str.slice(0, -14); // Remove the last 14 characters from the string
}

const AllBlogs = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]); //maak een state aan voor de blogs

  useEffect(() => { //dit stukje code wordt uitgevoerd zodra de pagina geladen wordt, hier haal je producten op uit de API
    fetch( //HTTP-aanroep naar de Webflow API om productinformatie op te halen 
      "https://api.webflow.com/v2/collections/67bb07adca26b75c6b04003f/items",
      {
        headers: {
          Authorization: //voor toegang tot de API (als een soort van wachtwoord)
          "Bearer 9067b3d353cb876ee5238c5cdc36562bcd1131eb5dfaaabb3a911fde4fb62810",
        },
      }
    )

    .then((res) => res.json()) //data van de API wordt omgezet naar formaat dat ja kan gebruiken (JSON)
    .then((data) =>
      setBlogs( //als we de data hebben, slaan we dzee op in de products state
        data.items.map((item) => ({
          id: item.id,
          title: item.fieldData.title,
          intro: item.fieldData.intro,
          content: item.fieldData.content2, //aanpassen naar 'content'?
          date: removetime(item.fieldData.date),
          image: { uri: item.fieldData["thumbnail-image"]?.url }

        }))
      )
    )
    .catch((err) => console.error("Error:", err)); //als er een fout optreedt, log deze in de console
  }, []);
  
  return (
        <View style={styles.container}>
            <Text style={styles.heading} >Lees meer over onze blogs!</Text>

             <ScrollView contentContainerStyle={styles.scrollContainer}>
               <View style={styles.row}>
                {blogs.map((blog) => (
                   <BlogCard
                    key={blog.id}
                    title={blog.title}
                    intro={blog.intro}
                    blogContent={blog.content}
                    date={blog.date}
                    image={blog.image}
                    onPress={() => navigation.navigate("BlogScreen", blog)}
                  />
                ))}
               </View>
             </ScrollView>
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
    paddingBottom: 100,
  },
});

export default AllBlogs;