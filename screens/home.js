import React from 'react';
import { Text, View, SafeAreaView, StyleSheet , ImageBackground, Image, TouchableOpacity} from 'react-native';

export default class Home extends React.Component{
  render(){
    return(
      <View style={a.container}> 
      <SafeAreaView />
          <ImageBackground style={a.backgroundImage}
          source={require('../assets/space.gif')}>
                 <View style={a.V1}>
                   <Image style={a.Icon} source={require('../assets/fg.png')} />
                   <Text style={a.titleText}>
                       Stellar App
                     </Text>
                   </View>  

                  <View>
                  <TouchableOpacity
                      style={a.button1} 
                      onPress={() => {
                        this.props.navigation.navigate('Locationscreen');
                      }}
                      >
                     <Text style={a.butText}>Space Craft</Text>
                    <Image style={a.iconImage}  source={require('../assets/space_crafts.png')}/>
                   </TouchableOpacity>
                  
                 
                    <TouchableOpacity
                      style={a.button1} 
                      onPress={() => {
                        this.props.navigation.navigate('Starscreen');
                      }}
                      >
                     <Text style={a.butText}>Star Map</Text>
                     <Image style={a.iconImage}  source={require('../assets/star_map.png')}/>
                   </TouchableOpacity>
                
                   
                    <TouchableOpacity
                      style={a.button1} 
                      onPress={() => {
                        this.props.navigation.navigate('Dailypic');
                      }}
                      >
                     <Text style={a.butText}>DailyPictures</Text>
                     <Image style={a.iconImage2}  source={require('../assets/daily_pictures.png')}/>
                   </TouchableOpacity>
                   
                  </View>
                    

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

  Icon:{
    height:200,
    width:200
  },

  V1:{
    justifyContent:'center',
     paddingLeft:100,
     
  },
 
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0BF8EA',
  },

  button1:{
    backgroundColor:'white',
    marginLeft:50,
    marginTop:25,
    marginBottom:30,
    justifyContent:'center',
    alignItems:'center',
    paddingRight:50,
    paddingTop:10,
    height:50,
    width:300,
    paddingTop:80,
    borderRadius:50
  },

  view2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    
  },
  iconImage: {
    position: 'absolute',
    height: 120,
    width: 120,
    resizeMode: 'contain',
    right: 0,
    top: -20,
  },

  iconImage2: {
    position: 'absolute',
    height: 80,
    width: 80,
    resizeMode: 'contain',
    right: 0,
    top: -20,
  },

  butText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 5,
    marginBottom:60
  },
 
})        