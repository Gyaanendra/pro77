import React from 'react';
import { Text, View, SafeAreaView, StyleSheet , ImageBackground, Image, TouchableOpacity} from 'react-native';

export default class Home extends React.Component{
  render(){
    return(
      <View style={a.container}> 
      <SafeAreaView />
          <ImageBackground style={a.backgroundImage}
          source={require('../assets/bgh.gif')}>  
               <TouchableOpacity style={a.button1}
                onPress={() => {
                  this.props.navigation.navigate('Homescreen');
                }}
              >
                   <Image source={require('../assets/home.png')} style={a.image}/> 
              </TouchableOpacity>
          </ImageBackground>
      </View>
    )
  }
}

const a = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  V1:{
    justifyContent:'center',
     paddingLeft:100,
     
  },
  button1: {
    backgroundColor:'white',
    height:50,
    width:50
  },
  image:{
    height:50,
    width:50

  }
 
})        