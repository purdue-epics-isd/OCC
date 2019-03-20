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
      <View style = {styles.PageView}>
        <ScrollView>
        {
          this.Students.elements.map((item, index) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.iconBox}
              onPress = {()=> this.alertItemName(item)}>
              <Image source={require('./UI_elements/Log/ProfileImage.png')} style = {styles.icon}/>
              <Text>{item.name}</Text>
              <Image source={require('./UI_elements/Nav/Ellipsis.png')} style = {styles.MenuIcon}/>
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
    justifyContent: 'flex-start',
    backgroundColor: '#f7f8f9',
    
  }
})
