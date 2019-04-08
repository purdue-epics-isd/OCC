import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { FlatGrid } from 'react-native-super-grid';

var currIconIndex;
var IconLibContext;

export var IconData = Array(0)
.concat({
  id: 0,
  name: 'ArtClass',
  file: require('./UI_elements/IconLibrary/ArtClass.png'),
  state: false,
})
.concat({
  id: 1,
  name: 'ASL',
  file: require('./UI_elements/IconLibrary/ASL.png'),
  state: false,
})
.concat({
  id: 2,
  name: 'BrushHair',
  file: require('./UI_elements/IconLibrary/BrushHair.png'),
  state: false,
})
.concat({
  id: 3,
  name: 'BrushTeeth',
  file: require('./UI_elements/IconLibrary/BrushTeeth.png'),
  state: false,
})
.concat({
  id: 4,
  name: 'FieldTrip',
  file: require('./UI_elements/IconLibrary/FieldTrip.png'),
  state: false,
})
.concat({
  id: 5,
  name: 'MathCenter',
  file: require('./UI_elements/IconLibrary/MathCenter.png'),
  state: false,
})
.concat({
  id: 6,
  name: 'Project',
  file: require('./UI_elements/IconLibrary/Project.png'),
  state: false,
})
.concat({
  id: 7,
  name: 'Reading',
  file: require('./UI_elements/IconLibrary/Reading.png'),
  state: false,
})
.concat({
  id: 8,
  name: 'SocialSkills',
  file: require('./UI_elements/IconLibrary/SocialSkills.png'),
  state: false,
})
.concat({
  id: 9,
  name: 'StoryTime',
  file: require('./UI_elements/IconLibrary/StoryTime.png'),
  state: false,
})
.concat({
  id: 10,
  name: 'TherapyDog',
  file: require('./UI_elements/IconLibrary/TherapyDog.png'),
  state: false,
})
.concat({
  id: 11,
  name: 'Yoga',
  file: require('./UI_elements/IconLibrary/Yoga.png'),
  state: false,
})

class IconLib extends Component{

  constructor(){
    super();
    this.state ={
      stateIconData: IconData,
    }
    IconLibContext = this;
  }

  edit(index){
    currIconIndex = index;
    this.props.navigation.push('editicon');
  }

  render(){
    return(
      <View>

        <FlatGrid
        itemDimension={ 100 }
        items={this.state.stateIconData}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.iconBox} onPress = {()=> this.edit(index)}>
            <Image source={item.file} style = {styles.icon}/>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        />

      </View>
    )
  }
}

class EditIcon extends Component{

  constructor(){
    super();
    this.state ={
      name: IconData[currIconIndex].name,
    }
  }

  done(){
    IconData[currIconIndex].name = this.state.name;
    var newState = IconLibContext.state;
    IconLibContext.setState(newState);
    this.props.navigation.pop();
  }

  render(){
    return(
      <View style = {styles.iconBox}>
        <Image source={IconData[currIconIndex].file} style = {styles.BigIcon}/>
        <View style = {styles.nameline}>
          <TextInput
          style = {styles.name}
          onChangeText={(name) => this.setState({name})}
          value = {this.state.name}
          />
          <Image source={require('./UI_elements/Nav/Edit.png')} style = {styles.small} />

        </View>
        <TouchableOpacity style={styles.sendButton}
            onPress = {() => this.done()}>
            <Text style = {styles.whiteText}>Save</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const IconStack = StackNavigator({
  libraryHome:{
    screen: IconLib,
  },
  editicon:{
    screen: EditIcon,
  }
},{
  headerMode: 'none'
});

export default IconStack;
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
  BigIcon:{
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
  name: {
    fontSize: 30,
    marginRight: 15,
  },
  nameline:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sendButton:{
    width: '80%',
    height: '7%',
    backgroundColor: '#FF8D2C',
    borderRadius: 5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: '10%',
    marginRight: '10%',
  },
  whiteText:{
    fontSize: 20,
    color: '#FFFFFF',
  },
})
