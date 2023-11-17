import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
