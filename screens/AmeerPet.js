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
  export default class AmeerPet extends Component {
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
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/narmada.jpg')}
            style={{width:70,height:80,marginTop:5,marginRight:-600,}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:80,
      fontSize:20,
      marginLeft:520
      }}>𝙽𝚊𝚛𝚖𝚊𝚍𝚊 𝙲𝚘𝚕𝚕𝚎𝚐𝚎 </Text>
           
           <Text style = {{
            marginTop:-8,
           marginLeft:520,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
           <Image
            source={require('../assets/4.9.png')}
            style={{ 
              width:"20%",
      height:"20%",
      margin:5,
      marginLeft:580,
      marginTop:-45}}></Image>

          <Text style= {{fontSize:20,
      margin:5,
      marginLeft:520,
      marginTop:-1}}>
          𝙰𝚖𝚎𝚎𝚎𝚛𝙿𝚎𝚝, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>
</View>
<TouchableOpacity onPress={() => openWebsite("https://www.narmadacollege.ac.in/")}>
      <Text style = {{marginTop:150,marginLeft:-260,fontSize:20, fontWeight:"bold" ,color:"#DEA5A5" }}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>

          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/vnbc.png')}
            style={{width:70,height:70,marginTop:5,marginRight:-1000}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:70,
      fontSize:20,
      marginLeft:870
      }}>𝚅𝙽𝙱𝙲 𝙹𝚞𝚗𝚒𝚘𝚛 𝙲𝚘𝚕𝚕𝚎𝚐𝚎 :</Text>
           <Text style = {{
            marginTop:-5,
           marginLeft:870,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
           <Image
            source={require('../assets/4.2.png')}
            style={{ 
              width:"14%",
      height:"13%",
      margin:5,
      marginLeft:940,
      marginTop:-25}}></Image>

          <Text style= {{fontSize:20,
      margin:5,
      marginLeft:870,
      marginTop:-2}}>
          𝙰𝚖𝚎𝚎𝚎𝚛𝙿𝚎𝚝, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>

</View>
      
          </View>
    
          <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/srigyathri.png')}
            style={{width:80,height:80,marginTop:5,marginRight:-1000}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          
           <Text style = {{
            marginTop:90,
           marginLeft:900,
            fontSize:18}}>𝚁𝚊𝚝𝚒𝚗𝚐 :</Text>
         <Image
            source={require('../assets/4.9.png')}
            style={{ 
              width:"15%",
      height:"24%",
      margin:5,
      marginLeft:960,
      marginTop:-47}}></Image>

        * <Text style= {{fontSize:20,
      margin:5,
      marginLeft:900,
      marginTop:-20}}>
          𝙰𝚖𝚎𝚎𝚎𝚛𝙿𝚎𝚝, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>    
</View>
<TouchableOpacity onPress={() => openWebsite("http://www.srigayatri.com/")}>
      <Text style = {{marginTop:140,marginLeft:-260,fontSize:20, fontWeight:"bold" ,color:"#DEA5A5"}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
      </TouchableOpacity>
      
          </View>
 <View style = {{flexDirection:"row",alignContent:'space-around',marginTop:30,justifyContent:'space-around',
    width:"90%",height:180 ,backgroundColor:"white",marginLeft:10, borderRadius:20}}>

         <Image
            source={require('../assets/sriaksh.png')}
            style={{width:80,height:80,marginTop:5,marginRight:-700}}></Image>
            
            <View style = {{flexDirection:"horizontal"}}>
          <Text style={{//marginRight:300,
          margin:5,
          marginTop:80,
      fontSize:20,
      marginLeft:620,
      fontWeight:"bold"
      }}>𝚂𝚛𝚒 𝙰𝚔𝚜𝚑𝚊𝚛𝚊 𝙹𝚞𝚗𝚒𝚘𝚛 𝙲𝚘𝚕𝚕𝚎𝚐𝚎</Text>
           <Text style = {{
            marginTop:-5,
           marginLeft:650,
            fontSize:18,
            }}>𝚁𝚊𝚝𝚒𝚗𝚐:</Text>
         <Image
            source={require('../assets/5.png')}
            style={{ 
              width:"15%",
      height:"13%",
      margin:5,
      marginLeft:730,
      marginTop:-25}}></Image>

        * <Text style= {{fontSize:20,
      margin:5,
      marginLeft:650,
      marginTop:-25}}>
          𝙰𝚖𝚎𝚎𝚎𝚛𝙿𝚎𝚝, 𝙷𝚢𝚍𝚎𝚛𝚊𝚋𝚊𝚍
</Text>    
</View>
<TouchableOpacity onPress={() => openWebsite("https://www.bharatibiz.com/en/sri-akshara-junior-college-099124-88000")}>
      <Text style = {{marginTop:156,marginLeft:-270,fontSize:20 ,fontWeight:"bold" ,color:"#DEA5A5"}}>𝚁𝚎𝚊𝚍  𝙼𝚘𝚛𝚎....</Text>
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
