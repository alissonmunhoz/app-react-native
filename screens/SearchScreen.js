import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Colors } from "../theme/colors";
import FilmItem from "../components/FilmItem";
import SearchInput from "../components/SearchImput";
import searchFilmByTitle from "../redux/films/actions";




const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const films = useSelector((store) => store.films);
  const dispatch = useDispatch();
  const handleFetchMovies = () => {
    dispatch(searchFilmByTitle(searchText));
  };
  useEffect(() => {

    dispatch(searchFilmByTitle("deadpool"));

  }, []);

 
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.inputContainer}>
        <SearchInput
          value={searchText}
          setValue={setSearchText}
          handleSubmit={handleFetchMovies}
        />
      </View>

      {films.films && (
        <FlatList
          style={styles.flatList}
          data={films.films}

          renderItem={({ item }) => (
            <FilmItem film={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => item + index}
        />
      )}
    </View>
  );
};


export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 24,
  },
  flatList: {
    borderRadius: 80,
  },
  inputContainer: {
    marginTop: 18,
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontSize: 32,
  },
});
