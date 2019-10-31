import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';


import {
  Text,
  View,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

import Mensagem from '../../components/Mensagem';

import { styles, pickerSelecteStyles } from '../Login/styles';

import MD5 from '../../function/md5';
import { findAllUsers, checkUser, getData } from '../../database/utils';

const placeholder = {
  label: 'Selecione um Usuario',
  value: null,
  color: '#9EA0A4',
};

export default class Login extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  saveUser = async () => {
    const { navigation } = this.props;

    if (TouchList.state.continueLogged) {
      await AsyncStorage.setItem('@TJHome:continueLogged', 'true');
    }
    await AsyncStorage.setItem('@TJHome:user', String(this.state.currentUser));

    navigation.navigate('Main');
  }


  getUser = async () => {
    const user = await AsyncStorage.getItem('@TJHome:user');

    this.setState({ currentUser: user > 0 ? parseInt(user) : '' })
  }

  // onde sera criado  o componente
  async componentDidMount() {
    findAllUsers()
      .then(Response => {
        let result = getData(Response);
        let users = [];
        result.map(user => {
          user.push({
            label: user.NOME01_USU,
            value: user.CODIGO_USU
          });
        });
        this.setState({ users: [...users], currentUser: 1 });
        this.getUser();
      })
      .catch(err => {
        this.setState({ error: true, message: 'Nao foi possivel listar os usuarios' });
      });
  }

  //metodo pra verificar se o usuario existe
  checkUserExists = async () => {
    const { currentUser, password } = this.state;

    this.setState({ loading: true });

    checkUser(currentUser, MD5(password))
      .then(response => {
        const data = getData(response);

        if (data.length > 0) {
          this.saveUser();
        } else {
          this.setState({ error: true });
        }
      })
      .catch(err => this.setState({ error: true }));
  };

  handlerCheckUser = () => {
    this.setState({ loading: true });

    try {
      this.checkUserExists();
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }


  state = {
    users: [],
    currentUser: '',
    password: '',
    continueLogged: false,
    error: false,
    message: '',
  }

  render() {

    const {
      loading,
      error,
      password,
      currentUser,
      urlImage,
      users,
      message = '',
      continueLogged,
    } = this.props;

    return (
      <View style={styles.container}>

        {error && <Mensagem
          container={styles.containerMessage}
          textMessage={styles.textMessage}
          message={message !== '' ? message : 'Usuario ou senha incorretos'} />
        }
        <View>
          <RNPickerSelect
            placeholder={placeholder}
            placeholderTextColor="gray"
            items={users}
            onValueChange={value => updateStateComponent('currentUser', value, console.log(value))}
            style={{
              ...pickerSelecteStyles,
              iconContainer: {
                bottom: 16,
                rigth: 14,
              },
            }}

            value={currentUser}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: 'yellow' }}

          />

          <TextInput
            placeholder="Digite sua Senha"
            underlineColorAndroid="transparent"
            onChangeText={value => updateStateComponent('password', value)}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
          />
          <View>
            <CheckBox
              size={30}
              style={styles.chkAutosync}
              value={continueLogged}
              onValueChange={value => updateStateComponent('continueloogged', value)} />
            <Text style={styles.textChkAutosync}>Continuar Logado</Text>
          </View>
          <TouchableOpacity onPress={checkUser}>
            {loading ?
              <ActivityIndicator size={35} color="#FFF" /> :
              <Text style={styles.textButtonLogin}>Entrar</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}