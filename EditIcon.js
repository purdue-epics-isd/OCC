import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native'

class EditIcon extends Component{

  render(){
    const {navigation} = this.props;
    const icon = navigation.getParam('icon', {id: 0, name: 'Error', file: require('./UI_elements/IconLibrary/ArtClass.png')});
    return(
      <View style = {styles.iconBox}>
        <Image source={icon.file} style = {styles.icon}/>
        <View style = {styles.nameline}>
          <TextInput
          style = {styles.name}
          placeholder = {icon.name}
         // onChangeText =
          />
          <Image source={require('./UI_elements/Nav/Edit.png')} style = {styles.small} />

        </View>
      </View>
    )
  }
}

export default EditIcon;
const styles = StyleSheet.create ({
  icon:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: '#FF8D2C',
    borderRadius: 5,
  },
  small:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#847F7F',
  },
  iconBox:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    marginRight: 15,
  },
  nameline:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})
