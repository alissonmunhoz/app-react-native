import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Favorites = () => {
  return (
    <View style={styles.container}>
        <Image source = {require('../img/How-App-Maintenance-a-Key-to-Your-Mobile-App’s-Success.png')} />
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Favorites;