import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation'

class EditProfile extends Component{

  render(){

    const {navigation} = this.props;
    const student = navigation.getParam('student', {id: 0, name: 'Error', email: 'error'});
    
    return(
      <View>
        <Text>Edit profile page</Text>
        <Text>{student.name}</Text>
      </View>
    )
  }
}

export default EditProfile;
const styles = StyleSheet.create ({
  icon:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 75,
    height: 75,
    resizeMode: 'contain',
    backgroundColor: '#FF8D2C',
    borderRadius: 5,
  },
  iconBox:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
})
