import React, { Component } from 'react';
import IconLib from './IconLib.js';
import StudentDir from './StudentDir.js';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

class ClassTab extends React.Component {

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <IconLib />
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
          <StudentDir />
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
