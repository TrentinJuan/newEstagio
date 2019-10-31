import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import createNavigator from './routes';
import styles from '../src/style'

export default class App extends Component {
  state = {
    
    userLogged: false,
    hasConfiguration: false,
  };


  screenError = () => {
    return (
      <View style={styles.containerError}  >
        <Icon name="emoticon-cry-outline" size={220} style={styles.iconError} />
        <Text style={styles.textError}  >Erro ao Carregar a aplicacao</Text>
      </View>
    )
  }


  render() {
    const { userLogged, hasConfiguration } = this.state;


    const Routes = createNavigator(hasConfiguration, userLogged);

    return (
      <View style={styles.container}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="#EEE" />
        <Routes />
      </View>
    );
  }
}
