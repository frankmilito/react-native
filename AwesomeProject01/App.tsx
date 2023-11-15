import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Home from './Home';
import AppPro from './AppPro';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      {/* <Text>Apps</Text> */}
      <AppPro />
      <Home />
    </SafeAreaView>
  );
};

export default App;
