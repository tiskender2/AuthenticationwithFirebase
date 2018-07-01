/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'; 
import Header from './src/component/Header';
import LoginForm from './src/component/LoginForm';
import CardSection from './src/component/CardSection';
import Button from './src/component/Button';
import Spinner from './src/component/Spinner';

export default class App extends Component {
  state = { loggedIn: null };
  componentWillMount()
  {
    var config = {
      apiKey: 'AIzaSyC9Sl362vLL6KGXu23q6SWQaZDO5xdPXJ0',
      authDomain: 'kimlik-dogrulama-aeeb6.firebaseapp.com',
      databaseURL: 'https://kimlik-dogrulama-aeeb6.firebaseio.com',
      projectId: 'kimlik-dogrulama-aeeb6',
      storageBucket: 'kimlik-dogrulama-aeeb6.appspot.com',
      messagingSenderId: '78862500294'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) =>
    {
      if (user) {
        this.setState({loggedIn: true});
      }
      else
      {
        this.setState({loggedIn: false});
      }
    });
  }
  clickLogout()
  {
    firebase.auth().signOut();
  }
  renderContent()
  {
    switch (this.state.loggedIn)
    {
      case true:
      return (  
        <CardSection >
        <Header  headerText="Profil Ekrani" />
        <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
        </CardSection>
        
      
      );
      case false:
      return (
        <View >
        <Header  headerText="Giriş Ekrani" />
        <LoginForm />
      </View>
       

      );

      default:
      return (
        <View>
          <Spinner size="large"/>
        </View>
      );
    }
  }


  render() {
    return (
      <View >
       {this.renderContent()}
      </View>
    );
  }
}


