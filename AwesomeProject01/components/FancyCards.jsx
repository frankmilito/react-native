import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Second Wonder</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra,
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.7,
    // shadowRadius: 2,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {color: '#fff', fontSize: 14, marginBottom: 6},
  cardDescription: {
    color: '#efd9b4',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {color: '#fff', fontStyle: 'italic'},
});
