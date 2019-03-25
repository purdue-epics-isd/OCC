import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation'

class EditProfile extends Component{

  render(){

    const {navigation} = this.props;
    const student = navigation.getParam('student', {id: 0, name: 'Error', email: 'error'});
    
    return(
      <View style = {styles.PageView}>
        <ScrollView>
          <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon}/>
          <Text style = {styles.text}>{student.name}</Text>
          <View style = {styles.box}>
          <Text style = {styles.text}>{student.email}</Text>
          <Image source={require('./UI_elements/Log/Email.png')} style = {styles.email}/>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

export default EditProfile;
const styles = StyleSheet.create ({
  icon:{
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
    justifyContent: 'space-between',
    backgroundColor: '#f7f8f9',
    flexDirection: 'column',
  },
})
