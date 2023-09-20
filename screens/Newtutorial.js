import React, {Component} from "react";
import {View,Text,StyleSheet} from "react-native";

export default class Newtutorial extends Component{
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Tutoriais</Text>
        </View>
    )
}


}

const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#FFE4E1'
  },

  title:{
    fontSize:20,
    color:"#FF1493",
    textAlign:"center",
  }
})