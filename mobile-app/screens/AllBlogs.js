import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import BlogCard from '../components/BlogCard';
import { Picker } from "@react-native-picker/picker";

function removetime(str) {
  return str.slice(0, -14);
}

const AllBlogs = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/67bb07adca26b75c6b04003f/items",
      {
        headers: {
          Authorization:
            "Bearer 9067b3d353cb876ee5238c5cdc36562bcd1131eb5dfaaabb3a911fde4fb62810",
        },
      }
    )

      .then((res) => res.json())
      .then((data) =>
        setBlogs(
          data.items.map((item) => ({
            id: item.id,
            title: item.fieldData.title,
            intro: item.fieldData.intro,
            content: item.fieldData.content2,
            date: removetime(item.fieldData.date),
            image: { uri: item.fieldData["thumbnail-image"]?.url }

          }))
        )
      )
      .catch((err) => console.error("Error:", err));
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
    return 0;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading} >Onze Blogs</Text>

      <TextInput
        style={styles.input}
        placeholder="Zoek blogs..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.picker}>
        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
        >
          <Picker.Item label="Datum (nieuwste eerst)" value="date-desc" />
          <Picker.Item label="Datum (oudste eerst)" value="date-asc" />
        </Picker>
      </View>

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
  container: {
    backgroundColor: '#bfa86a',
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontFamily: 'CinzelBold',
    fontSize: 26,
    color: '#1b1f3b',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ededed',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    height: 50,
    fontFamily: 'CinzelBold',
    fontSize: 16,
  },
  picker: {
    backgroundColor: '#ededed',
    borderRadius: 8,
    marginBottom: 12,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 160,
  },
});

export default AllBlogs;