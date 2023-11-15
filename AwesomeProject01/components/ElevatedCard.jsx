import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headerText}>Elevated Card</Text>
      <ScrollView horizontal style={styles.boxContainer}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>CREATE </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>REAd </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>UPDATE </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>DELETE </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>PATCH </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>PUT </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>GET </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>POST </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>DELETE </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  boxContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  cardElevated: {
    // backgroundColor: '#CAD5E2',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CAD5E2',
    shadowColor: '#ccc',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
});
