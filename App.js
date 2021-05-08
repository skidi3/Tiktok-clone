import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home/index';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
