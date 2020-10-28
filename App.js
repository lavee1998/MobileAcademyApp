import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar, DefaultTheme, BottomNavigation } from 'react-native-paper';
import MapView from 'react-native-maps';
import MapScreen from './screens/MapScreen';
import AddScreen from './screens/AddScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'darkcyan',
    accent: 'white',
  },
};

const Map = () => <MapScreen/>;
const Add = () => <AddScreen/>;

export default function App() {

  const _goBack = () => console.log('Went back')

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'map', title: 'Map', icon: 'map' },
    { key: 'add', title: 'Add', icon: 'plus' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    add: Add,
    map: Map
  });

  return (
      <PaperProvider theme={theme}>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Mobil Academy" subtitle="helló levi" />
        </Appbar.Header>

        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </PaperProvider>
    );
}
