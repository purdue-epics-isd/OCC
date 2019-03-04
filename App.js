/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import React from 'react';
 import IconLib from './IconLib.js';
 import StudentDir from './StudentDir.js';
 import CreateDetail from './CreateDetail.js';
 import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
 import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

 class HomeScreen extends React.Component {
   static navigationOptions = {
       headerStyle: {
         backgroundColor: '#FF8D2C',
       },
     };

   render() {
     return (
       <View style={styles.container}>
         <View style={styles.Home_orange}>
         <Image source={require('./UI_elements/Homepage/logo2.png')} style={styles.Home_logo}/>
        </View>

          <TouchableOpacity style={styles.Home_red} onPress={() => this.props.navigation.push('CreateDetails')}>
            <Image source={require('./UI_elements/Homepage/CreateADetail.png')} style={styles.Home_image}/>
            <Text style={styles.font}>CREATE DETAIL</Text>
          </TouchableOpacity>

        <View style={styles.Home_yellowGray}>

          <TouchableOpacity style={styles.Home_Yellow} onPress={() => this.props.navigation.push('StudentDirectory')}>
            <Image source={require('./UI_elements/Homepage/StudentDirectory.png')} style={styles.Home_image}/>
            <Text style={styles.font}>STUDENT</Text>
            <Text style={styles.font}>DIRECTORY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Home_Gray} onPress={() => this.props.navigation.push('IconLibrary')}>
            <Image source={require('./UI_elements/Homepage/IconLibrary.png')} style={styles.Home_image}/>
            <Text style={styles.font}>ICON</Text>
            <Text style={styles.font}>LIBRARY</Text>
          </TouchableOpacity>
        </View>
      </View>
     );
   }
 }
{/*
 class DetailsScreen extends React.Component {
   render() {
     return (
       <View style={styles.container}>
         <Text>Details Screen</Text>
         <Button
           title="Go to Details... again"
           onPress={() => this.props.navigation.push('Details')}
         />
         <Button
           title="Go to Home"
           onPress={() => this.props.navigation.navigate('Home')}
         />
         <Button
           title="Go back"
           onPress={() => this.props.navigation.goBack()}
         />
       </View>
     );
   }
 }
*/}

 class CreateDetailsScreen extends React.Component {
   static navigationOptions = {
    title: 'CREATE A DETAIL',
    headerStyle: {
      backgroundColor: '#FF8D2C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
   render() {
     return (
       <View style={styles.container}>
        <CreateDetail />
       </View>
     );
   }
 }

 class StudentDirectoryScreen extends React.Component {
   static navigationOptions = {
    title: 'STUDENT DIRECTORY',
    headerStyle: {
      backgroundColor: '#FF8D2C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
   render() {
     return (
       <View style={styles.container}>
         <StudentDir />
       </View>
     );
   }
 }

 class IconLibraryScreen extends React.Component {
   static navigationOptions = {
    title: 'ICON LIBRARY',
    headerStyle: {
      backgroundColor: '#FF8D2C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
   render() {
     return (
       <View style={styles.container}>
          <IconLib />
       </View>
     );
   }
 }

 const RootStack = StackNavigator(
   {
     Home: {
       screen: HomeScreen,
     },/*
     Details: {
       screen: DetailsScreen,
     },*/
     CreateDetails: {
       screen: CreateDetailsScreen,
     },
     StudentDirectory: {
       screen: StudentDirectoryScreen,
     },
     IconLibrary: {
       screen: IconLibraryScreen,
     },
   },
   {
     initialRouteName: 'Home',
   }
 );

 export default class App extends React.Component {
   render() {
     return <RootStack />;
   }
 }

/*
export default class App extends Component<Props> {

  _onPressButton() {
      Alert.alert('You tapped the button!')
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.welcome}>HIIIIIIIIIII</Text>
        <Button
        onPress={this._onPressButton}
        title="Button Sample"
        backgroundColor="#000000"
        />
        <Button
                onPress={()=>{Alert.alert('You tapped the button!');}}
                  title="Button Sample 2"
                  color="#841584"
                />
      </View>
    );
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  Home_orange: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8D2C',
  },
  Home_red: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BE4F3B',
  },
  Home_yellowGray: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  Home_Gray: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A17C5F',
  },
  Home_Yellow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9C551',
  },
  Home_logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  Home_image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  font: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 3,
    marginBottom: 0,
  },
});
