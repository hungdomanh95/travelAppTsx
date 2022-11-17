import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/ContainerView';
import Button from '../../components/Button';
import RowView from '../../components/RowView';
import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStackParamList} from '../../navigation/RootStack';
import {useNavigation} from '@react-navigation/native';

type NavigationProps = StackNavigationProp<IRootStackParamList>;
const Register = () => {
  const navigation = useNavigation<NavigationProps>();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container style={styles.container}>
      <Text className="text-2xl font-semibold text-center mt-10 text-[#1B1E28]">
        Sign up now
      </Text>
      <Text className="text-[#7D848D] text-base font-normal mt-4 text-center">
        Please fill the details and create account
      </Text>
      <TextInput
        className="bg-[#F7F7F9] rounded-2xl mt-10 h-14 py-4 px-4"
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        className="bg-[#F7F7F9] rounded-2xl mt-6 h-14 py-4 px-4"
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        className="bg-[#F7F7F9] rounded-2xl mt-6 h-14 py-4 px-4"
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Text className="text-[#7D848D] text-sm font-normal text-left mt-4 mb-10">
        Password must be 8 character
      </Text>
      <View className="items-center">
        <Button
          buttonStyle={styles.btnStyle}
          onPress={() => {}}
          content="Sign Up"
          textStyle={styles.textBtn}
        />
      </View>
      <RowView>
        <Text className="text-[#707B81] font-normal text-sm">
          Already have an account
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-[#0D6EFD] text-sm font-medium ml-2">
            Sign in
          </Text>
        </TouchableOpacity>
      </RowView>
      <Text className="text-[#707B81] font-normal text-sm text-center mt-5">
        Or connect
      </Text>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textBtn: {
    fontWeight: '600',
  },
  btnStyle: {
    marginBottom: 40,
  },
});
