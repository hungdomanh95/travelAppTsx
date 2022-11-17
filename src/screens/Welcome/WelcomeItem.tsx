import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  ImageBackground,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import {height, width} from '../../theme/size';
interface IWelcomeProps {
  id?: number;
  photo: ImageSourcePropType;
  title: string;
  content: string;
  hightlight: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
const WelcomeItem: FunctionComponent<IWelcomeProps> = props => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageWelcome} source={props.photo}>
        <TouchableOpacity onPress={props.onPress} style={styles.touchSkip}>
          <Text style={styles.textSkip}>Skip</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.title}>
        {props.title}
        <View>
          <Text style={[styles.title, styles.hightlight]}>
            {props.hightlight}
          </Text>
        </View>
      </Text>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
  },
  imageWelcome: {
    width,
    height: height / 2,
    // width: 375,
    // height: 444,
    borderRadius: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 36,
    // color: '#1B1E28',
    width: '85%',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    fontFamily: 'Geometric415BT-BlackA',
  },
  content: {
    fontSize: 16,
    color: '#7D848D',
    lineHeight: 24,
    width: '80%',
    textAlign: 'center',
  },
  hightlight: {
    color: '#FF7029',
    width: '100%',
    marginBottom: 0,
  },
  // underline: {
  //   backgroundColor: '#FF7029',
  //   transform: [{skewX: '30deg'}],
  //   width: '100%',
  //   height: 10,
  // },
  touchSkip: {position: 'absolute', top: 50, right: 50},
  textSkip: {
    color: '#CAEAFF',
    fontSize: 16,
  },
});
