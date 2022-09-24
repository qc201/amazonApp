/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import Icon from 'react-native-vector-icons/FontAwesome';
 const myIcon = <Icon name="rocket" size={30} color="#900" />;
import React, {type PropsWithChildren} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProductScreen from './src/screens/ProductScreen';
import ProductItem from './src/components/ProductItem';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ProductScreen />
    </SafeAreaView>
  );
};


export default App;
