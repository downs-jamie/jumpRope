import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Text></Text>
        <Text></Text>
        {/*<MapView
          style={styles.map}
          region= {{
            latitude: 33.8648,
            longitude: -84.4644,
            latitudeDelta: .007,
            longitudeDelta: .007,
          }}
          mapType='standard'
          showsUserLocation={true}
          followUserLocation={false}
        />*/}
        <Text>Jump Rope</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 0.7,
    width: '100%',
    height: 600
  },
  container: {
    flex: 1,
    backgroundColor: '#ab39',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
