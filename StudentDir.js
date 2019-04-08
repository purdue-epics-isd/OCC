import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import EditProfile from './EditProfile.js';

var currStudentIndex;
var StudentDirContext;

export var StudentData = Array(0)
.concat({
  id: 0,
  name: 'Jeonghu Park',
  email: 'park955@purdue.edu',
  states: null,
  msg: null,
})
.concat({
  id: 1,
  name: 'Jacqueline Leal',
  email: 'leal6@purdue.edu',
  states: null,
  msg: null,
})
.concat({
  id: 2,
  name: 'Broderick Schipp',
  email: 'schipp@purdue.edu',
  states: null,
  msg: null,
})
.concat({
  id: 3,
  name: 'Madi Rogers',
  email: 'roger188@purdue.edu',
  states: null,
  msg: null,
})

class StudentDir extends Component{

  constructor(){
    super();
    StudentDirContext = this;
    this.state = {
      stateStudentData: StudentData,
    }
  }

  editprofile(index){
    currStudentIndex = index;
    this.props.navigation.push('editprofile');
  }

  add(){
    this.props.navigation.push('addprofile');
  }

  render(){
    return(
      <View style = {styles.PageView}>
        <ScrollView>
        {
          this.state.stateStudentData.map((item, index) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.iconBox}
              onPress = {() => this.editprofile(index)}>
              <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon}/>
              <Text>{item.name}</Text>
              <Image source={require('./UI_elements/Nav/Ellipsis.png')} style = {styles.MenuIcon}/>
            </TouchableOpacity>
          ))
          
        }
        </ScrollView>
        <TouchableOpacity style={styles.bigButton}
            onPress = {() => this.add()}>
            <Text style = {styles.whiteText}>Add Student</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class EditProfile extends Component{

  constructor(){
    super();
    //Constructor call for state
    this.state ={
      name: StudentData[currStudentIndex].name,
      email: StudentData[currStudentIndex].email,
    }
  }

  done(){
    StudentData[currStudentIndex].name = this.state.name;
    StudentData[currStudentIndex].email = this.state.email;
    var newState = StudentDirContext.state;
    StudentDirContext.setState(newState);
    this.props.navigation.pop();
  }

  render(){
    
    return(
      <View style = {styles.PageView2}>
        <ScrollView>
          <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon_editprofile}/>
          <TextInput
          style = {styles.text}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          />
          <View style = {styles.box}>
          <TextInput 
          style = {styles.text}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          />
          <Image source={require('./UI_elements/Log/Email.png')} style = {styles.email}/>
          </View>
          
        </ScrollView>
        <TouchableOpacity style={styles.bigButton}
          onPress = {() => this.done()}>
          <Text style = {styles.whiteText}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// *****************************************
//
//  Add Profile is not implemented (working)
//
// *****************************************
class AddProfile extends Component{

  constructor(){
    super();
    //Constructor call for state
    this.state ={
      name: 'Name',
      email: 'Email',
    }
  }

  done(){
    alert("Added a student\n id: "+StudentData.length+"\nname: "+this.state.name+"\nemail: "+this.state.email);
    StudentData.concat({
      id: StudentData.length,
      name: this.state.name,
      email: this.state.email,
      states: null,
      msg: null,
    });
    var newState = StudentDirContext.state;
    newState.stateStudentData = StudentData;
    StudentDirContext.setState(newState);
    this.props.navigation.pop();
  }

  render(){
    
    return(
      <View style = {styles.PageView2}>
        <ScrollView>
          <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon_editprofile}/>
          <TextInput
          style = {styles.text}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          />
          <View style = {styles.box}>
          <TextInput 
          style = {styles.text}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          />
          <Image source={require('./UI_elements/Log/Email.png')} style = {styles.email}/>
          </View>
          
        </ScrollView>
        <TouchableOpacity style={styles.bigButton}
            onPress = {() => this.done()}>
            <Text style = {styles.whiteText}>Add Student</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const StudentStack = StackNavigator({
  directoryHome:{
    screen: StudentDir,
  },
  editprofile:{
    screen: EditProfile
  },
  addprofile:{
    screen: AddProfile
  }
},{
  headerMode: 'none'
});

export default StudentStack;
const styles = StyleSheet.create ({
  icon:{
    
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  iconBox:{
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#d4d4d6',
    alignItems: 'center',
    justifyContent: 'space-between',  
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#f7f8f9',
    borderTopColor: '#f7f8f9',
  },
  MenuIcon: {
    
    flexDirection: 'column',
    resizeMode: 'contain',
    height: '25%',
    width: '25%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'

  },
  PageView:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#f7f8f9',
    flexDirection: 'column',
  },
  PageView2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f8f9',
    flexDirection: 'column',
  },
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
    justifyContent: 'space-between',
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
    marginLeft: '10%',
    marginRight: '10%',
  },
  whiteText:{
    fontSize: 20,
    color: '#FFFFFF',
  },
})
