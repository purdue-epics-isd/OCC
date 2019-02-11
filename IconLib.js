import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

class IconLib extends Component{

  Icons = {
  elements:[
    {
      id: 0,
      name: 'ArtClass',
      file: require('./UI_elements/IconLibrary/ArtClass.png'),
    },
    {
      id: 1,
      name: 'ASL',
      file: require('./UI_elements/IconLibrary/ASL.png'),
    },
    {
      id: 2,
      name: 'BrushHair',
      file: require('./UI_elements/IconLibrary/BrushHair.png'),
    },
    {
      id: 3,
      name: 'BrushTeeth',
      file: require('./UI_elements/IconLibrary/BrushTeeth.png'),
    },
    {
      id: 4,
      name: 'FieldTrip',
      file: require('./UI_elements/IconLibrary/FieldTrip.png'),
    },
    {
      id: 5,
      name: 'MathCenter',
      file: require('./UI_elements/IconLibrary/MathCenter.png'),
    },
    {
      id: 6,
      name: 'Project',
      file: require('./UI_elements/IconLibrary/Project.png'),
    },
    {
      id: 7,
      name: 'Reading',
      file: require('./UI_elements/IconLibrary/Reading.png'),
    },
    {
      id: 8,
      name: 'SocialSkills',
      file: require('./UI_elements/IconLibrary/SocialSkills.png'),
    },
    {
      id: 9,
      name: 'StoryTime',
      file: require('./UI_elements/IconLibrary/StoryTime.png'),
    },
    {
      id: 10,
      name: 'TherapyDog',
      file: require('./UI_elements/IconLibrary/TherapyDog.png'),
    },
    {
      id: 11,
      name: 'Yoga',
      file: require('./UI_elements/IconLibrary/Yoga.png'),
    }
  ]
  };

  alertItemName = (item) =>{
    alert(item.name);
  }
  render(){
    return(
      <View>
        <ScrollView>
        {
          this.Icons.elements.map((item, index) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.iconBox}
              onPress = {()=> this.alertItemName(item)}>
              <Image source={item.file} style = {styles.icon}/>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </View>
    )
  }
}

export default IconLib;
const styles = StyleSheet.create ({
  icon:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  iconBox:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
