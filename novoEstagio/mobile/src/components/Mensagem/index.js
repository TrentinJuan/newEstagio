import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Mensagem = ({ message, container, textMessage }) => {
    <View style={container}>
        <Text style={textMessage} > {message}</Text>
    </View>
};

Mensagem.PropTypes = PropTypes.shape({
    message: PropTypes.string.isRequired,
});

export default Mensagem