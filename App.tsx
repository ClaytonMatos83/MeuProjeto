
import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Text} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={ require ('./assets/Images/Background.imageset/Background.png')} 
      style={styles.imageBackground}>
        
        <View>
        <Text style={[styles.cityText]}>Montreall</Text>
        </View>
        <View>
        <Text style={styles.temperatureText}>19°</Text>
        </View>
        <View>
        <Text style={styles.mostlyText}>Mostly Clear</Text>
        </View>
        <View>
        <Text style={styles.highlowText}>H:24°  L:18°</Text>
        </View>
        <View>
           
      <Image
           source={require('./assets/Images/House.imageset/House.png')}
           style={styles.imageForeground}/> 
           </View>
           </ImageBackground>

    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#rgba(59, 38, 123, 0.7)',
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  imageForeground: {
    width: 390,
    height: 390,
    marginTop: 10,
    resizeMode: 'cover',
    left: 0,
  
  },
  cityText: {
    color: '#FFFFFF',
    height:41,
    width: 300,
    left: 90,
    top: 30,
    borderRadius:0,
   fontSize: 34,
   
  },
  temperatureText:{
    color:'rgba(255, 255, 255, 1)', 
    fontSize: 70,
    top: 40,
    left: 15,
    textAlign: 'center',
  },
  mostlyText:{
    height: 48,
   width: 115,
   left: 15,
   top: 30,
  color:'rgba(235, 235, 245, 0.6)',
   textAlign: 'center',
  },
  highlowText:{
    height: 48,
   width: 115,
   left: 15,
   
  color:'rgba(255, 255, 255, 1)',
   textAlign: 'center',
  },



});  
