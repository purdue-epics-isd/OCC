import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

class EditIcon extends Component{

  render(){
    const {navigation} = this.props;
    const icon = navigation.getParam('icon', {id: 0, name: 'Error', file: require('./UI_elements/IconLibrary/ArtClass.png')});
    return(
      <View>
        <Text>Edit icon page</Text>
        <Image source={icon.file} style = {styles.icon}/>
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
