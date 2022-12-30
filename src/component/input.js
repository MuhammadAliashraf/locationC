import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../style';

function Myinput(props) {
  const { label, onChangeText, value, disabled, keyboardType } = props;
  return (
    <>
      <TextInput
        keyboardType={keyboardType}
        // KeyboardType={KeyboardType}
        value={value}
        editable={!disabled}
        style={[styles.input, styles.border1]}
        placeholderTextColor={styles._black}
        color="black"
        placeholder={label}
        onChangeText={onChangeText}
      />
    </>
  );
}
export default Myinput;