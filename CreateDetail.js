import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

class ClassTab extends React.Component {

      //Find a way to import this from IconLib.js, not literally copied in here
  Icons = {
    elements:[
      {
        id: 0,
        name: 'ArtClass',
        file: require('./UI_elements/IconLibrary/ArtClass.png'),
        checked: false,
      },
      {
        id: 1,
        name: 'ASL',
        file: require('./UI_elements/IconLibrary/ASL.png'),
        checked: false,
      },
      {
        id: 2,
        name: 'BrushHair',
        file: require('./UI_elements/IconLibrary/BrushHair.png'),
        checked: false,
      },
      {
        id: 3,
        name: 'BrushTeeth',
        file: require('./UI_elements/IconLibrary/BrushTeeth.png'),
        checked: false,
      },
      {
        id: 4,
        name: 'FieldTrip',
        file: require('./UI_elements/IconLibrary/FieldTrip.png'),
        checked: false,
      },
      {
        id: 5,
        name: 'MathCenter',
        file: require('./UI_elements/IconLibrary/MathCenter.png'),
        checked: false,
      },
      {
        id: 6,
        name: 'Project',
        file: require('./UI_elements/IconLibrary/Project.png'),
        checked: false,
      },
      {
        id: 7,
        name: 'Reading',
        file: require('./UI_elements/IconLibrary/Reading.png'),
        checked: false,
      },
      {
        id: 8,
        name: 'SocialSkills',
        file: require('./UI_elements/IconLibrary/SocialSkills.png'),
        checked: false,
      },
      {
        id: 9,
        name: 'StoryTime',
        file: require('./UI_elements/IconLibrary/StoryTime.png'),
        checked: false,
      },
      {
        id: 10,
        name: 'TherapyDog',
        file: require('./UI_elements/IconLibrary/TherapyDog.png'),
        checked: false,
      },
      {
        id: 11,
        name: 'Yoga',
        file: require('./UI_elements/IconLibrary/Yoga.png'),
        checked: false,
      }
    ]
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Class Tab</Text>
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
      );
    }
  }
  
  class IndividualTab extends React.Component {

    Students = {
        elements:[
          {
            id: 0,
            name: 'Jeonghu Park',
            email: 'park955@purdue.edu',
          },
          {
            id: 1,
            name: 'Jacqueline Leal',
            email: 'leal6@purdue.edu',
          },
          {
            id: 2,
            name: 'Broderick Schipp',
            email: 'schipp0@purdue.edu',
          },
          {
            id: 3,
            name: 'Madi Rogers',
            email: 'roger188@purdue.edu',
          }
        ]
    };

    alertItemName = (item) =>{
        alert("insert editing page here");
      }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Individual Tab!</Text>
          <ScrollView>
        {
          this.Students.elements.map((item, index) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.iconBox}
              onPress = {()=> this.alertItemName(item)}>
              <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon}/>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
        </View>
      );
    }
  }

const CreateDetail = createBottomTabNavigator({
    Class: ClassTab,
    Individual: IndividualTab,
  });


export default class App extends React.Component {
    render() {
      return <CreateDetail />;
    }
  }

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
