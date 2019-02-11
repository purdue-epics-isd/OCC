import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

class StudentDir extends Component{

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
    alert(item.email);
  }
  render(){
    return(
      <View>
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
    )
  }
}

export default StudentDir;
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
