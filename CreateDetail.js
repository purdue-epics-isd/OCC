import React, { Component } from 'react';
import { StudentStack, StudentData } from './StudentDir.js';
import { createBottomTabNavigator, StackNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { IconStack, IconData } from './IconLib.js';
import { FlatGrid } from 'react-native-super-grid';

var localIconData = IconData;
var localStudentData = StudentData;
var sIndex; //Index value for "which student's detail are we editing?"

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
    //Change state for stateIconData & localIconData
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
}//End of Group Tab Screen

class IndividualScreen extends Component {

  onClick(index){
    sIndex = index;
    this.props.navigation.push('editdetail');
  }
  
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        {
          localStudentData.map((item, index) => (
            <View
              key = {index}
              style = {styles.StudentBox}>
              <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.ProfileIcon}/>
              <Text style = {{flex:2}}>{item.name}</Text>
              <TouchableOpacity style={{flex:1}} 
                onPress = {() => this.onClick(index)}>
                <Image source={require('./UI_elements/Nav/RightArrow.png')} style = {styles.MenuIcon}/>
              </TouchableOpacity>
            </View>
          ))
          
        }
        </ScrollView>
      </View>
    );
  }
}// End of Individual tab screen

class EditDetailScreen extends Component{

  constructor(){
    super();
    //Initializing stateIconData array inside of state
    alert("constructor!");
    this.state = {
      stateIconData: Array()
    }
    const that = this;
    //If this student already have its own set of states, load that data
    if(localStudentData[sIndex].states != null){ 
      localStudentData[sIndex].states.forEach(function(value){
        that.state.stateIconData.push((value) ? true : false );
      })
    }
    else{
      //If not, load data from localIconData cuz local has the group click values
      localIconData.forEach(function(value){
        that.state.stateIconData.push((value.state) ? true : false );
      })
    }
  }

  changeState(index){
    //Change state for stateIconData
    var newState = this.state;
    newState.stateIconData[index] = !this.state.stateIconData[index];
    this.setState(newState);
  }

  done(){
    //Save your stateIconData's t/f values to localstudentdata state
    localStudentData[sIndex].states = Array();
    this.state.stateIconData.forEach(function(value){
      localStudentData[sIndex].states.push((value) ? true : false);
    })
    this.props.navigation.pop();
  }

  render(){    

    return(
      <View style={styles.centerContainer}>
          <View style={styles.bigButton}>
            <Text style={styles.whiteText}>{localStudentData[sIndex].name}</Text>
          </View>
          <ScrollView>
          <FlatGrid
          itemDimension={ 100 }
          items={localIconData}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.iconBox} onPress = { () => this.changeState(index) }>
              <Image source={item.file} style = { (this.state.stateIconData[index]) ? (styles.selectedIcon) : (styles.defaultIcon) }/>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          />
          </ScrollView>
          <TouchableOpacity style={styles.bigButton}
            onPress = {() => this.done()}>
            <Text style = {styles.whiteText}>Done</Text>
          </TouchableOpacity>
      </View>
    );
  }
}// End of Edit detail screen

const IndividualStack = StackNavigator({
  IndividualStackHome:{
    screen: IndividualScreen
  },
  editdetail:{
    screen: EditDetailScreen
  }
},{
  headerMode: 'none'
});// Stack navigation between the individual tab and corresponding edit detail

const CreateDetailStack = createBottomTabNavigator({
    Group: GroupScreen,
    Individual: IndividualStack
});// Tab navigation between the group tab screen and the individual tab screen

export default CreateDetailStack;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteText:{
    fontSize: 20,
    color: '#FFFFFF',
  },

  bigButton:{
    width: '80%',
    height: '7%',
    backgroundColor: '#FF8D2C',
    borderRadius: 5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
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
