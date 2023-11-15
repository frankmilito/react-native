import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
