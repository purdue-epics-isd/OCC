import React, { Component } from 'react';
import { StudentStack, StudentData } from './StudentDir.js';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { IconStack, IconData } from './IconLib.js';
import { FlatGrid } from 'react-native-super-grid';

var localIconData = IconData;

class GroupScreen extends Component {

  constructor(){
    super();
    //Initializing stateIconData array inside of state
    this.state = {
      stateIconData: Array(0)
    }
    const that = this;
    localIconData.forEach(function(value){
      that.state.stateIconData.push((value.state) ? true : false );
    })
  }

  changeState(item, index){
    //Change state for stateIconDate & localIconData
    var newState = this.state;
    newState.stateIconData[index] = !item.state;
    this.setState(newState);
    item.state = !item.state;
  }

  render(){
    
    return(
      <View style={styles.container}>
        <FlatGrid
        itemDimension={ 100 }
        items={localIconData}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.iconBox} onPress = { () => this.changeState(item, index) }>
            <Image source={item.file} style = { (this.state.stateIconData[index]) ? (styles.selectedIcon) : (styles.defaultIcon) }/>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
      </View>
    );
    
  }
}

class IndividualScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        {
          StudentData.map((item, index) => (
            <View
              key = {index}
              style = {styles.StudentBox}>
              <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.ProfileIcon}/>
              <Text style = {{flex:2}}>{item.name}</Text>
              <TouchableOpacity style={{flex:1}}>
                <Image source={require('./UI_elements/Nav/RightArrow.png')} style = {styles.MenuIcon}/>
              </TouchableOpacity>
            </View>
          ))
          
        }
        </ScrollView>
      </View>
    );
  }
}

class EditDetailScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      
      </View>
    );
  }
}

const CreateDetailStack = createBottomTabNavigator({
    Group: GroupScreen,
    Individual: IndividualScreen
});

export default CreateDetailStack;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  defaultIcon:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 75,
    height: 75,
    resizeMode: 'contain',
    backgroundColor: '#FF8D2C',
    borderRadius: 5,
  },

  selectedIcon:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 75,
    height: 75,
    resizeMode: 'contain',
    backgroundColor: '#98FF98',
    borderRadius: 5,
  },


  iconBox:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ProfileIcon:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  StudentBox:{
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#d4d4d6',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#f7f8f9',
    borderTopColor: '#f7f8f9',
  },
  MenuIcon: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'contain',
    height: '30%',
    width: '30%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'

  },
})
