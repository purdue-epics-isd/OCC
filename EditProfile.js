/*
  ******************************************************************************
   This file has been deprecated and moved to the subclass in StudentDir.js file
  ******************************************************************************

import React, { Component } from 'react'
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation'

class EditProfile extends Component{

  render(){

    const {navigation} = this.props;
    const student = navigation.getParam('student', {id: 0, name: 'Error', email: 'error'});
    
    return(
      <View style = {styles.PageView}>
        <ScrollView>
          <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon_editprofile}/>
          <TextInput
          style = {styles.text}
          placeholder = {student.name}/>
          <View style = {styles.box}>
          <TextInput 
          style = {styles.text}
          placeholder = {student.email}
          />
          <Image source={require('./UI_elements/Log/Email.png')} style = {styles.email}/>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

export default EditProfile;
const styles = StyleSheet.create ({
  icon_editprofile:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#f7f8f9',
    borderRadius: 5,
  },
  email:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    resizeMode: 'contain',
    backgroundColor: '#f7f8f9',
    marginLeft: 10,
  },
  text:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 24,
  },
  box:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  PageView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f8f9',
    flexDirection: 'column',
  },
})
*/