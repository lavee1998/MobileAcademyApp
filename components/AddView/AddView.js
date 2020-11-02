import React, { Component, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { SafeAreaView } from 'react-native'
import { Card, Title, Button, TextInput } from 'react-native-paper'
import MapView, { AnimatedRegion } from 'react-native-maps'
import DropDown from 'react-native-paper-dropdown'

const AddView = ({ markers,addMarker }) => {
  const [current, setCurrent] = React.useState('1')
  const [currentRegion, setCurrentRegion] = React.useState(null)
  const [showDropDown, setShowDropDown] = React.useState(false)
  const [action, setAction] = React.useState()
  const [marker, setMarker] = React.useState()

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (e) => reject(e)
      )
    })
  }

  const send = () => {
    addMarker(action, 9, marker.latitude , marker.longitude)
    console.log(marker)
  }

  useEffect(() => {
    getCurrentLocation().then((position) => {
      if (position) {
        setCurrentRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.0001,
        })
      }
    })
    console.log(currentRegion)
  }, [])

  const actionList = [
    { value: 0, label: 'Traffipax' },
    { value: 1, label: 'Incident' },
    { value: 2, label: 'Construction' },
  ]

  return (
    <SafeAreaView>
      <Card>
        <Card.Title title="Send new perception" />
        <Card.Content>
          <Title>1. Choose the type(test)</Title>
          <DropDown
            label={'Type of action'}
            mode={'outlined'}
            value={action}
            setValue={setAction}
            list={actionList}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            inputProps={{
              right: <TextInput.Icon name={'menu-down'} />,
            }}
          />
          <Title>2. Choose the location</Title>
          <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
     
    />
          <MapView
            style={{ width: '100%', height: '55%', alignContent: 'center' }}
            loadingEnabled={true}
            defaultRegion={currentRegion}
            onPress={(e) => setMarker(e.nativeEvent.coordinate)}
          >
            {marker && <MapView.Marker coordinate={marker} />}
            {markers.map((marker, i) => {
              return <MapView.Marker key={i} coordinate={marker} />
            })}
          </MapView>
        </Card.Content>
        <Card.Actions>
          <Button style={{ textAlign: 'center', alignContent: 'center' }} onPress={() => send()}>
            Send
          </Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  )
}

const mapStateToProps = (state /*, ownProps*/) => ({
  markers: state.markers,
  //nextPage: state.stats.nextPage,
})

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addMarker: (type,id, latitude, longitude) =>
      dispatch({
        type: 'ADD_MARKER',
        payload: { type: type,id: id, latitude: latitude, longitude: longitude },
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddView)
