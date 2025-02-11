/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <Text>Icon</Text>
      <Text>Icon</Text>
      <Text>Icon</Text>
      <Text>Icon</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}


export default App;
