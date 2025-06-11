import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import BlogCard from '../components/BlogCard';
import { Picker } from "@react-native-picker/picker";

function removetime(str){
  return str.slice(0, -14); // Remove the last 14 characters from the string
}

const AllBlogs = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]); //maak een state aan voor de blogs
  const [searchQuery, setSearchQuery] = useState(""); //searchQuery houd de huidige zoekopdracht bij & met setSearchQuery passen we de zoekopdracht aan wanneer de gebruiker iets typt
  const [sortOption, setSortOption] = useState(""); //maak een state aan voor de sorteeroptie

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
      setBlogs( //als we de data hebben, slaan we deze op in de products state
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
  

  // Filter blogs op zoekterm (titel of intro)
  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) 
   );

  // Sorteer blogs op datum
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (sortOption === "date-asc") return dateA - dateB;
    if (sortOption === "date-desc") return dateB - dateA;
    return 0; // Geen sortering
  });

  return (
        <View style={styles.container}>
            <Text style={styles.heading} >Lees meer over onze blogs!</Text>

            <TextInput
              style={styles.input}
              placeholder="Zoek blogs..." //de tekst als het veld leeg is
              placeholderTextColor="#999" 
              value={searchQuery} //houd de huidige waarde van de zoekopdracht bij
              onChangeText={setSearchQuery} //elke keer dat de gebruiker iets typt, wordt de zoekopdracht aangepast
            />

            <Picker
              selectedValue={sortOption} //houd de huidige waarde van de picker bij
              onValueChange={setSortOption} //past de sorteeroptie aan wanneer de gebruiker een andere optie selecteert
              style={styles.picker}
            >
              <Picker.Item label="Datum (nieuwste eerst)" value="date-desc" />
              <Picker.Item label="Datum (oudste eerst)" value="date-asc" />
            </Picker>

             <ScrollView contentContainerStyle={styles.scrollContainer}>
               <View style={styles.row}>
                {sortedBlogs.map((blog) => (
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
    marginBottom: 80,
  },
  heading: {
    fontFamily: 'Cinzel',
    fontSize: 26,
    color: '#1b1f3b',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ededed',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
    picker: {
    backgroundColor: '#ededed',
    borderRadius: 8,
    marginBottom: 12,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 100,
  },
});

export default AllBlogs;