import React from 'react';
import { PermissionsAndroid, Dimensions, View, TextInput, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import GetDirections from 'react-native-google-maps-directions';
import GeoCoder from 'react-native-geocoding';
import logo from '../assets/logo.png';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBg8ieiVArwYzNHN4QdF1z3IfdfgkHrZpM';
const backgroundColor = '#007556';
const { height, width } = Dimensions.get('window');

export default function Localizacao({navigation}) {
  state = {
    origin: { latitude: 42.3616132, longitude: -71.0672576 },
    destination: { latitude: 42.3730591, longitude: -71.033754 },
    originText: '',
    destinationText: ''
  };

  function handleLogin() {
    navigation.navigate('Main');
  }

  return (
    <KeyboardAvoidingView 
      behavior = 'padding'
      enable = {Platform.OS == 'ios'}
      style = {styles.container}>
      <Image source = {logo} />

      <View style={styles.container}>

      <MapView

        ref={map => this.mapView = map}
        style={styles.map}

        region={{
          latitude: (this.state.origin.latitude + this.state.destination.latitude) / 2,
          longitude: (this.state.origin.longitude + this.state.destination.longitude) / 2,
          latitudeDelta: Math.abs(this.state.origin.latitude - this.state.destination.latitude) + Math.abs(this.state.origin.latitude - this.state.destination.latitude) * .1,
          longitudeDelta: Math.abs(this.state.origin.longitude - this.state.destination.longitude) + Math.abs(this.state.origin.longitude - this.state.destination.longitude) * .1,
        }}

        loadingEnabled={true}
        toolbarEnabled={true}
        zoomControlEnabled={true}
        
      >

      <MapView.Marker
        coordinate={this.state.destination}
      >
        <MapView.Callout onPress={this.handleGetGoogleMapDirections}>
          <Text>Press to Get Direction</Text>
        </MapView.Callout>
      </MapView.Marker>

      <MapView.Marker
        coordinate={this.state.origin}
      >
      <MapView.Callout>
          <Text>This is where you are</Text>
      </MapView.Callout>
      </MapView.Marker>

      <MapViewDirections
        origin={this.state.origin}
        destination={this.state.destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />

      </MapView>

      <View style={styles.inputContainer}>

          <TextInput
              style={styles.inputMap}
              onChangeText={(text) => this.setState({ originText: text })}
              placeholder='Origem'
              value={this.state.originText}
          />

          <TextInput
              style={styles.inputMap}
              onChangeText={(text) => this.setState({ destinationText: text })}
              placeholder='Destino'
              value={this.state.destinationText}
          />

          <TouchableOpacity style={styles.button} onPress={this.handleButton}>

              <Text style={styles.buttonText}>Buscar rota</Text>

          </TouchableOpacity>

      </View>

      </View>

      <TouchableOpacity onPress={handleLogin} style = {styles.button}>
        <Text style = {styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEEDE2',
    justifyContent: 'center',
  },
  input: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },

  button: {
    width: width - 100,
    height: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    marginBottom: 15,
    marginHorizontal: 20,

  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',

  },

  inputContainer: {
    width: '100%',
    maxHeight: 200,

  },
  inputMap: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginBottom: 15,
    marginHorizontal: 20,

  },
  button: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#b3c0d0',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
