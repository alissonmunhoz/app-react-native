import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/colors";

const SearchInput = ({ value, setValue, handleSubmit }) => {
  const handleChangeText = (text) => {
    setValue(text);
  };
  const handleClearText = () => {
    setValue("");
  };
  const handleSubmitEditing = () => {
    handleSubmit();
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={40} style={styles.searchIcon} />
      <View  />
      <TextInput
        onSubmitEditing={() => handleSubmitEditing()}
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor="#000" 
        value={value}
        onChangeText={handleChangeText}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={handleClearText}>
          <Icon style={styles.cancelIcon} name="close-outline" size={40} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  cancelIcon: {
    color: Colors.white,
    height: 40,
    width: 40,
  },
  container: {
    alignItems: "center",
    backgroundColor: 'gray',
    borderRadius: 16,
    elevation: 10,
    flexDirection: "row",
    minHeight: 64,
    paddingHorizontal: 14,
    paddingVertical: 12,
    width: "100%",
  },
  divisor: {
    backgroundColor: 'black',
    height: "100%",
    marginHorizontal: 10,
    width: 3,
  },
  input: {
    color: Colors.white,
    fontSize: 24,
    height: "100%",
    padding: 0,
    paddingHorizontal: 10,
    width: "67%",
  },
  searchIcon: {
    color: 'black',
    height: 40,
    width: 40,
  },
});
