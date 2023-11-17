import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCards />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
