import {
  Alert,
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
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStackParamList} from '../../navigation/RootStack';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import GoogleButton from '../../components/GoogleButton';
import InstaButton from '../../components/InstaButton';
import FacebookButton from '../../components/FacebookButton';

GoogleSignin.configure({
  webClientId:
    '457027295980-bk8qjnnuh7jql0ehn20m4hs5u3p2jsm0.apps.googleusercontent.com',
});

type NavigationProps = StackNavigationProp<IRootStackParamList>;

const Login = () => {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const googleSignIn = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    console.log('userInfo: ', userInfo);

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    // // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        console.log('res: ', res);
        Alert.alert('UserData', JSON.stringify(res));
      })
      .catch(e => {
        Alert.alert(e.message);
      });
    const accessToken = await (await GoogleSignin.getTokens()).accessToken;
  };
  const googleSignOut = async () => {
    auth()
      .signOut()
      .then(async () => {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        console.log('User sign-out successfully!');
      })
      .catch(e => Alert.alert('Error', e.message));
  };

  return (
    <Container style={styles.container}>
      <Text className="text-2xl font-semibold text-center mt-10 text-[#1B1E28]">
        Sign in now
      </Text>
      <Text className="text-[#7D848D] text-base font-normal mt-4 text-center">
        Please sign in to continue our app
      </Text>
      <TextInput
        className="bg-[#F7F7F9] rounded-2xl mt-10 h-14 py-4 px-4"
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
      <Text className="text-[#0D6EFD] text-sm font-medium text-right mt-4 mb-10">
        Forget Password?
      </Text>
      <View className="items-center">
        <Button
          buttonStyle={styles.btnStyle}
          onPress={() => {}}
          content="Sign In"
          textStyle={styles.textBtn}
        />
      </View>
      <RowView>
        <Text className="text-[#707B81] font-normal text-sm">
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="text-[#0D6EFD] text-sm font-medium ml-2">
            Sign up
          </Text>
        </TouchableOpacity>
      </RowView>
      <Text className="text-[#707B81] font-normal text-sm text-center mt-5">
        Or connect
      </Text>

      <RowView style={styles.containerButtonLogin}>
        <GoogleButton />
        <FacebookButton />
        <InstaButton />
      </RowView>

      {/* <Button content="Google Sign-In" onPress={googleSignIn} />
      <Button content="Google Sign-Out" onPress={googleSignOut} /> */}
    </Container>
  );
};

export default Login;

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
  containerButtonLogin: {
    marginTop: 100,
  },
});
