import React from 'react';
import {Text, View, useColorScheme, StyleSheet} from 'react-native';

const AppPro = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.white : styles.dark}>App pro</Text>
    </View>
  );
};

export default AppPro;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
  },
  white: {
    color: '#fff',
  },
  dark: {
    color: '#000',
  },
});
