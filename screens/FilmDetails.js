import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/colors";



const Tag = ({ title, content }) => {
  return (
    <View style={tagStyles.container}>
      <Text style={tagStyles.title}>{title}:</Text>
      <Text style={tagStyles.content}>{content}</Text>
    </View>
  );
};

const tagStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  content: {
    color: Colors.gray[400],
    fontSize: 16,
  },
  title: {
    color: Colors.blue[100],
    fontSize: 16,
    marginRight: 6,
  },
});

const FilmDetails = ({ route, navigation }) => {
  const { film } = route.params;
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: film.Poster }} style={styles.poster} />

      <ScrollView style={styles.bodyContainer}>
        <LinearGradient
          style={styles.titleContainerGradient}
          colors={["rgba(27, 33, 47, 0)", "#1B212F", "#1B212F"]}
          locations={[0, 0.65, 0.8]}
        >
          <Text style={styles.title}>{film.Title}</Text>
          <Icon
            
            style={styles.bookMarkIcon}
            name="bookmark-outline"
            size={30}
            color={Colors.white}
          />
        </LinearGradient>
        <View style={styles.contentContainer}>
          <View style={styles.tagsInRow}>
            <Tag title="Lanzamiento" content={film.Year} />
            <Tag title="Clasificacion" content={film.Rated} />
          </View>
          <Tag title="Duracion" content={film.Runtime} />
          <Tag title="Etiquetas" content={film.Genre} />
          <Text style={styles.plotTitle}>Plot</Text>
          <Text style={styles.plotContent}>{film.Plot}</Text>
          <Tag title="Director" content={film.Director} />
          <Tag title="Actuan" content={film.Actors} />
          <Tag title="Produccion" content={film.Production} />
        </View>
      </ScrollView>
      <LinearGradient
        style={styles.headerContainerGradient}
        colors={["#1B212F", "#1B212F", "rgba(27, 33, 47, 0)"]}
        locations={[0, 0.01, 0.8]}
      >
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Icon name="chevron-back" size={40} color={Colors.white} />
          <Text style={styles.headerTitle}>Home</Text>
        </TouchableOpacity>
        <View style={styles.starContainer}>
          <Icon
            style={styles.startIcon}
            name="star"
            size={20}
            color={Colors.yellow[200]}
          />
          <Text style={styles.startText}>{film.imdbRating}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default FilmDetails;

const styles = StyleSheet.create({
  bodyContainer: {
    minHeight: 500,
    width: "100%",
    zIndex: 3,
  },
  bookMarkIcon: {
    position: "absolute",
    right: 16,
    top: 32,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'black',
    minHeight: 800,
    paddingBottom: 80,
    paddingHorizontal: 24,
    paddingTop: 12,
    width: "100%",
  },
  goBackButton: {
    flexDirection: "row",
  },
  headerContainerGradient: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingTop: 8,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10000,
  },
  headerTitle: {
    alignSelf: "baseline",
    color: Colors.white,
    fontSize: 24,
    marginLeft: 4,
    marginTop: 4,
  },
  plotContent: {
    color: Colors.gray[400],
    fontSize: 18,
    marginBottom: 12,
    marginTop: 12,
  },
  plotTitle: {
    color: Colors.blue[100],
    fontSize: 26,
    marginTop: 32,
  },
  poster: {
    height: "75%",
    position: "absolute",
    width: "100%",
  },
  starContainer: {
    flexDirection: "row",
    marginRight: 14,
    marginTop: 8,
  },
  startIcon: {
    marginTop: 4,
  },
  startText: {
    color: Colors.yellow[200],
    fontSize: 22,
    marginHorizontal: 8,
    marginTop: 0,
  },
  tagsInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    maxWidth: "80%",
  },
  titleContainerGradient: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "80%",
    minHeight: 80,
    paddingLeft: 24,
    paddingRight: 16,
    paddingTop: 25,
    width: "100%",
  },
});
