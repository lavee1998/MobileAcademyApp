import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar, DefaultTheme, BottomNavigation } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'darkcyan',
    accent: 'white',
  },
};

const Add = () => <Text>Add</Text>;
const Map = () => <Text>Map</Text>;


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

  let options = [
    { id:1, value: 'Construction', icon: 'tool' },
    { id:2, value: 'Traffipax', icon: 'police-badge' },
    { id:3, value: 'Incident', icon: 'warning' }
  ];

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
