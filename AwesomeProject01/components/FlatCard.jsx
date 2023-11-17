import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.headerText}>FlatCard</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    height: 100,
    // width: 100,
    flexGrow: 1,
    flexBasis: 100,
    borderRadius: 4,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: '#5da3fa',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
