import {View, Text} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .minLength(4, 'Should be min of 4 characters')
    .max(12, 'Should be max of 12 characters')
    .required('This is required'),
});

const Form = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setlowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [numbers, setnumbers] = useState(false);

  const generatePasswordString = passwordLength => {
    let characters = '';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-={}';

    if (upperCase) characters += uppercaseChars;
    if (lowerCase) characters += lowerCaseChars;
    if (numbers) characters += digitChars;
    if (symbols) characters += specialChars;
  };
  const createPassword = (characters, passwordLength) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPassword = () => {};
  return (
    <View>
      <Text>Form</Text>
    </View>
  );
};

export default Form;
