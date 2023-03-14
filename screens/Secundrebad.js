import React, { Component } from 'react';
  import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    ScrollView,
    Linking,
    Dimensions
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  //import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers';
  const { height, width } = Dimensions.get("window");
  export default class Secundrebad extends Component {
    render() {
      function openWebsite(websiteLink:String){
      Linking.openURL(websiteLink)  
    }
      return (
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
          <ScrollView>
   <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:186 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/vagnan.png')}
            style={{width:90,height:90,marginTop:-5,marginRight:-600,borderRadius:30}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:75,
      fontSize:20,
      marginLeft:520,
      fontWeight:"bold"
      }}>𝚅𝚒𝚐𝚗𝚊𝚗𝚊 𝙹𝚢𝚘𝚝𝚑𝚒 𝙸𝚗𝚜𝚝𝚒𝚝𝚞𝚝𝚎 </Text>
           <Text style = {{
            marginTop:-10,
           marginLeft:520,
            fontSize:18,
            fontWeight:"bold"}}>
            𝚘𝚏 𝙰𝚛𝚝𝚜 𝚊𝚗𝚍 𝚂𝚌𝚒𝚎𝚗𝚌𝚎𝚜 :</Text>
           <Text style = {{
            marginTop:-1,
           marginLeft:520,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐  :</Text>
           <Image
            source={require('../assets/4.2.png')}
            style={{ 
              width:"20%",
      height:"20%",
      margin:5,
      marginLeft:590,
      marginTop:-36}}></Image>

          <Text style= {{fontSize:20,
      margin:5,
      marginLeft:520,
      marginTop:-10}}>
          𝚂𝚎𝚌𝚞𝚗𝚍𝚎𝚛𝚊𝚋𝚊𝚍, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
</View>
<TouchableOpacity onPress={() => openWebsite("https://vjias.edu.in/")}>
      <Text style = {{marginTop:160,marginLeft:-290,fontSize:20 ,color:"#DEA5A5",fontWeight:'BOLD',}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>

          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/wesley.png')}
            style={{width:120,height:100,marginTop:-5,marginRight:-400}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:70,
      fontSize:20,
      marginLeft:250,
      fontWeight:"bold",
      }}>𝚆𝚎𝚜𝚕𝚎𝚢 𝙳𝚎𝚐𝚛𝚎𝚎 𝙲𝚘𝚕𝚕𝚎𝚐𝚎 :</Text>
           <Text style = {{
            marginTop:-10,
           marginLeft:250,
            fontSize:18}}> 𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
           <Image
            source={require('../assets/3.7.png')}
            style={{ 
              width:"30%",
      height:"12%",
      margin:5,
      marginLeft:330,
      marginTop:-25}}></Image>

          <Text style= {{fontSize:20,
      margin:5,
      marginLeft:250,
      marginTop:-5}}>
          𝚂𝚎𝚌𝚞𝚗𝚍𝚛𝚊𝚋𝚊𝚍, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>

</View>
<TouchableOpacity onPress={() => openWebsite("https://wesleydegreecollege.com/")}>
      <Text style = {{marginTop:140,marginLeft:-280,fontSize:20, fontWeight:"bold",color:"#DEA5A5"}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>
    
          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/sardar.png')}
            style={{width:70,height:70,marginTop:5,marginRight:-700}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:70,
      fontSize:20,
      marginLeft:600
      }}>𝚂𝚊𝚛𝚍𝚊𝚛 𝙿𝚊𝚝𝚎𝚕 𝙲𝚘𝚕𝚕𝚎𝚐𝚎:</Text>
           <Text style = {{
            marginTop:-5,
           marginLeft:600,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
         <Image
            source={require('../assets/4.2.png')}
            style={{ 
              width:"20%",
      height:"13%",
      margin:5,
      marginLeft:660,
      marginTop:-22}}></Image>

        * <Text style= {{fontSize:20,
      margin:5,
      marginLeft:600,
      marginTop:-25}}>
          𝚂𝚎𝚌𝚞𝚗𝚍𝚛𝚊𝚋𝚊𝚍, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>    
</View>
<TouchableOpacity onPress={() => openWebsite("https://sardarpatelcollege.ac.in/")}>
      <Text style = {{marginTop:150,marginLeft:-270,fontSize:20 ,fontWeight:"bold",color:"#DEA5A5"}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>
 <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/tapasya.webp')}
            style={{width:120,height:120,marginTop:-5,marginRight:-700}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:90,
      fontSize:20,
       marginLeft:600,
           fontWeight:"bold",
      }}>𝚃𝚊𝚙𝚊𝚜𝚢𝚊 𝙹𝚞𝚗𝚒𝚘𝚛 𝙲𝚘𝚕𝚕𝚎𝚐𝚎:</Text>
           <Text style = {{
            marginTop:-10,
           marginLeft:600,
         
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐  :</Text>
         <Image
            source={require('../assets/4.9.png')}
            style={{ 
              width:"20%",
      height:"50%",
      margin:5,
      marginLeft:660,
      marginTop:-70}}></Image>

        * <Text style= {{fontSize:20,
      margin:5,
      marginLeft:600,
      marginTop:-50}}>
          𝚂𝚎𝚌𝚞𝚗𝚍𝚛𝚊𝚋𝚊𝚍, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>    
</View>
<TouchableOpacity onPress={() => openWebsite("https://sardarpatelcollege.ac.in/")}>
      <Text style = {{marginTop:150,marginLeft:-270,fontSize:20, fontWeight:"bold" ,color:"#DEA5A5"}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>
        
          

         
          </ScrollView>
      
      
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
     flex:1,
     height:height,
     width:width,
     borderRadius:"3px",
    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
   
   
    
  });