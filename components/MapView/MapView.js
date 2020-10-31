import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import ReactMapView from 'react-native-maps'

const MapView = () => {
  return (
    <View>
      <ReactMapView
        style={styles.map}
        loadingEnabled={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height,
  },
})

export default MapView
