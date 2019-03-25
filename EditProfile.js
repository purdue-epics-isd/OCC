import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

class EditProfile extends Component{

  render(){
    return(
      <View style = {styles.PageView}>
        <ScrollView>
          <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon}/>
          <Text>Student Name</Text>
          <Text>studentname@gmail.com</Text>
          <Image source={require('./UI_elements/Log/Email.png')} style = {styles.email}/>
        </ScrollView>
      </View>
    )
  }
}

export default EditProfile;
const styles = StyleSheet.create ({
  icon:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#f7f8f9',
    borderRadius: 5,
  },
  email:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    resizeMode: 'contain',
    backgroundColor: '#f7f8f9',
    borderRadius: 5,
  },
  PageView:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#f7f8f9',
    flexDirection: 'column',
  },
})
