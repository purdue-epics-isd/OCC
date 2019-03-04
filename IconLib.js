import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { FlatGrid } from 'react-native-super-grid';

const iconData = Array(20)
.concat({
  id: 0,
  name: 'ArtClass',
  file: require('./UI_elements/IconLibrary/ArtClass.png'),
})
.concat({
  id: 1,
  name: 'ASL',
  file: require('./UI_elements/IconLibrary/ASL.png'),
})
.concat({
  id: 2,
  name: 'BrushHair',
  file: require('./UI_elements/IconLibrary/BrushHair.png'),
})
.concat({
  id: 3,
  name: 'BrushTeeth',
  file: require('./UI_elements/IconLibrary/BrushTeeth.png'),
})
.concat({
  id: 4,
  name: 'FieldTrip',
  file: require('./UI_elements/IconLibrary/FieldTrip.png'),
})
.concat({
  id: 5,
  name: 'MathCenter',
  file: require('./UI_elements/IconLibrary/MathCenter.png'),
})
.concat({
  id: 6,
  name: 'Project',
  file: require('./UI_elements/IconLibrary/Project.png'),
})
.concat({
  id: 7,
  name: 'Reading',
  file: require('./UI_elements/IconLibrary/Reading.png'),
})
.concat({
  id: 8,
  name: 'SocialSkills',
  file: require('./UI_elements/IconLibrary/SocialSkills.png'),
})
.concat({
  id: 9,
  name: 'StoryTime',
  file: require('./UI_elements/IconLibrary/StoryTime.png'),
})
.concat({
  id: 10,
  name: 'TherapyDog',
  file: require('./UI_elements/IconLibrary/TherapyDog.png'),
})
.concat({
  id: 11,
  name: 'Yoga',
  file: require('./UI_elements/IconLibrary/Yoga.png'),
})

class IconLib extends Component{

  onItemClick = (item) =>{
    alert(item.name);
  }
  render(){
    return(
      <View>

        <FlatGrid
        itemDimension={ 100 }
        items={iconData}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.iconBox} onPress = {()=> this.onItemClick(item)}>
            <Image source={item.file} style = {styles.icon}/>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        />

      </View>
    )
  }
}

export default IconLib;
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
