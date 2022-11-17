import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Intro from './src/screens/Intro/Intro';
import RootStack from './src/navigation/RootStack';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
      clearTimeout(timeout);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {showIntro ? <Intro /> : <RootStack />}
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
