import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

const widthOfMargin = Dimensions.get('window').width * 0.85;

export default class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={LoginStyles.TextInputView}>
        <TextInput style={LoginStyles.TextInput}
          placeholder={this.props.name}
          onChangeText={(text) => {
            this.setState({ text });
            this.props.onChangeText(text);
          }}
        />
      </View>
    );
  }
}

const LoginStyles = StyleSheet.create({
  TextInputView: {
    marginTop: 0,
    height: 50,
    width: widthOfMargin,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  TextInput: {
    backgroundColor: '#ffffff',
    height: 45,
    margin: 18,
  },
});
