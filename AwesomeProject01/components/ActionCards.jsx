import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  const openWeb = website => {
    Linking.openURL(website);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in Javascript</Text>
        </View>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1265176772/photo/computer-programmer-working-on-laptop.jpg?s=1024x1024&w=is&k=20&c=wqI5KIWCZI5WRLNwq_SqQfW9o2kooWtJF0nR7Mx67Rg=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Coding is one of the most valuable skills you can build, and in this
            post you'll learn about how to start learning. If you’re searching
            for “how to learn coding,” it might be because you want to advance
            your career or develop other skills in the computer programming
            world.
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => openWeb('https://obidike-portfolio.vercel.app')}>
              <Text style={styles.link}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    // height: 340,
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  elevatedCard: {
    backgroundColor: '#5e2f46',
    elevation: 4,
    shadowColor: '#333',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    color: '#fff',
  },
  footerContainer: {
    alignItems: 'flex-start',
  },
  link: {
    fontSize: 12,
    marginVertical: 6,
    fontStyle: 'italic',
    backgroundColor: '#fff',
    color: '#5e2f46',
    padding: 8,
  },
});
