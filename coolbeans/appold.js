import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heaerText}>Header</Text></View>
          <Image source={require('./ezgif.com-optimize.gif')} style={styles.img}/>
          <View style={styles.buttonList}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={()=> console.log('like')}
              >
            <Text>Like</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={()=> console.log('Share')}
              >
            <Text>Share</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              style={styles.buttons}
              onPress={()=> console.log('Comment')}
              >
            <Text>Comment</Text>
            </TouchableOpacity>          
          </View>
          {/* <View>
            <Text>Happy</Text>
          </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    padding: 50,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  heaerText: {
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    letterSpacing: 10
  },
  img: {
    width: 320,
    height: 200
  },
  buttonList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    
    
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 6,
    height: 40,
    borderRadius: 4
  }
});
